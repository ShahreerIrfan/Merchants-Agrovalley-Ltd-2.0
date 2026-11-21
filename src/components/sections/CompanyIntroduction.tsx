"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";

export default function CompanyIntroduction() {
  const { eyebrow, heading, introduction } = COMPANY_PROFILE_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* LEFT COLUMN: Eyebrow, Heading & Decorative Underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-block w-8 h-[2.5px] bg-[#68A617] rounded-full"
            aria-hidden="true"
          />
          <span className="text-[#013D26] text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em]">
            {eyebrow}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif font-bold text-[#013D26] text-[34px] sm:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.12] tracking-tight">
          <span className="block">{heading.line1}</span>
          <span className="block">{heading.line2}</span>
        </h2>

        {/* Thin Decorative Underline */}
        <div
          className="w-24 h-[3.5px] bg-[#68A617] rounded-full mt-5"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Thin Vertical Green Divider & Introduction Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="lg:col-span-6 flex items-center lg:border-l-2 lg:border-[#68A617]/35 lg:pl-10 xl:pl-12"
      >
        <p className="text-[#013D26] text-[16px] sm:text-[17.5px] lg:text-[18px] leading-[1.75] font-normal text-pretty">
          {introduction}
        </p>
      </motion.div>
    </div>
  );
}
