import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";
import { getAuthEnv } from "@/lib/auth/env";
import { verifyPassword } from "@/lib/auth/argon2";
import { signAdminToken } from "@/lib/auth/jwt";
import { getCookieName, getCookieOptions } from "@/lib/auth/cookies";
import { checkLoginRateLimit, recordLoginFailure, recordLoginSuccess, getClientIp } from "@/lib/auth/rate-limiter";
import { validateRequestOrigin } from "@/lib/auth/csrf";

// Strict validation schema for login payload
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
      {
        status: 415,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  // 2. Validate Request Size Limit (10KB max)
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > 10240) {
    return NextResponse.json(
      { error: "Payload Too Large: Maximum 10KB allowed." },
      {
        status: 413,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  // 3. Validate Request Origin
  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Untrusted origin or cross-origin request rejected." },
      {
        status: 403,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  // 4. Parse JSON safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      {
        status: 400,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  // 5. Schema Validation
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request structure." },
      {
        status: 400,
        headers: { "Cache-Control": "no-store" },
      }
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

  // 7. Verify Credentials
  const env = getAuthEnv();
  const normalizedInputEmail = email.toLowerCase().trim();
  const normalizedConfigEmail = env.ADMIN_EMAIL.toLowerCase().trim();

  const isEmailMatch = normalizedInputEmail === normalizedConfigEmail;
  const isPasswordMatch = isEmailMatch ? await verifyPassword(password, env.ADMIN_PASSWORD_HASH) : false;

  if (!isEmailMatch || !isPasswordMatch) {
    // Record brute-force failure
    recordLoginFailure(clientIp, email);

    // Constant generic error message (never disclose whether email exists or password was wrong)
    return NextResponse.json(
      { error: "Invalid email or password." },
      {
        status: 401,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  // 8. Authentication Success
  recordLoginSuccess(clientIp, email);

  // Generate 15-minute signed JWT
  const token = await signAdminToken(normalizedConfigEmail);

  // Set secure HttpOnly cookie
  const cookieName = getCookieName();
  const cookieOptions = getCookieOptions();

  try {
    const cookieStore = await cookies();
    cookieStore.set(cookieName, token, cookieOptions);
  } catch {
    // Graceful fallback outside Next context
  }

  const response = NextResponse.json(
    {
      success: true,
      message: "Authentication successful.",
      redirect: "/admin/dashboard",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  response.cookies.set(cookieName, token, cookieOptions);

  return response;
}

// Reject unsupported HTTP methods with 405
export async function GET() {
  return methodNotAllowed();
}
export async function PUT() {
  return methodNotAllowed();
}
export async function DELETE() {
  return methodNotAllowed();
}
export async function PATCH() {
  return methodNotAllowed();
}

function methodNotAllowed() {
  return NextResponse.json(
    { error: "Method Not Allowed" },
    {
      status: 405,
      headers: {
        Allow: "POST",
        "Cache-Control": "no-store",
      },
    }
  );
}
