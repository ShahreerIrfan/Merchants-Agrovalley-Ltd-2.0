"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Mail,
  Home,
  Users,
  Briefcase,
  Package,
  Leaf,
  HeartHandshake,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

const NAV_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Home: Home,
  Users: Users,
  Briefcase: Briefcase,
  Package: Package,
  Leaf: Leaf,
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Heart: Heart,
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer with Sophisticated Cream & Pale-Green Gradient */}
      <div className="relative ml-auto w-full max-w-[320px] sm:max-w-sm bg-gradient-to-b from-[#FFFDF4] via-[#F9FCF2] to-[#EEF7E6] border-l border-[#D9A526]/30 h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header with Clean, Balanced Mobile Logo */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-[#D9A526]/20 bg-[#FFFDF4]/90">
          <Link href="/" onClick={onClose} className="block">
            <Image
              src="/logo/merchants-agro-valley-emblem.png"
              alt="Merchants Agro Valley Emblem Logo"
              width={140}
              height={78}
              className="h-[38px] sm:h-[44px] w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 -mr-1 text-[#064E32] hover:bg-[#064E32]/10 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#064E32]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Navigation Items with Outline Icons */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-1">
          {NAV_ITEMS.map((item) => {
            const IconComponent = NAV_ICONS[item.iconName] || Home;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/#")
                ? false
                : item.href.startsWith("/")
                ? pathname === item.href || pathname.startsWith(item.href + "/")
                : false;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 py-2.5 sm:py-3 px-3 sm:px-3.5 rounded-xl text-[14px] sm:text-[14.5px] transition-all ${
                  isActive
                    ? "bg-[#003F29] text-white font-semibold shadow-xs"
                    : "text-[#064E32] hover:bg-[#064E32]/8 font-medium"
                }`}
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#064E32]/8 text-[#064E32]"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="flex-1">{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#8CCF24]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-5 sm:p-6 border-t border-[#D9A526]/20 bg-[#FFFDF4]/90">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-5 rounded-full bg-[#064E32] hover:bg-[#003F29] text-white font-semibold text-[13.5px] sm:text-[14px] border border-transparent hover:border-[#D9A526] shadow-[0_2px_10px_rgba(6,78,50,0.2)] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>
          <p className="text-center text-[11px] sm:text-xs text-[#064E32]/60 mt-2.5 font-medium">
            Merchants Agro Valley Ltd
          </p>
        </div>
      </div>
    </div>
  );
}
