import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ManagementHero from "@/components/management/ManagementHero";

export const metadata: Metadata = {
  title: "Our Management — Leadership & Governance | Merchants Agro Valley",
  description:
    "Leadership that drives an integrated agro ecosystem. A dedicated leadership team steering sustainable farming, modern processing, renewable energy and global market growth.",
};

export default function ManagementPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#013D26] overflow-x-hidden">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Hero Section: Our Management */}
      <ManagementHero />
    </main>
  );
}
