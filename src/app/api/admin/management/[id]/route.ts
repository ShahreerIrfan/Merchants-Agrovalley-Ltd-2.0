/**
 * API: /api/admin/management/[id]
 * PortSwigger API Testing & OWASP API Security Top 10 Compliant
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";

const UpdateManagementMemberSchema = z
  .object({
    name: z.string().min(2).max(100).optional(),
    designation: z.string().min(2).max(100).optional(),
    boardBadge: z.string().max(60).nullable().optional(),
    bio: z.string().max(800).nullable().optional(),
    fullBio: z.string().max(3000).nullable().optional(),
    image: z.string().max(500).nullable().optional(),
    order: z.number().int().min(0).max(999).optional(),
    isKeyLeader: z.boolean().optional(),
    status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  })
  .strict();

export async function POST() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "GET, PUT, PATCH, DELETE" },
  });
}

// GET single management member
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  try {
    const member = await prisma.managementMember.findUnique({ where: { id } });
    if (!member) {
      return NextResponse.json({ error: "Member not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, member }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}

// PUT / PATCH: Update management member
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  return handleUpdate(req, params);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  return handleUpdate(req, params);
}

async function handleUpdate(
  req: NextRequest,
  params: Promise<{ id: string }>
) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json" },
      { status: 415 }
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed JSON." }, { status: 400 });
  }

  const parseResult = UpdateManagementMemberSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json({ error: `Validation error: ${errorMsg}` }, { status: 400 });
  }

  try {
    const existing = await prisma.managementMember.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Management member not found." }, { status: 404 });
    }

    const updated = await prisma.managementMember.update({
      where: { id },
      data: {
        ...(parseResult.data.name ? { name: parseResult.data.name.trim() } : {}),
        ...(parseResult.data.designation ? { designation: parseResult.data.designation.trim() } : {}),
        ...(parseResult.data.boardBadge !== undefined ? { boardBadge: parseResult.data.boardBadge?.trim() || null } : {}),
        ...(parseResult.data.bio !== undefined ? { bio: parseResult.data.bio?.trim() || null } : {}),
        ...(parseResult.data.fullBio !== undefined ? { fullBio: parseResult.data.fullBio?.trim() || null } : {}),
        ...(parseResult.data.image !== undefined ? { image: parseResult.data.image?.trim() || null } : {}),
        ...(parseResult.data.order !== undefined ? { order: parseResult.data.order } : {}),
        ...(parseResult.data.isKeyLeader !== undefined ? { isKeyLeader: parseResult.data.isKeyLeader } : {}),
        ...(parseResult.data.status ? { status: parseResult.data.status } : {}),
      },
    });

    return NextResponse.json(
      { success: true, member: updated },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to update management member in database." },
      { status: 500 }
    );
  }
}

// DELETE: Delete management member
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  try {
    const existing = await prisma.managementMember.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Management member not found." }, { status: 404 });
    }

    await prisma.managementMember.delete({ where: { id } });

    return NextResponse.json(
      { success: true, message: "Management member deleted." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to delete management member." },
      { status: 500 }
    );
  }
}
