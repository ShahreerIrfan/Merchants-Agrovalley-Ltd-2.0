---
name: api-security
description: >-
  Enforces PortSwigger API Testing & OWASP API Security Top 10 standards for Next.js APIs,
  Prisma DB queries, authentication, authorization, and data flow. Must be consulted and
  enforced whenever any API route, endpoint, or data functionality is implemented or modified.
---

# PortSwigger API Security & Testing Standard
**Reference:** https://portswigger.net/web-security/api-testing  
**Target Architecture:** Next.js 16 (App Router) + Route Handlers (`src/app/api/...`) + Prisma ORM + PostgreSQL + JWT/Argon2id Auth.

Whenever an API endpoint or backend functionality is created, modified, or audited in this project, you **MUST** review and enforce the following 10 vulnerability domains before writing any code.

---

## 1. Pre-Implementation Security Checklist (Must Pass All 7 Gates)

Before committing any API route code:
- [ ] **Method Gating:** Are unsupported HTTP methods explicitly rejected with `405 Method Not Allowed` + `Allow` header?
- [ ] **Content-Type Gating:** Is `Content-Type: application/json` enforced on state-changing requests, returning `415 Unsupported Media Type` if missing/invalid?
- [ ] **Mass Assignment Check:** Is input parsed with a strict Zod schema (`.strict()`) where sensitive fields (`role`, `isAdmin`, `id`, `createdAt`) are stripped or forbidden?
- [ ] **BOLA / IDOR Verification:** Does the query verify that the authenticated user owns the resource (`where: { id, userId: session.userId }`) or has admin privileges?
- [ ] **BFLA (Function Authorization):** Is the caller's session and role checked server-side before executing any logic?
- [ ] **Rate Limiting & Payload Caps:** Is the route protected by sliding-window rate limiting (`429`) and payload size limits (< 10KB, `413`)?
- [ ] **Info Leak & Error Sanitization:** Are error messages generic (`"Invalid request"`, `"Operation failed"`) with zero leaked internal exception messages or stack traces?

---

## 2. PortSwigger API Testing Vulnerability Domains & Defenses

### A. API Reconnaissance & Information Disclosure
- **Vulnerability:** Unintended exposure of API documentation, Swagger/OpenAPI specs (`/swagger.json`, `/api-docs`), debug endpoints (`/api/test`, `/api/debug`), or environment dumps.
- **Rules:**
  1. Never expose OpenAPI/Swagger files in production.
  2. Never create temporary debug routes in `src/app/api/` that bypass authentication.
  3. All API error responses must return generic client-safe messages:
     ```ts
     // CORRECT:
     return NextResponse.json({ error: "Invalid credentials or request." }, { status: 400 });
     // FORBIDDEN:
     return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
     ```
  4. Always set security headers on API responses:
     - `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate`
     - `X-Content-Type-Options: nosniff`

### B. Strict HTTP Method Enforcement
- **Vulnerability:** Attackers send unexpected HTTP methods (e.g. GET instead of POST, or PUT/PATCH to bypass poorly implemented authorization filters).
- **Rules:**
  1. Only export the explicitly supported HTTP method handlers in Next.js Route Handlers (`export async function POST()`, `export async function GET()`).
  2. Implement fallback catch-all methods to return HTTP 405 with the standard `Allow` header:
     ```ts
     export async function GET() {
       return NextResponse.json(
         { error: "Method Not Allowed" },
         { status: 405, headers: { Allow: "POST" } }
       );
     }
     ```

### C. Media Type & Content-Type Enforcement
- **Vulnerability:** Attackers submit unexpected media types (XML, `text/plain`, `multipart/form-data`) to bypass JSON-specific WAFs or exploit alternative parser vulnerabilities.
- **Rules:**
  1. For state-changing requests (POST, PUT, PATCH), verify `req.headers.get("content-type")`.
  2. If it does not contain `application/json`, immediately reject with `415 Unsupported Media Type`:
     ```ts
     const contentType = req.headers.get("content-type") || "";
     if (!contentType.includes("application/json")) {
       return NextResponse.json(
         { error: "Unsupported Media Type. Expected application/json." },
         { status: 415 }
       );
     }
     ```

### D. Mass Assignment & Parameter Tampering
- **Vulnerability:** Attackers inject privileged fields (e.g. `{"role": "admin"}`, `{"isVerified": true}`, `{"balance": 10000}`) into user update/registration payloads.
- **Rules:**
  1. Always use Zod schemas with `.strict()` so unlisted properties trigger validation failures:
     ```ts
     const UpdateProfileSchema = z.object({
       name: z.string().trim().min(2).max(100),
       phone: z.string().trim().max(20).optional(),
     }).strict();
     ```
  2. Never pass raw user input to Prisma:
     ```ts
     // FORBIDDEN:
     await prisma.user.update({ where: { id }, data: reqBody });
     // MANDATORY:
     const { name, phone } = UpdateProfileSchema.parse(reqBody);
     await prisma.user.update({ where: { id }, data: { name, phone } });
     ```
  3. Never allow user-controlled JSON to modify permissions or role attributes.

### E. Broken Object Level Authorization (BOLA / IDOR)
- **Vulnerability:** User A accesses or modifies User B's resources by guessing or altering an ID parameter (e.g. `GET /api/orders?id=500` or `PATCH /api/users/profile`).
- **Rules:**
  1. Never trust the client-supplied user ID. Extract the user ID exclusively from the verified server-side session/JWT.
  2. In database queries, always scope by the authenticated user's ID:
     ```ts
     // SECURE:
     const item = await prisma.order.findFirst({
       where: { id: orderId, userId: session.userId }
     });
     if (!item) {
       return NextResponse.json({ error: "Resource not found." }, { status: 404 });
     }
     ```
  3. Use opaque UUIDs/CUIDs instead of sequential auto-incrementing integers for sensitive public-facing identifiers.

### F. Broken Function Level Authorization (BFLA)
- **Vulnerability:** Normal users invoking administrative endpoints (e.g. `/api/admin/products`, `/api/admin/users/delete`).
- **Rules:**
  1. Enforce server-side role validation in every admin route before any database or business logic executes:
     ```ts
     const session = await getAdminSession();
     if (!session || session.role !== "admin") {
       return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
     }
     ```
  2. Never rely on frontend UI hiding buttons or links; backend enforcement is mandatory.

### G. Rate Limiting & Resource Exhaustion (DoS)
- **Vulnerability:** Automated brute force of passwords, OTP flooding, or memory exhaustion via gigantic JSON payloads.
- **Rules:**
  1. Enforce sliding-window rate limiting on all public and authentication routes:
     ```ts
     const rateResult = checkRateLimit(ip, 5, 60_000); // 5 attempts per minute
     if (!rateResult.allowed) {
       return NextResponse.json(
         { error: "Too many requests. Please try again later." },
         { status: 429, headers: { "Retry-After": String(rateResult.retryAfterSeconds) } }
       );
     }
     ```
  2. Cap request body sizes (max 10KB for auth/form JSON, max 1MB for documents). Return `413 Payload Too Large` if exceeded.

### H. Authentication & Session Hardening
- **Vulnerability:** Weak secrets, `alg: none` JWTs, session fixation, unencrypted tokens in localStorage.
- **Rules:**
  1. Use Argon2id for password hashing with secure parameters (`m=19456, t=2, p=1`).
  2. Use HS256 with cryptographically random 256-bit secrets (`JWT_SECRET`).
  3. Set strict algorithms array (`algorithms: ["HS256"]`) to prevent algorithm confusion attacks (`alg: none`).
  4. Store tokens in `HttpOnly`, `SameSite=Strict`, `Secure` cookies with `__Host-` or `__Secure-` prefixes in production.
  5. Short token lifespans: 15-minute access token expiry, sliding session renewal.

### I. CSRF & Origin Validation
- **Vulnerability:** Cross-site forgery sending state-changing requests via victim's browser session.
- **Rules:**
  1. Validate incoming `Origin` and `Referer` headers against `APP_ORIGIN`:
     ```ts
     const origin = req.headers.get("origin") || req.headers.get("referer");
     if (!isValidOrigin(origin, allowedOrigin)) {
       return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
     }
     ```
  2. Never use wildcard `Access-Control-Allow-Origin: *` on authenticated routes.

### J. Database & Injection Safety
- **Vulnerability:** SQL Injection, Prisma raw query vulnerabilities, Server-Side Parameter Pollution.
- **Rules:**
  1. Always use Prisma's type-safe query builders (`prisma.user.findUnique`, `prisma.product.create`).
  2. Avoid `$queryRawUnsafe`. If `$queryRaw` is necessary, only use Prisma tagged template literals with automatic parameterization.

---

## 3. Quick Verification Command
After implementing any API or auth feature, immediately run the security test suite:
```bash
cd frontend && npm run test:security
```
Ensure all security assertions (rate limit 429, invalid credentials rejection, cookie flags, origin verification) pass with 100% success.
