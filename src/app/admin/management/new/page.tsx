import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";

export const metadata = {
  title: "Add New Management Member | Merchants AgroValley Admin",
  description: "Register a new executive board member, director, or corporate advisor.",
};

async function NewManagementMemberContent() {
  const session = await requireAdmin();

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="management-new"
    />
  );
}

export default function NewManagementMemberPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Management Member Form...</p>
          </div>
        </div>
      }
    >
      <NewManagementMemberContent />
    </Suspense>
  );
}
