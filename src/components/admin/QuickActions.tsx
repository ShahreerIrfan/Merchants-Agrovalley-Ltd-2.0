"use client";

import React from "react";
import { Package, Layers, UserPlus, Upload, ArrowRight } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [
    {
      id: "add-product",
      label: "Add Product / Service",
      icon: Package,
      isPrimary: true,
    },
    {
      id: "add-category",
      label: "Add Category",
      icon: Layers,
      isPrimary: false,
    },
    {
      id: "add-member",
      label: "Add Management Member",
      icon: UserPlus,
      isPrimary: false,
    },
    {
      id: "upload-media",
      label: "Upload Media",
      icon: Upload,
      isPrimary: false,
    },
  ];

  return (
    <div className="mb-8">
      {/* Section Header with vertical lime indicator */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1 h-5 rounded-full bg-[#8CCF24]" />
        <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">
          Quick Actions
        </h2>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <button
              key={act.id}
              onClick={() => onActionClick(act.label)}
              className={`flex items-center justify-between p-4 rounded-xl font-semibold text-[14px] transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                act.isPrimary
                  ? "bg-[#013D26] hover:bg-[#024F32] text-white shadow-[0_6px_20px_rgba(1,61,38,0.2)]"
                  : "bg-white hover:bg-[#F2F9EA] text-gray-800 border border-gray-200/90 hover:border-[#8CCF24]"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-5 h-5 ${
                    act.isPrimary ? "text-[#8CCF24]" : "text-[#013D26]"
                  }`}
                />
                <span className="truncate">{act.label}</span>
              </div>
              <ArrowRight
                className={`w-4 h-4 shrink-0 ${
                  act.isPrimary ? "text-white/80" : "text-gray-400"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
