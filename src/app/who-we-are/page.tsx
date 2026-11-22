import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhoWeAreHero from "@/components/who-we-are/WhoWeAreHero";

export const metadata: Metadata = {
  title: "Who We Are — A Leading Agro-Industrial Enterprise | Merchants Agro Valley",
  description:
    "Merchants Agro Valley is a Bangladesh-based agro-industrial enterprise delivering integrated farm-to-market solutions through agriculture, livestock, food processing, renewable energy and international trade.",
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Who We Are Hero / First Section */}
      <WhoWeAreHero />
    </main>
  );
}
