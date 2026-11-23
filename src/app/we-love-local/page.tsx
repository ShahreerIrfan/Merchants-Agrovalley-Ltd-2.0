import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import LocalCommunitiesSection from "@/components/we-love-local/LocalCommunitiesSection";

export const metadata: Metadata = {
  title: "We Love Local — Community & Domestic Agriculture | Merchants Agro Valley",
  description:
    "At Merchants AgroValley Ltd, we believe that sustainable business growth begins with strong local communities. We are passionate about supporting local farmers and empowering rural entrepreneurs.",
};

export default function WeLoveLocalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Our Commitment to Local Communities */}
      <LocalCommunitiesSection />
    </main>
  );
}
