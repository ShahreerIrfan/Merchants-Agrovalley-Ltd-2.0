"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";
import CapabilityHighlights from "./CapabilityHighlights";

export default function StrategicEvolution() {
  const { strategicEvolution, buttons } = COMPANY_PROFILE_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-stretch pt-2">
      {/* LEFT COLUMN: HD Facility Photograph (Matches exact height of right column) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col h-full min-h-[350px] sm:min-h-[390px] lg:min-h-0"
      >
        {/* Rounded Image Container */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_12px_36px_rgba(1,61,38,0.08)] border border-[#E2EED7]/70 z-10 group">
          <Image
            src={strategicEvolution.imagePath}
            alt={strategicEvolution.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Lime-green corner accent hugging bottom-left curve (Reference exact match) */}
        <div
          className="absolute -bottom-2 -left-2 w-28 sm:w-36 h-14 sm:h-18 border-b-[5px] border-l-[5px] border-[#68A617] rounded-bl-[28px] sm:rounded-bl-[32px] pointer-events-none z-0"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Content (Balanced vertical alignment with left image) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="flex flex-col justify-between h-full pt-1 sm:pt-0"
      >
        {/* Top: Headline & Decorative Divider Line */}
        <div>
          <h3 className="font-serif font-bold text-[#013D26] text-[28px] sm:text-[32px] lg:text-[35px] xl:text-[38px] leading-[1.15] tracking-tight">
            <span>{strategicEvolution.headingPart1}</span>
            <br />
            <span>Modern </span>
            <span className="text-[#68A617]">
              {strategicEvolution.headingAccent.replace("Modern ", "")}
            </span>
          </h3>

          {/* Thin Green Divider Line under Heading (as in reference image) */}
          <div
            className="w-full h-[1.5px] bg-[#68A617]/40 mt-3 mb-4"
            aria-hidden="true"
          />

          {/* Description Copy */}
          <p className="text-[#013D26] text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.62] font-normal text-pretty">
            {strategicEvolution.description}
          </p>
        </div>

        {/* Middle: Capability Highlights (Clean & Transparent) */}
        <CapabilityHighlights />

        {/* Bottom: Call-to-Action Buttons */}
        <div className="flex flex-row items-center gap-3.5 sm:gap-4 pt-1">
          {/* Primary CTA */}
          <Link
            href={buttons.primary.href}
            className="inline-flex items-center justify-center gap-2 bg-[#23934B] hover:bg-[#08713D] text-white font-medium text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{buttons.primary.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href={buttons.secondary.href}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4FAEE] text-[#013D26] font-medium text-[14px] sm:text-[14.5px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#013D26] transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full bg-[#013D26]/10 flex items-center justify-center group-hover:bg-[#013D26]/20 transition-colors">
              <Play className="w-2.5 h-2.5 text-[#013D26] fill-[#013D26] ml-0.5" />
            </div>
            <span>{buttons.secondary.text}</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
