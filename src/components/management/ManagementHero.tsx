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
      {/* BACKGROUND GRADIENTS & SUBTLE AMBIENT GLOW */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 35% 45%, rgba(0, 83, 49, 0.75) 0%, #013D26 60%, #002617 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, #78C900 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[420px] h-[360px] rounded-full pointer-events-none opacity-25 blur-3xl z-0"
        style={{
          background: "radial-gradient(circle, #D7A72E 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* TOP-RIGHT LEAF OVERLAY (Foliage with depth of field) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 lg:-top-10 lg:-right-10 w-[180px] xs:w-[220px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[420px] h-auto pointer-events-none z-30 opacity-90 select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/management-hero/images/leaf-top-right.png"
          alt=""
          width={780}
          height={450}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        />
      </motion.div>

      {/* DESKTOP HERO CONTAINER (Cinematic Split Composition) */}
      <div className="relative z-10 w-full min-h-[640px] sm:min-h-[700px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col lg:flex-row">
        {/* LEFT PANEL — TEXT CONTENT & HIGHLIGHTS */}
        <div className="w-full lg:w-[50%] xl:w-[48%] 2xl:w-[46%] px-5 sm:px-8 md:px-12 lg:pl-12 lg:pr-4 xl:pl-16 xl:pr-6 2xl:pl-24 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 pb-12 sm:pb-16 lg:pb-20 flex flex-col justify-center relative z-20">
          {/* Eyebrow: OUR MANAGEMENT with leaf icon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2.5 mb-4 sm:mb-5"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 text-[#78C900] shrink-0" aria-hidden="true">
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
            <span className="text-[12px] sm:text-[13px] 2xl:text-[14px] font-bold tracking-[0.22em] uppercase text-white/95 font-sans">
              OUR MANAGEMENT
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-[52px] lg:text-[46px] xl:text-[54px] 2xl:text-[62px] font-bold leading-[1.12] tracking-[-0.015em] text-white"
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
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="mt-4 sm:mt-5 mb-5 sm:mb-6 h-[3px] sm:h-[3.5px] w-20 sm:w-24 rounded-full bg-gradient-to-r from-[#D7A72E] via-[#E8C979] to-[#D7A72E] shadow-[0_2px_10px_rgba(215,167,46,0.45)]"
            aria-hidden="true"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="font-sans text-[14.5px] sm:text-[16px] xl:text-[17px] text-white/85 leading-relaxed max-w-xl font-normal"
          >
            A dedicated leadership team steering sustainable farming, modern processing, renewable
            energy and global market growth.
          </motion.p>

          {/* Four Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 border-t border-white/10"
          >
            {/* Desktop: Single Horizontal Row with Dividers | Mobile: 2-Column Grid */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center sm:items-stretch gap-4 sm:gap-2 lg:gap-3 xl:gap-5">
              {HIGHLIGHTS.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="group flex flex-col items-center text-center p-2 rounded-xl transition-transform duration-300 hover:-translate-y-1">
                    {/* Icon Container with Gold Border */}
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-gradient-to-b from-[#013520] to-[#002616] border border-[#D7A72E]/60 flex items-center justify-center text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-[#D7A72E] group-hover:shadow-[0_6px_20px_rgba(215,167,46,0.3)] group-hover:scale-105 shrink-0">
                      {item.icon}
                    </div>

                    {/* Label */}
                    <span className="font-sans text-[12px] sm:text-[13px] xl:text-[13.5px] font-semibold text-white/95 leading-tight mt-2.5 whitespace-pre-line tracking-tight">
                      {item.title}
                    </span>
                  </div>

                  {/* Vertical separator between items on tablet/desktop */}
                  {index < HIGHLIGHTS.length - 1 && (
                    <div
                      className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-[#D7A72E]/35 to-transparent self-center h-12 my-auto shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT PANEL — FACILITY IMAGE WITH CURVED GOLD SWEEP */}
        <div className="w-full lg:w-[50%] xl:w-[52%] 2xl:w-[54%] relative flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-full overflow-hidden">
          {/* Facility Landscape Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[380px] xs:h-[420px] sm:h-[480px] md:h-[540px] lg:h-full min-h-full"
          >
            <Image
              src="/assets/management-hero/images/management-right-image.webp"
              alt="Merchants Agro Valley modern agro-industrial facility with advanced silos, solar panels, and pastoral farmland at sunset"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center lg:object-[28%_center]"
            />

            {/* Subtle Gradient Overlays for Soft Framing */}
            <div
              className="absolute inset-0 pointer-events-none lg:hidden bg-gradient-to-t from-[#013D26] via-transparent to-transparent opacity-80"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block bg-gradient-to-r from-[#013D26] via-[#013D26]/20 to-transparent w-36"
              aria-hidden="true"
            />
          </motion.div>

          {/* DESKTOP S-CURVE GOLD DIVIDER & DARK-GREEN SWOOP FRAME */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none z-10"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 700"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left Deep-Green Angular / Organic Backdrop Wing */}
              <path
                d="M0 0 H240 C170 120 120 280 135 440 C155 580 320 650 560 685 L560 700 H0 Z"
                fill="#013D26"
              />

              {/* Bottom Right Green Swoosh Framing the Ground */}
              <path
                d="M260 700 C420 660 620 665 1000 685 L1000 700 Z"
                fill="#002D1D"
                opacity="0.95"
              />
              <path
                d="M260 700 C420 660 620 665 1000 685"
                stroke="#D7A72E"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.9"
              />

              {/* Primary Dual Gold Sweeping S-Curve Divider */}
              <path
                d="M240 0 C170 120 120 280 135 440 C155 580 320 650 560 685"
                stroke="#D7A72E"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M240 0 C170 120 120 280 135 440 C155 580 320 650 560 685"
                stroke="#F5D77A"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* BOTTOM-LEFT LEAF OVERLAY (Fresh vibrant foliage with droplets) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
        className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 lg:-bottom-12 lg:-left-12 w-[160px] xs:w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[440px] h-auto pointer-events-none z-30 opacity-95 select-none"
        aria-hidden="true"
      >
        <Image
          src="/assets/management-hero/images/leaf-bottom-left.png"
          alt=""
          width={900}
          height={630}
          priority
          className="w-full h-auto object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </section>
  );
}
