import { hash, verify } from "@node-rs/argon2";

/**
 * Hash a plaintext password using Argon2id with OWASP recommended parameters.
 */
export async function hashPassword(password: string): Promise<string> {
  return await hash(password);
}

/**
 * Clean surrounding quotes, whitespace, or carriage returns.
 * Essential for Docker/Dokploy environment variables that might contain quotes.
 */
function sanitizeHash(raw: string): string {
  if (!raw) return "";
  let clean = raw.trim();
  // Strip double quotes if wrapped
  if (clean.startsWith('"') && clean.endsWith('"')) {
    clean = clean.slice(1, -1).trim();
  }
  // Strip single quotes if wrapped
  if (clean.startsWith("'") && clean.endsWith("'")) {
    clean = clean.slice(1, -1).trim();
  }
  return clean;
}

/**
 * Verify a plaintext password against an Argon2id hash.
 * Constant-time evaluation and safe exception handling.
 */
export async function verifyPassword(password: string, hashStr: string): Promise<boolean> {
  if (!password || !hashStr) {
    return false;
  }
  try {
    const clean = sanitizeHash(hashStr);
    return await verify(clean, password);
  } catch (err) {
    console.error("Argon2 verification failed:", err);
    return false;
  }
}
