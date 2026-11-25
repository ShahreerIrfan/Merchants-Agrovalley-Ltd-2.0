"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Image as ImageIcon,
  CheckCircle,
  Info,
  Layers,
  FolderTree,
  FileText,
  Upload,
} from "lucide-react";
import { DIVISIONS_LIST, CATEGORIES_LIST } from "@/data/adminProducts";

interface AddProductFormViewProps {
  onBack: () => void;
  onOpenNotice: (title: string) => void;
}

export default function AddProductFormView({
  onBack,
  onOpenNotice,
}: AddProductFormViewProps) {
  const [commodityName, setCommodityName] = useState("");
  const [slug, setSlug] = useState("");
  const [division, setDivision] = useState(DIVISIONS_LIST[1]);
  const [category, setCategory] = useState(CATEGORIES_LIST[1]);
  const [description, setDescription] = useState("");
  const [displayOrder, setDisplayOrder] = useState("10");
  const [status, setStatus] = useState("Active on Site");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCommodityName(val);
    if (!slug || slug === `/${val.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`) {
      setSlug(`/${val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenNotice(`Create Commodity "${commodityName || "New Product"}"`);
  };

  return (
    <div className="w-full pb-12 max-w-[1000px] mx-auto">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/admin/products"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#013D26] hover:text-[#025234] p-2 -ml-2 rounded-lg hover:bg-white transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products & Services</span>
        </Link>

        <span className="text-[12px] font-semibold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
          Phase 1 Interactive Form
        </span>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-8">
        <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
          <div className="w-11 h-11 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0">
            <Plus className="w-5 h-5 text-[#013D26]" />
          </div>
          <div>
            <h1 className="font-serif text-[#013D26] text-[22px] sm:text-[26px] font-bold">
              Add New Product / Service
            </h1>
            <p className="text-[13.5px] text-gray-500">
              Register a new agricultural division, commodity or commercial service.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Commodity Name & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Commodity / Division Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={commodityName}
                onChange={handleNameChange}
                placeholder="e.g. Organic Black Tiger Shrimp Hatchery"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                URL Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="/shrimp-hatchery"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-mono text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>
          </div>

          {/* Division & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Division <span className="text-red-500">*</span>
              </label>
              <select
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
              >
                {DIVISIONS_LIST.filter((d) => d !== "All Divisions").map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
              >
                {CATEGORIES_LIST.filter((c) => c !== "All Categories").map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe commercial operations, certifications, production capacity, and export specifications..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all leading-relaxed"
            />
          </div>

          {/* Display Order & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Display Order Number
              </label>
              <input
                type="number"
                min="1"
                max="999"
                value={displayOrder}
                onChange={(e) => setDisplayOrder(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Status on Website
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer"
              >
                <option value="Active on Site">Active on Site</option>
                <option value="Inactive">Inactive / Hidden</option>
              </select>
            </div>
          </div>

          {/* Image Upload Area Placeholder */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Product Thumbnail Photography
            </label>
            <div className="border-2 border-dashed border-gray-200 hover:border-[#013D26]/40 rounded-2xl p-6 text-center bg-gray-50/50 hover:bg-[#F0F7EB]/30 transition-all cursor-pointer">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#EAF5DC] flex items-center justify-center text-[#013D26]">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-[13.5px] font-semibold text-gray-800 mb-0.5">
                Click to upload or drag and drop image
              </p>
              <p className="text-[12px] text-gray-500">
                Supports WebP, JPG, or PNG (Max 5MB, recommended 800x600)
              </p>
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-[13.5px] font-semibold hover:bg-gray-50 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#013D26] hover:bg-[#025234] text-white text-[13.5px] font-semibold shadow-xs transition-all hover:shadow cursor-pointer flex items-center gap-2"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Save & Publish Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
