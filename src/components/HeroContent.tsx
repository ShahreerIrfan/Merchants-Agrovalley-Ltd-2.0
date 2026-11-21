"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="max-w-[700px] text-left z-20 w-full">
      {/* 1. Eyebrow text with subtle slide & fade */}
      <motion.div
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6"
      >
        {/* Horizontal lime-green line */}
        <span
          className="inline-block w-6 sm:w-10 h-[2.5px] bg-[#A6E51B] rounded-full shrink-0"
          aria-hidden="true"
        />
        <span className="text-white text-[11px] xs:text-[12px] sm:text-[14px] lg:text-[15px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.25em]">
          INTEGRATED AGRO-INDUSTRIAL ENTERPRISE
        </span>
      </motion.div>

      {/* 2. Main headline line-by-line reveal */}
      <h1 className="font-serif font-bold text-white tracking-tight leading-[1.08] text-[32px] xs:text-[38px] sm:text-[50px] md:text-[60px] lg:text-[68px] xl:text-[72px] mb-5 sm:mb-7">
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            Nourishing
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            People &amp; Markets
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[#A6E51B]"
          >
            from Bangladesh
          </motion.span>
        </span>
      </h1>

      {/* 3. Description */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.48, ease: "easeOut" }}
        className="text-white/90 text-[14px] xs:text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[20px] leading-[1.55] max-w-[620px] font-normal mb-7 sm:mb-10 text-pretty"
      >
        A value integrated agro ecosystem — from feed and farming to
        processing, renewable energy and global export.
      </motion.p>

      {/* 4. CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.6, ease: "easeOut" }}
      >
        <HeroButtons />
      </motion.div>
    </div>
  );
}
