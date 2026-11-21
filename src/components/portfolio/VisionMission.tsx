"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function VisionMission() {
  const { visionMission } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch pt-1">
      {/* PANEL 1: Our Vision — DEEP RICH FOREST GREEN FULLY SOLID EYE-CATCHING CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-5 rounded-[22px] sm:rounded-[26px] bg-[#013D26] p-6 sm:p-8 text-white shadow-[0_14px_38px_rgba(1,61,38,0.22)] flex flex-col justify-between relative overflow-hidden border border-[#68A617]/35 group"
      >
        <div>
          {/* Header row: Icon tile & Heading */}
          <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
            <div className="w-[50px] h-[50px] rounded-xl bg-white/12 border border-[#68A617] flex items-center justify-center p-2.5 shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={visionMission.vision.iconPath}
                alt="Vision icon"
                width={32}
                height={32}
                className="w-full h-full object-contain brightness-0 invert"
              />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-[24px] sm:text-[27px] leading-tight">
                {visionMission.vision.title}
              </h4>
            </div>
          </div>

          {/* Vision Statement */}
          <p className="text-white/95 text-[15px] sm:text-[16px] leading-[1.72] font-normal text-pretty">
            {visionMission.vision.statement}
          </p>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div
          className="w-20 h-1 bg-[#68A617] rounded-full mt-6"
          aria-hidden="true"
        />
      </motion.div>

      {/* PANEL 2: Our Mission — SOFT GREEN CARD WITH 2-COLUMN CHECKLIST */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="lg:col-span-7 rounded-[22px] sm:rounded-[26px] bg-[#F4FAEE] border border-[#D5EAC8] p-6 sm:p-8 shadow-[0_8px_24px_rgba(1,61,38,0.04)] flex flex-col justify-between"
      >
        <div>
          {/* Header row: Icon tile & Heading */}
          <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
            <div className="w-[50px] h-[50px] rounded-xl bg-[#E4F3D6] border border-[#68A617]/35 flex items-center justify-center p-2.5 shrink-0">
              <Image
                src={visionMission.mission.iconPath}
                alt="Mission icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#013D26] text-[24px] sm:text-[27px] leading-tight">
                {visionMission.mission.title}
              </h4>
            </div>
          </div>

          {/* 6 Mission Bullets in 2-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {visionMission.mission.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#68A617] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span className="text-[13.5px] sm:text-[14px] font-medium text-[#013D26] leading-snug">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div
          className="w-20 h-1 bg-[#68A617] rounded-full mt-6"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
