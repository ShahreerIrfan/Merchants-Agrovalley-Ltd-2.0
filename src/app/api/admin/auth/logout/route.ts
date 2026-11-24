import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookieName } from "@/lib/auth/cookies";
import { validateRequestOrigin } from "@/lib/auth/csrf";

export async function POST(req: Request) {
  // Validate request origin for state-changing logout
  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Untrusted origin rejected." },
      {
        status: 403,
        headers: { "Cache-Control": "no-store" },
      }
    );
  }

  const cookieName = getCookieName();

  const response = NextResponse.json(
    {
      success: true,
      message: "Logged out successfully.",
      redirect: "/admin/login",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );

  // Clear cookie both on response and in cookieStore
  response.cookies.set(cookieName, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });

  try {
    const cookieStore = await cookies();
    cookieStore.set(cookieName, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0,
      expires: new Date(0),
    });
  } catch {
    // Graceful fallback outside Next.js request context
  }

  return response;
}

function methodNotAllowed(req?: Request) {
  const _ = req?.headers?.get("host");
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

export async function GET(req?: Request) {
  return methodNotAllowed(req);
}
export async function PUT(req?: Request) {
  return methodNotAllowed(req);
}
export async function DELETE(req?: Request) {
  return methodNotAllowed(req);
}
export async function PATCH(req?: Request) {
  return methodNotAllowed(req);
}
