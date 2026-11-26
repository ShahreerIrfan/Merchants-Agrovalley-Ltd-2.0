"use client";

import React from "react";

export default function AdminContentSkeleton() {
  return (
    <div className="w-full space-y-6 sm:space-y-8 animate-pulse">
      {/* 1. Header Skeleton */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div className="space-y-2.5">
          <div className="h-3 w-32 bg-[#EAF5DC] rounded-full" />
          <div className="h-8 w-64 bg-gray-200 rounded-xl" />
          <div className="h-4 w-80 max-w-full bg-gray-100 rounded-lg" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-28 bg-gray-200/80 rounded-xl" />
          <div className="h-10 w-36 bg-[#8CCF24]/20 rounded-xl" />
        </div>
      </div>

      {/* 2. Top Metrics Cards Skeleton (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5DC]/70" />
              <div className="w-16 h-5 rounded-full bg-gray-100" />
            </div>
            <div className="space-y-1.5">
              <div className="h-4 w-24 bg-gray-100 rounded" />
              <div className="h-7 w-20 bg-gray-200 rounded-lg" />
            </div>
            <div className="h-3 w-32 bg-gray-100 rounded" />
          </div>
        ))}
      </div>

      {/* 3. Main Content Card / Table Skeleton */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        {/* Search & Filter Toolbar */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="h-10 w-full sm:w-72 bg-gray-100 rounded-xl" />
          <div className="flex items-center gap-2">
            <div className="h-10 w-32 bg-gray-100 rounded-xl" />
            <div className="h-10 w-28 bg-gray-100 rounded-xl" />
          </div>
        </div>

        {/* Shimmering Table Rows */}
        <div className="divide-y divide-gray-100 p-2">
          {[1, 2, 3, 4, 5].map((row) => (
            <div key={row} className="py-4 px-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-gray-100 shrink-0" />
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="h-4 w-48 max-w-full bg-gray-200 rounded" />
                  <div className="h-3 w-72 max-w-full bg-gray-100 rounded" />
                </div>
              </div>
              <div className="hidden md:block w-28 h-6 bg-[#EAF5DC]/50 rounded-full" />
              <div className="w-20 h-6 bg-gray-100 rounded-lg" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gray-100" />
                <div className="w-8 h-8 rounded-lg bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
