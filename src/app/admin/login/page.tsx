import { redirect } from "next/navigation";

export default function AdminLoginPage() {
  // Seamlessly redirect all logins to the unified /login portal
  redirect("/login");
}
