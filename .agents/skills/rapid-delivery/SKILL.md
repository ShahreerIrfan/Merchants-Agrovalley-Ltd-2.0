---
name: rapid-delivery
description: >-
  Ultra-fast 3-5 minute execution skill for the Merchants Agro Valley website.
  Bypasses heavy multi-tier global enterprise/pharmacy skills and procedures,
  enforcing direct code edits, instant UI verification, and rapid single-turn deliveries.
---

# Rapid Delivery Skill – Merchants Agro Valley (Max 3-5 Minutes)

Use this skill for all tasks in this project. It guarantees maximum velocity and eliminates procedural delays.

## Core Rules

1. **Strict 3–5 Minute Per-Prompt Execution:**
   - Never spend more than 3-5 minutes on a prompt.
   - Act directly on the target components without unnecessary codebase exploration.

2. **Bypass Global Heavy Enterprise/Pharmacy Skills:**
   - Ignore global SaaS/ERP/backend skills (`django-drf-backend`, `postgres-data-modeling`, `pharmacy-domain`, `offline-sync-engineering`, `cross-platform-integration-qa`, `subscription-billing`).
   - This project is exclusively a modern Next.js 16 + Tailwind CSS frontend corporate website.

3. **Batch Tool Calls with Maximum Parallelism:**
   - Perform all file reads in turn 1.
   - Apply all edits/writes in turn 2.
   - Run verification in a single combined command (`npm run lint && npm run build && git commit`).
   - Never take more than 2-3 turns per prompt.

4. **Zero Overhead Verification:**
   - Run linter/build only on changed files.
   - Do not run comprehensive regression suites.
   - Verify local HTTP 200 via `curl` or `urllib` in 2 seconds.

5. **Concise, Instant Reporting:**
   - Final report must be crisp, bulleted, and delivered immediately in Bengali with technical terms.
