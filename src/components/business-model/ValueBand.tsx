"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUSINESS_MODEL_DATA } from "@/data/businessModel";

export default function ValueBand() {
  const { bottomBand } = BUSINESS_MODEL_DATA;

  return (
    <div className="relative w-full overflow-hidden mt-14 sm:mt-18 lg:mt-20">
      {/* Flowing Curved Top Border Line with Gold Tone */}
      <div className="w-full h-4 sm:h-5 relative -mb-[1px]">
        <svg
          viewBox="0 0 1440 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 24C360 4 720 0 1080 8C1260 12 1380 18 1440 24H0Z"
            fill="#013D26"
          />
          <path
            d="M0 22C360 2 720 -2 1080 6C1260 10 1380 16 1440 22"
            stroke="#C89B35"
            strokeWidth="3"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Main Dark Green Value Band */}
      <div className="relative bg-[#013D26] text-white py-12 sm:py-14 lg:py-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden">
        {/* Clean Photographic Agricultural Landscape Background (Zero embedded text / infographic artifacts) */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src={bottomBand.backgroundImage}
            alt=""
            fill
            sizes="100vw"
            priority={false}
            className="object-cover object-[center_55%]"
          />
          {/* Deep Green Overlay: ~88-90% #013D26 */}
          <div className="absolute inset-0 bg-[#013D26]/90" />
          {/* Supporting subtle gradient to ensure maximum label readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#013D26] via-[#013D26]/85 to-[#013D26]/90" />
        </div>

        {/* Four Feature Blocks Separated by Thin Gold Dividers */}
        <div className="relative z-10 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
          {bottomBand.items.map((item, index) => {
            const isLast = index === bottomBand.items.length - 1;

            return (
              <React.Fragment key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4 sm:gap-4.5 group relative"
                >
                  {/* Gold SVG Icon */}
                  <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-xl bg-white/10 border border-[#C89B35]/40 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-108 group-hover:border-[#C89B35] transition-all duration-300 shadow-sm">
                    <Image
                      src={item.iconPath}
                      alt=""
                      width={38}
                      height={38}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Stat Number & Label Text */}
                  <div className="flex-1">
                    {item.stat ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif font-extrabold text-white text-3xl sm:text-4xl leading-none">
                          {item.stat}
                        </span>
                        <span className="text-white/95 text-[14px] sm:text-[15px] font-semibold leading-tight whitespace-pre-line">
                          {item.title}
                        </span>
                      </div>
                    ) : (
                      <span className="text-white/95 text-[13.5px] sm:text-[14.5px] font-medium leading-snug block">
                        {item.title}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Thin Vertical Gold Divider for Desktop */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute h-12 w-[1px] bg-[#C89B35]/35"
                    style={{ left: `${(index + 1) * 25}%` }}
                    aria-hidden="true"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
