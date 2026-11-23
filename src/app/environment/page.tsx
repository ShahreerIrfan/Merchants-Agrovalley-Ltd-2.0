import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EnvironmentHero from "@/components/environment/EnvironmentHero";

export const metadata: Metadata = {
  title: "Environment — Sustainable Agriculture & Ecological Stewardship | Merchants Agro Valley",
  description:
    "We advance sustainable agriculture, harness renewable energy, practice responsible resource management, and uphold strong environmental stewardship across our operations.",
};

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Environment Hero */}
      <EnvironmentHero />
    </main>
  );
}
