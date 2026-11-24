import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { getAuthEnv } from "./env";

export interface UserTokenPayload extends JWTPayload {
  sub: string;
  role: "admin" | "user";
  name?: string;
}

/**
 * Sign a new HS256 JWT valid for 15 minutes.
 * Minimal claims: sub, role, name, iss, aud, exp, nbf, iat, jti.
 */
export async function signUserToken(params: {
  email: string;
  role: "admin" | "user";
  name?: string;
}): Promise<string> {
  const env = getAuthEnv();
  const secretKey = new TextEncoder().encode(env.JWT_SECRET);
  const jti = crypto.randomUUID();

  return await new SignJWT({
    role: params.role,
    name: params.name || (params.role === "admin" ? "Admin User" : "Member"),
  })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setSubject(params.email.toLowerCase().trim())
    .setIssuer(env.JWT_ISSUER)
    .setAudience(env.JWT_AUDIENCE)
    .setIssuedAt()
    .setNotBefore("0s")
    .setExpirationTime("15m")
    .setJti(jti)
    .sign(secretKey);
}

// Backward-compatible alias
export async function signAdminToken(email: string): Promise<string> {
  return signUserToken({ email, role: "admin", name: "Admin User" });
}

/**
 * Strict verification of incoming JWT.
 * - Enforces fixed algorithm: 'HS256' only
 * - Validates issuer and audience
 * - Validates exp, nbf, iat
 */
export async function verifyUserToken(token: string): Promise<UserTokenPayload | null> {
  if (!token || typeof token !== "string") {
    return null;
  }

  try {
    const env = getAuthEnv();
    const secretKey = new TextEncoder().encode(env.JWT_SECRET);

    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ["HS256"],
      issuer: env.JWT_ISSUER,
      audience: env.JWT_AUDIENCE,
      clockTolerance: 5,
    });

    if (!payload.sub || (payload.role !== "admin" && payload.role !== "user")) {
      return null;
    }

    return payload as UserTokenPayload;
  } catch {
    return null;
  }
}

// Backward-compatible alias
export async function verifyAdminToken(token: string) {
  const payload = await verifyUserToken(token);
  if (payload && payload.role === "admin") {
    return payload;
  }
  return null;
}
