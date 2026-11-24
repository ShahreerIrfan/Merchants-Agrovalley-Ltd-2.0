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

function methodNotAllowed(req?: Request) {
  const _ = req?.headers?.get("host");
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

export async function POST(req?: Request) {
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
