import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getCategoriesAction } from "../../categories/actions";

export const metadata = {
  title: "Categories & Divisions | Merchants AgroValley Admin",
  description: "Manage commodity groups, divisions, and product categories.",
};

async function CategoriesContent() {
  const session = await requireAdmin();
  const res = await getCategoriesAction();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="categories"
      initialCategories={res.categories || []}
    />
  );
}

export default function CategoriesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Categories...</p>
          </div>
        </div>
      }
    >
      <CategoriesContent />
    </Suspense>
  );
}
