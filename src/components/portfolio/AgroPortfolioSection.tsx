"use client";

import React from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioFeature from "./PortfolioFeature";
import CoreValues from "./CoreValues";
import VisionMission from "./VisionMission";

export default function AgroPortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-white overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-label="BritAsia Agro Portfolio"
    >
      {/* Centered Content Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* 1. Header Area */}
        <PortfolioHeader />

        {/* 2. Main Feature Row */}
        <PortfolioFeature />

        {/* 3. Core Value System */}
        <CoreValues />

        {/* 4. Vision & Mission Panels */}
        <VisionMission />
      </div>
    </section>
  );
}
