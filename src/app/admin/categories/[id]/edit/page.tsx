import { redirect } from "next/navigation";

interface EditCategoryRedirectProps {
  params: Promise<{ id: string }>;
}

export default async function EditCategoryRedirect({ params }: EditCategoryRedirectProps) {
  const { id } = await params;
  redirect(`/admin/products-services/categories/${id}/edit`);
}
