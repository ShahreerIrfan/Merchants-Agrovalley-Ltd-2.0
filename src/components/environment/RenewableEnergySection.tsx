"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom vector icons precisely matching the reference
function SolarPanelIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      <circle cx="18" cy="8" r="3.5" stroke="#75B82A" strokeWidth="2" fill="none" />
      <path d="M18 1.5V3M12.5 4.5l1.2 1.2M23.5 4.5l-1.2 1.2M8 9H6.5M29.5 9H28" stroke="#75B82A" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 29l3.5-14h19L31 29H5z" stroke="#75B82A" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M18 15v14M10.5 22h15M7.5 29l-1.5 4M28.5 29l1.5 4" stroke="#75B82A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CogenerationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Factory Profile */}
      <path
        d="M4 31h28M6 31V17l7 4V17l7 4V10h8v21"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tall Chimney Stacks with Steam */}
      <path d="M24 10V5M27 10V3" stroke="#75B82A" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 2.5c2-1 4-1 6 0s4 1 6 0" stroke="#75B82A" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <circle cx="10" cy="25" r="1.5" fill="#75B82A" />
      <circle cx="16" cy="25" r="1.5" fill="#75B82A" />
    </svg>
  );
}

function LeafEfficiencyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      <path
        d="M28 8C17 8 10 15 10 26c11 0 18-7 18-18z"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M10 26C16 20 22 14 28 8" stroke="#75B82A" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M10 26c-3 0-5 2-5 5 3 0 5-2 5-5z"
        stroke="#75B82A"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function LowerEmissionsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Cloud Shape */}
      <path
        d="M9 22a6 6 0 0 1-1-11.9A8 8 0 0 1 23 8a7 7 0 0 1 5 6.9A5 5 0 0 1 26 22H9z"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* CO2 Text inside cloud */}
      <text
        x="12"
        y="16.5"
        fill="#75B82A"
        fontSize="8"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        CO₂
      </text>
      {/* Downward Arrow */}
      <path
        d="M18 20v11M14.5 28l3.5 3.5 3.5-3.5"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface InitiativeCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const INITIATIVE_CARDS: InitiativeCard[] = [
  {
    id: "solar-energy",
    title: "Solar Energy",
    description: "Generate clean, renewable electricity for our operations.",
    icon: <SolarPanelIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "cogeneration",
    title: "Cogeneration",
    description: "12 MW power and 78 TPH steam for efficient, low-emission operations.",
    icon: <CogenerationIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "energy-efficiency",
    title: "Energy Efficiency",
    description: "Optimize energy use across processing and utilities.",
    icon: <LeafEfficiencyIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "lower-emissions",
    title: "Lower Emissions",
    description: "Reduce our carbon footprint through cleaner energy and smart operations.",
    icon: <LowerEmissionsIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
];

export default function RenewableEnergySection() {
  return (
    <section
      id="renewable-energy"
      aria-label="Renewable Energy & Energy Efficiency"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] py-16 sm:py-20 lg:py-24 border-t border-[#E5EBE6] overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Backdrop Lighting */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(117, 184, 42, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(201, 155, 54, 0.04) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN DESKTOP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: HEADINGS, DESCRIPTION & 2x2 FEATURE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Eyebrow Label with Gold Indicator */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[2px] bg-[#C99B36] rounded-full" />
              <span className="text-[13px] sm:text-[14px] font-bold text-[#013D26] tracking-[0.16em] uppercase font-sans">
                OUR ENVIRONMENTAL INITIATIVES
              </span>
            </div>

            {/* Main Heading: Line 1 in Dark Green, Line 2 in Vibrant Green */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold leading-[1.14] tracking-tight mb-5 sm:mb-6">
              <span className="text-[#013D26] block">Renewable Energy &</span>
              <span className="text-[#75B82A] block mt-0.5">Energy Efficiency</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-[#3A5446] text-base sm:text-[17px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-10">
              We invest in clean and efficient energy solutions, including solar
              power and cogeneration, to reduce emissions, lower energy intensity
              and run our operations more sustainably.
            </p>

            {/* 2 × 2 FEATURE CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 w-full max-w-xl">
              {INITIATIVE_CARDS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#E5EBE6] p-4 sm:p-5 flex items-start gap-3.5 sm:gap-4 shadow-[0_4px_16px_rgba(1,61,38,0.04)] hover:shadow-[0_10px_26px_rgba(1,61,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Icon on Left */}
                  <div className="shrink-0 pt-0.5 group-hover:scale-106 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Content on Right */}
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#013D26] leading-snug group-hover:text-[#75B82A] transition-colors">
                      {card.title}
                    </h3>

                    {/* Subtle Gold Separator Underline */}
                    <div className="w-6 h-[1.5px] bg-[#C99B36] my-1.5 rounded-full" />

                    <p className="font-sans text-[#4A6355] text-[12.5px] sm:text-[13px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: RENEWABLE ENERGY & COGENERATION FACILITY PHOTOGRAPH */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full relative"
          >
            {/* Tasteful Green Decorative Backdrop Accents Matching Reference */}
            {/* Left Pill Accent */}
            <div
              className="hidden sm:block absolute -left-4 top-[24%] w-8 h-24 bg-[#75B82A] rounded-2xl -z-10 opacity-90"
              aria-hidden="true"
            />
            {/* Bottom-Right Rounded Shape Accent */}
            <div
              className="absolute -bottom-3.5 -right-3 sm:-right-4 w-28 sm:w-36 h-12 sm:h-16 bg-[#75B82A] rounded-3xl -z-10 opacity-90"
              aria-hidden="true"
            />

            {/* Main Featured Photo Container */}
            <div className="relative w-full aspect-[4/3.3] rounded-[32px] overflow-hidden shadow-[0_16px_44px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/environment/renewable-cogen-hd.webp"
                alt="Merchants Agro Valley modern industrial cogeneration facility and ground-mounted solar panels in daylight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              
              {/* Subtle Natural Daylight Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Gentle Wave Grounding Strip at Bottom */}
      <div 
        className="w-full h-8 sm:h-12 bg-gradient-to-t from-[#EBF3E8]/60 to-transparent mt-12 sm:mt-16 pointer-events-none" 
        aria-hidden="true" 
      />
    </section>
  );
}
