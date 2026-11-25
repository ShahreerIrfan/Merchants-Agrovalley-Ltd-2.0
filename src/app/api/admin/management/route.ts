/**
 * API: /api/admin/management
 * PortSwigger API Testing & OWASP API Security Top 10 Compliant
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";

// Zod Strict Schema to prevent parameter tampering / mass assignment
const CreateManagementMemberSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100),
    designation: z.string().min(2, "Designation must be at least 2 characters").max(100),
    boardBadge: z.string().max(60).optional(),
    bio: z.string().max(800).optional(),
    fullBio: z.string().max(3000).optional(),
    image: z.string().max(500).optional(),
    order: z.number().int().min(0).max(999).optional(),
    isKeyLeader: z.boolean().optional(),
    status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  })
  .strict();

// Rate limiting map
const ipRateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRateLimitMap.set(ip, { count: 1, resetAt: now + 60000 });
    return true;
  }
  if (entry.count >= 60) return false;
  entry.count += 1;
  return true;
}

// 405 Method Allowlisting for unsupported methods
export async function PUT() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "GET, POST", "Cache-Control": "no-store" },
  });
}

export async function DELETE() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "GET, POST", "Cache-Control": "no-store" },
  });
}

export async function PATCH() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "GET, POST", "Cache-Control": "no-store" },
  });
}

// GET: List all management members
export async function GET(req: NextRequest) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json(
      { error: "Unauthorized administrator access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" } }
    );
  }

  try {
    const members = await prisma.managementMember.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    return NextResponse.json(
      { success: true, members },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, private",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "An internal database error occurred." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// POST: Create a new management member
export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json(
      { error: "Unauthorized administrator access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60", "Cache-Control": "no-store" } }
    );
  }

  // Origin check
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    const expectedOrigin = req.nextUrl.origin;
    if (origin !== expectedOrigin && !origin.includes(host)) {
      return NextResponse.json(
        { error: "Cross-site request blocked." },
        { status: 403, headers: { "Cache-Control": "no-store" } }
      );
    }
  }

  // Content-Type validation
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported Media Type. Request must be application/json." },
      { status: 415, headers: { "Cache-Control": "no-store" } }
    );
  }

  // Payload size constraint (Max 30KB)
  const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
  if (contentLength > 30720) {
    return NextResponse.json(
      { error: "Payload too large. Maximum size is 30KB." },
      { status: 413, headers: { "Cache-Control": "no-store" } }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Malformed JSON payload." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const parseResult = CreateManagementMemberSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json(
      { error: `Validation failed: ${errorMsg}` },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { name, designation, boardBadge, bio, fullBio, image, isKeyLeader, status } = parseResult.data;
  let order = parseResult.data.order;

  if (order === undefined || order === 0) {
    const highest = await prisma.managementMember.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });
    order = (highest?.order ?? 0) + 1;
  }

  try {
    const created = await prisma.managementMember.create({
      data: {
        name,
        designation,
        boardBadge: boardBadge?.trim() || null,
        bio: bio?.trim() || null,
        fullBio: fullBio?.trim() || null,
        image: image?.trim() || null,
        order,
        isKeyLeader: Boolean(isKeyLeader),
        status: status || "ACTIVE",
      },
    });

    return NextResponse.json(
      { success: true, member: created },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to create management member in database." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
