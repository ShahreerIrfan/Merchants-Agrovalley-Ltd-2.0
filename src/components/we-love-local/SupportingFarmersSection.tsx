"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons faithfully matching the reference design
function FarmerSupportIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      {/* Supporting Hand */}
      <path
        d="M6 25c3-1 6 0 9 2l5 2c3 1 7-1 8-4M6 25v4c4 0 7 2 10 2h6"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Green Leaf */}
      <path
        d="M26 8C19 8 16 14 16 20c5 0 10-4 10-12z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 20l5-5" stroke="#75B82A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function RuralEntrepreneurshipIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <circle cx="18" cy="11" r="3.2" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="10" cy="14" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="14" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M12 26c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M5 27c0-2.8 2.2-5 5-5M31 27c0-2.8-2.2-5-5-5"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarketAccessIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      {/* Chart Base Line */}
      <path d="M6 28h24" stroke="#013D26" strokeWidth="2" strokeLinecap="round" />
      <rect x="9" y="19" width="4" height="9" rx="1" fill="#75B82A" />
      <rect x="16" y="14" width="4" height="14" rx="1" fill="#013D26" />
      <rect x="23" y="9" width="4" height="19" rx="1" fill="#75B82A" />
      {/* Trending Upward Arrow */}
      <path
        d="M8 17l6-6 6 4 8-8M24 7h4v4"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SustainableGrowthIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-7 h-7"}
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="13" stroke="#013D26" strokeWidth="2" fill="none" />
      {/* Seedling Stem & Leaves */}
      <path d="M18 25V14" stroke="#75B82A" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M18 17c-3-3-6-2-6-2s0 3 3 4c2 .7 3-2 3-2zM18 15c3-3 6-2 6-2s0 3-3 4c-2 .7-3-2-3-2z"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function RuralFarmsteadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      className={className || "w-14 h-14"}
      aria-hidden="true"
    >
      {/* Rural Cottage Farmhouse */}
      <path
        d="M20 26l6-5 6 5v8H20v-8z"
        stroke="#C99B36"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="#C99B36"
        fillOpacity="0.25"
      />
      <path d="M24 34v-5h4v5" stroke="#C99B36" strokeWidth="1.8" strokeLinejoin="round" />
      {/* Rural Trees */}
      <path d="M13 34v-12M39 34v-12" stroke="#78B82A" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M13 22c-3-2-5-1-6 1M13 22c-2-3-4-3-6-2M13 22c2-3 4-3 6-2M13 22c3-2 5-1 6 1"
        stroke="#78B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M39 22c-3-2-5-1-6 1M39 22c-2-3-4-3-6-2M39 22c2-3 4-3 6-2M39 22c3-2 5-1 6 1"
        stroke="#78B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tilled Crop Furrows in Foreground */}
      <path
        d="M8 40c10-3 24-3 36 0M11 44c8-2.5 22-2.5 30 0"
        stroke="#C99B36"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SUPPORTING_FARMER_FEATURES: FeatureItem[] = [
  {
    id: "farmer-support",
    title: "Farmer Support",
    description: "Access to quality inputs, training and technical advice.",
    icon: <FarmerSupportIcon className="w-7 h-7" />,
  },
  {
    id: "rural-entrepreneurship",
    title: "Rural Entrepreneurship",
    description: "Empowering small and rural businesses to grow.",
    icon: <RuralEntrepreneurshipIcon className="w-7 h-7" />,
  },
  {
    id: "market-access",
    title: "Market Access",
    description: "Connecting farmers to better and wider markets.",
    icon: <MarketAccessIcon className="w-7 h-7" />,
  },
  {
    id: "sustainable-growth",
    title: "Sustainable Growth",
    description: "Building long-term, inclusive and resilient rural economies.",
    icon: <SustainableGrowthIcon className="w-7 h-7" />,
  },
];

export default function SupportingFarmersSection() {
  return (
    <section
      id="supporting-local-farmers"
      aria-label="Supporting Local Farmers & Rural Entrepreneurs"
      className="relative w-full bg-white text-[#193B28] py-14 sm:py-18 lg:py-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 15%, rgba(117, 184, 42, 0.035) 0%, transparent 40%), radial-gradient(circle at 85% 85%, rgba(201, 155, 54, 0.03) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP (IMAGE LEFT, CONTENT RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* COLUMN 1 (LEFT ON DESKTOP): LARGE AGRICULTURAL PHOTOGRAPH WITH ACCENTS (Approx 45-48% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 w-full flex flex-col justify-center relative order-2 lg:order-1"
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
            <div className="relative w-full aspect-[16/11.5] sm:aspect-[16/11] lg:aspect-[16/11.5] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/we-love-local/supporting-local-farmers.webp"
                alt="Elderly Bangladeshi farmer holding fresh leafy vegetables and discussing production with young agricultural business representative"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* COLUMN 2 (RIGHT ON DESKTOP): Section Label, Heading, Description, 2x2 Grid & Dark Forest Green Panel (Approx 52-55% width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start order-1 lg:order-2"
          >
            {/* Eyebrow Label with Green Leaf Icon */}
            <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
              <span className="text-[#75B82A] shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#8A7A3B] tracking-[0.14em] uppercase font-sans">
                WE LOVE LOCAL
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[42px] xl:text-[48px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-2 sm:mb-3">
              Supporting Local Farmers &<br />Rural Entrepreneurs
            </h2>

            {/* Subtle Gold Accent Line */}
            <div className="w-12 h-[2.5px] bg-[#C99B36] rounded-full my-3 sm:my-3.5" />

            {/* Introductory Paragraph */}
            <p className="font-sans text-[#3D5648] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We work closely with local farmers and rural entrepreneurs to
              build a stronger, more resilient and self-reliant agricultural
              value chain in Bangladesh.
            </p>

            {/* Four Feature Blocks in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full mb-8 sm:mb-9">
              {SUPPORTING_FARMER_FEATURES.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + idx * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-3.5 sm:gap-4 group"
                >
                  {/* Feature Icon with soft light green box */}
                  <div className="w-13 h-13 rounded-2xl bg-[#EBF4ED] border border-[#D7E9DD] flex items-center justify-center shrink-0 p-2.5 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>

                  {/* Feature Title and Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans font-bold text-[#013D26] text-[15.5px] sm:text-[16.5px] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#526B5D] text-[13px] sm:text-[13.5px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* PROMINENT DARK FOREST-GREEN COMMITMENT STATEMENT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="w-full bg-[#00452C] rounded-[24px] sm:rounded-full p-4 sm:p-4.5 sm:px-6 flex flex-col sm:flex-row items-center gap-4 text-white shadow-[0_10px_28px_rgba(0,69,44,0.18)] border border-[#015233]"
            >
              {/* Agricultural Illustration / Rural House & Trees */}
              <div className="shrink-0">
                <RuralFarmsteadIcon className="w-13 h-13 text-[#C99B36]" />
              </div>

              {/* Vertical Divider */}
              <div
                className="w-[1.5px] h-10 bg-white/20 shrink-0 hidden sm:block"
                aria-hidden="true"
              />

              {/* Commitment Text */}
              <p className="font-sans font-medium text-white text-[14px] sm:text-[15px] leading-snug text-center sm:text-left">
                Together with our farming communities, we create shared value,
                better livelihoods and a stronger agricultural future for
                Bangladesh.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
