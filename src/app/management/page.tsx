import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ManagementHero from "@/components/management/ManagementHero";
import LeadershipSection from "@/components/management/LeadershipSection";

export const metadata: Metadata = {
  title: "Our Management — Leadership for a Sustainable Agro Future | Merchants Agro Valley",
  description:
    "A dedicated leadership team driving sustainable farming, modern processing, renewable energy and global market growth.",
};

export default function ManagementPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Management Hero / First Section */}
      <ManagementHero />

      {/* Our Leadership Team Section */}
      <LeadershipSection />
    </main>
  );
}
