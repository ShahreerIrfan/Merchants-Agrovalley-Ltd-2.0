# Merchants AgroValley — Security Architecture Documentation

## 1. Authentication Architecture

Merchants AgroValley uses a **Security-First Single-Admin Authentication Model** built strictly adhering to OWASP and PortSwigger API Security standards:

1. **Credentials Management**:
   - Single admin account managed strictly via server-side environment variables (`ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH`).
   - Plaintext passwords are never stored, logged, or accepted via CLI arguments.
   - Password verification uses **Argon2id** (`@node-rs/argon2`) configured according to OWASP guidelines: Memory: ~19 MiB (`19456` KiB), Time/Iterations: `2`, Parallelism: `1`.

2. **Session & Token Management**:
   - Short-lived **15-minute JSON Web Tokens (JWT)** signed via **HS256** using the `jose` library with a minimum 256-bit cryptographically secure secret.
   - Minimal claims: `sub`, `role: "admin"`, `iss`, `aud`, `exp`, `nbf`, `iat`, `jti`.
   - Algorithm allowlisting strictly restricts incoming tokens to `HS256` (rejecting `none` and any algorithm confusion attacks).
   - Stored in a strict, browser-inaccessible **HttpOnly cookie**:
     - Production: `__Host-admin_session` (`HttpOnly: true`, `Secure: true`, `SameSite: Strict`, `Path: /`, Domain unset).
     - Local development: `admin_session_dev` (`Secure: false` on localhost).

3. **Multi-Layer Request Protection**:
   - **Brute-Force Throttling**: Sliding-window rate limiter tracking both client IP and attempted email (maximum 5 failed attempts within 15 minutes, returning HTTP 429 with `Retry-After`).
   - **CSRF & Origin Validation**: Strict `Origin` and `Referer` validation against canonical `APP_ORIGIN`, paired with HMAC-SHA256 CSRF tokens.
   - **Payload & Method Hardening**: Strict Zod schema parsing, body size limit (10 KB max), `Content-Type: application/json` enforcement (HTTP 415), and unsupported method rejection (HTTP 405).
   - **Server-Side Route Protection**: Server Components and Route Handlers use `requireAdmin()` and `getAdminSession()` ensuring unauthenticated requests are redirected or rejected at the server before any UI or data is rendered.

4. **Static Phase 1 Scope & Future ORM**:
   - The Phase 1 dashboard is **100% static mock-data driven**. No dynamic CRUD, database mutations, or file-upload handlers exist in Phase 1.
   - **Prisma ORM** schema (`prisma/schema.prisma`) is initialized with models (`Product`, `Category`, `ManagementMember`, `Inquiry`) ready for Phase 2 dynamic persistence.

---

## 2. Required Environment Variables

Configure these variables in your hosting provider's secret manager or local `.env.local` (which is git-ignored):

```env
# Single Admin User Email
ADMIN_EMAIL="admin@merchantsagrovalley.com"

# Argon2id Password Hash (Generated via CLI)
ADMIN_PASSWORD_HASH="$argon2id$v=19$m=19456,t=2,p=1$..."

# 256-bit Cryptographically Random JWT Secret (Minimum 32 bytes)
JWT_SECRET="<64-hex-character-secret>"

# JWT Claims Validation
JWT_ISSUER="merchants-agrovalley-auth"
JWT_AUDIENCE="merchants-agrovalley-admin"

# Canonical Origin (No trailing slash)
APP_ORIGIN="https://merchantsagrovalley.com"

# CSRF Secret (Minimum 32 bytes)
CSRF_SECRET="<64-hex-character-secret>"

# Database URL for Prisma (Phase 2 readiness)
DATABASE_URL="file:./dev.db"
```

> **Warning**: Never use `NEXT_PUBLIC_` for any admin credential, password hash, or secret key.

---

## 3. How to Generate the Admin Password Hash

Run the dedicated CLI tool with hidden password input (passwords will not be echoed or logged):

```bash
npm run hash-password
```

1. Enter your desired administrator password (minimum 12 characters).
2. Confirm the password.
3. The tool generates an OWASP-compliant Argon2id hash.
4. Copy the output into `ADMIN_PASSWORD_HASH` in `.env.local` or your production secrets manager.

---

## 4. How to Generate the JWT & CSRF Secrets

Generate cryptographically secure 256-bit random keys using Node.js:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Run this twice: once for `JWT_SECRET` and once for `CSRF_SECRET`.

---

## 5. How to Configure Production HTTPS & Security Headers

Next.js is pre-configured with enterprise security headers in `next.config.ts`:

- `X-Frame-Options: DENY` (Anti-clickjacking)
- `X-Content-Type-Options: nosniff` (Anti-MIME sniffing)
- `Referrer-Policy: no-referrer`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; object-src 'none'; base-uri 'self';`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (Automatically enforced in production HTTPS)

Ensure your production reverse proxy (Nginx, Caddy, Cloudflare, AWS ALB) forces HTTPS and terminates TLS with modern cipher suites.

---

## 6. How to Test Authentication & Run Security Tests

Execute the 18 automated security tests:

```bash
npm run test:security
```

Verified test coverage:
1. `TEST 1`: Open `/admin/dashboard` without session -> Redirect to `/admin/login`.
2. `TEST 2`: Call protected `/api/admin/auth/session` without auth -> HTTP 401.
3. `TEST 3`: Submit incorrect credentials -> Generic 401 failure (`Invalid email or password.`).
4. `TEST 4`: Repeated failed login attempts -> HTTP 429 with `Retry-After`.
5. `TEST 5`: Tampered JWT signature -> Rejected as null.
6. `TEST 6`: Expired JWT -> Rejected.
7. `TEST 7`: Unsigned `alg:none` token -> Rejected.
8. `TEST 8`: Incorrect issuer or audience claims -> Rejected.
9. `TEST 9`: Cookie attributes -> `HttpOnly: true`, `SameSite: strict`, `Path: /`, `maxAge: 900`.
10. `TEST 10`: Logout API -> Cookie cleared and session terminated.
11. `TEST 11`: State-changing request from untrusted origin -> HTTP 403.
12. `TEST 12`: Unsupported HTTP method -> HTTP 405 with `Allow` header.
13. `TEST 13`: Unsupported `Content-Type` -> HTTP 415.
14. `TEST 14`: Oversized request body (>10KB) -> HTTP 413.
15. `TEST 15`: Frontend bundle audit -> Zero admin secrets or hashes exposed.
16. `TEST 16`: CORS check -> Zero wildcard CORS.
17. `TEST 17`: Post-logout dashboard access -> Redirect to login.
18. `TEST 18`: Phase 1 architecture verification -> Confirmed no DB CRUD or file-upload API exists.

---

## 7. Known JWT Logout & Revocation Limitations

Stateless JWT tokens are validated purely via cryptographic signature verification and expiration timestamps without maintaining centralized token blacklists.
- When an admin logs out, their client session cookie is immediately deleted and cleared by the server.
- However, if a JWT token was intercepted prior to logout, the cryptographic signature remains valid until its fixed 15-minute expiration time (`exp`).
- **Mitigation**: We mitigate this by keeping token lifetime strictly short (15 minutes). For Phase 2, a Redis-backed `jti` revocation list or database token version can be connected if instantaneous cross-device revocation is required.

---

## 8. Security Deployment Checklist

- [x] Passwords hashed with Argon2id using `npm run hash-password`.
- [x] `JWT_SECRET` generated with at least 32 cryptographically random bytes.
- [x] `ADMIN_EMAIL` normalized and validated server-side.
- [x] Cookies set with `HttpOnly`, `SameSite=Strict`, and `Secure` in production.
- [x] Brute-force throttling enabled (5 attempts / 15 minutes / HTTP 429).
- [x] Security headers active in `next.config.ts`.
- [x] `.env.local` verified in `.gitignore`.
- [x] Build passes with 0 TypeScript and compilation errors.
- [x] All 18 automated security tests pass (`npm run test:security`).
- [x] Dashboard is 100% static; zero DB mutations or CRUD endpoints exist in Phase 1.
