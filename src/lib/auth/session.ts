import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getCookieName } from "./cookies";
import { verifyAdminToken, type AdminTokenPayload } from "./jwt";

export interface AdminSession {
  email: string;
  role: "admin";
}

/**
 * Retrieve current admin session from incoming cookie.
 * Supports both Next.js server components (via cookies())
 * and Request objects (via Cookie header).
 */
export async function getAdminSession(req?: Request): Promise<AdminSession | null> {
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

  const payload: AdminTokenPayload | null = await verifyAdminToken(token);
  if (!payload || !payload.sub) {
    return null;
  }

  return {
    email: payload.sub,
    role: "admin",
  };
}

/**
 * Server Component guard.
 * Redirects unauthenticated visitors to /admin/login.
 */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }
  return session;
}
