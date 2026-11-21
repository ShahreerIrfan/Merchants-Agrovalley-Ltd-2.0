"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";
import CompanyIntroduction from "./CompanyIntroduction";
import GovernanceCards from "./GovernanceCards";
import StrategicEvolution from "./StrategicEvolution";

export default function CompanyProfileSection() {
  const { decor } = COMPANY_PROFILE_DATA;

  return (
    <section
      id="corporate-profile"
      className="relative w-full bg-white overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-0"
      aria-label="Company Profile and Governance"
    >
      {/* Top-Right Corner Leaf Accent Decoration (Behind text, no overlap) */}
      <div
        className="absolute top-0 right-0 pointer-events-none w-48 sm:w-64 lg:w-80 select-none z-0 opacity-75"
        aria-hidden="true"
      >
        <Image
          src={decor.leafAccent}
          alt=""
          width={320}
          height={270}
          priority={false}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Centered Content Container (Max width ~1500px) */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* 1. Top Introduction Area */}
        <CompanyIntroduction />

        {/* 2. Governance Cards (3 equal width cards) */}
        <GovernanceCards />

        {/* 3. Strategic Evolution & Capability Highlights */}
        <StrategicEvolution />
      </div>

      {/* Bottom Organic Wave Decoration (Full-width transition) */}
      <div
        className="relative w-full pointer-events-none select-none z-0 mt-14 sm:mt-18 lg:mt-24 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <Image
          src={decor.bottomWave}
          alt=""
          width={1600}
          height={180}
          className="w-full h-auto min-h-[60px] max-h-[140px] object-cover"
        />
      </div>
    </section>
  );
}
