"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS_MODEL_DATA } from "@/data/businessModel";

export default function BusinessModelHeader() {
  const { header } = BUSINESS_MODEL_DATA;

  return (
    <div className="relative w-full">
      {/* Top-Right Farmland Ambient Illustration */}
      {/* Spans across top-right quadrant matching Reference Image 3: visible green tea hills, morning light, softly fading into pure white towards the left and bottom */}
      <div
        className="hidden lg:block absolute -top-10 -right-6 md:-right-8 lg:-right-12 xl:-right-16 pointer-events-none w-[460px] lg:w-[540px] xl:w-[640px] h-[240px] lg:h-[280px] xl:h-[320px] select-none z-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 75%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.2) 75%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,1) 70%, transparent 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
        aria-hidden="true"
      >
        <Image
          src={header.farmlandImage}
          alt=""
          fill
          priority={false}
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
        {/* LEFT COLUMN: Eyebrow, Main Heading & Decorative Gold Line */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3.5">
            <span
              className="inline-block w-8 h-[2.5px] bg-[#C89B35] rounded-full shrink-0"
              aria-hidden="true"
            />
            <span className="text-[#013D26] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em]">
              {header.eyebrow}
            </span>
          </div>

          {/* Large Editorial Heading */}
          <h2 className="font-serif font-bold text-[#013D26] text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[50px] leading-[1.12] tracking-tight">
            <span className="block">{header.headingLine1}</span>
            <span className="block text-[#075B38]">{header.headingLine2}</span>
          </h2>

          {/* Slim Gold Divider Underline */}
          <div
            className="w-24 sm:w-28 h-[3.5px] bg-[#C89B35] rounded-full mt-4"
            aria-hidden="true"
          />
        </motion.div>

        {/* RIGHT COLUMN: Thin Gold Vertical Divider & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative z-10 flex items-center lg:border-l-2 lg:border-[#C89B35] lg:pl-8 xl:pl-10"
        >
          <p className="relative z-10 text-[#013D26] text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.72] font-normal text-pretty max-w-[480px]">
            {header.intro}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
