/**
 * API: /api/admin/products/[id]
 * PortSwigger API Testing & OWASP API Security Top 10 Compliant
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";

const UpdateProductSchema = z
  .object({
    commodityName: z.string().min(2).max(150).optional(),
    slug: z.string().max(150).optional(),
    division: z.string().max(100).nullable().optional(),
    cardBadgeText: z.string().max(100).nullable().optional(),
    categoryId: z.string().max(50).nullable().optional(),
    description: z.string().min(5).max(2000).optional(),
    image: z.string().max(500).nullable().optional(),
    displayOrder: z.number().int().min(0).max(9999).optional(),
    status: z.enum(["ACTIVE", "DRAFT", "INACTIVE"]).optional(),
    breedSpeciesVariety: z.string().max(250).nullable().optional(),
    farmingHusbandryMethod: z.string().max(250).nullable().optional(),
    processingColdChainTech: z.string().max(250).nullable().optional(),
    cutsPackagingFormats: z.string().max(250).nullable().optional(),
    certificationsStandards: z.string().max(250).nullable().optional(),
    exportLogisticsShipping: z.string().max(250).nullable().optional(),
    lifecycleImages: z
      .array(
        z.object({
          stepNumber: z.number().int(),
          title: z.string(),
          imageUrl: z.string().optional(),
          imageStorageKey: z.string().optional(),
        })
      )
      .nullable()
      .optional(),
  })
  .strict();

export async function POST() {
  return new NextResponse(null, {
    status: 405,
    headers: { Allow: "GET, PUT, PATCH, DELETE" },
  });
}

// GET single product
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
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }
}

// PUT / PATCH
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

  const parseResult = UpdateProductSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json({ error: `Validation error: ${errorMsg}` }, { status: 400 });
  }

  try {
    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    const data = parseResult.data;
    const updated = await prisma.product.update({
      where: { id },
      data: {
        ...(data.commodityName ? { commodityName: data.commodityName.trim() } : {}),
        ...(data.slug ? { slug: data.slug.trim() } : {}),
        ...(data.division !== undefined ? { division: data.division?.trim() || null } : {}),
        ...(data.cardBadgeText !== undefined ? { cardBadgeText: data.cardBadgeText?.trim() || null } : {}),
        ...(data.categoryId !== undefined ? { categoryId: data.categoryId || null } : {}),
        ...(data.description !== undefined ? { description: data.description.trim() } : {}),
        ...(data.image !== undefined ? { image: data.image?.trim() || null } : {}),
        ...(data.displayOrder !== undefined ? { displayOrder: data.displayOrder } : {}),
        ...(data.status ? { status: data.status } : {}),
        ...(data.breedSpeciesVariety !== undefined ? { breedSpeciesVariety: data.breedSpeciesVariety?.trim() || null } : {}),
        ...(data.farmingHusbandryMethod !== undefined ? { farmingHusbandryMethod: data.farmingHusbandryMethod?.trim() || null } : {}),
        ...(data.processingColdChainTech !== undefined ? { processingColdChainTech: data.processingColdChainTech?.trim() || null } : {}),
        ...(data.cutsPackagingFormats !== undefined ? { cutsPackagingFormats: data.cutsPackagingFormats?.trim() || null } : {}),
        ...(data.certificationsStandards !== undefined ? { certificationsStandards: data.certificationsStandards?.trim() || null } : {}),
        ...(data.exportLogisticsShipping !== undefined ? { exportLogisticsShipping: data.exportLogisticsShipping?.trim() || null } : {}),
        ...(data.lifecycleImages !== undefined ? { lifecycleImages: data.lifecycleImages ? JSON.parse(JSON.stringify(data.lifecycleImages)) : null } : {}),
      },
    });

    return NextResponse.json(
      { success: true, product: updated },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to update product in database." },
      { status: 500 }
    );
  }
}

// DELETE
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
    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    await prisma.product.delete({ where: { id } });

    return NextResponse.json(
      { success: true, message: "Product deleted." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to delete product." },
      { status: 500 }
    );
  }
}
