"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";

export default function CapabilityHighlights() {
  const { capabilities } = COMPANY_PROFILE_DATA;

  return (
    <div className="w-full py-4 border-y border-[#E2EED7] my-7 sm:my-8 bg-[#F4FAEE]/40 rounded-xl px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        {capabilities.map((item, index) => {
          const isLast = index === capabilities.length - 1;

          return (
            <React.Fragment key={item.id}>
              <div className="flex-1 flex flex-col items-center text-center px-2 py-1">
                {/* SVG Icon */}
                <div className="w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] mb-2.5 flex items-center justify-center">
                  <Image
                    src={item.iconPath}
                    alt={item.title.replace("\n", " ")}
                    width={50}
                    height={50}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Label */}
                <span className="text-[#013D26] text-[13.5px] sm:text-[14.5px] font-semibold leading-snug whitespace-pre-line">
                  {item.title}
                </span>
              </div>

              {/* Thin Vertical Divider */}
              {!isLast && (
                <div
                  className="hidden sm:block w-[1px] h-14 bg-[#68A617]/25 shrink-0 self-center"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
