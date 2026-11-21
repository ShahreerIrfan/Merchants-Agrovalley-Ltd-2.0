"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
      className="fixed inset-0 z-50 xl:hidden flex"
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

      {/* Slide-out Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={onClose} className="block">
            <Image
              src="/logo/merchants-agro-valley-logo.svg"
              alt="Merchants Agro Valley"
              width={180}
              height={52}
              className="w-[160px] h-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-500 hover:text-[#063F2B] hover:bg-gray-100 rounded-full transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#08713D]"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Items with Icons */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-1.5">
          {NAV_ITEMS.map((item) => {
            const IconComponent = NAV_ICONS[item.iconName] || Home;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 py-3 px-3.5 rounded-xl text-[15px] font-medium transition-all ${
                  item.isActive
                    ? "text-[#063F2B] font-semibold bg-emerald-50/80"
                    : "text-[#142C23] hover:text-[#08713D] hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    item.isActive
                      ? "bg-[#08713D] text-white"
                      : "bg-gray-100 text-gray-600 group-hover:bg-emerald-100"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="flex-1">{item.name}</span>
                {item.isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08713D]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-6 border-t border-gray-100 bg-gray-50">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-3 px-6 rounded-full bg-[#063F2B] hover:bg-[#08713D] text-white font-medium text-[14.5px] transition-all duration-200 shadow-md"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>
          <p className="text-center text-xs text-gray-400 mt-2.5">
            Integrated Agro-Industrial Enterprise
          </p>
        </div>
      </div>
    </div>
  );
}
