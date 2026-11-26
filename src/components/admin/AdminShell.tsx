"use client";

import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import StaticActionNoticeModal from "./StaticActionNoticeModal";

interface AdminShellProps {
  adminEmail?: string;
  children: React.ReactNode;
}

export default function AdminShell({
  adminEmail = "admin@merchantsagrovalley.com",
  children,
}: AdminShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState(adminEmail);

  useEffect(() => {
    fetch("/api/admin/auth/session")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.session?.email) {
          setCurrentEmail(data.session.email);
        }
      })
      .catch(() => {});
  }, []);

  const openActionPreview = (actionName: string) => {
    setModalTitle(actionName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7F4] flex">
      {/* 1. Persistent Left Sidebar (Never unmounts / unrenders on route navigation) */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenPreview={openActionPreview}
      />

      {/* 2. Main Area (Sticky Header + Smooth Page Content) */}
      <div className="flex-1 lg:pl-[270px] flex flex-col min-h-screen">
        <AdminHeader
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          adminEmail={currentEmail}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-6 xl:p-8 w-full max-w-none">
          {children}
        </main>
      </div>

      {/* Action Preview Modal */}
      <StaticActionNoticeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
