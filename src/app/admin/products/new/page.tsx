import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getCategoriesAction } from "@/app/admin/products-services/categories/actions";
import Link from "next/link";
import { ArrowLeft, Plus, Image as ImageIcon, CheckCircle, Info } from "lucide-react";

export const metadata = {
  title: "Add New Product/Service | Merchants AgroValley Admin",
  description: "Create and register a new commodity, product or service division.",
};

async function AddProductContent() {
  const session = await requireAdmin();
  const categoriesRes = await getCategoriesAction();

  return (
    <div className="min-h-screen bg-[#F4F7F4]">
      <AdminDashboardView
        adminEmail={session.email}
        initialTab="products-add"
        initialCategories={categoriesRes.categories || []}
      />
    </div>
  );
}

export default function AddProductPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Add Product Form...</p>
          </div>
        </div>
      }
    >
      <AddProductContent />
    </Suspense>
  );
}
