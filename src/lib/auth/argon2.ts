import { verify } from "@node-rs/argon2";

/**
 * Verify a plaintext password against an Argon2id hash.
 * Constant-time evaluation and safe exception handling.
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  if (!password || !hash) {
    return false;
  }
  try {
    return await verify(hash, password);
  } catch (err) {
    // Fail closed on format error or corruption
    return false;
  }
}
