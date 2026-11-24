/**
 * In-memory sliding-window rate limiter for brute-force login protection.
 * Tracks failed attempts per IP address and per email address.
 *
 * Parameters:
 * - Max failed attempts: 5
 * - Window / Lockout duration: 15 minutes (900 seconds)
 * - Returns Retry-After duration in seconds
 */

interface AttemptRecord {
  count: number;
  firstAttempt: number;
  lockedUntil: number;
}

const ipAttempts = new Map<string, AttemptRecord>();
const emailAttempts = new Map<string, AttemptRecord>();

const MAX_FAILED_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function checkTracker(tracker: Map<string, AttemptRecord>, key: string): { allowed: boolean; retryAfter: number } {
  const now = Date.now();
  const record = tracker.get(key);

  if (!record) {
    return { allowed: true, retryAfter: 0 };
  }

  // If locked out
  if (record.lockedUntil > now) {
    const retryAfter = Math.ceil((record.lockedUntil - now) / 1000);
    return { allowed: false, retryAfter };
  }

  // If window expired, reset
  if (now - record.firstAttempt > WINDOW_MS) {
    tracker.delete(key);
    return { allowed: true, retryAfter: 0 };
  }

  if (record.count >= MAX_FAILED_ATTEMPTS) {
    record.lockedUntil = now + WINDOW_MS;
    const retryAfter = Math.ceil(WINDOW_MS / 1000);
    return { allowed: false, retryAfter };
  }

  return { allowed: true, retryAfter: 0 };
}

function recordFailure(tracker: Map<string, AttemptRecord>, key: string) {
  const now = Date.now();
  const record = tracker.get(key);

  if (!record || now - record.firstAttempt > WINDOW_MS) {
    tracker.set(key, { count: 1, firstAttempt: now, lockedUntil: 0 });
  } else {
    record.count += 1;
    if (record.count >= MAX_FAILED_ATTEMPTS) {
      record.lockedUntil = now + WINDOW_MS;
    }
  }
}

export function checkLoginRateLimit(ip: string, email: string): { allowed: boolean; retryAfter: number } {
  const ipCheck = checkTracker(ipAttempts, ip);
  if (!ipCheck.allowed) return ipCheck;

  const emailCheck = checkTracker(emailAttempts, email.toLowerCase().trim());
  if (!emailCheck.allowed) return emailCheck;

  return { allowed: true, retryAfter: 0 };
}

export function recordLoginFailure(ip: string, email: string) {
  recordFailure(ipAttempts, ip);
  recordFailure(emailAttempts, email.toLowerCase().trim());
}

export function recordLoginSuccess(ip: string, email: string) {
  ipAttempts.delete(ip);
  emailAttempts.delete(email.toLowerCase().trim());
}

/**
 * Get client IP safely from request headers
 */
export function getClientIp(req: Request): string {
  const xRealIp = req.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    // Only take the first hop
    return xForwardedFor.split(",")[0].trim();
  }

  return "127.0.0.1";
}
