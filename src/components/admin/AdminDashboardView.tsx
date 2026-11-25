"use client";

import React, { useState } from "react";
import Image from "next/image";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import MetricsGrid from "./MetricsGrid";
import QuickActions from "./QuickActions";
import RecentProductsTable from "./RecentProductsTable";
import AllProductsView from "./AllProductsView";
import AddProductFormView from "./AddProductFormView";
import CategoriesListView from "./CategoriesListView";
import CategoryFormView from "./CategoryFormView";
import ManagementListView from "./ManagementListView";
import ManagementMemberFormView from "./ManagementMemberFormView";
import StaticActionNoticeModal from "./StaticActionNoticeModal";
import { CategoryItem } from "@/app/admin/categories/actions";
import { ManagementMemberItem } from "@/app/admin/management/actions";

interface AdminDashboardViewProps {
  adminEmail: string;
  initialTab?: string;
  initialCategories?: CategoryItem[];
  editCategoryData?: CategoryItem;
  initialManagementMembers?: ManagementMemberItem[];
  editManagementData?: ManagementMemberItem;
}

export default function AdminDashboardView({
  adminEmail,
  initialTab = "dashboard",
  initialCategories = [],
  editCategoryData,
  initialManagementMembers = [],
  editManagementData,
}: AdminDashboardViewProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openActionPreview = (actionName: string) => {
    setModalTitle(actionName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F4] flex">
      {/* Left Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenPreview={openActionPreview}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-[270px] flex flex-col min-h-screen">
        {/* Top Header */}
        <AdminHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          adminEmail={adminEmail}
        />

        {/* Dashboard Body - Full Page Layout (no max-w constraints) */}
        <main className="flex-1 p-4 sm:p-6 lg:p-6 xl:p-8 w-full max-w-none">
          {activeTab === "products-all" ? (
            <AllProductsView onOpenActionNotice={openActionPreview} />
          ) : activeTab === "products-add" ? (
            <AddProductFormView
              onBack={() => setActiveTab("products-all")}
              onOpenNotice={openActionPreview}
            />
          ) : activeTab === "categories" ? (
            <CategoriesListView initialCategories={initialCategories} />
          ) : activeTab === "categories-new" ? (
            <CategoryFormView
              mode="create"
              onBack={() => setActiveTab("categories")}
            />
          ) : activeTab === "categories-edit" ? (
            <CategoryFormView
              mode="edit"
              initialData={editCategoryData}
              onBack={() => setActiveTab("categories")}
            />
          ) : activeTab === "management" ? (
            <ManagementListView initialMembers={initialManagementMembers} />
          ) : activeTab === "management-new" ? (
            <ManagementMemberFormView
              mode="create"
              onBack={() => setActiveTab("management")}
            />
          ) : activeTab === "management-edit" ? (
            <ManagementMemberFormView
              mode="edit"
              initialData={editManagementData}
              onBack={() => setActiveTab("management")}
            />
          ) : (
            <>
              {/* Welcome Banner Card */}
              <div className="bg-gradient-to-r from-[#F0F7EB] via-white to-[#F0F7EB] rounded-[24px] border border-[#8CCF24]/30 shadow-[0_4px_24px_rgba(1,61,38,0.04)] p-6 sm:p-8 mb-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left Texts */}
                <div className="relative z-10 max-w-[540px]">
                  <span className="text-[#013D26]/75 text-[14px] font-semibold tracking-wide">
                    Welcome back,
                  </span>
                  <h1 className="font-serif text-[#013D26] text-[30px] sm:text-[36px] font-bold leading-tight mt-1 mb-2">
                    Admin User
                  </h1>
                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-relaxed">
                    Manage products, services and other dynamic content of the website.
                  </p>
                </div>

                {/* Right Panoramic Facility Visual */}
                <div className="w-full md:w-[48%] h-[160px] sm:h-[180px] relative rounded-2xl overflow-hidden shrink-0 border border-white/60 shadow-xs">
                  <Image
                    src="/assets/admin/dashboard-welcome-banner.jpg"
                    alt="Merchants AgroValley Agro-Industrial Complex"
                    fill
                    priority
                    className="object-cover object-center hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/hero-background.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7EB]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 4 Summary Metric Cards */}
              <MetricsGrid onCardClick={openActionPreview} />

              {/* Quick Actions Bar */}
              <QuickActions onActionClick={openActionPreview} />

              {/* Recent Products & Services Table */}
              <RecentProductsTable
                onEdit={(title) => openActionPreview(`Edit "${title}"`)}
                onDelete={(title) => openActionPreview(`Delete "${title}"`)}
                onViewAll={() => setActiveTab("products-all")}
              />
            </>
          )}
        </main>
      </div>

      {/* Static Modal for Phase 2 Previews */}
      <StaticActionNoticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
