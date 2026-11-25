"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";
import { ADMIN_PRODUCTS_DATA } from "@/data/adminProducts";

export interface LifecycleImagePayload {
  stepNumber: number;
  title: string;
  imageUrl?: string;
  imageStorageKey?: string;
}

export interface ProductItem {
  id: string;
  commodityName: string;
  slug: string;
  division: string | null;
  cardBadgeText: string | null;
  categoryId: string | null;
  description: string;
  image: string | null;
  displayOrder: number;
  status: string;
  breedSpeciesVariety: string | null;
  farmingHusbandryMethod: string | null;
  processingColdChainTech: string | null;
  cutsPackagingFormats: string | null;
  certificationsStandards: string | null;
  exportLogisticsShipping: string | null;
  lifecycleImages: LifecycleImagePayload[] | null;
  createdAt: string;
  updatedAt: string;
}

// 1. READ: Fetch all products from database
export async function getProductsAction(): Promise<{
  success: boolean;
  products: ProductItem[];
  error?: string;
}> {
  try {
    await requireAdmin();

    const records = await prisma.product.findMany({
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    });

    const products: ProductItem[] = records.map((p) => ({
      id: p.id,
      commodityName: p.commodityName,
      slug: p.slug,
      division: p.division,
      cardBadgeText: p.cardBadgeText,
      categoryId: p.categoryId,
      description: p.description,
      image: p.image,
      displayOrder: p.displayOrder,
      status: p.status,
      breedSpeciesVariety: p.breedSpeciesVariety,
      farmingHusbandryMethod: p.farmingHusbandryMethod,
      processingColdChainTech: p.processingColdChainTech,
      cutsPackagingFormats: p.cutsPackagingFormats,
      certificationsStandards: p.certificationsStandards,
      exportLogisticsShipping: p.exportLogisticsShipping,
      lifecycleImages: (p.lifecycleImages as unknown as LifecycleImagePayload[]) || null,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }));

    return { success: true, products };
  } catch {
    return {
      success: false,
      products: [],
      error: "Failed to fetch products from database.",
    };
  }
}

// 2. CREATE: Register new product / service
export async function createProductAction(data: {
  commodityName: string;
  slug?: string;
  division?: string;
  cardBadgeText?: string;
  categoryId?: string;
  description: string;
  image?: string;
  displayOrder?: number;
  status?: string;
  breedSpeciesVariety?: string;
  farmingHusbandryMethod?: string;
  processingColdChainTech?: string;
  cutsPackagingFormats?: string;
  certificationsStandards?: string;
  exportLogisticsShipping?: string;
  lifecycleImages?: LifecycleImagePayload[];
}): Promise<{ success: boolean; error?: string; product?: ProductItem }> {
  try {
    await requireAdmin();

    const commodityName = data.commodityName.trim();
    if (!commodityName || commodityName.length < 2) {
      return { success: false, error: "Commodity / Service name must be at least 2 characters." };
    }

    let slug = data.slug?.trim();
    if (!slug) {
      slug = `/${commodityName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
    } else if (!slug.startsWith("/")) {
      slug = `/${slug}`;
    }

    // Check slug uniqueness
    const existing = await prisma.product.findUnique({ where: { slug } });
    if (existing) {
      // Append random suffix if conflict
      slug = `${slug}-${Math.floor(100 + Math.random() * 900)}`;
    }

    const created = await prisma.product.create({
      data: {
        commodityName,
        slug,
        division: data.division?.trim() || null,
        cardBadgeText: data.cardBadgeText?.trim() || data.division?.trim() || null,
        categoryId: data.categoryId || null,
        description: data.description.trim(),
        image: data.image?.trim() || "/assets/admin/products/fresh-grocery.jpg",
        displayOrder: Number(data.displayOrder) || 0,
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

    revalidatePath("/admin/products");

    return {
      success: true,
      product: {
        id: created.id,
        commodityName: created.commodityName,
        slug: created.slug,
        division: created.division,
        cardBadgeText: created.cardBadgeText,
        categoryId: created.categoryId,
        description: created.description,
        image: created.image,
        displayOrder: created.displayOrder,
        status: created.status,
        breedSpeciesVariety: created.breedSpeciesVariety,
        farmingHusbandryMethod: created.farmingHusbandryMethod,
        processingColdChainTech: created.processingColdChainTech,
        cutsPackagingFormats: created.cutsPackagingFormats,
        certificationsStandards: created.certificationsStandards,
        exportLogisticsShipping: created.exportLogisticsShipping,
        lifecycleImages: (created.lifecycleImages as unknown as LifecycleImagePayload[]) || null,
        createdAt: created.createdAt.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
      },
    };
  } catch {
    return { success: false, error: "Database error creating product." };
  }
}

// 3. UPDATE: Modify existing product
export async function updateProductAction(
  id: string,
  data: {
    commodityName?: string;
    slug?: string;
    division?: string;
    cardBadgeText?: string;
    categoryId?: string;
    description?: string;
    image?: string;
    displayOrder?: number;
    status?: string;
    breedSpeciesVariety?: string;
    farmingHusbandryMethod?: string;
    processingColdChainTech?: string;
    cutsPackagingFormats?: string;
    certificationsStandards?: string;
    exportLogisticsShipping?: string;
    lifecycleImages?: LifecycleImagePayload[];
  }
): Promise<{ success: boolean; error?: string; product?: ProductItem }> {
  try {
    await requireAdmin();

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return { success: false, error: "Product not found." };
    }

    const commodityName = data.commodityName?.trim();
    let slug = data.slug?.trim();

    if (commodityName && !slug && commodityName !== existing.commodityName) {
      slug = `/${commodityName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
    }

    if (slug) {
      if (!slug.startsWith("/")) slug = `/${slug}`;
      if (slug !== existing.slug) {
        const dup = await prisma.product.findUnique({ where: { slug } });
        if (dup && dup.id !== id) {
          slug = `${slug}-${Math.floor(100 + Math.random() * 900)}`;
        }
      }
    }

    const updated = await prisma.product.update({
      where: { id },
      data: {
        ...(commodityName ? { commodityName } : {}),
        ...(slug ? { slug } : {}),
        ...(data.division !== undefined ? { division: data.division?.trim() || null } : {}),
        ...(data.cardBadgeText !== undefined ? { cardBadgeText: data.cardBadgeText?.trim() || null } : {}),
        ...(data.categoryId !== undefined ? { categoryId: data.categoryId || null } : {}),
        ...(data.description !== undefined ? { description: data.description.trim() } : {}),
        ...(data.image !== undefined ? { image: data.image?.trim() || null } : {}),
        ...(data.displayOrder !== undefined ? { displayOrder: Number(data.displayOrder) || 0 } : {}),
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

    revalidatePath("/admin/products");

    return {
      success: true,
      product: {
        id: updated.id,
        commodityName: updated.commodityName,
        slug: updated.slug,
        division: updated.division,
        cardBadgeText: updated.cardBadgeText,
        categoryId: updated.categoryId,
        description: updated.description,
        image: updated.image,
        displayOrder: updated.displayOrder,
        status: updated.status,
        breedSpeciesVariety: updated.breedSpeciesVariety,
        farmingHusbandryMethod: updated.farmingHusbandryMethod,
        processingColdChainTech: updated.processingColdChainTech,
        cutsPackagingFormats: updated.cutsPackagingFormats,
        certificationsStandards: updated.certificationsStandards,
        exportLogisticsShipping: updated.exportLogisticsShipping,
        lifecycleImages: (updated.lifecycleImages as unknown as LifecycleImagePayload[]) || null,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      },
    };
  } catch {
    return { success: false, error: "Database error updating product." };
  }
}

// 4. DELETE: Remove product from database
export async function deleteProductAction(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    await requireAdmin();

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      return { success: false, error: "Product not found." };
    }

    await prisma.product.delete({ where: { id } });

    revalidatePath("/admin/products");

    return { success: true };
  } catch {
    return { success: false, error: "Database error deleting product." };
  }
}
