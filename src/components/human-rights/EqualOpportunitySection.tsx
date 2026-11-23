"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons faithfully matching the reference design
function GenderEqualityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* 4 People silhouettes in harmony */}
      <circle cx="18" cy="9" r="3" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="10" cy="12" r="2.4" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="12" r="2.4" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M12 25c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 26c0-2.8 2.2-5 5-5M31 26c0-2.8-2.2-5-5-5"
        stroke="#013D26"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 29h6M16 32h4"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DiversityInclusionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Central diverse group */}
      <circle cx="18" cy="10" r="3" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="11" cy="13" r="2.2" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="25" cy="13" r="2.2" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M13 22c0-2.8 2.2-5 5-5s5 2.2 5 5"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Supporting Hands Embracing Diversity */}
      <path
        d="M6 21c2.5 0 4.5 1.5 5.5 3.5l2.5 4.5M30 21c-2.5 0-4.5 1.5-5.5 3.5l-2.5 4.5"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 29h8"
        stroke="#C99B36"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FairEmploymentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Scales of Justice & Fairness */}
      <path
        d="M18 5v23M12 28h12"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 11l10-2 10 2"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Left Pan */}
      <path
        d="M8 11l-3 7h6l-3-7z"
        stroke="#013D26"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5 21a4 4 0 0 0 8 0"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Right Pan */}
      <path
        d="M28 11l-3 7h6l-3-7z"
        stroke="#013D26"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M25 21a4 4 0 0 0 8 0"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RespectForAllIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* People Group with Open Embracing Hands */}
      <circle cx="18" cy="11" r="3.2" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="11" cy="13" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="25" cy="13" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M9 25c0-3.5 3-6 9-6s9 2.5 9 6"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 23c2.5 0 5 1.5 6 4M31 23c-2.5 0-5 1.5-6 4"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 28c1 1.5 3 2 3 2s2-.5 3-2"
        stroke="#C99B36"
        strokeWidth="1.8"
        strokeLinecap="round"
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

const EQUAL_OPPORTUNITY_CARDS: FeatureCard[] = [
  {
    id: "gender-equality",
    title: "Gender Equality",
    description: "Ensure fair, inclusive and equal opportunities for all.",
    icon: <GenderEqualityIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "diversity-inclusion",
    title: "Diversity & Inclusion",
    description: "Value different backgrounds, perspectives and experiences.",
    icon: <DiversityInclusionIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "fair-employment",
    title: "Fair Employment",
    description: "Recruit, develop and reward based on merit and performance.",
    icon: <FairEmploymentIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "respect-for-all",
    title: "Respect for All",
    description: "Foster a culture of dignity, trust and mutual respect.",
    icon: <RespectForAllIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function EqualOpportunitySection() {
  return (
    <section
      id="equal-opportunity"
      aria-label="Equal Opportunity and Non-Discrimination"
      className="relative w-full bg-white text-[#193B28] py-14 sm:py-18 lg:py-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(117, 184, 42, 0.035) 0%, transparent 40%), radial-gradient(circle at 15% 85%, rgba(201, 155, 54, 0.03) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Label, Heading, Description & 2x2 Grid (Approx 45-48% width) */}
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
                02. HUMAN RIGHTS & ETHICAL RESPONSIBILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Equal Opportunity &<br />Non-Discrimination
            </h2>

            {/* Introductory Description */}
            <p className="font-sans text-[#3D5648] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-10">
              We are committed to providing equal opportunities and a workplace
              free from discrimination, where everyone is valued, respected and can
              grow based on merit and capability.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {EQUAL_OPPORTUNITY_CARDS.map((card, idx) => (
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
          </motion.div>

          {/* RIGHT COLUMN: LARGE WORKFORCE PHOTOGRAPH WITH REFINED GREEN & GOLD ACCENTS (Approx 52-55% width) */}
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

            {/* Main Featured Photo Container with balanced height */}
            <div className="relative w-full aspect-[16/11] sm:aspect-[16/10.5] lg:aspect-[16/11.5] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/human-rights/equal-opportunity-workforce.webp"
                alt="Merchants Agro Valley diverse, proud team of Bangladeshi workers and professionals demonstrating equal opportunity in modern agro facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
