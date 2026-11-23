import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CommitmentToHumanRightsSection from "@/components/human-rights/CommitmentToHumanRightsSection";
import EqualOpportunitySection from "@/components/human-rights/EqualOpportunitySection";
import ZeroToleranceSection from "@/components/human-rights/ZeroToleranceSection";

export const metadata: Metadata = {
  title: "Human Rights — Ethical Responsibility & Dignity | Merchants Agro Valley",
  description:
    "Merchants AgroValley Ltd is committed to respecting, protecting and promoting human rights across all its business operations, workplaces and supply chains.",
};

export default function HumanRightsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-clip">
      {/* Sticky Header / Navbar */}
      <Navbar />

      {/* Section 01: Commitment to Human Rights */}
      <CommitmentToHumanRightsSection />

      {/* Section 02: Equal Opportunity & Non-Discrimination */}
      <EqualOpportunitySection />

      {/* Section 03: Zero Tolerance for Exploitation */}
      <ZeroToleranceSection />
    </main>
  );
}
