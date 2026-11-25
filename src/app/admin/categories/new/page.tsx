import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";

export const metadata = {
  title: "Add New Category | Merchants AgroValley Admin",
  description: "Create a new commodity category or agro-industrial division.",
};

async function NewCategoryContent() {
  const session = await requireAdmin();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="categories-new"
    />
  );
}

export default function NewCategoryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Category Form...</p>
          </div>
        </div>
      }
    >
      <NewCategoryContent />
    </Suspense>
  );
}
