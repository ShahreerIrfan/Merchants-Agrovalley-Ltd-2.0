import React from "react";
import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Admin Portal | Merchants AgroValley",
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F7F4] text-gray-900 antialiased selection:bg-[#68A617] selection:text-white">
      <AdminShell>
        {children}
      </AdminShell>
    </div>
  );
}
