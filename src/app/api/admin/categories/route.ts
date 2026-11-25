import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth/session";
import { validateRequestOrigin } from "@/lib/auth/csrf";

// PortSwigger API Testing: Strict schema prevents mass assignment & parameter tampering
const CreateCategorySchema = z
  .object({
    name: z.string().trim().min(2, "Category name must be at least 2 characters.").max(100),
    slug: z.string().trim().min(2, "Slug must be at least 2 characters.").max(120).optional(),
    description: z.string().trim().max(1000).optional(),
  })
  .strict();

// Default seed categories if database is initially empty
const DEFAULT_SEED_CATEGORIES = [
  {
    name: "Bulk Commodities",
    slug: "/bulk-commodities",
    description: "High-grade bulk rice, pulses, wheat, sugar, and essential food staples.",
  },
  {
    name: "Agro Livestock",
    slug: "/agro-livestock",
    description: "Commercial cattle feedlot fattening, Halal abattoir dressing, and beef export.",
  },
  {
    name: "Dairy & Milk",
    slug: "/dairy-milk",
    description: "Selective dairy herd breeding, continuous rotary milking, and aseptic dairy distribution.",
  },
  {
    name: "Small Ruminants",
    slug: "/small-ruminants",
    description: "Purebred Black Bengal goat breeding on elevated slatted housing and Halal mutton export.",
  },
  {
    name: "Poultry & Avian",
    slug: "/poultry-avian",
    description: "Climate-controlled tunnel housing, zero-antibiotic diet, and cryogenic IQF blast freezing.",
  },
  {
    name: "Fisheries & Marine",
    slug: "/fisheries-marine",
    description: "Scientific aerated freshwater earthen ponds, probiotic management, and filleting.",
  },
  {
    name: "Waterfowl Division",
    slug: "/waterfowl-division",
    description: "Free-range foraging in natural Haor wetland pastures and export-grade duck processing.",
  },
  {
    name: "Natural Spices",
    slug: "/natural-spices",
    description: "Aromatic turmeric, chili, coriander, ginger, and cumin rich in natural essential oils.",
  },
];

// GET: List all categories (with auto-seed if database is empty)
export async function GET(req: Request) {
  // BFLA: Server-side admin verification
  const session = await getAdminSession(req);
  if (!session || session.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized access. Administrator session required." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    let categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { products: true },
        },
      },
    });

    // Auto-seed if database is empty
    if (categories.length === 0) {
      for (const item of DEFAULT_SEED_CATEGORIES) {
        await prisma.category.upsert({
          where: { name: item.name },
          update: {},
          create: item,
        });
      }
      categories = await prisma.category.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          _count: {
            select: { products: true },
          },
        },
      });
    }

    return NextResponse.json(
      { success: true, categories },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error while retrieving categories." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// POST: Create a new category
export async function POST(req: Request) {
  // 1. BFLA Check
  const session = await getAdminSession(req);
  if (!session || session.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized access. Administrator session required." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 2. CSRF Origin Check
  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Cross-site request forgery protection: Invalid origin." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 3. PortSwigger Content-Type Check: Reject non-JSON
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported Media Type. Expected application/json." },
      { status: 415, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 4. Payload Size Limit Check (< 25KB)
  const bodyText = await req.text();
  if (bodyText.length > 25 * 1024) {
    return NextResponse.json(
      { error: "Payload too large. Exceeds 25KB limit." },
      { status: 413, headers: { "Cache-Control": "no-store" } }
    );
  }

  // 5. Schema Validation (Strict)
  let rawBody: unknown;
  try {
    rawBody = JSON.parse(bodyText);
  } catch {
    return NextResponse.json(
      { error: "Malformed JSON payload." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const parseResult = CreateCategorySchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json(
      { error: `Validation failed: ${errorMsg}` },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { name, description } = parseResult.data;
  let slug = parseResult.data.slug;

  if (!slug || !slug.trim()) {
    slug = `/${name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
  } else if (!slug.startsWith("/")) {
    slug = `/${slug.trim()}`;
  }

  try {
    // Check duplicates
    const existing = await prisma.category.findFirst({
      where: {
        OR: [{ name: { equals: name, mode: "insensitive" } }, { slug }],
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "A category with this name or slug already exists." },
        { status: 409, headers: { "Cache-Control": "no-store" } }
      );
    }

    const created = await prisma.category.create({
      data: {
        name,
        slug,
        description: description || null,
      },
    });

    return NextResponse.json(
      { success: true, category: created },
      { status: 201, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to persist category in database." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// Method Allowlisting (HTTP 405 for unsupported methods)
function methodNotAllowed(req?: Request) {
  const _ = req?.headers?.get("host");
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "GET, POST", "Cache-Control": "no-store" } }
  );
}

export async function PUT(req?: Request) {
  return methodNotAllowed(req);
}
export async function PATCH(req?: Request) {
  return methodNotAllowed(req);
}
export async function DELETE(req?: Request) {
  return methodNotAllowed(req);
}
