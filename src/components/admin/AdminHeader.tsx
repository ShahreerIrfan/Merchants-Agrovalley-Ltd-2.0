"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, Search, Bell, ChevronDown, LogOut, ShieldCheck, User } from "lucide-react";

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  adminEmail: string;
}

export default function AdminHeader({ onToggleSidebar, adminEmail }: AdminHeaderProps) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/admin/auth/logout", {
        method: "POST",
      });
    } catch {
      // Ignore network failure and redirect anyway
    } finally {
      window.location.href = "/admin/login";
    }
  };

  return (
    <header className="sticky top-0 z-30 h-[72px] bg-white border-b border-gray-200/80 px-4 sm:px-8 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      {/* Left side: Hamburger Toggle & Title */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onToggleSidebar}
          className="p-2 text-gray-600 hover:text-[#013D26] hover:bg-gray-100 rounded-xl transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <h1 className="text-[18px] sm:text-[20px] font-bold text-[#013D26] tracking-tight">
          Merchants AgroValley Admin
        </h1>
      </div>

      {/* Right side: Search, Notifications, Profile */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Search Input (Desktop) */}
        <div className="relative hidden md:block w-[240px] lg:w-[280px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-[13.5px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
          />
        </div>

        {/* Notifications Icon with Red Dot */}
        <div className="relative">
          <button
            className="p-2.5 text-gray-600 hover:text-[#013D26] hover:bg-gray-100 rounded-full transition-all relative cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
          </button>
        </div>

        {/* Profile Pill Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-2 rounded-full hover:bg-gray-100 transition-all cursor-pointer border border-transparent hover:border-gray-200"
          >
            {/* Avatar Circle */}
            <div className="w-9 h-9 rounded-full bg-[#013D26] text-white flex items-center justify-center font-bold text-[14px] shrink-0 shadow-sm">
              <User className="w-5 h-5 text-white" />
            </div>

            {/* Profile info */}
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[13.5px] font-bold text-gray-900 leading-tight">
                Admin User
              </span>
              <span className="text-[11px] text-gray-500 leading-tight">
                Administrator
              </span>
            </div>

            <ChevronDown className="w-4 h-4 text-gray-500 hidden sm:block" />
          </button>

          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-gray-100 py-2.5 z-50 animate-fadeIn">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-[13.5px] font-bold text-gray-900">Admin User</p>
                <p className="text-[12px] text-gray-500 truncate" title={adminEmail}>
                  {adminEmail}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10.5px] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Authenticated Session
                </div>
              </div>

              <div className="p-1.5">
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full flex items-center gap-2.5 px-3 py-2 text-left rounded-xl text-[13.5px] text-red-600 hover:bg-red-50 transition-colors font-medium cursor-pointer disabled:opacity-50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{isLoggingOut ? "Logging out..." : "Log Out"}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
