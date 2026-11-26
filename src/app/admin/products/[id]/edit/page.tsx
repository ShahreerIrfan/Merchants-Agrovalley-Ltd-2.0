import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import AddProductFormView from "@/components/admin/AddProductFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getCategoriesAction } from "@/app/admin/products-services/categories/actions";
import { LifecycleImagePayload } from "../../actions";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Edit Product/Service | Merchants AgroValley Admin",
  description: "Modify commodity specifications, division, lifecycle and publishing.",
};

async function EditProductContent({ params }: EditProductPageProps) {
  const { id } = await params;
  await requireAdmin();

  const [product, categoriesRes] = await Promise.all([
    prisma.product.findUnique({
      where: { id },
    }),
    getCategoriesAction(),
  ]);

  if (!product) {
    notFound();
  }

  const productData = {
    id: product.id,
    commodityName: product.commodityName,
    slug: product.slug,
    division: product.division,
    cardBadgeText: product.cardBadgeText,
    categoryId: product.categoryId,
    description: product.description,
    image: product.image,
    displayOrder: product.displayOrder,
    status: product.status,
    breedSpeciesVariety: product.breedSpeciesVariety,
    farmingHusbandryMethod: product.farmingHusbandryMethod,
    processingColdChainTech: product.processingColdChainTech,
    cutsPackagingFormats: product.cutsPackagingFormats,
    certificationsStandards: product.certificationsStandards,
    exportLogisticsShipping: product.exportLogisticsShipping,
    lifecycleImages: (product.lifecycleImages as unknown as LifecycleImagePayload[]) || null,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  };

  return (
    <AddProductFormView
      mode="edit"
      initialData={productData}
      categories={categoriesRes.categories || []}
    />
  );
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <EditProductContent params={params} />
    </Suspense>
  );
}
