"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Clean vector icons matching the reference image exactly
function RenewableEnergyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Sun rays & semicircle */}
      <circle cx="18" cy="11" r="4.5" stroke="#C99B36" strokeWidth="2" fill="none" />
      <path d="M18 3.5V1M11 6.5L9 4.5M25 6.5L27 4.5M6 13H3.5M32.5 13H30" stroke="#C99B36" strokeWidth="2" strokeLinecap="round" />
      {/* Solar Panel */}
      <path d="M6 31l3.5-12h17L30 31H6z" stroke="#013D26" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 19v12M11.5 25h13" stroke="#013D26" strokeWidth="1.8" />
    </svg>
  );
}

function WaterStewardshipIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Water Droplet */}
      <path
        d="M18 5C18 5 11 14 11 18.5a7 7 0 0 0 14 0C25 14 18 5 18 5z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Ripples underneath */}
      <path
        d="M6 29c3.5-2 6.5-2 10 0s6.5 2 10 0 3.5-2 4-2"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M9 33c3-1.5 5.5-1.5 9 0s6 1.5 9 0"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WasteReductionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Recycle Triangular Arrows */}
      <path
        d="M15 7l3-4 3 4M18 3v12M9.5 24.5l-4-3 1.5-4.5M5.5 21.5l11-4M26.5 24.5l4-3-1.5-4.5M30.5 21.5l-11-4"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 32h10l-2-3H15l-2 3z"
        fill="#013D26"
      />
    </svg>
  );
}

function CircularRecoveryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Circular Arrows */}
      <circle cx="18" cy="18" r="14" stroke="#C99B36" strokeWidth="2" strokeDasharray="6 3" />
      <path d="M30 18l-3 3-3-3" stroke="#C99B36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Leaf Inside */}
      <path
        d="M12 24c0-6.5 4.5-11 11-11 0 6.5-4.5 11-11 11z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path d="M12 24c4-3 7-7 11-11" stroke="#013D26" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TitleLeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className || "w-8 h-8 sm:w-10 sm:h-10"}
      aria-hidden="true"
    >
      <path
        d="M26 6C15 6 8 13 8 24c10 0 17-7 18-18z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path d="M8 24C14 18 20 12 26 6" stroke="#013D26" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M13 25c-3 0-5 2-5 5 3 0 5-2 5-5z"
        fill="#75B82A"
        opacity="0.8"
      />
    </svg>
  );
}

interface FeatureItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const ENVIRONMENTAL_FEATURES: FeatureItem[] = [
  {
    id: "renewable-energy",
    title: "Renewable\nEnergy",
    icon: <RenewableEnergyIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "water-stewardship",
    title: "Water\nStewardship",
    icon: <WaterStewardshipIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "waste-reduction",
    title: "Waste\nReduction",
    icon: <WasteReductionIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "circular-resource-recovery",
    title: "Circular\nResource Recovery",
    icon: <CircularRecoveryIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function EnvironmentHero() {
  return (
    <section
      id="environment-hero"
      aria-label="Our Environmental Commitment"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Gradient Lighting */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(201, 155, 54, 0.04) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(117, 184, 42, 0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: INTRODUCTION & FEATURES (Span 6 on LG/XL) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Section Label with Gold Divider */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="text-[13px] sm:text-[14px] font-bold text-[#013D26] tracking-[0.16em] uppercase font-sans">
                ENVIRONMENT
              </span>
              <span className="w-12 h-[2px] bg-[#C99B36] rounded-full" />
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-[#013D26] leading-[1.14] tracking-tight mb-5 sm:mb-6">
              Our Environmental Commitment{" "}
              <span className="inline-block align-middle ml-1 -mt-1.5">
                <TitleLeafIcon className="w-7 h-7 sm:w-9 sm:h-9 xl:w-10 xl:h-10 inline" />
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-[#3A5446] text-base sm:text-[17px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We advance sustainable agriculture, harness renewable energy,
              practice responsible resource management, and uphold strong
              environmental stewardship across our operations, creating
              long-term value for people, communities, and the planet.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-9 sm:mb-11">
              <Link
                href="#initiatives"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#013D26] hover:bg-[#075B38] text-white text-[14px] sm:text-[15px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore Our Initiatives</span>
                <ArrowRight className="w-4 h-4 text-[#C99B36] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#overview"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#FAF6EC] hover:bg-white text-[#013D26] border border-[#C99B36]/60 text-[14px] sm:text-[15px] font-semibold transition-all duration-300 shadow-2xs hover:shadow-sm hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Sustainability Overview</span>
                <ArrowRight className="w-4 h-4 text-[#013D26] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Four Environmental Features in a 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-xl">
              {ENVIRONMENTAL_FEATURES.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#E5EBE6] p-4 sm:p-4.5 flex items-center shadow-[0_4px_16px_rgba(1,61,38,0.04)] hover:shadow-[0_8px_24px_rgba(1,61,38,0.08)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Feature Icon */}
                  <div className="shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Gold Vertical Separator */}
                  <div
                    className="w-[1.5px] h-8 bg-[#C99B36]/60 mx-3.5 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Feature Title */}
                  <span className="font-sans font-bold text-[#013D26] text-[14px] sm:text-[15px] leading-snug whitespace-pre-line">
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HERO PHOTOGRAPH OF SUSTAINABLE AGRO FACILITY (Span 6 on LG/XL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full aspect-[16/11.5] rounded-3xl sm:rounded-[32px] overflow-hidden shadow-[0_16px_44px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/environment/sustainable-facility-hd.webp"
                alt="Merchants Agro Valley sustainable agro-industrial facility in golden-hour sunlight with solar panels, grain silos, and lush crop field"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              
              {/* Subtle Natural Daylight Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
