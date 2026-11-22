"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    id: "responsible-growth",
    title: "Responsible Growth",
    description: "Sustainable agricultural development and responsible business practices.",
    icon: <Sprout className="w-6 h-6 text-[#013D26]" />,
  },
  {
    number: "02",
    id: "quality-integrity",
    title: "Quality & Integrity",
    description: "Quality-focused operations, safety and business integrity.",
    icon: <ShieldCheck className="w-6 h-6 text-[#013D26]" />,
  },
  {
    number: "03",
    id: "global-ambition",
    title: "Global Ambition",
    description: "Building partnerships and connecting our products with wider markets.",
    icon: <Globe className="w-6 h-6 text-[#013D26]" />,
  },
];

export default function OurStorySection() {
  return (
    <section
      id="our-story-and-purpose"
      aria-label="Our Story & Purpose"
      className="relative w-full bg-[#F3F7EE] text-[#193B28] overflow-hidden py-16 sm:py-20 lg:py-24 border-t-2 border-[#C9A13B]/40 selection:bg-[#C9A13B]/20 selection:text-[#013D26] shadow-[0_-4px_20px_rgba(201,161,59,0.06)]"
    >
      {/* 1. TOP GOLD ACCENT LINE TO DISTINGUISH FROM SECTION 1 */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A13B] to-transparent z-20"
        aria-hidden="true"
      />

      {/* 2. SOFT SAGE-TINTED BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(243, 247, 238, 0.95) 50%, #E7EFE1 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle Topographical Field Contour Lines (Distinct from Section 1 wheat) */}
      <div
        className="absolute bottom-0 right-0 w-[350px] sm:w-[500px] lg:w-[650px] pointer-events-none select-none z-0 opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 650 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 250 C 180 230 320 270 450 220 C 540 180 600 210 650 170" stroke="#013D26" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M0 280 C 150 250 280 290 420 250 C 520 220 580 240 650 200" stroke="#C9A13B" strokeWidth="1.5" />
          <path d="M50 300 C 220 270 380 300 500 270 C 580 250 620 260 650 230" stroke="#4F8226" strokeWidth="2" />
        </svg>
      </div>

      {/* 3. MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* ALTERNATING TWO-COLUMN COMPOSITION: IMAGES ON LEFT, STORY CONTENT ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 xl:gap-16 items-center">
          
          {/* LEFT: UNIQUE HUMAN-CENTRIC PHOTOGRAPHY SHOWCASE (Span 6 on LG) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4 order-2 lg:order-1"
          >
            {/* Primary Featured Card: Bangladeshi Farmer in Lush Field (HD) */}
            <div className="relative w-full aspect-[16/8.5] rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(1,61,38,0.12)] border border-[#D5E1CE] bg-white group">
              <Image
                src="/assets/who-we-are/story/farmer-hd.webp"
                alt="Bangladeshi farmer examining healthy crop leaves in vibrant green agricultural field"
                fill
                priority
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge overlay on farmer photo */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white text-[13px] sm:text-[14px]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A13B]" />
                  <span className="font-semibold tracking-wide drop-shadow-sm">Rooted in Sustainable Farming</span>
                </div>
                <span className="text-[12px] bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 font-medium">
                  Field Operations
                </span>
              </div>
            </div>

            {/* Bottom Row: Companion Facility Photos (HD) */}
            <div className="grid grid-cols-2 gap-3.5">
              {/* Bottling Plant Photo (HD) */}
              <div className="relative aspect-[16/9.5] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(1,61,38,0.06)] border border-[#D5E1CE] bg-white group">
                <Image
                  src="/assets/who-we-are/story/bottling-hd.webp"
                  alt="Modern hygienic food processing and bottling facility"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2.5 bg-[#013D26]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded border border-white/20">
                  Hygienic Processing
                </div>
              </div>

              {/* Newly Generated Agro Complex Photo (HD) */}
              <div className="relative aspect-[16/9.5] rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(1,61,38,0.06)] border border-[#D5E1CE] bg-white group">
                <Image
                  src="/assets/who-we-are/story/complex-hd.webp"
                  alt="Modern futuristic agro-industrial facility with biodomes, silos and solar rooftops"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2.5 bg-[#013D26]/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded border border-white/20">
                  Agro Ecosystem
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: STORY & PURPOSE CONTENT (Span 6 on LG) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 mb-4 sm:mb-5"
            >
              <div
                className="w-7 h-7 rounded-full bg-[#E4EFE0] border border-[#6E9C23]/35 flex items-center justify-center text-[#013D26] shadow-2xs"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 fill-[#6E9C23]/25"
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
              className="font-serif text-3xl xs:text-4xl sm:text-[44px] md:text-[48px] lg:text-[44px] xl:text-[50px] font-bold leading-[1.16] tracking-tight text-[#013D26]"
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
              className="font-sans text-[15px] sm:text-[16px] xl:text-[16.5px] text-[#3F5448] leading-relaxed max-w-xl mt-4 sm:mt-5 font-normal"
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
              className="font-sans text-[15px] sm:text-[16px] xl:text-[16.5px] text-[#3F5448] leading-relaxed max-w-xl mt-3 sm:mt-3.5 font-normal"
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

        </div>

        {/* 4. THREE COMPANY PILLARS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-14 sm:mt-18 lg:mt-20 pt-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="relative flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#D5E1CE] shadow-[0_4px_16px_rgba(1,61,38,0.04)] hover:border-[#C9A13B]/70 hover:shadow-[0_10px_28px_rgba(201,161,59,0.12)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              >
                {/* Subtle top gold accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A13B]/50 to-transparent group-hover:via-[#C9A13B] transition-colors" />

                {/* Pillar Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-[#EFF5EA] border border-[#D0E2C7] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#E2EFD9] group-hover:border-[#C9A13B]/50 transition-colors duration-300">
                  {pillar.icon}
                </div>

                {/* Pillar Text */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#C9A13B] tracking-wider uppercase">
                      {pillar.number}
                    </span>
                    <h3 className="font-sans text-[16px] sm:text-[17px] font-bold text-[#013D26] leading-tight tracking-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#4A5E53] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
