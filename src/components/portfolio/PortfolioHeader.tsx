"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function PortfolioHeader() {
  const { header } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
      {/* LEFT COLUMN: Eyebrow, Main Heading & Decorative Underline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        {/* Small Eyebrow with Lime Line */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-block w-8 h-[2.5px] bg-[#68A617] rounded-full shrink-0"
            aria-hidden="true"
          />
          <span className="text-[#013D26] text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.22em]">
            {header.eyebrow}
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif font-bold text-[#013D26] text-[30px] sm:text-[38px] lg:text-[44px] xl:text-[48px] leading-[1.14] tracking-tight">
          <span>{header.headingPart1} </span>
          <span className="text-[#68A617]">{header.headingPart2}</span>
        </h2>

        {/* Decorative Green Underline */}
        <div
          className="w-24 h-[3.5px] bg-[#68A617] rounded-full mt-4 sm:mt-5"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Thin Vertical Green Divider & Intro Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="lg:col-span-6 flex items-center lg:border-l-2 lg:border-[#68A617]/35 lg:pl-10 xl:pl-12"
      >
        <p className="text-[#013D26] text-[15.5px] sm:text-[17px] lg:text-[17.5px] leading-[1.75] font-normal text-pretty">
          {header.intro}
        </p>
      </motion.div>
    </div>
  );
}
