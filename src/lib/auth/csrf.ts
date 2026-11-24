import crypto from "node:crypto";
import { getAuthEnv } from "./env";

/**
 * Validate request origin / referer for state-changing requests.
 */
export function validateRequestOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");
  const env = getAuthEnv();

  // Primary check: Origin header
  if (origin) {
    try {
      const originUrl = new URL(origin);
      const appOriginUrl = new URL(env.APP_ORIGIN);
      // Origin must match host & protocol
      if (originUrl.host === appOriginUrl.host && originUrl.protocol === appOriginUrl.protocol) {
        return true;
      }
      // In dev, allow localhost variations if configured
      if (process.env.NODE_ENV !== "production") {
        if (originUrl.hostname === "localhost" || originUrl.hostname === "127.0.0.1") {
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  }

  // Fallback: Referer header
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      const appOriginUrl = new URL(env.APP_ORIGIN);
      if (refererUrl.host === appOriginUrl.host && refererUrl.protocol === appOriginUrl.protocol) {
        return true;
      }
      if (process.env.NODE_ENV !== "production") {
        if (refererUrl.hostname === "localhost" || refererUrl.hostname === "127.0.0.1") {
          return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  }

  // Direct server-side or non-browser client without origin or referer
  return false;
}

/**
 * Generate a signed, time-bounded CSRF token
 */
export function generateCsrfToken(sessionId: string): string {
  const env = getAuthEnv();
  const timestamp = Date.now().toString();
  const data = `${sessionId}:${timestamp}`;
  const signature = crypto.createHmac("sha256", env.CSRF_SECRET).update(data).digest("hex");
  return `${timestamp}.${signature}`;
}

/**
 * Verify a signed CSRF token
 */
export function verifyCsrfToken(sessionId: string, token: string): boolean {
  if (!token || !sessionId) return false;
  try {
    const env = getAuthEnv();
    const [timestampStr, signature] = token.split(".");
    if (!timestampStr || !signature) return false;

    const timestamp = parseInt(timestampStr, 10);
    // 2-hour max validity
    if (isNaN(timestamp) || Date.now() - timestamp > 2 * 60 * 60 * 1000) {
      return false;
    }

    const data = `${sessionId}:${timestampStr}`;
    const expectedSignature = crypto.createHmac("sha256", env.CSRF_SECRET).update(data).digest("hex");

    return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expectedSignature, "hex"));
  } catch {
    return false;
  }
}
