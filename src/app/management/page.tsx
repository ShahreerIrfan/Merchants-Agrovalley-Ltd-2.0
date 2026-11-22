import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ManagementHero from "@/components/management/ManagementHero";

export const metadata: Metadata = {
  title: "Our Management — Leadership for a Sustainable Agro Future | Merchants Agro Valley",
  description:
    "A dedicated leadership team driving sustainable farming, modern processing, renewable energy and global market growth.",
};

export default function ManagementPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Management Hero / First Section */}
      <ManagementHero />
    </main>
  );
}
