import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import ManagementMemberFormView from "@/components/admin/ManagementMemberFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";

export const metadata = {
  title: "Add New Management Member | Merchants AgroValley Admin",
  description: "Register a new executive board member, director, or corporate advisor.",
};

async function NewManagementMemberContent() {
  await requireAdmin();
  return <ManagementMemberFormView mode="create" />;
}

export default function NewManagementMemberPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <NewManagementMemberContent />
    </Suspense>
  );
}
