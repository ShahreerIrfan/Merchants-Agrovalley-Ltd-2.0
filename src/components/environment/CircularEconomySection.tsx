"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ArrowDown, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

// Clean vector icons matching the reference image exactly
function SproutSoilIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      <path
        d="M18 17c0-7 6-11 13-11 0 7-6 11-13 11z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path
        d="M18 20c0-6-5-10-12-10 0 6 5 10 12 10z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
        opacity="0.9"
      />
      <path d="M18 17v12" stroke="#013D26" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M7 31c3-2 6.5-2 11 0s8 2 11 0"
        stroke="#8E5D2A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BiogasRecoveryIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Dome shape */}
      <path
        d="M6 28h24v3H6v-3z"
        fill="#013D26"
      />
      <path
        d="M7 28C7 16 12 10 18 10s11 6 11 18H7z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="2"
      />
      {/* Vent / valve on top */}
      <path d="M18 10V5M15 5h6" stroke="#013D26" strokeWidth="2" strokeLinecap="round" />
      {/* Gas Flame Inside */}
      <path
        d="M18 18c-1.5 2-2 3.5-2 5a2 2 0 0 0 4 0c0-1.5-.5-3-2-5z"
        fill="#C99B36"
      />
    </svg>
  );
}

function HandBioFertilizerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Hand contour */}
      <path
        d="M5 25c4-2 8-2 12-1l5 4c2 1 5 1 7-1"
        stroke="#8E5D2A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 28c3 2 7 3 11 2"
        stroke="#8E5D2A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Sprout on hand */}
      <path
        d="M20 12c0-5 4-8 9-8 0 5-4 8-9 8z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path
        d="M20 14c0-4-3-7-7-7 0 4 3 7 7 7z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path d="M20 12v12" stroke="#013D26" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function RecycleReuseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      <path
        d="M14 7l4-4 4 4M18 3v13M8.5 24.5l-4-3 1.5-4.5M6 21.5l11-4M27.5 24.5l4-3-1.5-4.5M30 21.5l-11-4"
        stroke="#75B82A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 33h12l-2-3.5H14L12 33z"
        fill="#75B82A"
      />
    </svg>
  );
}

function ClosedLoopIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className || "w-10 h-10"}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="17" stroke="#75B82A" strokeWidth="2.2" strokeDasharray="6 3" />
      <path d="M33 20l-3 3-3-3" stroke="#75B82A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13 26c0-7 5-12 12-12 0 7-5 12-12 12z"
        fill="#75B82A"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      <path d="M13 26c4-3 8-7 12-12" stroke="#013D26" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

interface CircularCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CIRCULAR_CARDS: CircularCard[] = [
  {
    id: "by-product-utilization",
    title: "By-Product Utilization",
    description: "Turn processing by-products into useful inputs and valuable outputs.",
    icon: <SproutSoilIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "biogas-recovery",
    title: "Biogas Recovery",
    description: "Convert organic waste into renewable biogas for cleaner, low-carbon energy.",
    icon: <BiogasRecoveryIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "organic-bio-fertilizer",
    title: "Organic Bio-Fertilizer",
    description: "Process organic residues into nutrient-rich, eco-friendly bio-fertilizer for healthier soils.",
    icon: <HandBioFertilizerIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
  {
    id: "recycling-reuse",
    title: "Recycling & Reuse",
    description: "Recover and reuse materials such as water, packaging and other resources across our operations.",
    icon: <RecycleReuseIcon className="w-8 h-8 sm:w-9 sm:h-9" />,
  },
];

export default function CircularEconomySection() {
  return (
    <section
      id="circular-economy"
      aria-label="Circular Economy & Resource Recovery"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] py-16 sm:py-20 lg:py-24 border-t border-[#E5EBE6] overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: INTRODUCTION, 2x2 CARDS & CTA BUTTONS (Span 6) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Small Label with Leaf Icon & Gold Accent */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <Leaf className="w-4 h-4 text-[#75B82A]" />
              <span className="text-[13px] sm:text-[14px] font-bold text-[#013D26] tracking-[0.16em] uppercase font-sans">
                OUR ENVIRONMENTAL INITIATIVES
              </span>
              <span className="w-10 h-[2px] bg-[#C99B36] rounded-full ml-1" />
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-bold text-[#013D26] leading-[1.14] tracking-tight mb-3">
              Circular Economy &<br />
              Resource Recovery
            </h2>

            {/* Subtle Gold Accent Line */}
            <div className="w-10 h-[2.5px] bg-[#C99B36] rounded-full mb-5" />

            {/* Short Paragraph */}
            <p className="font-sans text-[#3A5446] text-base sm:text-[16.5px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We convert agro-industrial by-products into value, reduce waste,
              recover resources, and support biogas and organic bio-fertilizer
              production—driving a more circular, efficient and sustainable value chain.
            </p>

            {/* 2 × 2 GRID OF FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 w-full max-w-xl mb-8 sm:mb-10">
              {CIRCULAR_CARDS.map((card, idx) => (
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
                  className="bg-gradient-to-br from-white via-white to-[#F2F8EE] rounded-2xl border border-[#E2EBE5] p-5 flex flex-col justify-between shadow-[0_4px_16px_rgba(1,61,38,0.04)] hover:shadow-[0_10px_26px_rgba(1,61,38,0.09)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div>
                    {/* Card Icon */}
                    <div className="mb-3.5 group-hover:scale-106 transition-transform duration-300">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-[16px] sm:text-[17px] text-[#013D26] leading-snug mb-2 group-hover:text-[#75B82A] transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[#4A6355] text-[13px] sm:text-[13.5px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TWO CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="#initiatives"
                className="inline-flex items-center gap-2 px-6 sm:px-6.5 py-3.5 rounded-xl bg-[#013D26] hover:bg-[#075B38] text-white text-[14px] sm:text-[14.5px] font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>Explore Resource Recovery</span>
                <ArrowRight className="w-4 h-4 text-[#C99B36] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#practices"
                className="inline-flex items-center gap-2 px-6 sm:px-6.5 py-3.5 rounded-xl bg-white hover:bg-[#FAF6EC] text-[#013D26] border border-[#013D26] text-[14px] sm:text-[14.5px] font-semibold transition-all duration-300 shadow-2xs hover:shadow-xs hover:-translate-y-0.5 group cursor-pointer"
              >
                <span>View Sustainability Practices</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CIRCULAR FACILITY IMAGE + FLOATING CLOSED-LOOP CARD (Span 6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full flex flex-col"
          >
            {/* Main Featured Photo Container */}
            <div className="relative w-full aspect-[4/3.3] rounded-[32px] overflow-hidden shadow-[0_16px_44px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/environment/circular-economy-facility.webp"
                alt="Merchants Agro Valley circular economy facility with biogas storage dome, compost recovery, and recyclable materials sorting"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* FLOATING / HIGHLIGHT INFO CARD (Below Image on Right) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 sm:mt-5 bg-white rounded-2xl p-4.5 sm:p-5 border border-[#E2EBE5] shadow-[0_8px_24px_rgba(1,61,38,0.06)] flex items-center gap-4.5"
            >
              <div className="shrink-0 p-1">
                <ClosedLoopIcon className="w-11 h-11" />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="font-serif font-bold text-[17px] sm:text-[18px] text-[#013D26] leading-tight mb-1">
                  A Closed-Loop Approach
                </h4>
                <p className="font-sans text-[#4A6355] text-[13px] sm:text-[13.5px] leading-relaxed">
                  From by-products to renewable energy, bio-fertilizer and reusable materials.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* BOTTOM HIGHLIGHT STRIP (3 Items across full width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#EDF5E8] rounded-2xl p-5 sm:p-6 border border-[#DCE8D5] mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#CDE0C4]">
            
            {/* Item 1: Waste to Value */}
            <div className="flex items-center gap-3.5 pt-2 md:pt-0 md:px-4 first:pl-0">
              <div className="shrink-0 text-[#75B82A]">
                <RefreshCw className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#013D26] leading-snug">
                  Waste to Value
                </h4>
                <p className="text-[#4A6355] text-[12.5px] sm:text-[13px] leading-tight mt-0.5">
                  Convert residues into useful resources
                </p>
              </div>
            </div>

            {/* Item 2: Lower Losses */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4">
              <div className="shrink-0 text-[#75B82A]">
                <ArrowDown className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#013D26] leading-snug">
                  Lower Losses
                </h4>
                <p className="text-[#4A6355] text-[12.5px] sm:text-[13px] leading-tight mt-0.5">
                  Minimize waste across operations
                </p>
              </div>
            </div>

            {/* Item 3: Resource Efficiency */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-4 last:pr-0">
              <div className="shrink-0 text-[#75B82A]">
                <Leaf className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-[15px] sm:text-[16px] text-[#013D26] leading-snug">
                  Resource Efficiency
                </h4>
                <p className="text-[#4A6355] text-[12.5px] sm:text-[13px] leading-tight mt-0.5">
                  Use materials, water and energy more effectively
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
