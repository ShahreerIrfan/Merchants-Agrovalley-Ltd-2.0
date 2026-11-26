import { Suspense } from "react";
import { requireAdmin } from "@/lib/auth/session";
import CategoryFormView from "@/components/admin/CategoryFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";

export const metadata = {
  title: "Add New Category | Merchants AgroValley Admin",
  description: "Create a new commodity category or agro-industrial division.",
};

async function NewCategoryContent() {
  await requireAdmin();
  return <CategoryFormView mode="create" />;
}

export default function NewCategoryPage() {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <NewCategoryContent />
    </Suspense>
  );
}
