"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  FolderTree,
  Plus,
  Edit3,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Info,
} from "lucide-react";
import {
  createCategoryAction,
  updateCategoryAction,
  CategoryItem,
} from "@/app/admin/categories/actions";

interface CategoryFormViewProps {
  initialData?: CategoryItem;
  mode?: "create" | "edit";
  onBack?: () => void;
}

export default function CategoryFormView({
  initialData,
  mode = "create",
  onBack,
}: CategoryFormViewProps) {
  const router = useRouter();

  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSubmitting(true);

    if (!name.trim()) {
      setErrorMessage("Category name is required.");
      setSubmitting(false);
      return;
    }

    try {
      if (mode === "edit" && initialData?.id) {
        const res = await updateCategoryAction(initialData.id, {
          name: name.trim(),
          description: description.trim() || undefined,
        });

        if (res.success) {
          setSuccessMessage("Category updated successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/categories");
          }, 800);
        } else {
          setErrorMessage(res.error || "Failed to update category.");
        }
      } else {
        const res = await createCategoryAction({
          name: name.trim(),
          description: description.trim() || undefined,
        });

        if (res.success) {
          setSuccessMessage("Category created and saved to database successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/categories");
          }, 800);
        } else {
          setErrorMessage(res.error || "Failed to create category.");
        }
      }
    } catch {
      setErrorMessage("An unexpected network or server error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-16">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
          <span className="text-[11px] font-bold tracking-[1.5px] text-[#013D26] uppercase">
            CATEGORIES & DIVISIONS
          </span>
          <h1 className="font-serif text-[#013D26] text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mt-0.5">
            {mode === "edit" ? "Edit Category" : "Add New Category"}
          </h1>
          <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1">
            {mode === "edit"
              ? "Update category details and commodity group classifications."
              : "Define a new commodity division or product category for the website catalog."}
          </p>
        </div>

        {/* Back Link */}
        <div className="shrink-0">
          <Link
            href="/admin/categories"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault();
                onBack();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300/90 bg-white hover:bg-[#F4F9F2] text-[#013D26] text-[13.5px] font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Categories</span>
          </Link>
        </div>
      </div>

      {/* Messages */}
      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-[13.5px] flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="mb-6 p-4 rounded-xl bg-[#E8F5E9] border border-[#A5D6A7] text-[#1E7E34] text-[13.5px] flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Main Plain Page Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8 max-w-[900px]">
        <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-gray-100">
          <div className="w-11 h-11 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
            {mode === "edit" ? <Edit3 className="w-5 h-5" /> : <FolderTree className="w-5 h-5" />}
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-gray-900 leading-tight">
              {mode === "edit" ? `Editing "${initialData?.name}"` : "Category Details"}
            </h2>
            <p className="text-[12.5px] text-gray-500 mt-0.5">
              Fill in the category name and descriptions below. All changes are stored directly in PostgreSQL.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Category / Division Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Livestock & Meat"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Description (Optional)
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Provide a comprehensive summary of commodities and services categorized under this group..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all leading-relaxed"
            />
          </div>

          {/* Security & Architecture Note */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-600 text-[12.5px] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#013D26] shrink-0 mt-0.5" />
            <p>
              Categories are strictly validated against mass assignment and stored securely in PostgreSQL with ACID transaction guarantees.
            </p>
          </div>

          {/* Form Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <Link
              href="/admin/categories"
              onClick={(e) => {
                if (onBack) {
                  e.preventDefault();
                  onBack();
                }
              }}
              className="px-6 py-2.5 rounded-xl border border-gray-300 bg-white text-gray-700 text-[13.5px] font-semibold hover:bg-gray-100 transition-all cursor-pointer shadow-2xs"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-7 py-2.5 rounded-xl bg-[#013D26] hover:bg-[#025234] text-white text-[13.5px] font-semibold shadow-xs hover:shadow transition-all cursor-pointer flex items-center gap-2 disabled:opacity-70"
            >
              <Sparkles className="w-4 h-4 text-[#8CCF24]" />
              <span>{submitting ? "Saving..." : mode === "edit" ? "Update Category" : "Save Category"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
