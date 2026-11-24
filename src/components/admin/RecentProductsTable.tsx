"use client";

import React from "react";
import Image from "next/image";
import { Edit2, Trash2, ArrowRight } from "lucide-react";

interface RecentProductsTableProps {
  onEdit: (title: string) => void;
  onDelete: (title: string) => void;
  onViewAll: () => void;
}

export default function RecentProductsTable({
  onEdit,
  onDelete,
  onViewAll,
}: RecentProductsTableProps) {
  const products = [
    {
      id: 1,
      title: "Cattle Farming",
      category: "Farming",
      status: "Published",
      updatedAt: "Nov 23, 2026",
      image: "/images/hero-background.jpg",
    },
    {
      id: 2,
      title: "First Farming",
      category: "Farming",
      status: "Published",
      updatedAt: "Nov 21, 2026",
      image: "/assets/admin/dashboard-welcome-banner.jpg",
    },
    {
      id: 3,
      title: "Soybean Crushing",
      category: "Processing",
      status: "Published",
      updatedAt: "Nov 20, 2026",
      image: "/images/hero-background.jpg",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden">
      {/* Header Row */}
      <div className="p-5 sm:px-6 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-[#8CCF24]" />
          <h2 className="text-[17px] font-bold text-gray-900 tracking-tight">
            Recent Products & Services
          </h2>
        </div>
        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#8CCF24] hover:bg-[#F2F9EA] text-[13px] font-semibold text-gray-700 hover:text-[#013D26] transition-all cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#FAFDF8] border-b border-gray-100 text-[13px] font-bold text-[#013D26]">
              <th className="py-3.5 px-6 w-16">#</th>
              <th className="py-3.5 px-6">Title</th>
              <th className="py-3.5 px-6">Category</th>
              <th className="py-3.5 px-6">Status</th>
              <th className="py-3.5 px-6">Updated At</th>
              <th className="py-3.5 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-[14px]">
            {products.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/70 transition-colors group"
              >
                <td className="py-4 px-6 text-gray-500 font-medium">
                  {item.id}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-9 rounded-lg overflow-hidden relative bg-gray-100 shrink-0 border border-gray-200/60">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="font-bold text-gray-900">
                      {item.title}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600 font-medium">
                  {item.category}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-[#E7F8DA] text-[#1E7822]">
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500 font-medium text-[13.5px]">
                  {item.updatedAt}
                </td>
                <td className="py-4 px-6 text-right">
                  <div className="inline-flex items-center justify-end gap-2">
                    <button
                      onClick={() => onEdit(item.title)}
                      className="p-1.5 rounded-lg text-emerald-700 hover:bg-emerald-50 transition-colors cursor-pointer"
                      title="Edit Product (Phase 2 Preview)"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(item.title)}
                      className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                      title="Delete Product (Disabled in Phase 1)"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
