import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
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
  const session = await requireAdmin();

  const product = await prisma.product.findUnique({
    where: { id },
  });

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

  const categoriesRes = await getCategoriesAction();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="products-edit"
      initialCategories={categoriesRes.categories || []}
      editProductData={productData}
    />
  );
}

export default function EditProductPage({ params }: EditProductPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Commodity Details...</p>
          </div>
        </div>
      }
    >
      <EditProductContent params={params} />
    </Suspense>
  );
}
