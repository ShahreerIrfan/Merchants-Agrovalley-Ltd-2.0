import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AddProductFormView from "@/components/admin/AddProductFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getCategoriesAction } from "@/app/admin/products-services/categories/actions";

export const metadata = {
  title: "Add New Product/Service | Merchants AgroValley Admin",
  description: "Create and register a new commodity, product or service division.",
};

async function AddProductContent() {
  await requireAdmin();
  const categoriesRes = await getCategoriesAction();

  return (
    <AddProductFormView
      mode="create"
      categories={categoriesRes.categories || []}
    />
  );
}

export default function AddProductPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <AddProductContent />
    </Suspense>
  );
}
