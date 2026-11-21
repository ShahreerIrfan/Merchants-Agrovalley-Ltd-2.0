"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function PortfolioHeader() {
  const { header } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
      {/* LEFT COLUMN: Eyebrow, Main Heading & Decorative Underline */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-6 flex flex-col justify-center"
      >
        {/* Small Eyebrow with Lime Line */}
        <div className="flex items-center gap-3 mb-3.5">
          <span
            className="inline-block w-8 h-[2.5px] bg-[#68A617] rounded-full shrink-0"
            aria-hidden="true"
          />
          <span className="text-[#013D26] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em]">
            {header.eyebrow}
          </span>
        </div>

        {/* Main Heading (3 lines with green accent) */}
        <h2 className="font-serif font-bold text-[#013D26] text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[48px] leading-[1.12] tracking-tight">
          <span className="block">Commercial Rearing,</span>
          <span className="block">Hygienic Processing &amp;</span>
          <span className="block text-[#68A617]">Global Trade</span>
        </h2>

        {/* Decorative Green Underline */}
        <div
          className="w-24 sm:w-28 h-[3.5px] bg-[#68A617] rounded-full mt-4"
          aria-hidden="true"
        />
      </motion.div>

      {/* RIGHT COLUMN: Thin Vertical Green Divider & Intro Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        className="lg:col-span-6 flex items-center lg:border-l-2 lg:border-[#68A617]/35 lg:pl-10 xl:pl-12"
      >
        <p className="text-[#013D26] text-[15.5px] sm:text-[16.5px] lg:text-[17px] leading-[1.72] font-normal text-pretty">
          {header.intro}
        </p>
      </motion.div>
    </div>
  );
}
