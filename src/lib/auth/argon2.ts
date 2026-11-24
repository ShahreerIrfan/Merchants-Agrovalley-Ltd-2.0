import { hash, verify } from "@node-rs/argon2";

/**
 * Hash a plaintext password using Argon2id with OWASP recommended parameters.
 * Default in @node-rs/argon2: Argon2id, m=19456 KiB, t=2 iterations, p=1 parallelism.
 */
export async function hashPassword(password: string): Promise<string> {
  return await hash(password);
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
    return await verify(hashStr, password);
  } catch {
    // Fail closed on format error or corruption
    return false;
  }
}
