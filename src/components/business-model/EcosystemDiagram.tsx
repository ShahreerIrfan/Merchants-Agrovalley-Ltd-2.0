"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS_MODEL_DATA } from "@/data/businessModel";

export default function EcosystemDiagram() {
  const { wheelImage, stages } = BUSINESS_MODEL_DATA;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* 1. DESKTOP CIRCULAR ECOSYSTEM DIAGRAM (1024px+) */}
      <div className="hidden lg:flex items-center justify-center relative w-full max-w-[560px] xl:max-w-[620px] aspect-square">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full h-full rounded-full overflow-hidden shadow-[0_16px_48px_rgba(1,61,38,0.14)] border-4 border-[#C89B35]/70 group transition-all duration-500"
          data-cursor="image"
        >
          <Image
            src={wheelImage}
            alt="Integrated Farm-to-Market Business Model Ecosystem Wheel"
            fill
            sizes="(max-width: 1280px) 560px, 620px"
            priority={false}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </div>

      {/* 2. MOBILE & TABLET RESPONSIVE STACKED LAYOUT (<1024px) */}
      <div className="lg:hidden w-full flex flex-col gap-4 sm:gap-5 my-6">
        {/* Mobile Central Core Badge */}
        <div className="w-full max-w-sm mx-auto p-5 rounded-2xl bg-[#013D26] border-2 border-[#C89B35] text-center shadow-lg text-white">
          <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
            <Image
              src="/assets/integrated-business-model/icons/svg/center-leaf.svg"
              alt="Leaf icon"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-serif font-bold text-lg tracking-wide block leading-tight">
            INTEGRATED FARM-TO-MARKET
          </span>
          <span className="text-[#E8C979] text-xs font-semibold tracking-widest uppercase block mt-0.5">
            BUSINESS MODEL
          </span>
        </div>

        {/* 5 Stages Stacked Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stages.map((stage) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden border border-[#C89B35]/60 bg-[#013D26] shadow-md group"
            >
              {/* Image with Dark Green Overlay */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={stage.imagePath}
                  alt={stage.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#013D26] via-[#013D26]/70 to-transparent" />
              </div>

              {/* Card Label and Stage Number */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#C89B35] text-[#013D26] font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {stage.number}
                </span>
                <span className="font-serif font-bold text-white text-[15px] sm:text-[16px] leading-tight">
                  {stage.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
