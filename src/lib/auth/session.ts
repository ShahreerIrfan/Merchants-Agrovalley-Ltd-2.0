import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookieName } from "./cookies";
import { verifyUserToken, type UserTokenPayload } from "./jwt";

export interface UserSession {
  email: string;
  role: "admin" | "user";
  name: string;
}

/**
 * Retrieve current user session from incoming cookie.
 * Supports both Next.js server components (via cookies())
 * and Request objects (via Cookie header).
 */
export async function getSession(req?: Request): Promise<UserSession | null> {
  const cookieName = getCookieName();
  let token: string | undefined;

  // 1. If Request object is provided, parse cookie header
  if (req) {
    const cookieHeader = req.headers.get("cookie") || "";
    const match = cookieHeader.match(new RegExp(`(?:^|; )${cookieName}=([^;]*)`));
    if (match) {
      token = decodeURIComponent(match[1]);
    }
  }

  // 2. Otherwise use Next.js cookies() store
  if (!token) {
    try {
      const cookieStore = await cookies();
      const tokenCookie = cookieStore.get(cookieName);
      token = tokenCookie?.value;
    } catch {
      // outside Next.js request context
    }
  }

  if (!token) {
    return null;
  }

  const payload: UserTokenPayload | null = await verifyUserToken(token);
  if (!payload || !payload.sub) {
    return null;
  }

  return {
    email: payload.sub,
    role: payload.role,
    name: payload.name || (payload.role === "admin" ? "Admin User" : "Member"),
  };
}

// Backward-compatible alias for admin checks
export async function getAdminSession(req?: Request) {
  const session = await getSession(req);
  if (session && session.role === "admin") {
    return session;
  }
  return null;
}

/**
 * Server Component guard for Admin Dashboard.
 * Redirects unauthenticated or non-admin visitors to /login.
 */
export async function requireAdmin(): Promise<UserSession> {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  if (session.role !== "admin") {
    redirect("/dashboard");
  }
  return session;
}

/**
 * Server Component guard for Normal User Dashboard.
 * Redirects unauthenticated visitors to /login.
 */
export async function requireUser(): Promise<UserSession> {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}
