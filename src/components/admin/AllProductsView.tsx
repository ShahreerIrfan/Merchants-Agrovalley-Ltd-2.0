"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Package,
  Search,
  Filter,
  Layers,
  ArrowUpDown,
  Plus,
  Edit2,
  Trash2,
  ChevronDown,
  Check,
  AlertCircle,
  FolderTree,
} from "lucide-react";
import {
  DIVISIONS_LIST,
  CATEGORIES_LIST,
  AdminProductRecord,
} from "@/data/adminProducts";
import { ProductItem, deleteProductAction } from "@/app/admin/products/actions";
import StaticActionNoticeModal from "./StaticActionNoticeModal";

interface AllProductsViewProps {
  onOpenActionNotice?: (actionTitle: string) => void;
  initialProducts?: ProductItem[];
}

export default function AllProductsView({
  onOpenActionNotice,
  initialProducts = [],
}: AllProductsViewProps) {
  // Live state from PostgreSQL database
  const [productsList, setProductsList] = useState<ProductItem[]>(initialProducts);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("All Divisions");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [displayOrderSort, setDisplayOrderSort] = useState<"asc" | "desc">("asc");
  const [sortByColumn, setSortByColumn] = useState<keyof AdminProductRecord>("displayOrder");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Selection
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkAction, setBulkAction] = useState("");

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const triggerModal = (title: string) => {
    if (onOpenActionNotice) {
      onOpenActionNotice(title);
    } else {
      setModalTitle(title);
      setModalOpen(true);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from database?`)) return;
    setDeletingId(id);
    try {
      const res = await deleteProductAction(id);
      if (res.success) {
        setProductsList((prev) => prev.filter((p) => p.id !== id));
        setSelectedIds((prev) => prev.filter((item) => item !== id));
      } else {
        alert(res.error || "Failed to delete product.");
      }
    } catch {
      alert("Network error deleting product.");
    } finally {
      setDeletingId(null);
    }
  };

  // Filtered & Sorted Records
  const filteredProducts = useMemo(() => {
    return productsList.filter((product) => {
      // Search Query
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.commodityName.toLowerCase().includes(query) ||
        product.slug.toLowerCase().includes(query) ||
        (product.division && product.division.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query);

      // Division Filter
      const matchesDivision =
        selectedDivision === "All Divisions" ||
        (product.division && product.division.toLowerCase() === selectedDivision.toLowerCase());

      return matchesSearch && matchesDivision;
    }).sort((a, b) => {
      if (sortByColumn === "displayOrder") {
        return displayOrderSort === "asc"
          ? a.displayOrder - b.displayOrder
          : b.displayOrder - a.displayOrder;
      }

      const valA = (a as unknown as Record<string, unknown>)[sortByColumn];
      const valB = (b as unknown as Record<string, unknown>)[sortByColumn];

      if (typeof valA === "string" && typeof valB === "string") {
        return sortDirection === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      }
      return 0;
    });
  }, [
    productsList,
    searchQuery,
    selectedDivision,
    displayOrderSort,
    sortByColumn,
    sortDirection,
  ]);

  // Handle Sort column click
  const handleColumnSort = (column: keyof AdminProductRecord) => {
    if (sortByColumn === column) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      if (column === "displayOrder") {
        setDisplayOrderSort((prev) => (prev === "asc" ? "desc" : "asc"));
      }
    } else {
      setSortByColumn(column);
      setSortDirection("asc");
      if (column === "displayOrder") {
        setDisplayOrderSort("asc");
      }
    }
  };

  // Checkbox handlers
  const allVisibleSelected =
    filteredProducts.length > 0 &&
    filteredProducts.every((p) => selectedIds.includes(p.id));

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProducts.map((p) => p.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleBulkActionExecute = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const action = e.target.value;
    if (!action) return;
    setBulkAction(action);
    if (selectedIds.length === 0) {
      triggerModal("Bulk Action Warning: Please select at least one item first.");
    } else {
      triggerModal(`Bulk Action: "${action}" on ${selectedIds.length} item(s)`);
    }
    // Reset dropdown
    setTimeout(() => setBulkAction(""), 300);
  };

  return (
    <div className="w-full pb-10">
      {/* 1. PAGE HEADER WITH MODERN AGRO-INDUSTRIAL FACILITY BANNER */}
      <div className="bg-gradient-to-r from-[#F0F7EB] via-white to-[#F0F7EB] rounded-[24px] border border-[#8CCF24]/30 shadow-[0_4px_24px_rgba(1,61,38,0.04)] p-6 sm:p-7 mb-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* Left Heading & Details */}
        <div className="flex items-start gap-4 z-10 flex-1">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 shadow-xs">
            <Package className="w-6 h-6 text-[#013D26]" />
          </div>
          <div>
            <h1 className="font-serif text-[#013D26] text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight">
              All Products & Services
            </h1>
            <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1 leading-relaxed">
              Manage all commodities, products and services across Merchants AgroValley divisions.
            </p>
          </div>
        </div>

        {/* Right Subtle Agricultural-Industrial Facility Banner */}
        <div className="w-full md:w-[420px] lg:w-[480px] h-[120px] sm:h-[145px] relative rounded-2xl overflow-hidden shrink-0 border border-white/70 shadow-xs">
          <Image
            src="/assets/admin/products-header-banner.jpg"
            alt="Merchants AgroValley Industrial Grain Silos & Processing Facility"
            fill
            priority
            className="object-cover object-center hover:scale-102 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/assets/admin/dashboard-welcome-banner.jpg";
            }}
          />
          {/* Subtle gradient wave blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0F7EB]/70 via-[#F0F7EB]/20 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 2. SEARCH AND FILTER TOOLBAR */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-3 sm:p-4 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-3">
        {/* Left Inputs Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          {/* 1. Search Field */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or services..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
            />
          </div>

          {/* 2. All Divisions Dropdown */}
          <div className="relative min-w-[170px]">
            <Layers className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
            >
              {DIVISIONS_LIST.map((div) => (
                <option key={div} value={div}>
                  {div}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* 3. All Categories Dropdown */}
          <div className="relative min-w-[165px]">
            <FolderTree className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
            >
              {CATEGORIES_LIST.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* 4. Display Order Dropdown */}
          <div className="relative min-w-[170px]">
            <ArrowUpDown className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={displayOrderSort}
              onChange={(e) => {
                const val = e.target.value as "asc" | "desc";
                setDisplayOrderSort(val);
                setSortByColumn("displayOrder");
              }}
              className="w-full pl-9 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-700 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
            >
              <option value="asc">Display Order (Asc)</option>
              <option value="desc">Display Order (Desc)</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 5. Add New Product / Service Button */}
        <div className="shrink-0">
          <Link
            href="/admin/products/new"
            className="w-full sm:w-auto bg-[#013D26] hover:bg-[#025234] text-white px-5 py-2.5 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-2 shadow-xs transition-all hover:shadow cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New Product / Service</span>
          </Link>
        </div>
      </div>

      {/* 3. PRODUCTS & SERVICES TABLE CARD */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Table Top Controls Bar */}
        <div className="px-5 py-3.5 bg-white border-b border-gray-100 flex flex-wrap items-center justify-between gap-3">
          {/* Left Bulk Selection */}
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={allVisibleSelected}
                onChange={toggleSelectAll}
                className="w-4 h-4 text-[#013D26] rounded border-gray-300 focus:ring-[#013D26] cursor-pointer"
              />
            </label>

            {/* Bulk Actions Dropdown */}
            <div className="relative">
              <select
                value={bulkAction}
                onChange={handleBulkActionExecute}
                className="pl-3 pr-8 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-[13px] text-gray-700 font-medium appearance-none focus:outline-none cursor-pointer transition-colors"
              >
                <option value="">Bulk Actions</option>
                <option value="Mark as Active">Mark as Active</option>
                <option value="Mark as Inactive">Mark as Inactive</option>
                <option value="Export Selected (CSV)">Export Selected (CSV)</option>
                <option value="Delete Selected">Delete Selected</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {selectedIds.length > 0 && (
              <span className="text-[12px] text-[#013D26] font-semibold bg-[#EAF7E6] px-2.5 py-0.5 rounded-md border border-[#C8E6C9]">
                {selectedIds.length} selected
              </span>
            )}
          </div>

          {/* Right Entries Count Indicator */}
          <div className="text-[13px] text-gray-500 font-medium">
            Showing{" "}
            <span className="font-bold text-gray-800">
              {filteredProducts.length > 0 ? `1–${filteredProducts.length}` : "0"}
            </span>{" "}
            of{" "}
            <span className="font-bold text-gray-800">
              {productsList.length}
            </span>{" "}
            entries
          </div>
        </div>

        {/* Responsive Table Scroll Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1050px]">
            {/* Header with light green background */}
            <thead>
              <tr className="bg-[#F4F9F2] text-[#013D26] border-b border-gray-200/90 text-[11.5px] font-bold tracking-wider uppercase">
                <th className="py-3.5 px-4 w-[40px] text-center">
                  <span className="sr-only">Select</span>
                </th>
                <th className="py-3.5 px-3 w-[80px]">IMAGE</th>
                <th
                  className="py-3.5 px-4 cursor-pointer hover:bg-[#EAF5DC]/70 transition-colors"
                  onClick={() => handleColumnSort("commodityName")}
                >
                  <div className="flex items-center gap-1.5">
                    <span>COMMODITY NAME</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </th>
                <th
                  className="py-3.5 px-4 cursor-pointer hover:bg-[#EAF5DC]/70 transition-colors w-[150px]"
                  onClick={() => handleColumnSort("division")}
                >
                  <div className="flex items-center gap-1.5">
                    <span>DIVISION</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 min-w-[280px]">DESCRIPTION</th>
                <th
                  className="py-3.5 px-4 text-center cursor-pointer hover:bg-[#EAF5DC]/70 transition-colors w-[140px]"
                  onClick={() => handleColumnSort("displayOrder")}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span>DISPLAY ORDER</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </th>
                <th
                  className="py-3.5 px-4 cursor-pointer hover:bg-[#EAF5DC]/70 transition-colors w-[150px]"
                  onClick={() => handleColumnSort("status")}
                >
                  <div className="flex items-center gap-1.5">
                    <span>STATUS</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center w-[160px]">ACTIONS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100 text-[13.5px]">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertCircle className="w-8 h-8 text-gray-400" />
                      <p className="font-semibold text-gray-700">No products or services found</p>
                      <p className="text-[13px] text-gray-500">
                        Try adjusting your search query, division or category filter.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => {
                  const isSelected = selectedIds.includes(product.id);
                  return (
                    <tr
                      key={product.id}
                      className={`hover:bg-[#F9FCF8] transition-colors ${
                        isSelected ? "bg-[#8CCF24]/5" : ""
                      }`}
                    >
                      {/* 1. Select Checkbox */}
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectRow(product.id)}
                          className="w-4 h-4 text-[#013D26] rounded border-gray-300 focus:ring-[#013D26] cursor-pointer"
                        />
                      </td>

                      {/* 2. Image Thumbnail */}
                      <td className="py-4 px-3">
                        <div className="w-[58px] h-[58px] rounded-xl overflow-hidden border border-gray-200 relative shrink-0 shadow-2xs bg-gray-100">
                          <Image
                            src={product.image || "/assets/admin/products/fresh-grocery.jpg"}
                            alt={product.commodityName}
                            fill
                            className="object-cover object-center"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/assets/admin/dashboard-welcome-banner.jpg";
                            }}
                          />
                        </div>
                      </td>

                      {/* 3. Commodity Name & Slug */}
                      <td className="py-4 px-4 font-sans">
                        <div className="font-bold text-gray-900 text-[14px] leading-snug">
                          {product.commodityName}
                        </div>
                        <div className="text-[12px] text-gray-400 font-mono mt-0.5">
                          {product.slug}
                        </div>
                      </td>

                      {/* 4. Division Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-semibold bg-[#EAF7E6] text-[#1E7E34] border border-[#C8E6C9]/80 shadow-2xs">
                          {product.division}
                        </span>
                      </td>

                      {/* 5. Description */}
                      <td className="py-4 px-4">
                        <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      </td>

                      {/* 6. Display Order */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg text-[13px] font-bold bg-[#F4F6F4] border border-gray-200 text-gray-700 shadow-2xs">
                          #{product.displayOrder}
                        </span>
                      </td>

                      {/* 7. Status Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-medium bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]">
                          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                          <span>{product.status}</span>
                        </span>
                      </td>

                      {/* 8. Actions (Edit / Delete) */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium border border-gray-300 text-gray-700 hover:text-[#013D26] hover:border-[#013D26] hover:bg-gray-50 transition-all cursor-pointer"
                            title="Edit Commodity"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                            <span>Edit</span>
                          </Link>
                          <button
                            onClick={() => handleDelete(product.id, product.commodityName)}
                            disabled={deletingId === product.id}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 transition-all cursor-pointer disabled:opacity-50"
                            title="Delete Commodity"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                            <span>{deletingId === product.id ? "Deleting..." : "Delete"}</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Phase 1 Notice Modal */}
      <StaticActionNoticeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
