import { redirect } from "next/navigation";

export default function NewCategoryRedirect() {
  redirect("/admin/products-services/categories/new");
}
