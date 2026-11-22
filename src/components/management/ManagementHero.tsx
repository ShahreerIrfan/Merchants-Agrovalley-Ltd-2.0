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
      id="our-management"
      aria-label="Our Management Section"
      className="relative w-full bg-white text-[#193B28] overflow-hidden pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 lg:pb-24 selection:bg-[#E2F4C5] selection:text-[#193B28]"
    >
      {/* SOFT MISTY GREEN LANDSCAPE FADE AT BOTTOM */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to top, rgba(162, 219, 107, 0.22) 0%, rgba(200, 235, 160, 0.1) 45%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* TOP-RIGHT DELICATE FOLIAGE OVERLAY */}
      <div
        className="absolute top-0 right-0 w-[140px] xs:w-[170px] sm:w-[210px] md:w-[250px] lg:w-[280px] pointer-events-none select-none z-20 opacity-90"
        aria-hidden="true"
      >
        <Image
          src="/assets/management/top-right-foliage.png"
          alt=""
          width={280}
          height={165}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-14">
          {/* LEFT COLUMN — EDITORIAL CONTENT */}
          <div className="w-full lg:w-[50%] xl:w-[48%] flex flex-col justify-center">
            {/* Eyebrow: Leaf Icon + "Our Management" + Divider line */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex items-center gap-2.5 mb-3.5 sm:mb-4"
            >
              <div className="w-5 h-5 text-[#6E9C23] shrink-0" aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full fill-[#6E9C23]/20"
                >
                  <path d="M4 17C12 4 23 3 29 3c0 11-5 22-18 23" />
                  <path d="M5 28c6-8 12-13 21-20" />
                  <path d="M14 18c-1-5-4-8-8-9" />
                </svg>
              </div>
              <span className="text-[15px] sm:text-[16px] font-bold text-[#193B28] tracking-normal font-sans">
                Our Management
              </span>
              <div className="w-12 sm:w-16 h-[2px] bg-[#9FC44F] rounded-full ml-1" aria-hidden="true" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-3xl xs:text-4xl sm:text-[44px] md:text-[48px] lg:text-[44px] xl:text-[52px] 2xl:text-[56px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#193B28]"
            >
              Leadership for a
              <br />
              Sustainable{" "}
              <span className="text-[#6E9C23] inline-block font-extrabold">
                Agro Future
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-[15px] sm:text-[16px] xl:text-[17px] text-[#3D5548] leading-relaxed max-w-xl mt-4 sm:mt-5 font-normal"
            >
              A dedicated leadership team driving sustainable farming, modern processing, renewable
              energy and global market growth.
            </motion.p>

            {/* Four Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="mt-8 sm:mt-10 pt-6 sm:pt-7"
            >
              {/* Desktop / Tablet: Single Horizontal Row with Dividers | Mobile: 2x2 Grid */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:items-stretch gap-4 sm:gap-2.5 lg:gap-3 xl:gap-5">
                {HIGHLIGHTS.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <div className="group flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                      {/* Rounded Square Tile with Green Border */}
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-white border-[1.5px] border-[#6E9C23] flex items-center justify-center text-[#6E9C23] shadow-[0_3px_10px_rgba(110,156,35,0.12)] transition-all duration-300 group-hover:bg-[#F2F9E8] group-hover:scale-105 shrink-0">
                        {item.icon}
                      </div>

                      {/* Label */}
                      <span className="font-sans text-[12px] sm:text-[13px] font-bold text-[#193B28] leading-tight mt-2.5 whitespace-pre-line tracking-tight">
                        {item.title}
                      </span>
                    </div>

                    {/* Subtle Vertical Divider between items */}
                    {index < HIGHLIGHTS.length - 1 && (
                      <div
                        className="hidden sm:block w-[1px] bg-gray-200 self-center h-10 my-auto shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — MODERN GEOMETRIC FACILITY CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[50%] xl:w-[52%] flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[560px] lg:max-w-[620px] xl:max-w-[680px] drop-shadow-[0_16px_36px_rgba(35,80,45,0.1)] transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/assets/management/facility-card.webp"
                alt="Merchants Agro Valley modern facility with silos, solar panel array, and pastoral farmland at sunset"
                width={1200}
                height={560}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
