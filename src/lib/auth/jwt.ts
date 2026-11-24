import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { getAuthEnv } from "./env";

export interface AdminTokenPayload extends JWTPayload {
  sub: string;
  role: "admin";
}

/**
 * Sign a new HS256 JWT valid for exactly 15 minutes.
 * Minimal claims: sub, role, iss, aud, exp, nbf, iat, jti.
 */
export async function signAdminToken(email: string): Promise<string> {
  const env = getAuthEnv();
  const secretKey = new TextEncoder().encode(env.JWT_SECRET);
  const jti = crypto.randomUUID();

  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(email.toLowerCase().trim())
    .setIssuer(env.JWT_ISSUER)
    .setAudience(env.JWT_AUDIENCE)
    .setIssuedAt()
    .setNotBefore("0s")
    .setExpirationTime("15m")
    .setJti(jti)
    .sign(secretKey);
}

/**
 * Strict verification of incoming JWT.
 * - Enforces fixed algorithm: 'HS256' only (rejects 'none' and mismatched algorithms)
 * - Validates issuer and audience
 * - Validates exp, nbf, iat
 */
export async function verifyAdminToken(token: string): Promise<AdminTokenPayload | null> {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const env = getAuthEnv();
    const secretKey = new TextEncoder().encode(env.JWT_SECRET);

    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"], // Strictly allowlist HS256 only
      issuer: env.JWT_ISSUER,
      audience: env.JWT_AUDIENCE,
      clockTolerance: 5, // 5 seconds grace for slight clock drift
    });

    if (payload.role !== "admin" || !payload.sub) {
      return null;
    }

    return payload as AdminTokenPayload;
  } catch (err) {
    // Signature mismatch, expired, tampered, or unsupported algorithm fails closed
    return null;
  }
}
