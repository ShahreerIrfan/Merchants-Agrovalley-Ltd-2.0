import { z } from "zod";

const authEnvSchema = z.object({
  ADMIN_EMAIL: z.string().email(),
  ADMIN_PASSWORD_HASH: z.string().min(20),
  JWT_SECRET: z.string().min(32, "JWT_SECRET must be at least 32 characters long"),
  JWT_ISSUER: z.string().min(1).default("merchants-agrovalley-auth"),
  JWT_AUDIENCE: z.string().min(1).default("merchants-agrovalley-admin"),
  APP_ORIGIN: z.string().url().default("http://localhost:3000"),
  CSRF_SECRET: z.string().min(32, "CSRF_SECRET must be at least 32 characters long"),
});

export type AuthEnv = z.infer<typeof authEnvSchema>;

let cachedEnv: AuthEnv | null = null;

export function getAuthEnv(): AuthEnv {
  if (typeof window !== "undefined") {
    throw new Error("FATAL: Auth environment secrets must NEVER be accessed on the client side.");
  }

  if (cachedEnv) {
    return cachedEnv;
  }

  const parsed = authEnvSchema.safeParse({
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ISSUER: process.env.JWT_ISSUER,
    JWT_AUDIENCE: process.env.JWT_AUDIENCE,
    APP_ORIGIN: process.env.APP_ORIGIN,
    CSRF_SECRET: process.env.CSRF_SECRET,
  });

  if (!parsed.success) {
    const errorIssues = parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join(", ");
    throw new Error(`FATAL: Incomplete or invalid Auth environment configuration: [${errorIssues}]`);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}
