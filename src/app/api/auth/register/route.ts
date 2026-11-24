import { NextResponse } from "next/server";
import { z } from "zod";
import { cookies } from "next/headers";
import { getAuthEnv } from "@/lib/auth/env";
import { hashPassword } from "@/lib/auth/argon2";
import { signUserToken } from "@/lib/auth/jwt";
import { getCookieName, getCookieOptions } from "@/lib/auth/cookies";
import { validateRequestOrigin } from "@/lib/auth/csrf";
import prisma from "@/lib/prisma";

const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    email: z.string().email("Invalid email address").max(100),
    password: z.string().min(8, "Password must be at least 8 characters").max(128),
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

  // 2. Validate Origin
  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Untrusted origin or cross-origin request rejected." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 3. Parse JSON safely
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 4. Schema validation
  const parsed = registerSchema.safeParse(body);
  if (!parsed.success) {
    const errorMsg = parsed.error.issues[0]?.message || "Invalid registration data.";
    return NextResponse.json(
      { error: errorMsg },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { name, email, password } = parsed.data;
  const normalizedEmail = email.toLowerCase().trim();

  // 5. Prevent conflict with single admin
  const env = getAuthEnv();
  if (normalizedEmail === env.ADMIN_EMAIL.toLowerCase().trim()) {
    return NextResponse.json(
      { error: "An account with this email already exists." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 6. Check if email already registered in Database
  try {
    const existing = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 400, headers: { "Cache-Control": "no-store" } }
      );
    }

    // 7. Hash password using Argon2id
    const hashedPassword = await hashPassword(password);

    // 8. Create Normal User in PostgreSQL
    const newUser = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role: "USER",
      },
    });

    // 9. Automatically sign in the user
    const token = await signUserToken({
      email: newUser.email,
      role: "user",
      name: newUser.name,
    });

    const cookieName = getCookieName();
    const cookieOptions = getCookieOptions();

    try {
      const cookieStore = await cookies();
      cookieStore.set(cookieName, token, cookieOptions);
    } catch {
      // outside Next context
    }

    const response = NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        role: "user",
        redirect: "/dashboard",
      },
      {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      }
    );

    response.cookies.set(cookieName, token, cookieOptions);
    return response;
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Registration failed.";
    return NextResponse.json(
      { error: message },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}
