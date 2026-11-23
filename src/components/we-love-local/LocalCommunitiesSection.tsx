"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons faithfully matching the reference design
function FarmerSproutIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Farmer Silhouette with hat */}
      <path
        d="M10 13c0-3 3.5-5 8-5s8 2 8 5"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6 13h24"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="3.2" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M11 29c0-3.5 3-6 7-6s7 2.5 7 6"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Growing seedling / sprout beside farmer */}
      <path
        d="M27 29v-6"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M27 23c-2.5 0-4-1.8-4-3.5 2.5 0 4 1.5 4 3.5z"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M27 23c2.5 0 4-1.8 4-3.5-2.5 0-4 1.5-4 3.5z"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityEmpowermentIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Diverse group silhouettes representing women, youth and local community */}
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
      <circle cx="18" cy="29" r="1.5" fill="#75B82A" />
    </svg>
  );
}

function MarketConnectionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-9 h-9"}
      aria-hidden="true"
    >
      {/* Delivery vehicle connecting to wider domestic & international markets */}
      <path
        d="M6 11h14v13H6z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="M20 16h5l4 4v4h-9v-8z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="25" r="2.5" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="24" cy="25" r="2.5" stroke="#013D26" strokeWidth="2" fill="none" />
      {/* Green eco leaf on the truck cargo */}
      <path
        d="M11 19c3.5-3.5 5.5-2.5 5.5-2.5s-.5 3-3.5 4-2-.5-2-1.5z"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhilosophyLeafIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Caring hands holding green sprout */}
      <path
        d="M5 25c3-1 6 0 9 2l5 2c3 1 7-1 8-4M5 25v4c4 0 7 2 10 2h6"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 8C19 8 16 14 16 20c5 0 10-4 10-12z"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 20l5-5" stroke="#75B82A" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function LocalCommunitiesSection() {
  return (
    <section
      id="local-communities"
      aria-label="Our Commitment to Local Communities"
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
          
          {/* LEFT COLUMN: Section Label, Heading, 3 Content Paragraphs & Highlighted Statement Card (Approx 45-48% width) */}
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
                WE LOVE LOCAL
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-6 sm:mb-8">
              Our Commitment to<br />Local Communities
            </h1>

            {/* Three Content Paragraphs with Green SVG Icons */}
            <div className="flex flex-col space-y-5 sm:space-y-6 w-full max-w-xl">
              
              {/* Paragraph 1 */}
              <div className="flex items-start gap-4 sm:gap-4.5">
                <div className="shrink-0 pt-0.5">
                  <FarmerSproutIcon className="w-9 h-9 text-[#013D26]" />
                </div>
                <p className="font-sans text-[#3D5648] text-[14.5px] sm:text-[15.5px] leading-relaxed">
                  At Merchants AgroValley Ltd, we believe that sustainable business
                  growth begins with strong local communities. We are passionate about
                  supporting local farmers, empowering rural entrepreneurs, creating
                  employment opportunities and strengthening Bangladesh's agricultural
                  economy.
                </p>
              </div>

              {/* Paragraph 2 */}
              <div className="flex items-start gap-4 sm:gap-4.5">
                <div className="shrink-0 pt-0.5">
                  <CommunityEmpowermentIcon className="w-9 h-9 text-[#013D26]" />
                </div>
                <p className="font-sans text-[#3D5648] text-[14.5px] sm:text-[15.5px] leading-relaxed">
                  We are committed to developing local talent, encouraging women and
                  youth participation, promoting agricultural innovation and reducing
                  dependence on imported agricultural products through responsible
                  domestic production.
                </p>
              </div>

              {/* Paragraph 3 */}
              <div className="flex items-start gap-4 sm:gap-4.5">
                <div className="shrink-0 pt-0.5">
                  <MarketConnectionIcon className="w-9 h-9 text-[#013D26]" />
                </div>
                <p className="font-sans text-[#3D5648] text-[14.5px] sm:text-[15.5px] leading-relaxed">
                  We also aim to connect locally produced agricultural products with
                  wider domestic and international markets, creating new opportunities
                  for Bangladeshi producers and businesses.
                </p>
              </div>

            </div>

            {/* HIGHLIGHTED PHILOSOPHY STATEMENT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 sm:mt-8 w-full bg-[#EBF4ED] border border-[#CDE3D5] rounded-2xl p-4.5 sm:p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(1,61,38,0.04)]"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#C2DACB] flex items-center justify-center shrink-0 text-[#75B82A]">
                <PhilosophyLeafIcon className="w-7 h-7" />
              </div>
              <div
                className="w-[1.5px] h-10 bg-[#013D26]/20 shrink-0 hidden sm:block"
                aria-hidden="true"
              />
              <p className="font-sans font-bold text-[#013D26] text-[14.5px] sm:text-[15.5px] leading-snug">
                Our philosophy is simple: Think Local, Grow Together and Build a
                Sustainable Future for Bangladesh.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE AGRICULTURAL COMMUNITY PHOTOGRAPH WITH REFINED ACCENTS (Approx 52-55% width) */}
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
            <div className="relative w-full aspect-[16/11.5] sm:aspect-[16/11] lg:aspect-[16/11.8] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/we-love-local/local-community-partnership.webp"
                alt="Merchants Agro Valley company representative shaking hands with elderly Bangladeshi farmer in green agricultural crop field"
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
