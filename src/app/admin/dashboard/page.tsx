import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import DashboardHomeView from "@/components/admin/DashboardHomeView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getCategoriesAction } from "../products-services/categories/actions";
import { getProductsAction } from "../products/actions";
import { getManagementMembersAction } from "../management/actions";

export const metadata = {
  title: "Admin Dashboard | Merchants AgroValley",
  description: "Administrative console for managing products, services, and dynamic assets.",
};

async function DashboardContent() {
  await requireAdmin();
  const [categoriesRes, productsRes, managementRes] = await Promise.all([
    getCategoriesAction(),
    getProductsAction(),
    getManagementMembersAction(),
  ]);

  return (
    <DashboardHomeView
      initialCategories={categoriesRes.categories || []}
      initialProducts={productsRes.products || []}
      initialManagementMembers={managementRes.members || []}
    />
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}
