"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-[700px] text-left z-20">
      {/* 1. Eyebrow text */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-5 sm:mb-6"
      >
        {/* Horizontal lime-green line */}
        <span
          className="inline-block w-8 sm:w-10 h-[2.5px] bg-[#A6E51B] rounded-full"
          aria-hidden="true"
        />
        <span className="text-white text-[13px] sm:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.25em]">
          INTEGRATED AGRO-INDUSTRIAL ENTERPRISE
        </span>
      </motion.div>

      {/* 2. Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="font-serif font-bold text-white tracking-tight leading-[1.05] text-[40px] sm:text-[54px] md:text-[62px] lg:text-[68px] xl:text-[72px] mb-6 sm:mb-7"
      >
        <span className="block">Nourishing</span>
        <span className="block">People &amp; Markets</span>
        <span className="block text-[#A6E51B]">from Bangladesh</span>
      </motion.h1>

      {/* 3. Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="text-white/90 text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[20px] leading-[1.5] max-w-[620px] font-normal mb-8 sm:mb-10 text-pretty"
      >
        A value integrated agro ecosystem — from feed and farming to
        processing, renewable energy and global export.
      </motion.p>

      {/* 4. CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}
