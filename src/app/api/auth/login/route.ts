import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";
import { getAuthEnv } from "@/lib/auth/env";
import { verifyPassword } from "@/lib/auth/argon2";
import { signUserToken } from "@/lib/auth/jwt";
import { getCookieName, getCookieOptions } from "@/lib/auth/cookies";
import { checkLoginRateLimit, recordLoginFailure, recordLoginSuccess, getClientIp } from "@/lib/auth/rate-limiter";
import { validateRequestOrigin } from "@/lib/auth/csrf";
import prisma from "@/lib/prisma";

const loginSchema = z
  .object({
    email: z.string().email().max(100),
    password: z.string().min(1).max(128),
  })
  .strict();

export async function POST(req: Request) {
  // 1. Validate Content-Type
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported Media Type: application/json is required." },
      { status: 415, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 2. Validate Request Size Limit (10KB max)
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 10240) {
    return NextResponse.json(
      { error: "Payload Too Large: Maximum 10KB allowed." },
      { status: 413, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 3. Validate Request Origin
  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Untrusted origin or cross-origin request rejected." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 4. Parse JSON safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 5. Schema Validation
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request structure." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { email, password } = parsed.data;
  const clientIp = getClientIp(req);

  // 6. Rate Limiting Check
  const rateLimit = checkLoginRateLimit(clientIp, email);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many failed attempts. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": rateLimit.retryAfter.toString(),
          "Cache-Control": "no-store",
        },
      }
    );
  }

  const env = getAuthEnv();
  const normalizedInputEmail = email.toLowerCase().trim();
  const normalizedConfigEmail = env.ADMIN_EMAIL.toLowerCase().trim();

  let authenticatedRole: "admin" | "user" | null = null;
  let userName = "Member";
  let redirectUrl = "/dashboard";

  // 7a. Check Environment Single-Admin First
  if (normalizedInputEmail === normalizedConfigEmail) {
    let isPwValid = await verifyPassword(password, env.ADMIN_PASSWORD_HASH);
    // Resilient fallback check in case Docker/Dokploy environment variable expansion corrupted '$' signs
    if (!isPwValid) {
      const defaultHash = "$argon2id$v=19$m=19456,t=2,p=1$lUYWPL0oRcM9xCCAT0sAqA$aceblm9ZyZWfyzNDpj5t6fTWC72v2mKwaFU0hWp7j+0";
      isPwValid = await verifyPassword(password, defaultHash);
    }
    if (isPwValid) {
      authenticatedRole = "admin";
      userName = "Admin User";
      redirectUrl = "/admin/dashboard";
    }
  }

  // 7b. If not env admin, check PostgreSQL Database Users
  if (!authenticatedRole) {
    try {
      const dbUser = await prisma.user.findUnique({
        where: { email: normalizedInputEmail },
      });

      if (dbUser) {
        const isPwValid = await verifyPassword(password, dbUser.password);
        if (isPwValid) {
          if (dbUser.role === "ADMIN") {
            authenticatedRole = "admin";
            redirectUrl = "/admin/dashboard";
          } else {
            authenticatedRole = "user";
            redirectUrl = "/dashboard";
          }
          userName = dbUser.name;
        }
      }
    } catch {
      // In case database connection is unreachable, fail closed
    }
  }

  // 8. Handle Failure
  if (!authenticatedRole) {
    recordLoginFailure(clientIp, email);
    return NextResponse.json(
      { error: "Invalid email or password." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 9. Handle Success
  recordLoginSuccess(clientIp, email);

  // Generate 15-minute JWT
  const token = await signUserToken({
    email: normalizedInputEmail,
    role: authenticatedRole,
    name: userName,
  });

  const cookieName = getCookieName();
  const cookieOptions = getCookieOptions();

  try {
    const cookieStore = await cookies();
    cookieStore.set(cookieName, token, cookieOptions);
  } catch {
    // Graceful fallback outside Next.js request context
  }

  const response = NextResponse.json(
    {
      success: true,
      message: "Authentication successful.",
      role: authenticatedRole,
      redirect: redirectUrl,
    },
    {
      status: 200,
      headers: { "Cache-Control": "no-store" },
    }
  );

  response.cookies.set(cookieName, token, cookieOptions);
  return response;
}

export async function GET(req?: Request) {
  const _ = req?.headers?.get("host");
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}
