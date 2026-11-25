/**
 * API: /api/admin/products
 * PortSwigger API Testing & OWASP API Security Top 10 Compliant
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";

// Zod Strict Schema to prevent parameter tampering / mass assignment
const CreateProductSchema = z
  .object({
    commodityName: z.string().min(2, "Commodity name must be at least 2 characters").max(150),
    slug: z.string().max(150).optional(),
    division: z.string().max(100).optional(),
    cardBadgeText: z.string().max(100).optional(),
    categoryId: z.string().max(50).optional(),
    description: z.string().min(5, "Description must be at least 5 characters").max(2000),
    image: z.string().max(500).optional(),
    displayOrder: z.number().int().min(0).max(9999).optional(),
    status: z.enum(["ACTIVE", "DRAFT", "INACTIVE"]).optional(),
    breedSpeciesVariety: z.string().max(250).optional(),
    farmingHusbandryMethod: z.string().max(250).optional(),
    processingColdChainTech: z.string().max(250).optional(),
    cutsPackagingFormats: z.string().max(250).optional(),
    certificationsStandards: z.string().max(250).optional(),
    exportLogisticsShipping: z.string().max(250).optional(),
    lifecycleImages: z
      .array(
        z.object({
          stepNumber: z.number().int(),
          title: z.string(),
          imageUrl: z.string().optional(),
          imageStorageKey: z.string().optional(),
        })
      )
      .optional(),
  })
  .strict();

// 405 Method Allowlisting
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

// GET: List all products
export async function GET() {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json(
      { error: "Unauthorized administrator access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const products = await prisma.product.findMany({
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    });

    return NextResponse.json(
      { success: true, products },
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

// POST: Create a new product
export async function POST(req: NextRequest) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json(
      { error: "Unauthorized administrator access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
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

  // Payload size constraint (Max 60KB)
  const contentLength = parseInt(req.headers.get("content-length") || "0", 10);
  if (contentLength > 61440) {
    return NextResponse.json(
      { error: "Payload too large. Maximum size is 60KB." },
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

  const parseResult = CreateProductSchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json(
      { error: `Validation failed: ${errorMsg}` },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const data = parseResult.data;
  let slug = data.slug?.trim();
  if (!slug) {
    slug = `/${data.commodityName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
  } else if (!slug.startsWith("/")) {
    slug = `/${slug}`;
  }

  try {
    // Unique check
    const existing = await prisma.product.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Math.floor(100 + Math.random() * 900)}`;
    }

    const created = await prisma.product.create({
      data: {
        commodityName: data.commodityName.trim(),
        slug,
        division: data.division?.trim() || null,
        cardBadgeText: data.cardBadgeText?.trim() || data.division?.trim() || null,
        categoryId: data.categoryId || null,
        description: data.description.trim(),
        image: data.image?.trim() || "/assets/admin/products/fresh-grocery.jpg",
        displayOrder: data.displayOrder ?? 0,
        status: data.status || "ACTIVE",
        breedSpeciesVariety: data.breedSpeciesVariety?.trim() || null,
        farmingHusbandryMethod: data.farmingHusbandryMethod?.trim() || null,
        processingColdChainTech: data.processingColdChainTech?.trim() || null,
        cutsPackagingFormats: data.cutsPackagingFormats?.trim() || null,
        certificationsStandards: data.certificationsStandards?.trim() || null,
        exportLogisticsShipping: data.exportLogisticsShipping?.trim() || null,
        lifecycleImages: data.lifecycleImages ? JSON.parse(JSON.stringify(data.lifecycleImages)) : null,
      },
    });

    return NextResponse.json(
      { success: true, product: created },
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
      { error: "Failed to create product in database." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}
