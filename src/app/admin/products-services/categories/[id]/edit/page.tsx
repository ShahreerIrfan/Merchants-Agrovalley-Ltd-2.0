import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getCategoriesAction } from "../../actions";

interface EditCategoryPageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Edit Category | Merchants AgroValley Admin",
  description: "Update commodity category details.",
};

async function EditCategoryContent({ params }: EditCategoryPageProps) {
  const { id } = await params;
  const session = await requireAdmin();

  const [category, categoriesRes] = await Promise.all([
    prisma.category.findUnique({
      where: { id },
      include: { _count: { select: { products: true } } },
    }),
    getCategoriesAction(),
  ]);

  if (!category) {
    notFound();
  }

  const categoryData = {
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description,
    createdAt: category.createdAt.toISOString(),
    updatedAt: category.updatedAt.toISOString(),
    productsCount: category._count.products,
  };

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="categories-edit"
      initialCategories={categoriesRes.categories || []}
      editCategoryData={categoryData}
    />
  );
}

export default function EditCategoryPage({ params }: EditCategoryPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Category Details...</p>
          </div>
        </div>
      }
    >
      <EditCategoryContent params={params} />
    </Suspense>
  );
}
