"use client";

import React from "react";
import Image from "next/image";
import { COMPANY_PROFILE_DATA } from "@/data/companyProfile";

export default function CapabilityHighlights() {
  const { capabilities } = COMPANY_PROFILE_DATA;

  return (
    <div className="w-full py-2 my-2 sm:my-3">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center">
        {capabilities.map((item, index) => {
          const isLast = index === capabilities.length - 1;

          return (
            <React.Fragment key={item.id}>
              <div className="flex flex-col items-center text-center px-1">
                {/* SVG Icon - Sleek & Compact */}
                <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] mb-2 flex items-center justify-center">
                  <Image
                    src={item.iconPath}
                    alt={item.title.replace("\n", " ")}
                    width={42}
                    height={42}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text Label */}
                <span className="text-[#013D26] text-[12px] sm:text-[13px] lg:text-[13.5px] font-medium leading-[1.3] whitespace-pre-line text-center">
                  {item.title}
                </span>
              </div>

              {/* Thin Vertical Divider */}
              {!isLast && (
                <div
                  className="hidden sm:block w-[1px] h-10 bg-[#E2EED7] shrink-0 self-center justify-self-center"
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
