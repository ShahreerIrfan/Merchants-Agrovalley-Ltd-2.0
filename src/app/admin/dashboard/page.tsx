import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getCategoriesAction } from "../categories/actions";
import { getProductsAction } from "../products/actions";
import { getManagementMembersAction } from "../management/actions";

export const metadata = {
  title: "Admin Dashboard | Merchants AgroValley",
  description: "Administrative console for managing products, services, and dynamic assets.",
};

async function DashboardContent() {
  // Strictly verified on the server side: redirects to /admin/login if missing or invalid token
  const session = await requireAdmin();
  const [categoriesRes, productsRes, managementRes] = await Promise.all([
    getCategoriesAction(),
    getProductsAction(),
    getManagementMembersAction(),
  ]);

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialCategories={categoriesRes.categories || []}
      initialProducts={productsRes.products || []}
      initialManagementMembers={managementRes.members || []}
    />
  );
}

export default function AdminDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Verifying administrator session...</p>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
