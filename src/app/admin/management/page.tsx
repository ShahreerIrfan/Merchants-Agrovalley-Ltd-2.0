import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import ManagementListView from "@/components/admin/ManagementListView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";
import { getManagementMembersAction } from "./actions";

export const metadata = {
  title: "Management Team | Merchants AgroValley Admin",
  description: "Configure executive management, board members, and corporate leadership.",
};

async function ManagementContent() {
  await requireAdmin();
  const res = await getManagementMembersAction();

  return (
    <ManagementListView initialMembers={res.members || []} />
  );
}

export default function AdminManagementPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <ManagementContent />
    </Suspense>
  );
}
