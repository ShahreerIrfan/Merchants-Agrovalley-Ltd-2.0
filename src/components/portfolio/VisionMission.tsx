"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { AGRO_PORTFOLIO_DATA } from "@/data/agroPortfolio";

export default function VisionMission() {
  const { visionMission } = AGRO_PORTFOLIO_DATA;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-9 pt-2">
      {/* PANEL 1: Our Vision (Soft Leaf-Green Tinted Panel) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:col-span-5 rounded-[22px] sm:rounded-[26px] bg-[#F1F8E8] border border-[#68A617]/35 p-7 sm:p-9 shadow-[0_8px_24px_rgba(104,166,23,0.06)] flex flex-col justify-between relative overflow-hidden"
      >
        <div>
          {/* Header row with Icon & Eyebrow */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-[48px] h-[48px] rounded-xl bg-white border border-[#68A617]/30 flex items-center justify-center p-2.5 shadow-2xs shrink-0">
              <Image
                src={visionMission.vision.iconPath}
                alt="Vision icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[#68A617] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] block">
                STRATEGIC HORIZON
              </span>
              <h4 className="font-serif font-bold text-[#013D26] text-[24px] sm:text-[28px] leading-tight">
                {visionMission.vision.title}
              </h4>
            </div>
          </div>

          {/* Vision Statement */}
          <p className="text-[#013D26] text-[15.5px] sm:text-[17px] leading-[1.75] font-medium text-pretty">
            {visionMission.vision.statement}
          </p>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div className="w-20 h-1 bg-[#68A617] rounded-full mt-6" aria-hidden="true" />
      </motion.div>

      {/* PANEL 2: Our Mission (White Card with 6 Verified Bullets) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="lg:col-span-7 rounded-[22px] sm:rounded-[26px] bg-white border border-[#E4EDE2] p-7 sm:p-9 shadow-[0_8px_24px_rgba(1,61,38,0.05)] flex flex-col justify-between"
      >
        <div>
          {/* Header row with Icon & Eyebrow */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-[48px] h-[48px] rounded-xl bg-[#F1F8E8] border border-[#68A617]/30 flex items-center justify-center p-2.5 shrink-0">
              <Image
                src={visionMission.mission.iconPath}
                alt="Mission icon"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-[#68A617] text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] block">
                OPERATIONAL ROADMAP
              </span>
              <h4 className="font-serif font-bold text-[#013D26] text-[24px] sm:text-[28px] leading-tight">
                {visionMission.mission.title}
              </h4>
            </div>
          </div>

          {/* 6 Mission Bullets in Responsive 1-2 Col Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {visionMission.mission.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#68A617]/15 text-[#68A617] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-[14px] sm:text-[14.5px] font-medium text-[#013D26] leading-snug">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative bottom border accent */}
        <div className="w-20 h-1 bg-[#68A617] rounded-full mt-6" aria-hidden="true" />
      </motion.div>
    </div>
  );
}
