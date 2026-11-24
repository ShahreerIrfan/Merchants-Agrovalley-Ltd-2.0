import { Suspense } from "react";
import { requireUser } from "@/lib/auth/session";
import UserDashboardView from "@/components/dashboard/UserDashboardView";

export const metadata = {
  title: "Member Dashboard | Merchants AgroValley",
  description: "Customer and partner portal for Merchants AgroValley Ltd.",
};

async function UserDashboardContent() {
  const session = await requireUser();
  return <UserDashboardView user={session} />;
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F4F7F4] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#013D26] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-gray-600 font-medium">Loading your dashboard...</p>
          </div>
        </div>
      }
    >
      <UserDashboardContent />
    </Suspense>
  );
}
