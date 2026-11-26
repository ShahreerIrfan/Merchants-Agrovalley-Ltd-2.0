import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AllProductsView from "@/components/admin/AllProductsView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getProductsAction } from "./actions";
import { getCategoriesAction } from "@/app/admin/products-services/categories/actions";

export const metadata = {
  title: "All Products & Services | Merchants AgroValley Admin",
  description:
    "Manage all commodities, products and services across Merchants AgroValley divisions.",
};

async function ProductsContent() {
  await requireAdmin();
  const [res, categoriesRes] = await Promise.all([
    getProductsAction(),
    getCategoriesAction(),
  ]);

  return (
    <AllProductsView
      initialProducts={res.products || []}
      initialCategories={categoriesRes.categories || []}
    />
  );
}

export default function AdminProductsPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <ProductsContent />
    </Suspense>
  );
}
