import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth/session";
import { validateRequestOrigin } from "@/lib/auth/csrf";

// Strict schema for category updates
const UpdateCategorySchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters.").max(100).optional(),
    slug: z.string().trim().min(2).max(120).optional(),
    description: z.string().trim().max(1000).optional().nullable(),
  })
  .strict();

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET: Retrieve a single category
export async function GET(req: Request, { params }: RouteParams) {
  const session = await getAdminSession(req);
  if (!session || session.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { id } = await params;
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        _count: { select: { products: true } },
      },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found." },
        { status: 404, headers: { "Cache-Control": "no-store" } }
      );
    }

    return NextResponse.json(
      { success: true, category },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

// PUT / PATCH: Update category
export async function PATCH(req: Request, context: RouteParams) {
  return handleUpdate(req, context);
}

export async function PUT(req: Request, context: RouteParams) {
  return handleUpdate(req, context);
}

async function handleUpdate(req: Request, { params }: RouteParams) {
  const session = await getAdminSession(req);
  if (!session || session.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Cross-site request forgery protection: Invalid origin." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Unsupported Media Type. Expected application/json." },
      { status: 415, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { id } = await params;

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Malformed JSON." }, { status: 400 });
  }

  const parseResult = UpdateCategorySchema.safeParse(rawBody);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues.map((e: { message: string }) => e.message).join(", ");
    return NextResponse.json({ error: `Validation error: ${errorMsg}` }, { status: 400 });
  }

  const { name, slug, description } = parseResult.data;

  try {
    const existing = await prisma.category.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: "Category not found." }, { status: 404 });
    }

    // Check unique conflict on name or slug
    if (name && name !== existing.name) {
      const duplicate = await prisma.category.findUnique({ where: { name } });
      if (duplicate && duplicate.id !== id) {
        return NextResponse.json(
          { error: "Another category already exists with this name." },
          { status: 409 }
        );
      }
    }

    if (slug && slug !== existing.slug) {
      const duplicate = await prisma.category.findUnique({ where: { slug } });
      if (duplicate && duplicate.id !== id) {
        return NextResponse.json(
          { error: "Another category already exists with this slug." },
          { status: 409 }
        );
      }
    }

    const updated = await prisma.category.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(slug ? { slug } : {}),
        ...(description !== undefined ? { description } : {}),
      },
    });

    return NextResponse.json(
      { success: true, category: updated },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to update category in database." },
      { status: 500 }
    );
  }
}

// DELETE: Delete category
export async function DELETE(req: Request, { params }: RouteParams) {
  const session = await getAdminSession(req);
  if (!session || session.role !== "admin") {
    return NextResponse.json(
      { error: "Unauthorized access." },
      { status: 401, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!validateRequestOrigin(req)) {
    return NextResponse.json(
      { error: "Cross-site request forgery protection: Invalid origin." },
      { status: 403, headers: { "Cache-Control": "no-store" } }
    );
  }

  const { id } = await params;
  try {
    const existing = await prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    });

    if (!existing) {
      return NextResponse.json({ error: "Category not found." }, { status: 404 });
    }

    // Check if category has associated products
    if (existing._count.products > 0) {
      return NextResponse.json(
        {
          error: `Cannot delete category: it has ${existing._count.products} associated product(s). Please reassign or delete products first.`,
        },
        { status: 400 }
      );
    }

    await prisma.category.delete({ where: { id } });

    return NextResponse.json(
      { success: true, message: "Category deleted successfully." },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to delete category from database." },
      { status: 500 }
    );
  }
}

// Method Allowlisting: Return 405 for POST on [id] route
export async function POST(req?: Request) {
  const _ = req?.headers?.get("host");
  return NextResponse.json(
    { error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "GET, PUT, PATCH, DELETE", "Cache-Control": "no-store" } }
  );
}
