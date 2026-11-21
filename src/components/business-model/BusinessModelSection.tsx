"use client";

import React from "react";
import { BUSINESS_MODEL_DATA } from "@/data/businessModel";
import BusinessModelHeader from "./BusinessModelHeader";
import CapabilityCard from "./CapabilityCard";
import EcosystemDiagram from "./EcosystemDiagram";
import ValueBand from "./ValueBand";

export default function BusinessModelSection() {
  const { leftCapabilities, rightCapabilities } = BUSINESS_MODEL_DATA;

  return (
    <section
      id="business-model"
      className="relative w-full bg-white overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-0"
      aria-label="Our Integrated Business Model"
    >
      {/* Centered Main Content Container */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-14 lg:space-y-16">
        {/* 1. Editorial Header */}
        <BusinessModelHeader />

        {/* 2. 3-Column Composition: Left Cards | Center Ecosystem Diagram | Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-2">
          {/* Left Capability Cards (3 cards) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-4 sm:gap-5 order-2 lg:order-1">
            {leftCapabilities.map((card, idx) => (
              <CapabilityCard key={card.id} card={card} index={idx} />
            ))}
          </div>

          {/* Center Ecosystem Diagram */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center order-1 lg:order-2">
            <EcosystemDiagram />
          </div>

          {/* Right Capability Cards (3 cards) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-4 sm:gap-5 order-3 lg:order-3">
            {rightCapabilities.map((card, idx) => (
              <CapabilityCard key={card.id} card={card} index={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bottom Flowing Dark-Green Value Band */}
      <ValueBand />
    </section>
  );
}
