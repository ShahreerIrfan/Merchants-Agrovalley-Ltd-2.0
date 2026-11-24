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
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Drawer with Warm Cream & Mint Gradient */}
      <div className="relative ml-auto w-full max-w-sm bg-gradient-to-b from-[#FAF6E8] via-[#FDF9EE] to-[#EEF5E2] border-l border-[#DFD6BD] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DFD6BD]/60 bg-[#FAF6E8]/70">
          <Link href="/" onClick={onClose} className="block">
            <Image
              src="/logo/merchants-agro-valley-emblem.png"
              alt="Merchants Agro Valley Emblem Logo"
              width={144}
              height={80}
              className="h-[50px] w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-[#00452C] hover:bg-[#00452C]/10 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#00452C]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items with Icons */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1.5">
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
                className={`flex items-center gap-3 py-3 px-3.5 rounded-xl text-[14.5px] font-semibold transition-all ${
                  isActive
                    ? "bg-[#00452C] text-white shadow-md"
                    : "text-[#00452C] hover:bg-[#00452C]/8"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#00452C]/8 text-[#00452C]"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="flex-1">{item.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#E59300]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-[#DFD6BD]/60 bg-[#FAF6E8]/70">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-gradient-to-r from-[#E59300] via-[#EFA318] to-[#F3B329] hover:from-[#D98700] hover:to-[#EAA418] text-white font-semibold text-[14.5px] shadow-[0_4px_16px_rgba(229,147,0,0.3)] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>
          <p className="text-center text-xs text-[#00452C]/60 mt-3 font-medium">
            Merchants Agro Valley Ltd
          </p>
        </div>
      </div>
    </div>
  );
}
