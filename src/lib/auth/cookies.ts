export function getCookieName(): string {
  // OWASP / RFC 6265bis: Use __Host- prefix in production for maximum cookie security
  return process.env.NODE_ENV === "production" ? "__Host-admin_session" : "admin_session_dev";
}

export function getCookieOptions() {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict" as const,
    path: "/",
    maxAge: 15 * 60, // 15 minutes to match JWT expiration
  };
}
