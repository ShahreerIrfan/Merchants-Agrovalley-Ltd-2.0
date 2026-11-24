import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhoWeAreHero from "@/components/who-we-are/WhoWeAreHero";
import OurStorySection from "@/components/who-we-are/OurStorySection";
import VisionMissionPhilosophySection from "@/components/who-we-are/VisionMissionPhilosophySection";
import AgroEcosystemSection from "@/components/who-we-are/AgroEcosystemSection";

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

      {/* Section 02: About Us / Our Story */}
      <OurStorySection />

      {/* Section 03: Our Vision, Mission & Core Business Philosophy */}
      <VisionMissionPhilosophySection />

      {/* Section 04: Our Integrated Agro Ecosystem */}
      <AgroEcosystemSection />
    </main>
  );
}
