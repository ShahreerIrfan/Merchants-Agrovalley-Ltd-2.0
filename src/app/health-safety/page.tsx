import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HealthSafetyWellbeingSection from "@/components/health-safety/HealthSafetyWellbeingSection";
import WorkplaceSafetySection from "@/components/health-safety/WorkplaceSafetySection";

export const metadata: Metadata = {
  title: "Health, Safety & Wellbeing | Merchants Agro Valley",
  description:
    "Merchants AgroValley Ltd places the highest priority on the health, safety and wellbeing of its employees, workers, customers, business partners, surrounding communities and animals.",
};

export default function HealthSafetyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Health, Safety & Wellbeing */}
      <HealthSafetyWellbeingSection />

      {/* Section 02: Workplace Safety & Risk Prevention */}
      <WorkplaceSafetySection />
    </main>
  );
}
