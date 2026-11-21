"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS_MODEL_DATA } from "@/data/businessModel";

export default function ValueBand() {
  const { bottomBand } = BUSINESS_MODEL_DATA;

  return (
    <div className="relative w-full overflow-hidden mt-14 sm:mt-18 lg:mt-20">
      {/* 1. Flowing Curved Top Border Line with Gold Tone */}
      <div className="w-full h-5 sm:h-7 relative -mb-[1px] z-10">
        <svg
          viewBox="0 0 1440 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 28C360 6 720 0 1080 10C1260 16 1380 22 1440 28H0Z"
            fill="#05442A"
          />
          <path
            d="M0 26C360 4 720 -2 1080 8C1260 14 1380 20 1440 26"
            stroke="#C89B35"
            strokeWidth="3"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* 2. Main Dark Green Ribbon Band */}
      <div className="relative bg-[#05442A] text-white py-8 sm:py-10 lg:py-11 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-10">
        {/* Four Feature Blocks with Standalone Gold Icons matching Reference Image 3 */}
        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 items-center">
          {bottomBand.items.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex items-center gap-4 sm:gap-5 group"
              >
                {/* Standalone Gold SVG Icon (Clean, radiant glyph without square box or border) */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={item.iconPath}
                    alt=""
                    width={44}
                    height={44}
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(200,155,53,0.35)]"
                  />
                </div>

                {/* Stat Number & Label Text */}
                <div className="flex-1">
                  {item.stat ? (
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-serif font-extrabold text-white text-3xl sm:text-4xl leading-none">
                        {item.stat}
                      </span>
                      <span className="text-white text-[14px] sm:text-[15px] font-semibold leading-tight whitespace-pre-line">
                        {item.title}
                      </span>
                    </div>
                  ) : (
                    <span className="text-white text-[13.5px] sm:text-[14.5px] font-semibold leading-snug block">
                      {item.title}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Flowing Curved Bottom Border Line with Gold Tone */}
      <div className="w-full h-6 sm:h-8 relative -mt-[1px] z-10">
        <svg
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V8C1260 22 1080 30 720 30C360 30 180 18 0 6V0Z"
            fill="#05442A"
          />
          <path
            d="M0 6C180 18 360 30 720 30C1080 30 1260 22 1440 8"
            stroke="#C89B35"
            strokeWidth="3"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* 4. Full-Width Panoramic Tea Garden / Crop Rows Landscape at the Very Bottom */}
      <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36 -mt-2 sm:-mt-3 overflow-hidden z-0">
        <Image
          src="/assets/integrated-business-model/images/tea_field_bottom_strip.webp"
          alt="Agricultural tea garden landscape"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-bottom"
        />
        {/* Very subtle gradient overlay at bottom edge to ground it */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    </div>
  );
}
