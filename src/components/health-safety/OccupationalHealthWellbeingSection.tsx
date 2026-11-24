"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FEATURE_CARDS: FeatureCardProps[] = [
  {
    icon: Stethoscope,
    title: "Preventive Healthcare",
    description: "Regular health awareness, preventive care and health check-ups.",
  },
  {
    icon: HeartHandshake,
    title: "Workplace Wellbeing",
    description: "Supporting physical, mental and overall employee wellbeing.",
  },
  {
    icon: Users,
    title: "Safe & Healthy Facilities",
    description: "Maintaining clean, hygienic and comfortable working environments.",
  },
  {
    icon: ShieldCheck,
    title: "Emergency Preparedness",
    description: "Clear workplace response procedures and appropriate medical support.",
  },
];

export default function OccupationalHealthWellbeingSection() {
  return (
    <section
      id="occupational-health-wellbeing"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E8EFE0] overflow-hidden"
      aria-label="Occupational Health & Employee Wellbeing"
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN — EXACT CONTENT & 2x2 FEATURE CARDS          */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            {/* Eyebrow Label with Accent Line */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 h-[2.5px] bg-[#8CCF24] rounded-full inline-block" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#075334] uppercase">
                HEALTH & SAFETY
              </span>
            </div>

            {/* Main Heading with Fresh Lime Highlight */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] 2xl:text-[50px] font-serif font-bold text-[#075334] leading-[1.15] tracking-tight mb-4 sm:mb-5">
              Occupational Health &{" "}
              <span className="text-[#8CCF24] block sm:inline">
                Employee Wellbeing
              </span>
            </h2>

            {/* Exact Description */}
            <p className="text-[15px] sm:text-[16px] text-[#142C23]/80 leading-relaxed max-w-xl mb-8 sm:mb-10 font-sans">
              Employee wellbeing is essential to a safe and productive workplace. We aim to support our people through preventive health awareness, hygienic facilities, practical safety guidance and a respectful working environment across our operations.
            </p>

            {/* Four Feature Cards in 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5 max-w-xl">
              {FEATURE_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.1 + idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-[#F2F8E9] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-[#E1EFD0]/80 shadow-[0_2px_10px_rgba(7,83,52,0.03)] hover:shadow-[0_4px_16px_rgba(7,83,52,0.07)] transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div className="w-11 h-11 rounded-xl bg-[#E2F3CB] flex items-center justify-center shrink-0 border border-[#D5ECC0]">
                      <IconComponent className="w-5 h-5 text-[#075334]" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-[15px] sm:text-[15.5px] font-bold text-[#075334] tracking-tight leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#142C23]/75 leading-relaxed mt-1">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN — RECTANGULAR HEALTHCARE PHOTOGRAPH         */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center w-full"
          >
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E1EFD0] shadow-[0_12px_40px_rgba(7,83,52,0.08)] bg-[#F2F8E9]">
              <Image
                src="/assets/health-safety/occupational-health-wellbeing.webp"
                alt="Occupational health check-up and blood pressure monitoring for an agro-industrial employee"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
