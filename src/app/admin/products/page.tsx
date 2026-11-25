import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getProductsAction } from "./actions";

export const metadata = {
  title: "All Products & Services | Merchants AgroValley Admin",
  description:
    "Manage all commodities, products and services across Merchants AgroValley divisions.",
};

async function ProductsContent() {
  const session = await requireAdmin();
  const res = await getProductsAction();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="products-all"
      initialProducts={res.products || []}
    />
  );
}

export default function AdminProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Products & Services...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
