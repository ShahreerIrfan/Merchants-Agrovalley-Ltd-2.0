"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  LogOut,
  Package,
  Mail,
  ShieldCheck,
  TrendingUp,
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface UserDashboardViewProps {
  user: {
    email: string;
    role: "admin" | "user";
    name: string;
  };
}

export default function UserDashboardView({ user }: UserDashboardViewProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
    } catch {
      // ignore
    } finally {
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F4] flex flex-col">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200/80 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="block w-[160px] sm:w-[185px] relative">
              <Image
                src="/logo/logo.png"
                alt="Merchants AgroValley"
                width={190}
                height={60}
                className="w-full h-auto object-contain"
                priority
              />
            </Link>
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F8D8] text-[#176316] text-[12px] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#68A617]" />
              Member Portal
            </span>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-3">
            {user.role === "admin" && (
              <Link
                href="/admin/dashboard"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#013D26] text-white text-[13px] font-semibold hover:bg-[#024F32] transition-colors"
              >
                <span>Admin Console</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            )}

            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200">
              <div className="w-7 h-7 rounded-full bg-[#013D26] text-white flex items-center justify-center font-bold text-xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-[13.5px] font-semibold text-gray-800 hidden sm:inline">
                {user.name}
              </span>
            </div>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors cursor-pointer"
              title="Log Out"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-[#013D26] to-[#085A39] rounded-[24px] text-white p-6 sm:p-8 mb-8 relative overflow-hidden shadow-[0_12px_36px_rgba(1,61,38,0.2)]">
          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[12px] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A6E51B]" />
              Merchants AgroValley Ecosystem
            </div>
            <h1 className="font-serif text-[28px] sm:text-[34px] font-bold leading-tight mb-2">
              Welcome back, {user.name}
            </h1>
            <p className="text-white/85 text-[14.5px] leading-relaxed">
              Explore Bangladesh's premier integrated agro-industrial network: modern poultry, cattle, dairy, feeds, aquaculture, renewable energy, and export-grade food processing.
            </p>
          </div>
        </div>

        {/* 3 Metric / Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#013D26] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#176316]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Account Status
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                Active Member
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Inquiries Submitted
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                0 Active
              </h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Partner Network
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-0.5">
                Connected
              </h3>
            </div>
          </div>
        </div>

        {/* Quick Agro Operations Cards */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-7 shadow-xs mb-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-[18px] font-bold text-gray-900">
                Explore Agro-Industrial Divisions
              </h2>
              <p className="text-[13.5px] text-gray-500">
                Direct access to Merchants AgroValley core business verticals
              </p>
            </div>
            <Link
              href="/"
              className="text-[13px] font-semibold text-[#013D26] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Poultry & Eggs", desc: "Commercial broiler, layer farms & hatchery", link: "/#poultry" },
              { title: "Cattle & Dairy", desc: "High-yield dairy stock & milk processing", link: "/#cattle" },
              { title: "Food Processing", desc: "Hygienic value-addition & cold-chain storage", link: "/#processing" },
              { title: "Renewable Energy", desc: "Solar farms & circular bio-waste energy", link: "/#energy" },
            ].map((div, i) => (
              <Link
                key={i}
                href={div.link}
                className="p-4 rounded-xl border border-gray-200/90 hover:border-[#68A617] hover:bg-[#FAFDF8] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#013D26]/8 text-[#013D26] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Package className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-gray-900 text-[14.5px] group-hover:text-[#013D26] transition-colors">
                  {div.title}
                </h4>
                <p className="text-[12.5px] text-gray-500 mt-1">
                  {div.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Account Details & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs">
            <h3 className="font-bold text-gray-900 text-[16px] mb-3 flex items-center gap-2">
              <User className="w-4 h-4 text-[#013D26]" />
              <span>Profile Details</span>
            </h3>
            <div className="space-y-3 text-[13.5px]">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Full Name</span>
                <span className="font-semibold text-gray-900">{user.name}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Email Address</span>
                <span className="font-semibold text-gray-900">{user.email}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-500">Role Tier</span>
                <span className="font-semibold text-[#176316] uppercase text-xs bg-emerald-50 px-2 py-0.5 rounded">
                  {user.role}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#013D26]" />
                <span>Trade & Partner Inquiries</span>
              </h3>
              <p className="text-[13.5px] text-gray-600 leading-relaxed">
                Interested in bulk distribution, institutional procurement, or contract farming partnerships with Merchants AgroValley?
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <a
                href="mailto:info@merchantsagrovalley.com"
                className="inline-flex items-center gap-2 text-[13.5px] font-bold text-[#013D26] hover:text-[#68A617] transition-colors"
              >
                <span>Contact Corporate Communications &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
