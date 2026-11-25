<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Merchants Agro Valley – Agent Guidelines

## Speed Directive: Ultra-Fast Delivery (Max 3–5 Minutes)
- **Zero Global Skill Overhead:** Ignore all global pharmacy/ERP/backend skills (`django-drf-backend`, `cross-platform-integration-qa`, `postgres-data-modeling`, `offline-sync-engineering`, `subscription-billing`, `pharmacy-domain`).
- **Target Stack:** Next.js 16 (Turbopack) + React 19 + Tailwind CSS + Framer Motion + Prisma + PostgreSQL.
- **Execution Speed:** Maximum 3 to 5 minutes per prompt. Proceed straight to implementation without unnecessary discovery or alternative design proposals.
- **Active Speed Skill:** Always activate and follow `.agents/skills/rapid-delivery/SKILL.md`.

## Mandatory Security Directive: PortSwigger API Security & Testing
- **Active Security Skill:** Whenever implementing, updating, or reviewing ANY API route (`src/app/api/...`), database query (Prisma), authentication, registration, or session flow, you **MUST** consult and enforce the PortSwigger API testing standards defined in:
  - `.agents/skills/api-security/SKILL.md`
  - `SECURITY.md`
  - Reference: `https://portswigger.net/web-security/api-testing`
- **Mandatory Pre-Implementation Check:**
  1. Method allowlisting (405 for unsupported methods).
  2. Content-Type check (415 for non-JSON).
  3. Zod `.strict()` schema to prevent mass assignment / parameter tampering.
  4. Server-side session & ownership verification to prevent BOLA/IDOR & BFLA.
  5. Sliding-window rate limiting & payload size constraints (429 / 413).
  6. Argon2id + HS256 JWT with HttpOnly/SameSite=Strict/Secure cookies.
  7. Origin validation against `APP_ORIGIN`.
  8. Sanitized, generic client error messages (no stack traces).
- **Post-Implementation Verification:**
  - Run `npm run test:security` in `frontend` to verify all security assertions pass.

