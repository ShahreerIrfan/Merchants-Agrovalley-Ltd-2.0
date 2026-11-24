import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/session";

export async function GET(req: Request) {
  const session = await getAdminSession(req);

  if (!session) {
    return NextResponse.json(
      { authenticated: false, error: "Unauthenticated" },
      {
        status: 401,
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  return NextResponse.json(
    {
      authenticated: true,
      user: {
        email: session.email,
        role: session.role,
      },
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

// Reject unsupported HTTP methods
export async function POST() {
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
        Allow: "GET",
        "Cache-Control": "no-store",
      },
    }
  );
}
