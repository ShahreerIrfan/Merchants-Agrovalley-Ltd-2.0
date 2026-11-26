import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import CategoriesListView from "@/components/admin/CategoriesListView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getCategoriesAction } from "./actions";

export const metadata = {
  title: "Categories & Divisions | Merchants AgroValley Admin",
  description: "Manage commodity groups, divisions, and product categories.",
};

async function CategoriesContent() {
  await requireAdmin();
  const res = await getCategoriesAction();

  return (
    <CategoriesListView initialCategories={res.categories || []} />
  );
}

export default function CategoriesPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <CategoriesContent />
    </Suspense>
  );
}
