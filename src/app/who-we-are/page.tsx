import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhoWeAreHero from "@/components/who-we-are/WhoWeAreHero";
import OurStorySection from "@/components/who-we-are/OurStorySection";
import AgroEcosystemSection from "@/components/who-we-are/AgroEcosystemSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Who We Are — A Leading Agro-Industrial Enterprise | Merchants Agro Valley",
  description:
    "Merchants Agro Valley is a Bangladesh-based agro-industrial enterprise delivering integrated farm-to-market solutions through agriculture, livestock, food processing, renewable energy and international trade.",
};

export default function WhoWeArePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Who We Are Hero / First Section */}
      <WhoWeAreHero />

      {/* Section 02: Our Story & Purpose */}
      <OurStorySection />

      {/* Section 03: Our Integrated Agro Ecosystem */}
      <AgroEcosystemSection />

      {/* Website Footer */}
      <Footer />
    </main>
  );
}
