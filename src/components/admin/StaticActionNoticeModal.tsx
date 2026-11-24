"use client";

import React from "react";
import { X, AlertCircle, Info, Database } from "lucide-react";

interface StaticActionNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function StaticActionNoticeModal({
  isOpen,
  onClose,
  title,
}: StaticActionNoticeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#013D26]/10 text-[#013D26] flex items-center justify-center shrink-0">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-[18px] font-bold text-gray-900 leading-tight">
              {title}
            </h3>
            <span className="text-[12px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              Phase 1 Static UI Preview
            </span>
          </div>
        </div>

        {/* Informative Explanation */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 text-[13.5px] leading-relaxed mb-5">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#013D26] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-gray-900 mb-1">
                Zero Database Mutation in Phase 1
              </p>
              <p>
                As required by the specification, Phase 1 establishes the real server authentication and static dashboard interface. Data models are prepared with Prisma ORM, and live database CRUD will be enabled in Phase 2.
              </p>
            </div>
          </div>
        </div>

        {/* Mock Preview Form Fields */}
        <div className="space-y-3.5 mb-6 text-left">
          <div>
            <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-1">
              Item Title / Name
            </label>
            <input
              type="text"
              readOnly
              value={title.includes("Member") ? "Dr. Mohammad Rahman" : "Broiler Poultry Farm Unit 3"}
              className="w-full px-3.5 py-2 rounded-lg bg-gray-100 border border-gray-200 text-[13.5px] text-gray-700"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Category / Department
              </label>
              <input
                type="text"
                readOnly
                value="Poultry Operations"
                className="w-full px-3.5 py-2 rounded-lg bg-gray-100 border border-gray-200 text-[13.5px] text-gray-700"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                Status
              </label>
              <input
                type="text"
                readOnly
                value="Published (Active)"
                className="w-full px-3.5 py-2 rounded-lg bg-gray-100 border border-gray-200 text-[13.5px] text-[#1E7822]"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#013D26] hover:bg-[#024F32] text-white text-[13.5px] font-semibold transition-all cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
}
