"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  Image as ImageIcon,
  Mail,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  X,
} from "lucide-react";

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  onOpenPreview?: (feature: string) => void;
}

function AdminSidebarInner({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onOpenPreview,
}: AdminSidebarProps) {
  const pathname = usePathname() || "";

  // Compute active tab dynamically from URL pathname
  const currentTab = React.useMemo(() => {
    if (pathname === "/admin/dashboard" || pathname === "/admin") return "dashboard";
    if (pathname === "/admin/products/new") return "products-add";
    if (pathname.startsWith("/admin/products/") && pathname.endsWith("/edit")) return "products-edit";
    if (pathname.startsWith("/admin/products-services/categories/new")) return "categories-new";
    if (pathname.startsWith("/admin/products-services/categories/") && pathname.endsWith("/edit")) return "categories-edit";
    if (pathname.startsWith("/admin/products-services/categories")) return "categories";
    if (pathname.startsWith("/admin/products")) return "products-all";
    if (pathname === "/admin/management/new") return "management-new";
    if (pathname.startsWith("/admin/management/") && pathname.endsWith("/edit")) return "management-edit";
    if (pathname.startsWith("/admin/management")) return "management";
    return activeTab || "dashboard";
  }, [pathname, activeTab]);

  const [productsOpen, setProductsOpen] = useState(
    currentTab.startsWith("products") || currentTab.startsWith("categories")
  );
  const [managementOpen, setManagementOpen] = useState(
    currentTab.startsWith("management")
  );

  // Auto-expand accordions when navigating to child sections
  useEffect(() => {
    if (currentTab.startsWith("products") || currentTab.startsWith("categories")) {
      setProductsOpen(true);
    }
    if (currentTab.startsWith("management")) {
      setManagementOpen(true);
    }
  }, [currentTab]);

  const handleNavClick = (tab: string, previewName?: string) => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    if (previewName && onOpenPreview) {
      onOpenPreview(previewName);
    }
    // Close on mobile
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[270px] bg-[#002D1B] text-white flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-white/10 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Section */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
          {/* Logo & Close on mobile */}
          <div className="flex items-center justify-between mb-4">
            <Link href="/admin/dashboard" className="block w-[170px] relative">
              <Image
                src="/logo/logo.png"
                alt="Merchants AgroValley"
                width={190}
                height={60}
                className="w-full h-auto object-contain brightness-0 invert"
                priority
              />
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ADMIN PANEL badge */}
          <div className="relative py-2.5 mb-6 text-center border-y border-white/15">
            <span className="text-[11px] font-bold tracking-[3px] text-white/80 uppercase">
              ADMIN PANEL
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5 text-[14px] font-medium">
            {/* Dashboard Item */}
            <Link
              href="/admin/dashboard"
              onClick={() => handleNavClick("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer ${
                currentTab === "dashboard"
                  ? "bg-[#8CCF24] text-[#013D26] font-bold shadow-[0_4px_16px_rgba(140,207,36,0.3)]"
                  : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              <LayoutDashboard className="w-5 h-5 shrink-0" />
              <span>Dashboard</span>
            </Link>

            {/* Products & Services (Accordion) */}
            <div className="pt-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  productsOpen || currentTab.startsWith("products") || currentTab.startsWith("categories")
                    ? "bg-white/5 text-white"
                    : "text-white/85 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-white/90" />
                  <span>Products & Services</span>
                </div>
                {productsOpen ? (
                  <ChevronUp className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/60" />
                )}
              </button>

              {productsOpen && (
                <div className="pl-7 pr-2 py-1.5 space-y-1">
                  <Link
                    href="/admin/products"
                    onClick={() => handleNavClick("products-all")}
                    className={`w-full text-left py-2 px-3 rounded-xl text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                      currentTab === "products-all"
                        ? "bg-white/10 text-white font-semibold shadow-inner"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        currentTab === "products-all"
                          ? "bg-[#8CCF24] shadow-[0_0_8px_#8CCF24]"
                          : "bg-white/40"
                      }`}
                    />
                    <span>All Products & Services</span>
                  </Link>

                  <Link
                    href="/admin/products/new"
                    onClick={() => handleNavClick("products-add")}
                    className={`w-full text-left py-2 px-3 rounded-xl text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                      currentTab === "products-add"
                        ? "bg-white/10 text-white font-semibold shadow-inner"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        currentTab === "products-add"
                          ? "bg-[#8CCF24] shadow-[0_0_8px_#8CCF24]"
                          : "bg-white/40"
                      }`}
                    />
                    <span>Add New Product/Service</span>
                  </Link>

                  <Link
                    href="/admin/products-services/categories"
                    onClick={() => handleNavClick("categories")}
                    className={`w-full text-left py-2 px-3 rounded-xl text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                      currentTab === "categories" || currentTab.startsWith("categories-")
                        ? "bg-white/10 text-white font-semibold shadow-inner"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        currentTab === "categories" || currentTab.startsWith("categories-")
                          ? "bg-[#8CCF24] shadow-[0_0_8px_#8CCF24]"
                          : "bg-white/40"
                      }`}
                    />
                    <span>Categories</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Management (Accordion) */}
            <div className="pt-1">
              <button
                onClick={() => setManagementOpen(!managementOpen)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all cursor-pointer ${
                  managementOpen ? "bg-white/5 text-white" : "text-white/85 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-white/90" />
                  <span>Management</span>
                </div>
                {managementOpen ? (
                  <ChevronUp className="w-4 h-4 text-white/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/60" />
                )}
              </button>

              {managementOpen && (
                <div className="pl-7 pr-2 py-1.5 space-y-1">
                  <Link
                    href="/admin/management"
                    onClick={() => handleNavClick("management")}
                    className={`w-full text-left py-2 px-3 rounded-xl text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                      currentTab === "management" || currentTab === "mgmt-all"
                        ? "bg-white/10 text-white font-semibold shadow-inner"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        currentTab === "management" || currentTab === "mgmt-all"
                          ? "bg-[#8CCF24] shadow-[0_0_8px_#8CCF24]"
                          : "bg-white/40"
                      }`}
                    />
                    <span>All Management</span>
                  </Link>

                  <Link
                    href="/admin/management/new"
                    onClick={() => handleNavClick("management-new")}
                    className={`w-full text-left py-2 px-3 rounded-xl text-[13px] transition-all flex items-center gap-2.5 cursor-pointer ${
                      currentTab === "management-new" || currentTab === "mgmt-add"
                        ? "bg-white/10 text-white font-semibold shadow-inner"
                        : "text-white/75 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                        currentTab === "management-new" || currentTab === "mgmt-add"
                          ? "bg-[#8CCF24] shadow-[0_0_8px_#8CCF24]"
                          : "bg-white/40"
                      }`}
                    />
                    <span>Add New Member</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Media Library */}
            <button
              onClick={() => handleNavClick("media", "Media Library")}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5" />
                <span>Media Library</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>

            {/* Inquiries with badge */}
            <button
              onClick={() => handleNavClick("inquiries", "Customer & Partner Inquiries")}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>Inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-[#E5A01B] text-[#013D26] text-[11px] font-bold">
                  4
                </span>
                <ChevronRight className="w-4 h-4 text-white/50" />
              </div>
            </button>

            {/* Reports */}
            <button
              onClick={() => handleNavClick("reports", "Analytics & Reports")}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5" />
                <span>Reports</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>

            {/* Settings */}
            <button
              onClick={() => handleNavClick("settings", "System Settings")}
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-white/85 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
          </nav>
        </div>

        {/* Bottom Decorative Section (Lush agro fields with sunrise glow) */}
        <div className="relative h-[110px] w-full overflow-hidden border-t border-white/10 shrink-0">
          <Image
            src="/assets/admin/sidebar-bottom-fields.jpg"
            alt="Agro Fields Sunrise"
            fill
            className="object-cover object-center opacity-85 hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Graceful fallback to existing hero background if image is still rendering
              const target = e.target as HTMLImageElement;
              target.src = "/images/hero-background.jpg";
            }}
          />
          {/* Top gradient blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#002D1B]/40 via-transparent to-[#002D1B]" />
        </div>
      </aside>
    </>
  );
}

export default function AdminSidebar(props: AdminSidebarProps) {
  return (
    <React.Suspense
      fallback={
        <aside
          className={`fixed top-0 bottom-0 left-0 z-50 w-[270px] bg-[#002D1B] text-white flex flex-col justify-between border-r border-white/10 lg:translate-x-0 ${
            props.isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5">
            <div className="w-[170px] h-[40px] bg-white/10 rounded-lg mb-6" />
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 w-full bg-white/5 rounded-xl" />
              ))}
            </div>
          </div>
        </aside>
      }
    >
      <AdminSidebarInner {...props} />
    </React.Suspense>
  );
}
