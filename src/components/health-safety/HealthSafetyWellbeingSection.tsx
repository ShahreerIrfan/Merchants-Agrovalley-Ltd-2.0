"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons matching the reference design exactly
function HardHatSafetyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
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

function SafeOperationsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      <path
        d="M18 4L7 8.5v9c0 8 5 13 11 14.5 6-1.5 11-6.5 11-14.5v-9L18 4z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 18l3.5 3.5 7-7"
        stroke="#75B82A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SharedResponsibilityIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      <circle cx="18" cy="10" r="3" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="10" cy="13" r="2.4" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="13" r="2.4" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <path
        d="M12 25c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="#013D26"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 26c0-2.8 2.2-5 5-5M31 26c0-2.8-2.2-5-5-5"
        stroke="#75B82A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SustainableFutureIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      <path
        d="M27 9C16 9 9 16 9 27c11 0 18-7 18-18z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 27l9-9"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
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

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HEALTH_SAFETY_CARDS: FeatureCard[] = [
  {
    id: "people-first",
    title: "People First",
    description: "We put the safety and wellbeing of our people at the centre of everything we do.",
    icon: <HardHatSafetyIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "safe-operations",
    title: "Safe Operations",
    description: "We follow strict safety standards to prevent risks and ensure safe operations.",
    icon: <SafeOperationsIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "shared-responsibility",
    title: "Shared Responsibility",
    description: "Health and safety is a collective effort — from our team to our partners and communities.",
    icon: <SharedResponsibilityIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "sustainable-future",
    title: "A Sustainable Future",
    description: "A safer workplace today builds a healthier, more sustainable tomorrow.",
    icon: <SustainableFutureIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function HealthSafetyWellbeingSection() {
  return (
    <section
      id="health-safety-wellbeing"
      aria-label="Health, Safety & Wellbeing"
      className="relative w-full bg-[#FAF8F4] text-[#193B28] py-14 sm:py-18 lg:py-24 overflow-hidden selection:bg-[#C99B36]/20 selection:text-[#013D26]"
    >
      {/* Subtle Warm Gradient Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(201, 155, 54, 0.04) 0%, transparent 45%), radial-gradient(circle at 90% 80%, rgba(1, 61, 38, 0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        
        {/* TWO-COLUMN LAYOUT ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Section Label, Heading, Exact Description, 2x2 Grid & Highlighted Commitment Card (Approx 50% width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow Label with Green Leaf Icon */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="text-[#75B82A] shrink-0" aria-hidden="true">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#8A7A3B] tracking-[0.14em] uppercase font-sans">
                01. HEALTH & SAFETY
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Health, Safety & Wellbeing
            </h1>

            {/* Complete Official Description Paragraphs (100% exact text from prompt) */}
            <div className="font-sans text-[#3D5648] text-[14.5px] sm:text-[15.5px] leading-relaxed max-w-xl font-normal space-y-3.5 mb-8 sm:mb-9">
              <p>
                Merchants AgroValley Ltd places the highest priority on the
                health, safety and wellbeing of its employees, workers, customers,
                business partners, surrounding communities and animals. We are
                committed to maintaining a safe, hygienic and healthy working
                environment across all our agricultural, farming, manufacturing,
                processing and operational facilities.
              </p>
              <p>
                We are equally committed to maintaining high standards of food
                safety and hygiene across poultry, livestock, dairy, meat, fish and
                other food-processing activities, ensuring that our products meet
                applicable national regulations and relevant international
                standards.
              </p>
            </div>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {HEALTH_SAFETY_CARDS.map((card, idx) => (
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

            {/* HIGHLIGHTED COMMITMENT STATEMENT CARD (Visually distinctive green-tinted card) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 sm:mt-5 w-full bg-[#EBF4ED] border border-[#CDE3D5] rounded-2xl p-4.5 sm:p-5 flex items-start gap-4 shadow-[0_4px_16px_rgba(1,61,38,0.04)]"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[#C2DACB] flex items-center justify-center shrink-0 text-[#013D26] mt-0.5">
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
                className="w-[1.5px] h-10 bg-[#013D26]/20 shrink-0 hidden sm:block mt-0.5"
                aria-hidden="true"
              />
              <p className="font-sans font-semibold text-[#013D26] text-[14px] sm:text-[15px] leading-snug">
                Our commitment is to create a safer, healthier and more responsible
                agro-industrial environment where people, animals and communities
                are protected and wellbeing comes first.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE WORKPLACE PHOTOGRAPH WITH FLOATING POLICY CARD (Approx 50% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-6 w-full flex flex-col justify-center relative"
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
            <div className="relative w-full aspect-[16/11.5] sm:aspect-[16/11] lg:aspect-[16/11.5] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-[0_16px_46px_rgba(1,61,38,0.12)] border border-[#E1ECE4] bg-white group">
              <Image
                src="/assets/health-safety/health-safety-team.webp"
                alt="Merchants Agro Valley Bangladeshi operations supervisor, quality lead in hijab, and engineering team collaborating with safety gear and tablet"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
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
                      Our Health & Safety Policy
                    </h4>
                    <p className="font-sans text-[#4A6455] text-[12.5px] sm:text-[13px] leading-relaxed">
                      We maintain clear policies, continuous training and regular monitoring to ensure safe and healthy working conditions for all.
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
