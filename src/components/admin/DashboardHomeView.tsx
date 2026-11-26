"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MetricsGrid from "./MetricsGrid";
import QuickActions from "./QuickActions";
import RecentProductsTable from "./RecentProductsTable";
import StaticActionNoticeModal from "./StaticActionNoticeModal";
import { ProductItem } from "@/app/admin/products/actions";
import { CategoryItem } from "@/app/admin/products-services/categories/actions";
import { ManagementMemberItem } from "@/app/admin/management/actions";

interface DashboardHomeViewProps {
  initialProducts?: ProductItem[];
  initialCategories?: CategoryItem[];
  initialManagementMembers?: ManagementMemberItem[];
}

export default function DashboardHomeView({
  initialProducts = [],
  initialCategories = [],
  initialManagementMembers = [],
}: DashboardHomeViewProps) {
  const router = useRouter();
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openActionPreview = (actionName: string) => {
    setModalTitle(actionName);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. Top Metrics Grid */}
      <MetricsGrid
        onCardClick={openActionPreview}
        productsCount={initialProducts.length}
        categoryCount={initialCategories.length}
        managementCount={initialManagementMembers.length}
      />

      {/* 2. Quick Actions Bar */}
      <QuickActions
        onActionClick={(action) => {
          if (action === "add-product") router.push("/admin/products/new");
          else if (action === "add-category") router.push("/admin/products-services/categories/new");
          else if (action === "add-member") router.push("/admin/management/new");
          else openActionPreview(action);
        }}
      />

      {/* 3. Recent Products Data Table */}
      <RecentProductsTable
        onEdit={(title) => openActionPreview(`Edit: ${title}`)}
        onDelete={(title) => openActionPreview(`Delete: ${title}`)}
        onViewAll={() => router.push("/admin/products")}
      />

      <StaticActionNoticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
