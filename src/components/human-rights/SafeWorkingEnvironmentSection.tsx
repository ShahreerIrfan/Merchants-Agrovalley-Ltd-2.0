"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Custom polished SVG icons faithfully matching the reference design
function WorkplaceSafetyIcon({ className }: { className?: string }) {
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

function HealthWellbeingIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Heart Contour */}
      <path
        d="M18 29.5l-1.5-1.3C8.5 21 4.5 17.2 4.5 12 4.5 7.8 7.8 4.5 12 4.5c2.4 0 4.7 1.1 6 3 1.3-1.9 3.6-3 6-3 4.2 0 7.5 3.3 7.5 7.5 0 5.2-4 9-12 16.2L18 29.5z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dynamic Health Pulse Line */}
      <path
        d="M8.5 13h4l2-4 3.5 8 2.5-4h7"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FairWorkingConditionsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Mutual Fair Handshake Symbol */}
      <path
        d="M8 15l4.5-4 6 5 3.5-3 6 5-4.5 4.5-3.5-3-3.5 3-8.5-7.5z"
        stroke="#013D26"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19l4 4 5-3M31 19l-4 4-5-3"
        stroke="#75B82A"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 21l2 2 4-2 3 2 3-2"
        stroke="#013D26"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WorkerSupportIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className || "w-8 h-8"}
      aria-hidden="true"
    >
      {/* Worker Team Group Silhouettes */}
      <circle cx="18" cy="10" r="3.2" stroke="#013D26" strokeWidth="2" fill="none" />
      <circle cx="10" cy="13" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
      <circle cx="26" cy="13" r="2.5" stroke="#013D26" strokeWidth="1.8" fill="none" />
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
      <circle cx="18" cy="28.5" r="1.5" fill="#75B82A" />
    </svg>
  );
}

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SAFE_WORKING_CARDS: FeatureCard[] = [
  {
    id: "workplace-safety",
    title: "Workplace Safety",
    description: "Identify risks, apply safety measures and prevent accidents.",
    icon: <WorkplaceSafetyIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "health-wellbeing",
    title: "Health & Wellbeing",
    description: "Support physical and mental health at the workplace.",
    icon: <HealthWellbeingIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "fair-working-conditions",
    title: "Fair Working Conditions",
    description: "Ensure reasonable working hours, fair pay and rest breaks.",
    icon: <FairWorkingConditionsIcon className="w-8 h-8 shrink-0" />,
  },
  {
    id: "worker-support",
    title: "Worker Support",
    description: "Provide training, safety gear and a reliable grievance process.",
    icon: <WorkerSupportIcon className="w-8 h-8 shrink-0" />,
  },
];

export default function SafeWorkingEnvironmentSection() {
  return (
    <section
      id="safe-working-environment"
      aria-label="Safe and Fair Working Environment"
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
          
          {/* LEFT COLUMN: Section Label, Heading, Description, 2x2 Grid & Highlighted Statement Card (Approx 45-48% width) */}
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
                04. HUMAN RIGHTS & ETHICAL RESPONSIBILITY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-[44px] xl:text-[50px] font-bold text-[#013D26] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Safe & Fair Working<br />Environment
            </h2>

            {/* Introductory Description */}
            <p className="font-sans text-[#3D5648] text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-normal mb-8 sm:mb-9">
              We are committed to providing a safe, healthy and fair working
              environment, where employees can work with security, wellbeing and
              equal respect.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {SAFE_WORKING_CARDS.map((card, idx) => (
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
                A Safe, Healthy and Respectful Workplace for Everyone
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: LARGE SOLAR WORKPLACE PHOTOGRAPH WITH GOLD & GREEN ACCENTS (Approx 52-55% width) */}
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
                src="/assets/human-rights/solar-workforce-safety.webp"
                alt="Merchants Agro Valley Bangladeshi engineers and technicians in safety gear inspecting solar electricity generation installation"
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
