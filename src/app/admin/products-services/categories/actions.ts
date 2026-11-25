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

// 1. READ: Fetch all categories
export async function getCategoriesAction(): Promise<{
  success: boolean;
  categories: CategoryItem[];
  error?: string;
}> {
  try {
    await requireAdmin();

    const records = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: { select: { products: true } },
      },
    });

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
    if (name.length < 2) {
      return { success: false, error: "Category name must be at least 2 characters." };
    }

    const slug =
      data.slug?.trim() ||
      `/${name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`;

    const existing = await prisma.category.findFirst({
      where: {
        OR: [{ name }, { slug }],
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

    revalidatePath("/admin/products-services/categories");
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
    return { success: false, error: "Failed to create category in database." };
  }
}

// 3. UPDATE: Modify existing category
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
    if (name && name.length < 2) {
      return { success: false, error: "Category name must be at least 2 characters." };
    }

    if (name && name !== existing.name) {
      const dup = await prisma.category.findUnique({ where: { name } });
      if (dup) {
        return { success: false, error: "A category with this name already exists." };
      }
    }

    const slug = data.slug?.trim();
    if (slug && slug !== existing.slug) {
      const dup = await prisma.category.findUnique({ where: { slug } });
      if (dup) {
        return { success: false, error: "A category with this slug already exists." };
      }
    }

    const updated = await prisma.category.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(slug ? { slug } : {}),
        ...(data.description !== undefined ? { description: data.description.trim() || null } : {}),
      },
      include: {
        _count: { select: { products: true } },
      },
    });

    revalidatePath("/admin/products-services/categories");
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
    return { success: false, error: "Failed to update category in database." };
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

    // Unlink any products first
    await prisma.product.updateMany({
      where: { categoryId: id },
      data: { categoryId: null },
    });

    await prisma.category.delete({ where: { id } });

    revalidatePath("/admin/products-services/categories");
    return { success: true };
  } catch {
    return { success: false, error: "Failed to delete category from database." };
  }
}
