"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons matching the reference image exactly
function DignityRespectIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* 3 People Silhouettes */}
      <circle cx="18" cy="11" r="3.5" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="11" cy="13" r="2.8" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="25" cy="13" r="2.8" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path d="M11 23c-3 0-5 2-5 5h24c0-3-2-5-5-5" stroke="#013D26" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 23a5 5 0 0 1 8 0" stroke="#013D26" strokeWidth="2" strokeLinecap="round" />
      {/* Caring Hands contour underneath */}
      <path
        d="M4 22c3-1 6 0 8 3l3 4M32 22c-3-1-6 0-8 3l-3 4"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EqualityInclusionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Interlinked diverse group */}
      <circle cx="18" cy="10" r="3.5" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="9" cy="13" r="3" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="27" cy="13" r="3" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path d="M4 29v-2c0-3.5 3-6 7-6h14c4 0 7 2.5 7 6v2H4z" stroke="#013D26" strokeWidth="2" strokeLinejoin="round" />
      <path d="M13 29v-5c0-2.5 2-4.5 5-4.5s5 2 5 4.5v5" stroke="#75B82A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ZeroExploitationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Shield with Checkmark */}
      <path
        d="M18 4L6 9v9c0 9 5.5 14.5 12 16 6.5-1.5 12-7 12-16V9L18 4z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18.5l4 4 8-8"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SafeConditionsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Safety Hard Hat Helmet */}
      <path
        d="M7 26h22M6 26c0-9 4.5-15 12-15s12 6 12 15H6z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 11v8M18 11v8M21 11v8" stroke="#013D26" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 26c0 1.5 1.5 2.5 3 2.5h22c1.5 0 3-1 3-2.5" stroke="#75B82A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

interface HumanRightsFeature {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const HUMAN_RIGHTS_FEATURES: HumanRightsFeature[] = [
  {
    id: "dignity-respect",
    title: "Dignity &\nRespect",
    icon: <DignityRespectIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "equality-inclusion",
    title: "Equality &\nInclusion",
    icon: <EqualityInclusionIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "zero-exploitation",
    title: "Zero Tolerance\nfor Exploitation",
    icon: <ZeroExploitationIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "safe-conditions",
    title: "Safe Working\nConditions",
    icon: <SafeConditionsIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function CommitmentToHumanRightsSection() {
  return (
    <section
      id="human-rights-commitment"
      aria-label="Our Commitment to Human Rights"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] py-14 sm:py-18 lg:py-22 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Gradient Lighting */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(201, 155, 54, 0.04) 0%, transparent 45%), radial-gradient(circle at 88% 82%, rgba(1, 61, 38, 0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: INTRODUCTION & 2x2 FEATURE CARDS (Span 6 on LG/XL) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow Label with Gold Indicator */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-10 h-[2.5px] bg-[#C99B36] rounded-full" />
              <span className="text-[12.5px] sm:text-[13.5px] font-bold text-[#013D26] tracking-[0.16em] uppercase font-sans">
                01. HUMAN RIGHTS & ETHICAL RESPONSIBILITY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-[#013D26] leading-[1.14] tracking-tight mb-2">
              Our Commitment to<br />Human Rights
            </h1>

            {/* Subtle Gold Accent Line */}
            <div className="w-12 h-[2.5px] bg-[#C99B36] rounded-full my-3 sm:my-4" />

            {/* Description Paragraph */}
            <p className="font-sans text-[#3A5446] text-base sm:text-[16.5px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              Merchants AgroValley Ltd is committed to respecting, protecting and
              promoting human rights across all its business operations,
              workplaces and supply chains. Every individual deserves dignity,
              fairness, equality and respect.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full max-w-xl">
              {HUMAN_RIGHTS_FEATURES.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-white rounded-2xl border border-[#E2EBE5] p-4.5 sm:p-5 flex items-center shadow-[0_4px_16px_rgba(1,61,38,0.04)] hover:shadow-[0_8px_24px_rgba(1,61,38,0.08)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Feature Icon */}
                  <div className="shrink-0 group-hover:scale-106 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Gold Vertical Separator */}
                  <div
                    className="w-[1.5px] h-8 bg-[#C99B36]/60 mx-3.5 shrink-0"
                    aria-hidden="true"
                  />

                  {/* Feature Title */}
                  <span className="font-sans font-bold text-[#013D26] text-[14px] sm:text-[15px] leading-snug whitespace-pre-line">
                    {card.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: WORKFORCE HERO PHOTOGRAPH (Span 6 on LG/XL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full relative"
          >
            {/* Top-Left Thin Gold Accent Arch */}
            <div
              className="hidden sm:block absolute -top-3.5 -left-3.5 w-24 h-24 border-t-2 border-l-2 border-[#C99B36] rounded-tl-[36px] pointer-events-none -z-10"
              aria-hidden="true"
            />

            {/* Top-Right Dark Green Framing Line */}
            <div
              className="hidden sm:block absolute -top-3 -right-3 w-36 h-28 border-t-4 border-r-4 border-[#013D26] rounded-tr-[36px] pointer-events-none -z-10 opacity-90"
              aria-hidden="true"
            />

            {/* Main Featured Photo Container */}
            <div className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-[0_16px_44px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/human-rights/diverse-workforce-new.webp"
                alt="Merchants Agro Valley diverse, proud team of Bangladeshi workers and professionals in modern hygienic food processing facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

        {/* BOTTOM HIGHLIGHTED STATEMENT (Full-Width Core Principle Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-[#FCFBF7] via-[#F9F6ED] to-[#FCFBF7] border border-[#C99B36]/60 rounded-2xl p-5 sm:p-6 shadow-[0_4px_20px_rgba(201,155,54,0.08)] mt-12 sm:mt-16 flex items-center justify-center text-center"
        >
          <p className="font-serif italic font-bold text-[#013D26] text-[17px] sm:text-[20px] md:text-[22px] leading-snug tracking-tight">
            <span className="text-[#C99B36] not-italic text-2xl sm:text-3xl mr-1.5 select-none font-serif">“</span>
            Business growth must never come at the expense of human dignity, equality or fundamental human rights.
            <span className="text-[#C99B36] not-italic text-2xl sm:text-3xl ml-1.5 select-none font-serif">”</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
