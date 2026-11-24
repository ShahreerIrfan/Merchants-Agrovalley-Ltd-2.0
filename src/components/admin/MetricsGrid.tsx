"use client";

import React from "react";
import { Package, Layers, Users, Mail } from "lucide-react";

interface MetricsGridProps {
  onCardClick: (title: string) => void;
}

export default function MetricsGrid({ onCardClick }: MetricsGridProps) {
  const metrics = [
    {
      id: "products",
      title: "Products & Services",
      count: "12",
      icon: Package,
      badge: null,
    },
    {
      id: "categories",
      title: "Categories",
      count: "6",
      icon: Layers,
      badge: null,
    },
    {
      id: "members",
      title: "Management Members",
      count: "8",
      icon: Users,
      badge: null,
    },
    {
      id: "inquiries",
      title: "New Inquiries",
      count: "4",
      icon: Mail,
      badge: "1",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
      {metrics.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            onClick={() => onCardClick(item.title)}
            className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(1,61,38,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-4 relative overflow-hidden group"
          >
            {/* Red Notification Pill (for New Inquiries) */}
            {item.badge && (
              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                {item.badge}
              </span>
            )}

            {/* Icon Tile */}
            <div className="w-14 h-14 rounded-2xl bg-[#F0F9E6] border border-[#8CCF24]/30 flex items-center justify-center text-[#013D26] shrink-0 group-hover:scale-105 transition-transform">
              <Icon className="w-7 h-7 text-[#013D26]" />
            </div>

            {/* Number & Label */}
            <div>
              <h3 className="text-[28px] font-black text-gray-900 leading-none">
                {item.count}
              </h3>
              <p className="text-[13px] font-medium text-gray-500 mt-1">
                {item.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
