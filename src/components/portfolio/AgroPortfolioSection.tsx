"use client";

import React from "react";
import Image from "next/image";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioFeature from "./PortfolioFeature";
import CoreValues from "./CoreValues";
import VisionMission from "./VisionMission";

export default function AgroPortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18"
      aria-label="BritAsia Agro Portfolio"
    >
      {/* Top-Right Corner Leaf Accent Decoration (as in reference mockup) */}
      <div
        className="absolute top-0 right-0 pointer-events-none w-48 sm:w-64 lg:w-80 select-none z-0 opacity-80"
        aria-hidden="true"
      >
        <Image
          src="/decor/top-right-leaf-accent.svg"
          alt=""
          width={320}
          height={270}
          priority={false}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Centered Content Container with tight, balanced spacing */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-14 lg:space-y-16">
        {/* 1. Header Area */}
        <PortfolioHeader />

        {/* 2. Main Feature Row */}
        <PortfolioFeature />

        {/* 3. Core Value System */}
        <CoreValues />

        {/* 4. Vision & Mission Panels */}
        <VisionMission />
      </div>

      {/* Bottom Organic Wave Decoration */}
      <div
        className="relative w-full pointer-events-none select-none z-0 mt-12 sm:mt-16 overflow-hidden leading-none"
        aria-hidden="true"
      >
        <Image
          src="/decor/bottom-organic-wave.svg"
          alt=""
          width={1600}
          height={180}
          className="w-full h-auto min-h-[50px] max-h-[120px] object-cover"
        />
      </div>
    </section>
  );
}
