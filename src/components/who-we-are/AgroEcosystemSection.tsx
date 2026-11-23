"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Sun, Ship, Factory, Sprout } from "lucide-react";
import { motion } from "framer-motion";

// Custom polished icons with Gold + Forest Green styling
function CropsProductionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className || "w-6 h-6"}
      aria-hidden="true"
    >
      <path
        d="M16 28V14M16 14C16 9 11 5 5 5c0 6 4 11 9 11h2zm0 0c0-5 5-9 11-9 0 6-4 11-9 11h-2z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="10" r="2.2" fill="#C9A13B" />
      <path
        d="M10 28h12"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LivestockPoultryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#013D26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-6 h-6"}
      aria-hidden="true"
    >
      <path d="M25 8c-2 0-3.5.8-4.8 2C19 11.2 17.5 12 16 12s-3-.8-4.2-2C10.5 8.8 9 8 7 8c-2.5 0-4 2-4 4 0 3.2 2.5 5.8 5 6.5V25c0 .6.4 1 1 1h2.5c.6 0 1-.4 1-1v-5h7v5c0 .6.4 1 1 1H23c.6 0 1-.4 1-1v-6.5c2.5-.7 5-3.3 5-6.5 0-2-1.5-4-4-4z" />
      <circle cx="10" cy="14" r="1.3" fill="#C9A13B" stroke="none" />
      <circle cx="22" cy="14" r="1.3" fill="#C9A13B" stroke="none" />
    </svg>
  );
}

function HygienicProcessingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#013D26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-6 h-6"}
      aria-hidden="true"
    >
      <path d="M4 27h24M6 27V13l7 4V13l7 4V7h6v20" />
      <circle cx="10" cy="19" r="1" fill="#C9A13B" stroke="none" />
      <circle cx="17" cy="19" r="1" fill="#C9A13B" stroke="none" />
      <circle cx="23" cy="12" r="1" fill="#C9A13B" stroke="none" />
      <circle cx="23" cy="17" r="1" fill="#C9A13B" stroke="none" />
    </svg>
  );
}

function SolarEnergyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#013D26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-6 h-6"}
      aria-hidden="true"
    >
      <circle cx="16" cy="8" r="3.5" fill="#C9A13B" stroke="#013D26" strokeWidth="1.5" />
      <path d="M16 2v2M9.5 4.5l1.5 1.5M22.5 4.5l-1.5 1.5" />
      <path d="M5 26l3-11h16l3 11H5z" />
      <path d="M16 15v11M8 20.5h16" />
    </svg>
  );
}

function GlobalTradeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#013D26"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-6 h-6"}
      aria-hidden="true"
    >
      <path d="M3 21l3-10h20l3 10c0 1.5-1.5 3-3 3H6c-1.5 0-3-1.5-3-3z" />
      <path d="M11 11V7h10v4" />
      <path d="M14 7V4h4v3" />
      <path d="M7 21h18" stroke="#C9A13B" strokeWidth="2.2" />
      <path d="M2 27c4 1 8-1 12 0s8 1 12 0 4-1 4-1" stroke="#013D26" strokeWidth="1.8" />
    </svg>
  );
}

interface EcosystemStep {
  step: string;
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const ECOSYSTEM_STEPS: EcosystemStep[] = [
  {
    step: "01",
    id: "agricultural-production",
    title: "Agricultural Production",
    description: "Green agricultural fields and crop cultivation.",
    image: "/assets/who-we-are/ecosystem/crop-cultivation.jpg",
    icon: <CropsProductionIcon className="w-6 h-6" />,
  },
  {
    step: "02",
    id: "livestock-poultry",
    title: "Livestock & Poultry",
    description: "Healthy cattle and poultry farming.",
    image: "/assets/who-we-are/ecosystem/livestock-poultry.webp",
    icon: <LivestockPoultryIcon className="w-6 h-6" />,
  },
  {
    step: "03",
    id: "food-processing",
    title: "Food Processing",
    description: "Modern hygienic food processing facilities.",
    image: "/assets/who-we-are/ecosystem/food-processing.webp",
    icon: <HygienicProcessingIcon className="w-6 h-6" />,
  },
  {
    step: "04",
    id: "renewable-energy",
    title: "Renewable Energy",
    description: "Solar energy and sustainable industrial operations.",
    image: "/assets/who-we-are/ecosystem/renewable-energy.jpg",
    icon: <SolarEnergyIcon className="w-6 h-6" />,
  },
  {
    step: "05",
    id: "international-trade",
    title: "International Trade & Export",
    description: "Cargo vessels, shipping and global trade.",
    image: "/assets/who-we-are/ecosystem/international-trade.jpg",
    icon: <GlobalTradeIcon className="w-6 h-6" />,
  },
];

export default function AgroEcosystemSection() {
  return (
    <section
      id="our-integrated-agro-ecosystem"
      aria-label="Our Integrated Agro Ecosystem"
      className="relative w-full bg-[#FAF8F5] text-[#193B28] py-16 sm:py-20 lg:py-24 border-t border-[#C9A13B]/25 overflow-hidden selection:bg-[#C9A13B]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Backdrop Lighting */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(201, 161, 59, 0.05) 0%, transparent 45%), radial-gradient(circle at 85% 85%, rgba(1, 61, 38, 0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TOP AREA: TWO-COLUMN INTRODUCTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center mb-14 sm:mb-16 lg:mb-20">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2EC] border border-[#CDE1D4] text-[#013D26] text-xs sm:text-[13px] font-semibold tracking-wider uppercase mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C9A13B]" />
              <Leaf className="w-3.5 h-3.5 text-[#013D26]" />
              <span>OUR INTEGRATED AGRO ECOSYSTEM</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[#013D26] text-3xl xs:text-4xl sm:text-4xl md:text-[44px] lg:text-[46px] xl:text-[50px] font-bold tracking-tight leading-[1.16] mb-5 sm:mb-6">
              A Connected Value Chain from Farm to Global Market
            </h2>

            {/* Short Description */}
            <p className="text-[#335242] text-base sm:text-lg md:text-[19px] leading-relaxed max-w-2xl font-normal">
              An integrated agro-industrial ecosystem that brings together farming,
              feed, livestock, processing and international trade to deliver
              safe, traceable and high-quality food.
            </p>

            {/* Subtle Gold Accent Separator Line */}
            <div className="mt-6 flex items-center gap-2">
              <span className="w-12 h-[2.5px] bg-[#C9A13B] rounded-full" />
              <span className="w-2 h-[2.5px] bg-[#013D26] rounded-full" />
              <span className="w-1.5 h-[1.5px] bg-[#C9A13B] rounded-full" />
            </div>
          </motion.div>

          {/* RIGHT: FEATURED AGRO-INDUSTRIAL FACILITY PHOTOGRAPH */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(1,61,38,0.12)] border border-[#E2EBE5] bg-white group">
              <Image
                src="/assets/who-we-are/story/complex-hd.webp"
                alt="Aerial view of Merchants Agro Valley modern agro-industrial facility surrounded by lush green landscapes"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-[13px]">
                <span className="font-semibold tracking-wide drop-shadow-md">
                  Central Agro-Industrial Complex
                </span>
                <span className="bg-[#013D26]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 font-medium text-[11px] text-[#E7C978]">
                  Fully Integrated
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM AREA: FIVE INTERCONNECTED BUSINESS PROCESS CARDS */}
        <div className="relative">
          
          {/* Desktop Connecting Line behind cards */}
          <div
            className="hidden xl:block absolute top-[90px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#C9A13B]/40 to-transparent pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3.5 xl:gap-4 relative z-10">
            {ECOSYSTEM_STEPS.map((step, idx) => {
              const isLast = idx === ECOSYSTEM_STEPS.length - 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col bg-white rounded-2xl border border-[#E1ECE4] shadow-[0_4px_16px_rgba(1,61,38,0.05)] hover:shadow-[0_14px_32px_rgba(1,61,38,0.12)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Step Thumbnail Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#F0F5F1]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-2.5 left-2.5 bg-[#013D26]/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-[#C9A13B]/40 text-[#E7C978] text-[11px] font-bold tracking-wider">
                      {step.step}
                    </div>

                    {/* Subtle Category Icon in Header */}
                    <div className="absolute bottom-2 right-2.5 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-md shadow-xs flex items-center justify-center p-1.5 border border-[#E1ECE4]">
                      {step.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      <h3 className="font-serif text-[#013D26] text-[17px] sm:text-[18px] font-bold leading-snug tracking-tight mb-2 group-hover:text-[#006B3C] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#4A6B5B] text-[13px] sm:text-[13.5px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting Indicator / Flow indicator */}
                    <div className="mt-4 pt-3 border-t border-[#F0F5F1] flex items-center justify-between text-xs text-[#013D26] font-medium">
                      <span className="text-[11px] text-[#6E8F7F] uppercase tracking-wider font-semibold">
                        Stage {step.step}
                      </span>
                      <div className="flex items-center gap-1 text-[#C9A13B] group-hover:text-[#013D26] group-hover:translate-x-1 transition-all">
                        <span className="text-[11px] font-semibold">Flow</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Desktop Step Arrow Connector between cards (except last card) */}
                  {!isLast && (
                    <div
                      className="hidden lg:flex xl:flex absolute -right-2.5 top-[38%] -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-[#FAF8F5] border border-[#C9A13B] shadow-xs items-center justify-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-3 h-3 text-[#C9A13B]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
