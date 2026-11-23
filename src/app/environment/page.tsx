import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EnvironmentHero from "@/components/environment/EnvironmentHero";
import RenewableEnergySection from "@/components/environment/RenewableEnergySection";
import CircularEconomySection from "@/components/environment/CircularEconomySection";

export const metadata: Metadata = {
  title: "Environment — Sustainable Agriculture & Ecological Stewardship | Merchants Agro Valley",
  description:
    "Merchants AgroValley Ltd is committed to developing an environmentally responsible, sustainable and resource-efficient agro-industrial ecosystem.",
};

export default function EnvironmentPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Environment Hero */}
      <EnvironmentHero />

      {/* Section 02: Renewable Energy & Energy Efficiency */}
      <RenewableEnergySection />

      {/* Section 03: Circular Economy & Resource Recovery */}
      <CircularEconomySection />
    </main>
  );
}
