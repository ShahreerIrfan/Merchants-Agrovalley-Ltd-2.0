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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center pt-4">
      {/* LEFT COLUMN: HD Facility Photograph (approx 55% of width) */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="lg:col-span-7 relative"
      >
        <div className="relative aspect-[1.9/1] w-full rounded-[22px] sm:rounded-[26px] overflow-hidden shadow-[0_16px_40px_rgba(1,61,38,0.09)] border border-[#E2EED7]/70 group">
          <Image
            src={strategicEvolution.imagePath}
            alt={strategicEvolution.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Thin lime-green decorative accent along the lower-left edge */}
        <div
          className="absolute -bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5 w-28 sm:w-36 h-2 bg-[#68A617] rounded-full z-10 shadow-xs"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Content (approx 45% of width) */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="lg:col-span-5 flex flex-col justify-center"
      >
        {/* Heading */}
        <h3 className="font-serif font-bold text-[#013D26] text-[30px] sm:text-[36px] lg:text-[40px] leading-[1.18] tracking-tight mb-4">
          <span>{strategicEvolution.headingPart1} </span>
          <span className="text-[#68A617]">
            {strategicEvolution.headingAccent}
          </span>
        </h3>

        {/* Description */}
        <p className="text-[#013D26] text-[15.5px] sm:text-[16.5px] lg:text-[17px] leading-[1.72] font-normal text-pretty">
          {strategicEvolution.description}
        </p>

        {/* Three Capability Highlights */}
        <CapabilityHighlights />

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 pt-1">
          {/* Primary CTA */}
          <Link
            href={buttons.primary.href}
            className="inline-flex items-center justify-center gap-2.5 bg-[#23934B] hover:bg-[#08713D] text-white font-semibold text-[15px] sm:text-[15.5px] px-7 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{buttons.primary.text}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href={buttons.secondary.href}
            className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F4FAEE] text-[#013D26] font-semibold text-[15px] sm:text-[15.5px] px-7 py-3.5 rounded-full border border-[#013D26] transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
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
