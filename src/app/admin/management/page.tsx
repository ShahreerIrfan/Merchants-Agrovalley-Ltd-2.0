import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";
import { getManagementMembersAction } from "./actions";

export const metadata = {
  title: "Company Management People | Merchants AgroValley Admin",
  description: "Manage executive board, directors, and corporate governance hierarchy.",
};

async function ManagementContent() {
  const session = await requireAdmin();
  const res = await getManagementMembersAction();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="management"
      initialManagementMembers={res.members || []}
    />
  );
}

export default function ManagementPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Company Management People...</p>
          </div>
        </div>
      }
    >
      <ManagementContent />
    </Suspense>
  );
}
