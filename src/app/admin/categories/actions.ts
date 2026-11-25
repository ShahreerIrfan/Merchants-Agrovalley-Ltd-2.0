"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  productsCount: number;
}

// 1. READ: Fetch all categories (auto-seeds if 0)
export async function getCategoriesAction(): Promise<{
  success: boolean;
  categories: CategoryItem[];
  error?: string;
}> {
  try {
    await requireAdmin();

    let records = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { products: true } },
      },
    });

    if (records.length === 0) {
      const defaultSeeds = [
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

      for (const item of defaultSeeds) {
        await prisma.category.upsert({
          where: { name: item.name },
          update: {},
          create: item,
        });
      }

      records = await prisma.category.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          _count: { select: { products: true } },
        },
      });
    }

    const categories: CategoryItem[] = records.map((c) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      description: c.description,
      createdAt: c.createdAt.toISOString(),
      updatedAt: c.updatedAt.toISOString(),
      productsCount: c._count.products,
    }));

    return { success: true, categories };
  } catch {
    return {
      success: false,
      categories: [],
      error: "Failed to fetch categories from database.",
    };
  }
}

// 2. CREATE: Add new category
export async function createCategoryAction(data: {
  name: string;
  slug?: string;
  description?: string;
}): Promise<{ success: boolean; error?: string; category?: CategoryItem }> {
  try {
    await requireAdmin();

    const name = data.name.trim();
    if (!name || name.length < 2) {
      return { success: false, error: "Category name must be at least 2 characters." };
    }

    let slug = data.slug?.trim();
    if (!slug) {
      slug = `/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
    } else if (!slug.startsWith("/")) {
      slug = `/${slug}`;
    }

    const existing = await prisma.category.findFirst({
      where: {
        OR: [{ name: { equals: name, mode: "insensitive" } }, { slug }],
      },
    });

    if (existing) {
      return { success: false, error: "A category with this name or slug already exists." };
    }

    const created = await prisma.category.create({
      data: {
        name,
        slug,
        description: data.description?.trim() || null,
      },
    });

    revalidatePath("/admin/categories");
    return {
      success: true,
      category: {
        id: created.id,
        name: created.name,
        slug: created.slug,
        description: created.description,
        createdAt: created.createdAt.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
        productsCount: 0,
      },
    };
  } catch {
    return { success: false, error: "Database error creating category." };
  }
}

// 3. UPDATE: Edit existing category
export async function updateCategoryAction(
  id: string,
  data: {
    name?: string;
    slug?: string;
    description?: string;
  }
): Promise<{ success: boolean; error?: string; category?: CategoryItem }> {
  try {
    await requireAdmin();

    const existing = await prisma.category.findUnique({ where: { id } });
    if (!existing) {
      return { success: false, error: "Category not found." };
    }

    const name = data.name?.trim();
    let slug = data.slug?.trim();

    if (name && !slug) {
      slug = `/${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
    }

    if (name && name !== existing.name) {
      const dup = await prisma.category.findUnique({ where: { name } });
      if (dup && dup.id !== id) {
        return { success: false, error: "Another category already exists with this name." };
      }
    }

    if (slug) {
      if (!slug.startsWith("/")) slug = `/${slug}`;
      if (slug !== existing.slug) {
        const dup = await prisma.category.findUnique({ where: { slug } });
        if (dup && dup.id !== id) {
          return { success: false, error: "Another category already exists with this slug." };
        }
      }
    }

    const updated = await prisma.category.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(slug ? { slug } : {}),
        ...(data.description !== undefined ? { description: data.description?.trim() || null } : {}),
      },
      include: {
        _count: { select: { products: true } },
      },
    });

    revalidatePath("/admin/categories");
    return {
      success: true,
      category: {
        id: updated.id,
        name: updated.name,
        slug: updated.slug,
        description: updated.description,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
        productsCount: updated._count.products,
      },
    };
  } catch {
    return { success: false, error: "Database error updating category." };
  }
}

// 4. DELETE: Remove category
export async function deleteCategoryAction(
  id: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await requireAdmin();

    const existing = await prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    });

    if (!existing) {
      return { success: false, error: "Category not found." };
    }

    if (existing._count.products > 0) {
      return {
        success: false,
        error: `Cannot delete: category has ${existing._count.products} associated product(s).`,
      };
    }

    await prisma.category.delete({ where: { id } });
    revalidatePath("/admin/categories");
    return { success: true };
  } catch {
    return { success: false, error: "Database error deleting category." };
  }
}
