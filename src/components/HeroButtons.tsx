"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[22px] pt-1 sm:pt-2 w-full sm:w-auto">
      {/* Primary CTA */}
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="#operations"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#A6E51B] hover:bg-[#b5f527] text-[#063F2B] font-bold text-[14.5px] sm:text-[16px] px-6 sm:px-[34px] py-3.5 sm:py-[16px] rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(166,229,27,0.22)] hover:shadow-[0_12px_28px_rgba(166,229,27,0.35)] cursor-pointer"
        >
          <span>Explore Our Operations</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#063F2B]" />
        </Link>
      </motion.div>

      {/* Secondary CTA */}
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="w-full sm:w-auto"
      >
        <Link
          href="#overview"
          className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/15 text-white font-semibold text-[14.5px] sm:text-[16px] px-6 sm:px-[34px] py-3 sm:py-[15px] rounded-full border-2 border-white/90 hover:border-white transition-all duration-300 backdrop-blur-xs cursor-pointer"
        >
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
          </div>
          <span>Company Overview</span>
        </Link>
      </motion.div>
    </div>
  );
}
