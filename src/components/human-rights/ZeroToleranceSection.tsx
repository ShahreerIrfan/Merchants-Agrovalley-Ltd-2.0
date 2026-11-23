"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons faithfully matching the reference design
function NoChildLabourIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Adult Figure on left */}
      <circle cx="13" cy="11" r="3.2" stroke="#013D26" strokeWidth="2" fill="none" />
      <path
        d="M6 26c0-3.8 3.1-7 7-7s7 3.2 7 7"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Child Figure on right under caring protection */}
      <circle cx="24" cy="15" r="2.5" stroke="#75B82A" strokeWidth="2" fill="none" />
      <path
        d="M19.5 26c0-2.8 2-5 4.5-5s4.5 2.2 4.5 5"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoForcedLabourIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Top-right link */}
      <rect
        x="16"
        y="7"
        width="14"
        height="7"
        rx="3.5"
        transform="rotate(45 16 7)"
        stroke="#013D26"
        strokeWidth="2.2"
      />
      {/* Bottom-left link */}
      <rect
        x="7"
        y="16"
        width="14"
        height="7"
        rx="3.5"
        transform="rotate(45 7 16)"
        stroke="#013D26"
        strokeWidth="2.2"
      />
      {/* Break sparks / slash in middle */}
      <path
        d="M14 22l8-8"
        stroke="#75B82A"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoHumanTraffickingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Shield container */}
      <path
        d="M18 4L7 8.5v9c0 8 5 13 11 14.5 6-1.5 11-6.5 11-14.5v-9L18 4z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Protected people silhouettes inside */}
      <circle cx="18" cy="13" r="2.3" stroke="#75B82A" strokeWidth="1.8" />
      <circle cx="13" cy="15" r="1.6" stroke="#013D26" strokeWidth="1.5" />
      <circle cx="23" cy="15" r="1.6" stroke="#013D26" strokeWidth="1.5" />
      <path
        d="M14 23c0-2.2 1.8-3.8 4-3.8s4 1.6 4 3.8"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoHarassmentAbuseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Shield / Badge contour */}
      <path
        d="M18 4L7 8.5v9c0 8 5 13 11 14.5 6-1.5 11-6.5 11-14.5v-9L18 4z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Open Stop Hand inside */}
      <path
        d="M15 14v4M18 12.5v5.5M21 14v4M12.5 16.5v2.5c0 2.5 1.8 4.2 4.2 4.2h1.2c2.5 0 4.2-1.7 4.2-4.2v-3.5"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      className={className || "w-11 h-11"}
      aria-hidden="true"
    >
      {/* Document outline */}
      <path
        d="M9 7a2 2 0 0 1 2-2h14l8 8v19a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V7z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Folded corner */}
      <path d="M25 5v8h8" stroke="#013D26" strokeWidth="2.2" strokeLinejoin="round" />
      {/* Text lines */}
      <path d="M14 13h7M14 18h13M14 23h7" stroke="#75B82A" strokeWidth="2" strokeLinecap="round" />
      {/* Shield badge at bottom right */}
      <path
        d="M32 23l-7 3v6c0 5 3.5 8 7 9 3.5-1 7-4 7-9v-6l-7-3z"
        fill="#FAF8F4"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M29 32l2 2 4-4"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ZeroToleranceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ZERO_TOLERANCE_CARDS: ZeroToleranceCard[] = [
  {
    id: "no-child-labour",
    title: "No Child Labour",
    description: "Protecting children's rights and ensuring no child is employed in our operations.",
    icon: <NoChildLabourIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "no-forced-labour",
    title: "No Forced Labour",
    description: "Ensuring all employment is voluntary and free from coercion.",
    icon: <NoForcedLabourIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "no-human-trafficking",
    title: "No Human Trafficking",
    description: "Rejecting all forms of human trafficking and exploitation.",
    icon: <NoHumanTraffickingIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "no-harassment-abuse",
    title: "No Harassment & Abuse",
    description: "Maintaining a workplace free from harassment, intimidation and abuse.",
    icon: <NoHarassmentAbuseIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function ZeroToleranceSection() {
  return (
    <section
      id="zero-tolerance"
      aria-label="Zero Tolerance for Exploitation"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] py-14 sm:py-18 lg:py-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
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
          
          {/* LEFT COLUMN: Section Label, Heading, Description, 2x2 Grid & Highlighted Statement Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex flex-col items-start"
          >
            {/* Eyebrow Label with Green Leaf Icon */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="text-[#75B82A] shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#8A7A3B] tracking-[0.14em] uppercase font-sans">
                03. HUMAN RIGHTS & ETHICAL RESPONSIBILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Zero Tolerance for<br />Exploitation
            </h2>

            {/* Introductory Description */}
            <p className="font-sans text-[#3D5648] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We maintain zero tolerance for child labour, forced labour,
              trafficking, harassment, and exploitation across our
              operations and supply chains.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {ZERO_TOLERANCE_CARDS.map((card, idx) => (
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

            {/* HIGHLIGHTED HORIZONTAL STATEMENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 sm:mt-5 w-full bg-[#EBF4ED] border border-[#CDE3D5] rounded-2xl p-4 sm:p-4.5 flex items-center shadow-[0_4px_14px_rgba(1,61,38,0.04)]"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#C2DACB] flex items-center justify-center shrink-0 text-[#013D26]">
                <svg
                  className="w-5 h-5 text-[#013D26]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div
                className="w-[1.5px] h-7 bg-[#013D26]/20 mx-3.5 sm:mx-4 shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans font-bold text-[#013D26] text-[15px] sm:text-[16px] leading-tight">
                Safe, Fair and Dignified Workplaces
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE WORKPLACE PHOTOGRAPH WITH FLOATING POLICY CARD (Approx 52-55% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-7 w-full flex flex-col justify-center relative"
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

            {/* Main Featured Photo Container with balanced height & relative positioning */}
            <div className="relative w-full aspect-[16/11.5] sm:aspect-[16/11] lg:aspect-[16/12] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/human-rights/zero-tolerance-workplace.webp"
                alt="Merchants Agro Valley professional team in modern guava packing facility exemplifying safe, fair and dignified workplaces"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* FLOATING POLICY CARD (Positioned neatly over the lower portion of the image on desktop/tablet) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="absolute bottom-3 right-3 left-3 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-[460px] bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#E0EBE4] shadow-[0_12px_36px_rgba(1,61,38,0.14)] z-20"
              >
                <div className="flex items-start gap-3.5 sm:gap-4">
                  {/* Document & Shield Icon */}
                  <div className="shrink-0 pt-0.5">
                    <DocumentShieldIcon className="w-10 h-10 text-[#013D26]" />
                  </div>

                  {/* Vertical Separator */}
                  <div
                    className="w-[1.5px] h-11 bg-[#013D26]/15 shrink-0 hidden sm:block mt-0.5"
                    aria-hidden="true"
                  />

                  {/* Policy Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans font-bold text-[#013D26] text-[16px] sm:text-[17px] leading-tight mb-1">
                      Zero Tolerance Policy
                    </h4>
                    <p className="font-sans text-[#4A6455] text-[12.5px] sm:text-[13px] leading-relaxed">
                      A clear, company-wide policy with training, monitoring and grievance channels to prevent and address exploitation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
