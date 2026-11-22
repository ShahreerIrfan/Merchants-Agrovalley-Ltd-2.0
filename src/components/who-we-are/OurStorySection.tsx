"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout, ShieldCheck, Globe } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    id: "responsible-growth",
    title: "Responsible Growth",
    description: "Sustainable agricultural development and responsible business practices.",
    icon: <Sprout className="w-7 h-7 sm:w-8 sm:h-8 text-[#013D26] shrink-0" />,
  },
  {
    id: "quality-integrity",
    title: "Quality & Integrity",
    description: "Quality-focused operations, safety and business integrity.",
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#013D26] shrink-0" />,
  },
  {
    id: "global-ambition",
    title: "Global Ambition",
    description: "Building partnerships and connecting our products with wider markets.",
    icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[#013D26] shrink-0" />,
  },
];

export default function OurStorySection() {
  return (
    <section
      id="our-story-and-purpose"
      aria-label="Our Story & Purpose"
      className="relative w-full bg-[#FAF8F2] text-[#193B28] overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-[#E8E2D5] selection:bg-[#C9A13B]/20 selection:text-[#013D26]"
    >
      {/* 1. SUBTLE BACKGROUND ORGANIC CONTOUR & AGRICULTURAL ACCENTS */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 40% 10%, rgba(255, 255, 255, 0.85) 0%, rgba(250, 248, 242, 0.95) 55%, #F4EFE2 100%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Wheat Stalks Watermark in Bottom Left */}
      <div
        className="absolute bottom-0 left-0 w-[240px] sm:w-[320px] lg:w-[400px] pointer-events-none select-none z-0 opacity-25"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M-20 280 C 60 230 120 160 140 70" stroke="#C9A13B" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M-20 280 C 90 240 160 180 200 100" stroke="#4F8226" strokeWidth="2.5" />
          <path d="M-20 280 C 130 260 220 210 270 150" stroke="#C9A13B" strokeWidth="1.8" />
          <ellipse cx="140" cy="70" rx="6" ry="12" transform="rotate(20 140 70)" fill="#C9A13B" opacity="0.7" />
          <ellipse cx="132" cy="88" rx="6" ry="12" transform="rotate(-15 132 88)" fill="#4F8226" opacity="0.6" />
          <ellipse cx="200" cy="100" rx="7" ry="14" transform="rotate(25 200 100)" fill="#C9A13B" opacity="0.7" />
          <ellipse cx="190" cy="120" rx="7" ry="14" transform="rotate(-20 190 120)" fill="#4F8226" opacity="0.6" />
          <ellipse cx="270" cy="150" rx="7" ry="13" transform="rotate(35 270 150)" fill="#C9A13B" opacity="0.7" />
        </svg>
      </div>

      {/* Decorative Farmland Silo Silhouette in Bottom Right */}
      <div
        className="absolute bottom-0 right-0 w-[260px] sm:w-[360px] lg:w-[460px] pointer-events-none select-none z-0 opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 160 Q 150 145 280 130 T 400 150 L 400 160 Z" fill="#013D26" opacity="0.15" />
          {/* Silos and barn outline */}
          <path d="M220 135 V 95 A 12 12 0 0 1 244 95 V 135 M244 135 V 90 A 14 14 0 0 1 272 90 V 135" stroke="#013D26" strokeWidth="1.5" />
          <path d="M280 135 V 105 L 305 90 L 330 105 V 135 Z" stroke="#013D26" strokeWidth="1.5" />
          <circle cx="345" cy="118" r="8" stroke="#013D26" strokeWidth="1.2" />
          <circle cx="365" cy="115" r="10" stroke="#013D26" strokeWidth="1.2" />
        </svg>
      </div>

      {/* 2. MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        {/* TOP ROW: LEFT CONTENT & RIGHT IMAGE GALLERY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: STORY & PURPOSE CONTENT (Span 6 on LG) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                OUR STORY & PURPOSE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl xs:text-4xl sm:text-[44px] md:text-[48px] lg:text-[46px] xl:text-[52px] font-bold leading-[1.15] tracking-tight text-[#013D26]"
            >
              Building a Sustainable
              <br />
              Agro-Industrial Future
            </motion.h2>

            {/* Description - Paragraph 1 */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-[15px] sm:text-[16px] xl:text-[16.5px] text-[#42584C] leading-relaxed max-w-xl mt-4 sm:mt-5 font-normal"
            >
              Merchants Agro Valley is committed to building a connected agro-industrial
              ecosystem that brings together agricultural production, livestock, food
              processing, renewable energy and international trade.
            </motion.p>

            {/* Description - Paragraph 2 */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
              className="font-sans text-[15px] sm:text-[16px] xl:text-[16.5px] text-[#42584C] leading-relaxed max-w-xl mt-3 sm:mt-3.5 font-normal"
            >
              Through responsible operations, quality-focused practices and strategic
              development, we aim to create sustainable value for communities, partners and
              global markets.
            </motion.p>

            {/* CTA Button: "Discover Our Business →" */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
              className="mt-7 sm:mt-8"
            >
              <Link
                href="/#portfolio"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#013D26] hover:bg-[#005030] text-white font-semibold text-[14px] sm:text-[15px] shadow-[0_4px_14px_rgba(1,61,38,0.22)] hover:shadow-[0_6px_20px_rgba(201,161,59,0.25)] transition-all duration-200 group cursor-pointer"
              >
                <span>Discover Our Business</span>
                <ArrowRight className="w-4 h-4 text-[#C9A13B] transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: RECTANGULAR IMAGE COMPOSITION (Span 6 on LG) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-3 sm:gap-3.5"
          >
            {/* Top Main Image: Aerial Agro-Industrial Facility */}
            <div className="relative w-full aspect-[16/6.8] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(1,61,38,0.12)] border border-[#E5E0D5] bg-white group">
              <Image
                src="/assets/who-we-are/story/facility-story.webp"
                alt="Merchants Agro Valley modern agro-industrial facility with rooftop solar panels, silos, and farmland at golden hour"
                fill
                priority
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Bottom Row: Two Supporting Images */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {/* 1. Bangladeshi Farmer in Green Field */}
              <div className="relative aspect-[16/7.5] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(1,61,38,0.06)] border border-[#E5E0D5] bg-white group">
                <Image
                  src="/assets/who-we-are/story/farmer.webp"
                  alt="Bangladeshi farmer examining crop leaves in vibrant green agricultural field"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* 2. Modern Food Processing Bottling Line */}
              <div className="relative aspect-[16/7.5] rounded-lg sm:rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(1,61,38,0.06)] border border-[#E5E0D5] bg-white group">
                <Image
                  src="/assets/who-we-are/story/bottling.webp"
                  alt="Food quality technician inspecting bottled produce on stainless steel conveyor in modern hygienic bottling plant"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3. BOTTOM ROW: THREE COMPANY PILLARS */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-14 sm:mt-18 lg:mt-20 pt-2"
        >
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-3 xl:gap-4 justify-between">
            {PILLARS.map((pillar, index) => (
              <React.Fragment key={pillar.id}>
                {/* Individual Pillar Card */}
                <div className="flex-1 flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-[#F1F6EC]/90 border border-[#D7E3D0] hover:bg-white hover:border-[#C9A13B]/70 hover:shadow-[0_8px_24px_rgba(1,61,38,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                  {/* Pillar Icon */}
                  <div className="shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>

                  {/* Pillar Content */}
                  <div className="flex flex-col">
                    <h3 className="font-sans text-[16px] sm:text-[17px] font-bold text-[#013D26] leading-tight mb-1.5 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#42584C] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Gold Vertical Separator on Desktop */}
                {index < PILLARS.length - 1 && (
                  <div
                    className="hidden lg:block w-[1.5px] h-10 bg-[#C9A13B]/70 self-center shrink-0 mx-1"
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
