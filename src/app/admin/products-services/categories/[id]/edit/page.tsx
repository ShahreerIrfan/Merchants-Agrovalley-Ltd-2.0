import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import CategoryFormView from "@/components/admin/CategoryFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";

interface EditCategoryPageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Edit Category | Merchants AgroValley Admin",
  description: "Update commodity category details.",
};

async function EditCategoryContent({ params }: EditCategoryPageProps) {
  const { id } = await params;
  await requireAdmin();

  const category = await prisma.category.findUnique({
    where: { id },
    include: { _count: { select: { products: true } } },
  });

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
    <CategoryFormView
      mode="edit"
      initialData={categoryData}
    />
  );
}

export default function EditCategoryPage({ params }: EditCategoryPageProps) {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <EditCategoryContent params={params} />
    </Suspense>
  );
}
