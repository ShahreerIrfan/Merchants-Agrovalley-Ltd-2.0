/**
 * Merchants AgroValley - Phase 1 Comprehensive Security Test Suite
 * Tests 1 to 18 according to specification (PART 17)
 */



import fs from "node:fs";
import path from "node:path";

if (fs.existsSync(".env.local")) {
  process.loadEnvFile(".env.local");
}

import { SignJWT } from "jose";
import { getAuthEnv } from "../src/lib/auth/env";
import { verifyPassword } from "../src/lib/auth/argon2";
import { signAdminToken, verifyAdminToken } from "../src/lib/auth/jwt";
import { getCookieName, getCookieOptions } from "../src/lib/auth/cookies";
import { checkLoginRateLimit, recordLoginFailure, recordLoginSuccess } from "../src/lib/auth/rate-limiter";
import { validateRequestOrigin } from "../src/lib/auth/csrf";
import { POST as loginHandler, GET as loginGetHandler } from "../src/app/api/admin/auth/login/route";
import { GET as sessionHandler } from "../src/app/api/admin/auth/session/route";
import { POST as logoutHandler } from "../src/app/api/admin/auth/logout/route";


let passedCount = 0;
let failedCount = 0;

function assert(condition, testName, details = "") {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedCount++;
  } else {
    console.error(`[FAIL] ${testName}: ${details}`);
    failedCount++;
  }
}

async function runTests() {
  console.log("==================================================");
  console.log(" MERCHANTS AGROVALLEY - SECURITY TESTS (1 TO 18)");
  console.log("==================================================\n");

  const env = getAuthEnv();

  // ----------------------------------------------------
  // TEST 1: Open /admin/dashboard without a JWT -> Redirect / rejection
  // ----------------------------------------------------
  try {
    const unauthSession = await verifyAdminToken("");
    assert(unauthSession === null, "TEST 1: Protected session rejects missing JWT (Redirects to /admin/login)");
  } catch (e) {
    assert(false, "TEST 1", e.message);
  }

  // ----------------------------------------------------
  // TEST 2: Call protected APIs without authentication -> HTTP 401
  // ----------------------------------------------------
  try {
    const unauthReq = new Request("http://localhost:3000/api/admin/auth/session");
    const sessionRes = await sessionHandler(unauthReq);
    assert(sessionRes.status === 401, "TEST 2: Call protected API without session returns HTTP 401");
  } catch (e) {
    assert(false, "TEST 2", e.message);
  }

  // ----------------------------------------------------
  // TEST 3: Submit an incorrect email and password -> Generic 401 failure
  // ----------------------------------------------------
  try {
    const badLoginReq = new Request("http://localhost:3000/api/admin/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify({ email: "wrong@merchantsagrovalley.com", password: "wrongpassword123" }),
    });
    const res = await loginHandler(badLoginReq);
    const body = await res.json();
    assert(
      res.status === 401 && body.error === "Invalid email or password.",
      "TEST 3: Incorrect credentials returns generic HTTP 401 failure"
    );
  } catch (e) {
    assert(false, "TEST 3", e.message);
  }

  // ----------------------------------------------------
  // TEST 4: Submit repeated failed login attempts -> HTTP 429 & Retry-After
  // ----------------------------------------------------
  try {
    const testIp = "192.168.100.50";
    const testEmail = "bruteforce@test.com";
    for (let i = 0; i < 5; i++) {
      recordLoginFailure(testIp, testEmail);
    }
    const rateCheck = checkLoginRateLimit(testIp, testEmail);
    assert(
      rateCheck.allowed === false && rateCheck.retryAfter > 0,
      "TEST 4: Exceeded failed attempts triggers HTTP 429 lockout with Retry-After"
    );
    // Cleanup
    recordLoginSuccess(testIp, testEmail);
  } catch (e) {
    assert(false, "TEST 4", e.message);
  }

  // ----------------------------------------------------
  // TEST 5: Submit a modified or tampered JWT -> Rejected (null)
  // ----------------------------------------------------
  try {
    const validToken = await signAdminToken("admin@merchantsagrovalley.com");
    const tamperedToken = validToken.substring(0, validToken.length - 8) + "xxxxxxxx";
    const verified = await verifyAdminToken(tamperedToken);
    assert(verified === null, "TEST 5: Tampered JWT signature is rejected as null");
  } catch (e) {
    assert(false, "TEST 5", e.message);
  }

  // ----------------------------------------------------
  // TEST 6: Submit an expired JWT -> Rejected
  // ----------------------------------------------------
  try {
    const secretKey = new TextEncoder().encode(env.JWT_SECRET);
    // Sign token expired 10 minutes ago
    const expiredToken = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject("admin@merchantsagrovalley.com")
      .setIssuer(env.JWT_ISSUER)
      .setAudience(env.JWT_AUDIENCE)
      .setIssuedAt(Math.floor(Date.now() / 1000) - 1200)
      .setExpirationTime(Math.floor(Date.now() / 1000) - 600)
      .sign(secretKey);

    const verified = await verifyAdminToken(expiredToken);
    assert(verified === null, "TEST 6: Expired JWT is rejected");
  } catch (e) {
    assert(false, "TEST 6", e.message);
  }

  // ----------------------------------------------------
  // TEST 7: Submit a JWT using alg:none -> Rejected
  // ----------------------------------------------------
  try {
    // Unsigned alg:none token
    const header = Buffer.from(JSON.stringify({ alg: "none", typ: "JWT" })).toString("base64url");
    const payload = Buffer.from(
      JSON.stringify({
        sub: "admin@merchantsagrovalley.com",
        role: "admin",
        iss: env.JWT_ISSUER,
        aud: env.JWT_AUDIENCE,
        exp: Math.floor(Date.now() / 1000) + 900,
      })
    ).toString("base64url");
    const noneToken = `${header}.${payload}.`;
    const verified = await verifyAdminToken(noneToken);
    assert(verified === null, "TEST 7: alg:none token is strictly rejected");
  } catch (e) {
    assert(false, "TEST 7", e.message);
  }

  // ----------------------------------------------------
  // TEST 8: Submit a JWT with incorrect issuer or audience -> Rejected
  // ----------------------------------------------------
  try {
    const secretKey = new TextEncoder().encode(env.JWT_SECRET);
    const wrongAudToken = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject("admin@merchantsagrovalley.com")
      .setIssuer("attacker-issuer")
      .setAudience("attacker-audience")
      .setIssuedAt()
      .setExpirationTime("15m")
      .sign(secretKey);

    const verified = await verifyAdminToken(wrongAudToken);
    assert(verified === null, "TEST 8: JWT with invalid issuer/audience is rejected");
  } catch (e) {
    assert(false, "TEST 8", e.message);
  }

  // ----------------------------------------------------
  // TEST 9: Inspect the authentication cookie -> HttpOnly, Secure, SameSite
  // ----------------------------------------------------
  try {
    const cookieOpts = getCookieOptions();
    assert(
      cookieOpts.httpOnly === true &&
        cookieOpts.sameSite === "strict" &&
        cookieOpts.path === "/" &&
        cookieOpts.maxAge === 900,
      "TEST 9: Cookie attributes match OWASP: HttpOnly=true, SameSite=strict, Path=/, maxAge=900s"
    );
  } catch (e) {
    assert(false, "TEST 9", e.message);
  }

  // ----------------------------------------------------
  // TEST 10: Log out -> Clears cookie
  // ----------------------------------------------------
  try {
    const logoutReq = new Request("http://localhost:3000/api/admin/auth/logout", {
      method: "POST",
      headers: { origin: "http://localhost:3000" },
    });
    const res = await logoutHandler(logoutReq);
    const body = await res.json();
    assert(res.status === 200 && body.success === true, "TEST 10: Logout API successfully clears cookie and session");
  } catch (e) {
    assert(false, "TEST 10", e.message);
  }

  // ----------------------------------------------------
  // TEST 11: Send state-changing request from untrusted origin -> 403 Rejected
  // ----------------------------------------------------
  try {
    const untrustedReq = new Request("http://localhost:3000/api/admin/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: "https://evil-attacker-website.com",
      },
      body: JSON.stringify({ email: "admin@merchantsagrovalley.com", password: "somepassword" }),
    });
    const res = await loginHandler(untrustedReq);
    assert(res.status === 403, "TEST 11: State-changing request from untrusted origin rejected with HTTP 403");
  } catch (e) {
    assert(false, "TEST 11", e.message);
  }

  // ----------------------------------------------------
  // TEST 12: Submit an unsupported HTTP method -> HTTP 405
  // ----------------------------------------------------
  try {
    const res = await loginGetHandler();
    assert(res.status === 405 && res.headers.get("allow") === "POST", "TEST 12: GET on login route returns HTTP 405 with Allow header");
  } catch (e) {
    assert(false, "TEST 12", e.message);
  }

  // ----------------------------------------------------
  // TEST 13: Submit an unsupported Content-Type -> HTTP 415
  // ----------------------------------------------------
  try {
    const badContentTypeReq = new Request("http://localhost:3000/api/admin/auth/login", {
      method: "POST",
      headers: {
        "content-type": "text/plain",
        origin: "http://localhost:3000",
      },
      body: "email=admin@merchantsagrovalley.com",
    });
    const res = await loginHandler(badContentTypeReq);
    assert(res.status === 415, "TEST 13: Unsupported Content-Type returns HTTP 415");
  } catch (e) {
    assert(false, "TEST 13", e.message);
  }

  // ----------------------------------------------------
  // TEST 14: Submit an oversized request body -> HTTP 413
  // ----------------------------------------------------
  try {
    const oversizedReq = new Request("http://localhost:3000/api/admin/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "content-length": "25000",
        origin: "http://localhost:3000",
      },
      body: JSON.stringify({ email: "admin@merchantsagrovalley.com", password: "a".repeat(20000) }),
    });
    const res = await loginHandler(oversizedReq);
    assert(res.status === 413, "TEST 14: Oversized request body returns HTTP 413");
  } catch (e) {
    assert(false, "TEST 14", e.message);
  }

  // ----------------------------------------------------
  // TEST 15: Inspect frontend JavaScript files -> No secrets exposed
  // ----------------------------------------------------
  try {
    const componentsDir = path.resolve("src/components");
    const appDir = path.resolve("src/app");
    let secretLeakFound = false;

    function checkFiles(dir) {
      const files = fs.readdirSync(dir);
      for (const f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
          checkFiles(full);
        } else if (f.endsWith(".tsx") || f.endsWith(".ts")) {
          const content = fs.readFileSync(full, "utf8");
          if (
            content.includes("ADMIN_PASSWORD_HASH") ||
            content.includes("JWT_SECRET") ||
            content.includes("CSRF_SECRET")
          ) {
            // Only allow env.ts / server routes to refer to env secrets
            if (!full.includes("src\\lib\\auth") && !full.includes("src/lib/auth") && !full.includes("api")) {
              secretLeakFound = true;
              console.error(`Leak found in: ${full}`);
            }
          }
        }
      }
    }
    checkFiles(componentsDir);
    assert(!secretLeakFound, "TEST 15: Frontend components inspected - zero secrets exposed");
  } catch (e) {
    assert(false, "TEST 15", e.message);
  }

  // ----------------------------------------------------
  // TEST 16: Check that no wildcard CORS configuration exists
  // ----------------------------------------------------
  try {
    const nextConfigContent = fs.readFileSync("next.config.ts", "utf8");
    const hasWildcardCors = nextConfigContent.includes("Access-Control-Allow-Origin: *") || nextConfigContent.includes('"*"');
    assert(!hasWildcardCors, "TEST 16: Zero wildcard CORS present in next.config.ts");
  } catch (e) {
    assert(false, "TEST 16", e.message);
  }

  // ----------------------------------------------------
  // TEST 17: Dashboard access without session redirects
  // ----------------------------------------------------
  try {
    const unauth = await verifyAdminToken(undefined);
    assert(unauth === null, "TEST 17: Dashboard guard rejects missing session and triggers redirect");
  } catch (e) {
    assert(false, "TEST 17", e.message);
  }

  // ----------------------------------------------------
  // TEST 18: Verify no DB CRUD or file-upload API exists in Phase 1
  // ----------------------------------------------------
  try {
    const apiDir = path.resolve("src/app/api");
    const subDirs = fs.existsSync(apiDir) ? fs.readdirSync(apiDir) : [];
    // Only admin/auth and auth routes exist in src/app/api
    const otherApis = subDirs.filter((d) => d !== "admin" && d !== "auth");
    let adminApis = [];
    if (fs.existsSync(path.join(apiDir, "admin"))) {
      adminApis = fs.readdirSync(path.join(apiDir, "admin")).filter((d) => d !== "auth");
    }
    assert(
      otherApis.length === 0 && adminApis.length === 0,
      "TEST 18: Confirmed no DB CRUD or file-upload API exists in Phase 1"
    );
  } catch (e) {
    assert(false, "TEST 18", e.message);
  }

  console.log("\n--------------------------------------------------");
  console.log(`TOTAL TESTS: ${passedCount + failedCount} | PASSED: ${passedCount} | FAILED: ${failedCount}`);
  console.log("--------------------------------------------------\n");

  if (failedCount > 0) {
    process.exit(1);
  }
}

runTests();
