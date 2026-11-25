"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  FolderTree,
  Search,
  Plus,
  Edit2,
  Trash2,
  ArrowUpDown,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  PackageCheck,
} from "lucide-react";
import {
  CategoryItem,
  getCategoriesAction,
  deleteCategoryAction,
} from "@/app/admin/categories/actions";

interface CategoriesListViewProps {
  initialCategories?: CategoryItem[];
}

export default function CategoriesListView({
  initialCategories = [],
}: CategoriesListViewProps) {
  const [categories, setCategories] = useState<CategoryItem[]>(initialCategories);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "date" | "products">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Selection
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Load categories on explicit refresh
  const loadCategories = async () => {
    setLoading(true);
    const res = await getCategoriesAction();
    if (res.success) {
      setCategories(res.categories);
    } else {
      setNotification({ type: "error", message: res.error || "Failed to load categories." });
    }
    setLoading(false);
  };

  useEffect(() => {
    setCategories(initialCategories);
  }, [initialCategories]);

  // Filtered and Sorted
  const filteredCategories = useMemo(() => {
    return categories
      .filter((c) => {
        const q = searchQuery.toLowerCase().trim();
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          c.slug.toLowerCase().includes(q) ||
          (c.description && c.description.toLowerCase().includes(q))
        );
      })
      .sort((a, b) => {
        if (sortBy === "name") {
          return sortDirection === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        if (sortBy === "products") {
          return sortDirection === "asc"
            ? a.productsCount - b.productsCount
            : b.productsCount - a.productsCount;
        }
        // date
        return sortDirection === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [categories, searchQuery, sortBy, sortDirection]);

  // Handle Delete
  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete the category "${name}"?`)) {
      return;
    }

    const res = await deleteCategoryAction(id);
    if (res.success) {
      setCategories((prev) => prev.filter((c) => c.id !== id));
      setSelectedIds((prev) => prev.filter((item) => item !== id));
      setNotification({ type: "success", message: `Category "${name}" deleted successfully.` });
    } else {
      setNotification({ type: "error", message: res.error || "Failed to delete category." });
    }

    setTimeout(() => setNotification(null), 5000);
  };

  // Checkbox handlers
  const allSelected =
    filteredCategories.length > 0 &&
    filteredCategories.every((c) => selectedIds.includes(c.id));

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredCategories.map((c) => c.id));
    }
  };

  const toggleSelectRow = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full pb-14">
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#F0F7EB] via-white to-[#F0F7EB] rounded-[24px] border border-[#8CCF24]/30 shadow-[0_4px_24px_rgba(1,61,38,0.04)] p-6 sm:p-7 mb-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        <div className="flex items-start gap-4 z-10 flex-1">
          <div className="w-12 h-12 rounded-2xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 shadow-xs text-[#013D26]">
            <FolderTree className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-serif text-[#013D26] text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight">
              Categories & Divisions
            </h1>
            <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1 leading-relaxed">
              Organize commodities, product categories and agro-industrial divisions.
            </p>
          </div>
        </div>

        {/* Right Action Button (Plain Page Link - NO POPUP) */}
        <div className="shrink-0 flex items-center gap-3">
          <button
            onClick={loadCategories}
            className="p-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 transition-all cursor-pointer shadow-2xs"
            title="Refresh Categories"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>

          <Link
            href="/admin/categories/new"
            className="bg-[#013D26] hover:bg-[#025234] text-white px-5 py-2.5 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-2 shadow-xs transition-all hover:shadow cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[2.5]" />
            <span>Add New Category</span>
          </Link>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div
          className={`mb-5 p-4 rounded-xl text-[13.5px] flex items-center gap-2.5 border transition-all ${
            notification.type === "success"
              ? "bg-[#E8F5E9] border-[#A5D6A7] text-[#1E7E34]"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0" />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      {/* 2. Search & Toolbar */}
      <div className="bg-white rounded-2xl border border-gray-200/80 p-3 sm:p-4 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search categories by name, slug or description..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
          />
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "date" | "products")}
              className="pl-3 pr-8 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-700 font-medium appearance-none focus:outline-none cursor-pointer"
            >
              <option value="name">Sort by Name</option>
              <option value="products">Sort by Products</option>
              <option value="date">Sort by Date</option>
            </select>
          </div>

          <button
            onClick={() => setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"))}
            className="p-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors cursor-pointer"
            title={`Direction: ${sortDirection}`}
          >
            <ArrowUpDown className="w-4 h-4" />
          </button>

          <span className="text-[12.5px] font-semibold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-xl">
            Total {filteredCategories.length}
          </span>
        </div>
      </div>

      {/* 3. Categories Table Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="bg-[#F4F9F2] text-[#013D26] border-b border-gray-200/90 text-[11.5px] font-bold tracking-wider uppercase">
                <th className="py-3.5 px-4 w-[40px] text-center">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-[#013D26] rounded border-gray-300 focus:ring-[#013D26] cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4 w-[280px]">CATEGORY NAME & SLUG</th>
                <th className="py-3.5 px-4">DESCRIPTION</th>
                <th className="py-3.5 px-4 text-center w-[150px]">PRODUCTS</th>
                <th className="py-3.5 px-4 w-[160px]">CREATED DATE</th>
                <th className="py-3.5 px-4 text-center w-[160px]">ACTIONS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-[13.5px]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="w-6 h-6 border-2 border-[#013D26] border-t-transparent rounded-full animate-spin" />
                      <p className="text-[13px] text-gray-500">Loading categories from database...</p>
                    </div>
                  </td>
                </tr>
              ) : filteredCategories.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <AlertCircle className="w-8 h-8 text-gray-400" />
                      <p className="font-semibold text-gray-700">No categories found</p>
                      <Link
                        href="/admin/categories/new"
                        className="text-[13px] text-[#013D26] font-semibold underline hover:text-[#025234]"
                      >
                        Create your first category
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCategories.map((category) => {
                  const isSelected = selectedIds.includes(category.id);
                  return (
                    <tr
                      key={category.id}
                      className={`hover:bg-[#F9FCF8] transition-colors ${
                        isSelected ? "bg-[#8CCF24]/5" : ""
                      }`}
                    >
                      {/* Select Checkbox */}
                      <td className="py-4 px-4 text-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectRow(category.id)}
                          className="w-4 h-4 text-[#013D26] rounded border-gray-300 focus:ring-[#013D26] cursor-pointer"
                        />
                      </td>

                      {/* Name & Slug */}
                      <td className="py-4 px-4 font-sans">
                        <div className="font-bold text-gray-900 text-[14.5px]">
                          {category.name}
                        </div>
                        <div className="text-[12px] text-gray-400 font-mono mt-0.5">
                          {category.slug}
                        </div>
                      </td>

                      {/* Description */}
                      <td className="py-4 px-4">
                        <p className="text-[13px] text-gray-600 leading-relaxed line-clamp-2">
                          {category.description || (
                            <span className="text-gray-400 italic">No description provided</span>
                          )}
                        </p>
                      </td>

                      {/* Products Count */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-semibold bg-[#EAF7E6] text-[#1E7E34] border border-[#C8E6C9]">
                          <PackageCheck className="w-3.5 h-3.5" />
                          <span>{category.productsCount} products</span>
                        </span>
                      </td>

                      {/* Created Date */}
                      <td className="py-4 px-4 text-gray-500 text-[12.5px] whitespace-nowrap">
                        {new Date(category.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>

                      {/* Actions (Plain Page Edit + Delete) */}
                      <td className="py-4 px-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/admin/categories/${category.id}/edit`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium border border-gray-300 text-gray-700 hover:text-[#013D26] hover:border-[#013D26] hover:bg-gray-50 transition-all cursor-pointer"
                            title="Edit Category"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-gray-500" />
                            <span>Edit</span>
                          </Link>
                          <button
                            onClick={() => handleDelete(category.id, category.name)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12.5px] font-medium border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-400 transition-all cursor-pointer"
                            title="Delete Category"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-500" />
                            <span>Delete</span>
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
    </div>
  );
}
