"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function VisionMission() {
  const { visionMission } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2">
      {/* CARD 1: Our Vision — DEEP RICH FOREST GREEN FULLY SOLID CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        data-cursor="card"
        className="rounded-[22px] sm:rounded-[26px] bg-[#013D26] p-7 sm:p-9 text-white shadow-[0_14px_38px_rgba(1,61,38,0.22)] hover:shadow-[0_20px_48px_rgba(1,61,38,0.32)] flex flex-col justify-between relative overflow-hidden border border-[#68A617]/35 group transition-all duration-300"
      >
        <div>
          {/* Header row: Icon tile & Heading */}
          <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
            <div className="w-[52px] h-[52px] rounded-xl bg-white/12 border border-[#68A617] flex items-center justify-center p-3 shrink-0 group-hover:scale-108 transition-transform duration-300">
              <Image
                src={visionMission.vision.iconPath}
                alt="Vision icon"
                width={32}
                height={32}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-[24px] sm:text-[28px] leading-tight">
                {visionMission.vision.title}
              </h4>
            </div>
          </div>

          {/* Exact Vision Statement */}
          <p className="text-white/95 text-[15.5px] sm:text-[16.5px] leading-[1.74] font-normal text-pretty">
            {visionMission.vision.statement}
          </p>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div
          className="w-20 h-1 bg-[#68A617] rounded-full mt-7"
          aria-hidden="true"
        />
      </motion.div>

      {/* CARD 2: Our Mission — SOFT PALE GREEN CLEAN BALANCED CARD */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        data-cursor="card"
        className="rounded-[22px] sm:rounded-[26px] bg-[#F4FAEE] border border-[#D5EAC8] hover:border-[#68A617] p-7 sm:p-9 shadow-[0_8px_24px_rgba(1,61,38,0.04)] hover:shadow-[0_16px_36px_rgba(104,166,23,0.12)] flex flex-col justify-between transition-all duration-300 group"
      >
        <div>
          {/* Header row: Icon tile & Heading */}
          <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
            <div className="w-[52px] h-[52px] rounded-xl bg-[#E4F3D6] border border-[#68A617]/40 flex items-center justify-center p-3 shrink-0 group-hover:scale-108 transition-transform duration-300">
              <Image
                src={visionMission.mission.iconPath}
                alt="Mission icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#013D26] text-[24px] sm:text-[28px] leading-tight">
                {visionMission.mission.title}
              </h4>
            </div>
          </div>

          {/* Exact Mission Statement */}
          <p className="text-[#142C23]/90 text-[15.5px] sm:text-[16.5px] leading-[1.74] font-normal text-pretty">
            {visionMission.mission.statement}
          </p>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div
          className="w-20 h-1 bg-[#013D26] rounded-full mt-7"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
