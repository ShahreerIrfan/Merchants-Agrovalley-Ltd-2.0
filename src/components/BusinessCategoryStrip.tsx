"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BUSINESS_CATEGORIES } from "@/data/navigation";

export default function BusinessCategoryStrip() {
  return (
    <div className="w-full relative z-20 border-t border-white/15 bg-black/10 backdrop-blur-[2px]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-5 lg:py-6">
        {/* Horizontal scroll container on mobile/tablet, full row on desktop */}
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar scroll-smooth">
          {BUSINESS_CATEGORIES.map((cat, index) => {
            const isLast = index === BUSINESS_CATEGORIES.length - 1;

            return (
              <React.Fragment key={cat.id}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex-1 min-w-[140px] sm:min-w-[160px] lg:min-w-0"
                >
                  <Link
                    href={cat.href}
                    className="group flex flex-col items-center justify-center text-center px-2 py-1 transition-all duration-300"
                  >
                    {/* SVG Icon with white filter */}
                    <div className="relative w-[44px] h-[44px] sm:w-[46px] sm:h-[46px] mb-2.5 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5">
                      <Image
                        src={cat.iconPath}
                        alt={`${cat.name} icon`}
                        width={46}
                        height={46}
                        className="w-full h-full object-contain brightness-0 invert group-hover:drop-shadow-[0_4px_12px_rgba(166,229,27,0.45)] transition-all duration-300"
                      />
                    </div>

                    {/* Category Label */}
                    <span className="text-white text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-tight tracking-normal group-hover:text-[#A6E51B] transition-colors duration-200">
                      {cat.name}
                    </span>
                  </Link>
                </motion.div>

                {/* Thin vertical separator */}
                {!isLast && (
                  <div
                    className="hidden sm:block w-[1px] h-[65px] lg:h-[75px] bg-white/20 mx-1 xl:mx-2 shrink-0 self-center"
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
