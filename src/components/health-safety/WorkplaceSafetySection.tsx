"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons matching the reference design
function RiskIdentificationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Safety Hard Hat Helmet */}
      <path
        d="M7 25h22M6 25c0-8.5 4.5-14 12-14s12 5.5 12 14H6z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 11v8M18 11v8M21 11v8"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 25c0 1.5 1.5 2.5 3 2.5h22c1.5 0 3-1 3-2.5"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PreventiveMeasuresIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Clipboard with checklist */}
      <rect
        x="6"
        y="6"
        width="18"
        height="24"
        rx="3"
        stroke="#013D26"
        strokeWidth="2.2"
      />
      <path
        d="M10 12h6M10 17h5M10 22h4"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 4h8a2 2 0 0 1 2 2v2H9V6a2 2 0 0 1 2-2z"
        stroke="#013D26"
        strokeWidth="1.8"
      />
      {/* Shield badge with checkmark at bottom right */}
      <path
        d="M26 18l-5 2v5c0 4 3 6.5 5 7.5 2-1 5-3.5 5-7.5v-5l-5-2z"
        fill="#FAF8F4"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 25l1.5 1.5 3-3"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SafeOperationsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Factory Profile */}
      <path
        d="M5 28h22M6 28V16l7 4V14l8 4V10h6v18"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Industrial Cogwheel Gear */}
      <circle cx="27" cy="8.5" r="4.5" stroke="#75B82A" strokeWidth="2" />
      <path
        d="M27 3v2M27 12v2M21.5 8.5h2M30.5 8.5h2"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IncidentPreventionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Shield with Checkmark */}
      <path
        d="M18 4L7 8.5v9c0 8 5 13 11 14.5 6-1.5 11-6.5 11-14.5v-9L18 4z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 17.5l3.5 3.5 7-7"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Bullseye Rings */}
      <circle
        cx="18"
        cy="18"
        r="14"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeDasharray="6 3"
      />
      <circle cx="18" cy="18" r="9" stroke="#013D26" strokeWidth="2" />
      {/* Center Checkmark */}
      <path
        d="M14 18l2.5 2.5 5.5-5.5"
        stroke="#75B82A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WORKPLACE_SAFETY_CARDS: FeatureCard[] = [
  {
    id: "risk-identification",
    title: "Risk Identification",
    description: "Spot hazards and assess potential risks in advance.",
    icon: <RiskIdentificationIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "preventive-measures",
    title: "Preventive Measures",
    description: "Implement safety controls to eliminate or reduce risks.",
    icon: <PreventiveMeasuresIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "safe-operations",
    title: "Safe Operations",
    description: "Follow standard operating procedures (SOPs) at all sites.",
    icon: <SafeOperationsIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "incident-prevention",
    title: "Incident Prevention",
    description: "Take proactive actions to avoid accidents and injuries.",
    icon: <IncidentPreventionIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function WorkplaceSafetySection() {
  return (
    <section
      id="workplace-safety-risk-prevention"
      aria-label="Workplace Safety & Risk Prevention"
      className="relative w-full bg-white text-[#193B28] py-14 sm:py-18 lg:py-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Gradient Lighting */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(117, 184, 42, 0.035) 0%, transparent 40%), radial-gradient(circle at 85% 85%, rgba(201, 155, 54, 0.03) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP (ALTERNATING: IMAGE ON LEFT, TEXT ON RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* COLUMN 1 (LEFT ON DESKTOP): LARGE WORKPLACE PHOTOGRAPH WITH ACCENTS (Approx 52-55% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-7 w-full flex flex-col justify-center relative order-2 lg:order-1"
          >
            {/* Top-Left Decorative Organic Gold & Green Curved Accent Arch */}
            <div
              className="absolute -top-3.5 -left-3.5 w-36 h-36 pointer-events-none -z-10 hidden sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
                <path
                  d="M10 150 C 10 70, 70 10, 150 10"
                  stroke="#C99B36"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M2 140 C 2 60, 60 2, 140 2"
                  stroke="#75B82A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>

            {/* Bottom-Right Complementary Curved Gold & Green Accent */}
            <div
              className="absolute -bottom-3.5 -right-3.5 w-36 h-36 pointer-events-none -z-10 hidden sm:block"
              aria-hidden="true"
            >
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
                <path
                  d="M150 10 C 150 90, 90 150, 10 150"
                  stroke="#C99B36"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M158 20 C 158 100, 100 158, 20 158"
                  stroke="#013D26"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.85"
                />
              </svg>
            </div>

            {/* Main Featured Photo Container with balanced height */}
            <div className="relative w-full aspect-[16/11.2] sm:aspect-[16/10.5] lg:aspect-[16/11.5] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/health-safety/workplace-safety-dairy-farm.webp"
                alt="Merchants Agro Valley safety officers and livestock team in safety helmets and high-vis vests reviewing quality and safety checklist at modern facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* COLUMN 2 (RIGHT ON DESKTOP): Section Label, Heading, Description, 2x2 Grid & Highlighted Statement Card (Approx 45-48% width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Eyebrow Label with Green Leaf Icon */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="text-[#75B82A] shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#8A7A3B] tracking-[0.14em] uppercase font-sans">
                02. HEALTH & SAFETY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Workplace Safety &<br />Risk Prevention
            </h2>

            {/* Introductory Description */}
            <p className="font-sans text-[#3D5648] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We proactively identify, assess and control workplace risks to prevent
              accidents, injuries and operational disruptions across all our facilities.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {WORKPLACE_SAFETY_CARDS.map((card, idx) => (
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
                  className="bg-white rounded-2xl border border-[#E4ECE7] p-5 sm:p-5.5 flex flex-col items-start shadow-[0_4px_18px_rgba(1,61,38,0.03)] hover:shadow-[0_8px_24px_rgba(1,61,38,0.07)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  {/* Feature Icon Container */}
                  <div className="mb-3.5 group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-sans font-bold text-[#013D26] text-[15.5px] sm:text-[16.5px] leading-snug mb-1.5">
                    {card.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="font-sans text-[#526B5D] text-[13px] sm:text-[13.5px] leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* HIGHLIGHTED STATEMENT CARD (Light Green Background with Target Check Icon) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 sm:mt-5 w-full bg-[#EBF4ED] border border-[#CDE3D5] rounded-2xl p-4 sm:p-4.5 flex items-center shadow-[0_4px_14px_rgba(1,61,38,0.04)]"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#C2DACB] flex items-center justify-center shrink-0 text-[#013D26]">
                <TargetCheckIcon className="w-6 h-6 text-[#75B82A]" />
              </div>
              <div
                className="w-[1.5px] h-7 bg-[#013D26]/20 mx-3.5 sm:mx-4 shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans font-bold text-[#013D26] text-[15px] sm:text-[16px] leading-tight">
                A Proactive and Risk-Free Workplace for Everyone.
              </span>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
