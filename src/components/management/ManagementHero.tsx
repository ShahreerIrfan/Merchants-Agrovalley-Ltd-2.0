"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeatureHighlight {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const HIGHLIGHTS: FeatureHighlight[] = [
  {
    id: "sustainable-growth",
    title: "Sustainable\nGrowth",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
        aria-hidden="true"
      >
        <path d="M24 4C12 4 5 12 5 23c10 2 19-4 19-19Z" />
        <path d="M4 29c5-8 11-13 19-19" />
        <path d="M18 29h10" />
      </svg>
    ),
  },
  {
    id: "responsible-governance",
    title: "Responsible\nGovernance",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
        aria-hidden="true"
      >
        <circle cx="16" cy="10" r="5" />
        <circle cx="7" cy="14" r="3.5" />
        <circle cx="25" cy="14" r="3.5" />
        <path d="M7 29v-3c0-5 4-8 9-8s9 3 9 8v3M1 28v-3c0-3 2-5 5-6M31 28v-3c0-3-2-5-5-6" />
      </svg>
    ),
  },
  {
    id: "integrated-value-chain",
    title: "Integrated\nValue Chain",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
        aria-hidden="true"
      >
        <path d="m16 3 13 7-13 7L3 10 16 3Z" />
        <path d="m3 16 13 7 13-7M3 22l13 7 13-7" />
      </svg>
    ),
  },
  {
    id: "global-competitiveness",
    title: "Global\nCompetitiveness",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-6 sm:h-6"
        aria-hidden="true"
      >
        <path d="M5 28V17h6v11M14 28V10h6v18M23 28V4h6v24" />
        <path d="M3 30h28" />
      </svg>
    ),
  },
];

export default function ManagementHero() {
  return (
    <section
      id="management-hero"
      aria-label="Our Management Hero"
      className="relative w-full overflow-hidden bg-[#013D26] text-white selection:bg-[#78C900] selection:text-[#013D26]"
    >
      {/* BACKGROUND GRADIENT & SUBTLE AMBIENT GLOW */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 45%, rgba(0, 83, 49, 0.75) 0%, #013D26 60%, #002617 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, #78C900 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* DESKTOP BACKGROUND — SEAMLESS S-CURVE CLIP & FACILITY PHOTO */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exact S-Curve boundary enclosing the facility photo on the right */}
            <clipPath id="managementCurveClip">
              <path d="M 520,0 L 1000,0 L 1000,600 C 880,600 750,600 600,570 C 450,540 370,470 370,360 C 370,240 440,140 520,0 Z" />
            </clipPath>
            {/* Subtle Gold Ribbon Glow */}
            <filter id="goldCurveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#D7A72E" floodOpacity="0.45" />
            </filter>
          </defs>

          {/* High-resolution facility photograph */}
          <image
            href="/assets/management-hero/images/management-right-image.webp"
            x="320"
            y="0"
            width="680"
            height="600"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#managementCurveClip)"
          />

          {/* Dual-Tone Gold S-Curve Divider Ribbon */}
          <path
            d="M 520,0 C 440,140 370,240 370,360 C 370,470 450,540 600,570 C 750,600 880,600 1000,600"
            fill="none"
            stroke="#D7A72E"
            strokeWidth="4"
            strokeLinecap="round"
            filter="url(#goldCurveGlow)"
          />
          <path
            d="M 520,0 C 440,140 370,240 370,360 C 370,470 450,540 600,570 C 750,600 880,600 1000,600"
            fill="none"
            stroke="#F5D77A"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* FOREGROUND CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto min-h-[580px] sm:min-h-[640px] lg:min-h-[660px] xl:min-h-[720px] px-5 sm:px-8 md:px-12 lg:px-14 xl:px-20 pt-10 sm:pt-14 lg:pt-16 xl:pt-20 pb-12 sm:pb-16 flex flex-col justify-center">
        {/* LEFT-ALIGNED TEXT BLOCK (strictly bounded so it never collides with the curve) */}
        <div className="w-full lg:max-w-[48%] xl:max-w-[46%] 2xl:max-w-[44%] relative z-20">
          {/* Eyebrow: OUR MANAGEMENT with leaf icon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 mb-3.5 sm:mb-4.5"
          >
            <div className="w-5 h-5 text-[#78C900] shrink-0" aria-hidden="true">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M4 17C12 4 23 3 29 3c0 11-5 22-18 23" />
                <path d="M5 28c6-8 12-13 21-20" />
                <path d="M14 18c-1-5-4-8-8-9" />
              </svg>
            </div>
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.24em] uppercase text-white/95 font-sans">
              OUR MANAGEMENT
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold leading-[1.12] tracking-[-0.015em] text-white"
          >
            Leadership that
            <br />
            Drives an Integrated
            <br />
            <span className="text-[#78C900] inline-block drop-shadow-[0_2px_12px_rgba(120,201,0,0.3)]">
              Agro Ecosystem
            </span>
          </motion.h1>

          {/* Slim Gold Underline Accent */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="my-4 sm:my-5 h-[3px] sm:h-[3.5px] w-20 sm:w-24 rounded-full bg-gradient-to-r from-[#D7A72E] via-[#F5D77A] to-[#D7A72E] shadow-[0_2px_8px_rgba(215,167,46,0.5)]"
            aria-hidden="true"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-[14.5px] sm:text-[16px] xl:text-[17px] text-white/85 leading-relaxed max-w-lg font-normal"
          >
            A dedicated leadership team steering sustainable farming, modern processing, renewable
            energy and global market growth.
          </motion.p>

          {/* MOBILE / TABLET FACILITY IMAGE (Clean responsive card below text) */}
          <div className="lg:hidden mt-6 mb-6 w-full rounded-2xl overflow-hidden border border-[#D7A72E]/40 shadow-xl relative aspect-[16/10]">
            <Image
              src="/assets/management-hero/images/management-right-image.webp"
              alt="Merchants Agro Valley Facility"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Four Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="mt-6 sm:mt-8 xl:mt-10 pt-5 sm:pt-6 border-t border-white/10"
          >
            {/* Desktop / Tablet: Single Horizontal Row with Dividers | Mobile: 2x2 Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:items-stretch gap-3 sm:gap-2 lg:gap-3 xl:gap-5">
              {HIGHLIGHTS.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="group flex flex-col items-center text-center p-1.5 sm:p-2 rounded-xl transition-transform duration-300 hover:-translate-y-1">
                    {/* Icon Container with Gold Border */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 xl:w-13 xl:h-13 rounded-xl bg-gradient-to-b from-[#013520] to-[#002616] border border-[#D7A72E]/60 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-[#D7A72E] group-hover:shadow-[0_6px_20px_rgba(215,167,46,0.3)] group-hover:scale-105 shrink-0">
                      {item.icon}
                    </div>

                    {/* Label */}
                    <span className="font-sans text-[12px] sm:text-[12.5px] xl:text-[13.5px] font-semibold text-white/95 leading-tight mt-2 whitespace-pre-line tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Vertical separator between items on tablet/desktop */}
                  {index < HIGHLIGHTS.length - 1 && (
                    <div
                      className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-[#D7A72E]/35 to-transparent self-center h-10 my-auto shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* REAL PHOTOGRAPHIC LEAF IN BOTTOM-LEFT CORNER (Never obstructs text) */}
      <div
        className="absolute bottom-0 left-0 w-[90px] xs:w-[110px] sm:w-[130px] lg:w-[145px] h-auto pointer-events-none z-10 opacity-90 select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/management-hero/images/leaf-bottom-left.png"
          alt=""
          width={120}
          height={132}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
