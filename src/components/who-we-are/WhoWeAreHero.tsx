"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Clean SVGs for the 4 Category Tiles
function AgroSproutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <path
        d="M16 28V15M16 15C16 10 11 6 5 6c0 6 4 11 9 11h2zm0 0c0-5 5-9 11-9 0 6-4 11-9 11h-2z"
        stroke="#4F8226"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="11" r="2.5" fill="#C9A13B" />
      <path
        d="M11 28h10"
        stroke="#4F8226"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LivestockIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#4F8226"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <path d="M25 8c-2 0-3.5.8-4.8 2C19 11.2 17.5 12 16 12s-3-.8-4.2-2C10.5 8.8 9 8 7 8c-2.5 0-4 2-4 4 0 3.2 2.5 5.8 5 6.5V25c0 .6.4 1 1 1h2.5c.6 0 1-.4 1-1v-5h7v5c0 .6.4 1 1 1H23c.6 0 1-.4 1-1v-6.5c2.5-.7 5-3.3 5-6.5 0-2-1.5-4-4-4z" />
      <circle cx="10" cy="14" r="1.2" fill="#C9A13B" />
      <circle cx="22" cy="14" r="1.2" fill="#C9A13B" />
    </svg>
  );
}

function FoodProcessingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#4F8226"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <path d="M3 26h26M5 26V12l8 5V12l8 5V6h6v20" />
      <path d="M8 18h.01M8 22h.01M13 22h.01M18 22h.01M23 11h.01M23 15h.01M23 19h.01" />
    </svg>
  );
}

function RenewableEnergyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="#4F8226"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <path d="M9 7l-4 4 4 4" />
      <path d="M5 11h14a6 6 0 0 1 6 6v1" />
      <path d="M23 25l4-4-4-4" />
      <path d="M27 21H13a6 6 0 0 1-6-6v-1" />
    </svg>
  );
}

const CATEGORY_TILES = [
  {
    id: "integrated-agro",
    title: "Integrated\nAgro Operations",
    icon: <AgroSproutIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: "livestock-poultry",
    title: "Livestock\n& Poultry",
    icon: <LivestockIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: "food-processing",
    title: "Food\nProcessing",
    icon: <FoodProcessingIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
  {
    id: "renewable-energy",
    title: "Renewable\nEnergy",
    icon: <RenewableEnergyIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
  },
];

export default function WhoWeAreHero() {
  return (
    <section
      id="who-we-are-hero"
      aria-label="Who We Are — Introduction"
      className="relative w-full bg-[#FAF8F2] text-[#193B28] overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 selection:bg-[#C9A13B]/20 selection:text-[#013D26]"
    >
      {/* 1. SUBTLE BACKGROUND ORGANIC CONTOUR ACCENTS & WHEAT WATERMARK */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 242, 0.95) 50%, #F4EFE2 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Wheat / Grass Watermark in Bottom Left */}
      <div
        className="absolute bottom-0 left-0 w-[260px] sm:w-[360px] lg:w-[440px] pointer-events-none select-none z-0 opacity-25"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M-20 300 C 60 250 120 180 140 80" stroke="#C9A13B" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M-20 300 C 90 260 160 200 200 110" stroke="#4F8226" strokeWidth="2.5" />
          <path d="M-20 300 C 130 280 220 230 280 160" stroke="#C9A13B" strokeWidth="1.8" />
          {/* Wheat grains */}
          <ellipse cx="140" cy="80" rx="6" ry="12" transform="rotate(20 140 80)" fill="#C9A13B" opacity="0.7" />
          <ellipse cx="132" cy="98" rx="6" ry="12" transform="rotate(-15 132 98)" fill="#4F8226" opacity="0.6" />
          <ellipse cx="200" cy="110" rx="7" ry="14" transform="rotate(25 200 110)" fill="#C9A13B" opacity="0.7" />
          <ellipse cx="190" cy="130" rx="7" ry="14" transform="rotate(-20 190 130)" fill="#4F8226" opacity="0.6" />
          <ellipse cx="280" cy="160" rx="7" ry="13" transform="rotate(35 280 160)" fill="#C9A13B" opacity="0.7" />
        </svg>
      </div>

      {/* 2. MAIN 2-COLUMN CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: EDITORIAL CONTENT (Span 6 on LG) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label: Leaf Icon + "WHO WE ARE" */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div
                className="w-7 h-7 rounded-full bg-[#EBF5E0] border border-[#6E9C23]/30 flex items-center justify-center text-[#4F8226] shadow-2xs"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 fill-[#4F8226]/25"
                >
                  <path d="M4 17C12 4 23 3 29 3c0 11-5 22-18 23" />
                  <path d="M5 28c6-8 12-13 21-20" />
                  <path d="M14 18c-1-5-4-8-8-9" />
                </svg>
              </div>
              <span className="text-[13px] sm:text-[14px] font-bold text-[#013D26] uppercase tracking-[0.16em] font-sans">
                WHO WE ARE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl xs:text-4xl sm:text-[44px] md:text-[48px] lg:text-[46px] xl:text-[52px] font-bold leading-[1.15] tracking-tight text-[#013D26]"
            >
              A Leading Agro-Industrial
              <br />
              Enterprise for
              <br />
              Sustainable Growth
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-[15px] sm:text-[16px] xl:text-[17px] text-[#42584C] leading-relaxed max-w-xl mt-4 sm:mt-5 font-normal"
            >
              Merchants Agro Valley is a Bangladesh-based agro-industrial enterprise
              delivering integrated farm-to-market solutions through agriculture, livestock,
              food processing, renewable energy and international trade.
            </motion.p>

            {/* Business Category Tiles: 4 In One Row on Desktop, 2x2 on Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-7 sm:mt-8"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3 lg:gap-2.5 xl:gap-3.5">
                {CATEGORY_TILES.map((tile) => (
                  <div
                    key={tile.id}
                    className="group flex flex-col items-center text-center p-3 sm:p-3.5 rounded-xl bg-white/85 border border-[#DFDAD0] hover:border-[#C9A13B]/70 hover:bg-white hover:shadow-[0_6px_18px_rgba(1,61,38,0.06)] hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Icon container */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#FAF8F2] border border-[#E7E2D6] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#F3EFE4] group-hover:border-[#C9A13B]/40">
                      {tile.icon}
                    </div>

                    {/* Title */}
                    <span className="font-sans text-[12px] sm:text-[12.5px] font-bold text-[#013D26] leading-tight mt-2.5 whitespace-pre-line tracking-tight">
                      {tile.title}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button: "Our Journey →" */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
              className="mt-8 sm:mt-9"
            >
              <Link
                href="/#about"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#013D26] hover:bg-[#005030] text-white font-semibold text-[14px] sm:text-[15px] shadow-[0_4px_14px_rgba(1,61,38,0.22)] hover:shadow-[0_6px_20px_rgba(201,161,59,0.25)] transition-all duration-200 group cursor-pointer"
              >
                <span>Our Journey</span>
                <ArrowRight className="w-4 h-4 text-[#C9A13B] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: RECTANGULAR IMAGE COMPOSITION (Span 6 on LG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-3 sm:gap-3.5"
          >
            {/* Top Main Image: Aerial Agro-Industrial Facility */}
            <div className="relative w-full aspect-[16/8.8] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(1,61,38,0.12)] border border-[#E5E0D5] bg-white group">
              <Image
                src="/assets/who-we-are/facility-main.webp"
                alt="Merchants Agro Valley modern agro-industrial facility with rooftop solar panels, silos, and farmland at golden hour"
                fill
                priority
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Bottom Row: Three Supporting Images */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              {/* 1. Dairy Cattle */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(1,61,38,0.06)] border border-[#E5E0D5] bg-white group">
                <Image
                  src="/assets/who-we-are/cattle.webp"
                  alt="Holstein dairy cow grazing on lush green pasture"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 2. Healthy Poultry */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(1,61,38,0.06)] border border-[#E5E0D5] bg-white group">
                <Image
                  src="/assets/who-we-are/poultry.webp"
                  alt="Healthy white poultry farming in bright modern farm"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 3. Hygienic Food Processing */}
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(1,61,38,0.06)] border border-[#E5E0D5] bg-white group">
                <Image
                  src="/assets/who-we-are/processing.webp"
                  alt="Quality inspection worker in hygienic gear in food processing facility"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
