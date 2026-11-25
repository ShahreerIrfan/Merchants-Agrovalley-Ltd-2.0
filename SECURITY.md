# Merchants Agro Valley – Security & API Architecture Guide

This document establishes the official security architecture and standards for Merchants Agro Valley, aligned directly with the **PortSwigger API Testing Methodology** (https://portswigger.net/web-security/api-testing) and **OWASP API Security Top 10**.

All contributors and AI development agents must strictly adhere to these guidelines when implementing or modifying any API endpoint, database schema, or authentication flow.

---

## 1. Core Security Pillars

### 1.1 Strict HTTP Method & Media Type Enforcement
- Every route handler in `src/app/api/` must explicitly declare only supported HTTP methods.
- Unsupported methods must return `405 Method Not Allowed` with an `Allow` header.
- State-changing endpoints (POST, PUT, PATCH) must validate `Content-Type: application/json` and reject unsupported formats with `415 Unsupported Media Type`.

### 1.2 Defense Against Mass Assignment
- All incoming payloads must be validated using **Zod** schemas configured with `.strict()`.
- Untrusted client inputs must never be passed directly to database update or create calls.
- Privileged attributes (`role`, `isAdmin`, `isSuperuser`, `createdAt`, `id`) are strictly server-controlled.

### 1.3 Broken Object Level Authorization (BOLA / IDOR)
- Every resource read, update, or deletion must confirm ownership or role permissions server-side.
- Scope all Prisma queries by the authenticated user's ID extracted from the verified session token (`where: { id: resourceId, userId: session.userId }`).
- Never rely on IDs sent in request bodies or query parameters without ownership validation.

### 1.4 Broken Function Level Authorization (BFLA)
- Administrative endpoints under `/api/admin/` or privileged operations must execute `getAdminSession()` and verify `session.role === "admin"` before any business logic runs.
- The UI layer hides admin components for aesthetics, but the backend server provides the only authoritative access barrier.

### 1.5 Rate Limiting & DoS Protection
- Sensitive routes (authentication, registrations, contact/inquiry forms, password resets) must implement sliding-window rate limiting.
- Violations receive `HTTP 429 Too Many Requests` accompanied by a `Retry-After` header.
- Request payloads must be constrained in size (< 10KB for JSON payloads, HTTP 413 on overflow).

### 1.6 Cryptographic Authentication Standards
- **Password Hashing:** Argon2id with memory cost `m=19456`, time cost `t=2`, parallelism `p=1`.
- **JWT Signing:** Cryptographically secure 256-bit secrets using `HS256`. The verification library must pin `algorithms: ["HS256"]` to prevent `alg: none` downgrades.
- **Session Cookies:** `HttpOnly`, `SameSite=Strict`, `Secure` (in production), prefixed with `__Host-` or `__Secure-`.
- **Lifespan:** Short-lived access tokens (15 minutes).

### 1.7 CSRF & Origin Verification
- All mutation requests must validate the `Origin` and `Referer` headers against the canonical `APP_ORIGIN`.
- Zero tolerance for wildcard `*` CORS origins on authenticated endpoints.

### 1.8 Information Disclosure & Error Sanitization
- API errors must never return raw database error messages, stack traces, or framework internals to the client.
- Always respond with standardized, sanitized error objects (e.g. `{"error": "Invalid email or password."}`).
- Sensitive endpoints must include `Cache-Control: no-store, no-cache, must-revalidate` headers.

---

## 2. API Security Checklist for Prompts & PRs

Before any API is merged or deployed, verify:
1. [x] Method allowed? (GET/POST explicitly declared, rest return 405)
2. [x] Content-Type verified? (Rejects non-JSON with 415)
3. [x] Strict Zod schema used? (`.strict()`, unknown fields blocked)
4. [x] User authenticated? (JWT / Session verified)
5. [x] Resource ownership checked? (BOLA prevented)
6. [x] Role authorized? (BFLA prevented)
7. [x] Rate limit applied? (429 on abuse)
8. [x] Passwords hashed with Argon2id?
9. [x] CSRF Origin checked?
10. [x] Automated security tests passing? (`npm run test:security`)

---

## 3. Automated Verification
The repository includes automated security verification tests in `frontend/scripts/security-tests.mjs`:
```bash
cd frontend
npm run test:security
```
This suite verifies origin validation, rate limiting, password hash verification, cookie configuration, and error sanitization.
