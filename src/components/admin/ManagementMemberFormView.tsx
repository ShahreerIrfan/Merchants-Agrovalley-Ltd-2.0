"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  UserCheck,
  Plus,
  Edit3,
  CheckCircle,
  AlertCircle,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Info,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  createManagementMemberAction,
  updateManagementMemberAction,
  ManagementMemberItem,
} from "@/app/admin/management/actions";

interface ManagementMemberFormViewProps {
  initialData?: ManagementMemberItem;
  mode?: "create" | "edit";
  onBack?: () => void;
}

export default function ManagementMemberFormView({
  initialData,
  mode = "create",
  onBack,
}: ManagementMemberFormViewProps) {
  const router = useRouter();

  // Form State
  const [name, setName] = useState(initialData?.name || "");
  const [designation, setDesignation] = useState(initialData?.designation || "");
  const [boardBadge, setBoardBadge] = useState(initialData?.boardBadge || "");
  const [order, setOrder] = useState<number>(initialData?.order ?? 1);
  const [isKeyLeader, setIsKeyLeader] = useState<boolean>(initialData?.isKeyLeader ?? false);
  const [image, setImage] = useState(initialData?.image || "");
  const [bio, setBio] = useState(initialData?.bio || "");
  const [fullBio, setFullBio] = useState(initialData?.fullBio || "");
  const [status, setStatus] = useState(initialData?.status || "ACTIVE");

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle local image file preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 15 * 1024 * 1024) {
        setErrorMessage("Image file exceeds maximum allowed size (15 MB).");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setSubmitting(true);

    if (!name.trim()) {
      setErrorMessage("Member full name is required.");
      setSubmitting(false);
      return;
    }
    if (!designation.trim()) {
      setErrorMessage("Designation / Title is required.");
      setSubmitting(false);
      return;
    }

    try {
      if (mode === "edit" && initialData?.id) {
        const res = await updateManagementMemberAction(initialData.id, {
          name: name.trim(),
          designation: designation.trim(),
          boardBadge: boardBadge.trim() || undefined,
          bio: bio.trim() || undefined,
          fullBio: fullBio.trim() || undefined,
          image: image.trim() || undefined,
          order: Number(order) || 1,
          isKeyLeader,
          status,
        });

        if (res.success) {
          setSuccessMessage("Management member updated successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/management");
          }, 800);
        } else {
          setErrorMessage(res.error || "Failed to update management member.");
        }
      } else {
        const res = await createManagementMemberAction({
          name: name.trim(),
          designation: designation.trim(),
          boardBadge: boardBadge.trim() || undefined,
          bio: bio.trim() || undefined,
          fullBio: fullBio.trim() || undefined,
          image: image.trim() || undefined,
          order: Number(order) || 1,
          isKeyLeader,
          status,
        });

        if (res.success) {
          setSuccessMessage("Management member added and published successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/management");
          }, 800);
        } else {
          setErrorMessage(res.error || "Failed to create management member.");
        }
      }
    } catch {
      setErrorMessage("An unexpected network or server error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full pb-20">
      {/* 1. Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
          <span className="text-[11px] font-bold tracking-[1.5px] text-[#013D26] uppercase">
            COMPANY LEADERSHIP & GOVERNANCE
          </span>
          <h1 className="font-serif text-[#013D26] text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mt-0.5">
            {mode === "edit" ? "Edit Management Member" : "Add New Management Member"}
          </h1>
          <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1">
            Configure executive title, board designation, biography, hierarchy order, and profile portrait.
          </p>
        </div>

        {/* Back Link */}
        <div className="shrink-0">
          <Link
            href="/admin/management"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300/90 bg-white hover:bg-[#F4F9F2] text-[#013D26] text-[13.5px] font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Management</span>
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

      {/* Main Plain Page Form */}
      <form onSubmit={handleSubmit} className="space-y-7 max-w-[1100px]">
        {/* ROW 1: Basic Leadership Info & Profile Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          {/* Left Column: Basic Info (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 space-y-5">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                  Executive Details
                </h2>
                <p className="text-[12px] text-gray-500">
                  Core identity and governance attributes
                </p>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Mohammed H. Rahman"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Designation & Board Badge Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Designation */}
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Designation / Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g. CHAIRMAN or MANAGING DIRECTOR"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all uppercase"
                />
              </div>

              {/* Board / Department Badge */}
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Board / Category Badge
                </label>
                <input
                  type="text"
                  value={boardBadge}
                  onChange={(e) => setBoardBadge(e.target.value)}
                  placeholder="e.g. Executive Board, Advisory Board"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
                />
              </div>
            </div>

            {/* Hierarchy Order & Featured Key Leader Toggle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
              {/* Hierarchy Order */}
              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-1">
                  Hierarchy Order (Sorting) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  max={999}
                  value={order}
                  onChange={(e) => setOrder(parseInt(e.target.value, 10) || 1)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-bold text-[#013D26] focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
                />
                <p className="text-[11.5px] text-gray-500 mt-1">
                  Order 1 appears at the highest top hierarchy (e.g. Chairman).
                </p>
              </div>

              {/* Key Leader (Hero Featured Card) Toggle */}
              <div className="flex flex-col justify-center">
                <label className="text-[13px] font-bold text-gray-700 mb-1 flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>Featured Hero Card</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={isKeyLeader}
                    onChange={(e) => setIsKeyLeader(e.target.checked)}
                    className="w-5 h-5 rounded text-[#013D26] focus:ring-[#013D26] border-gray-300"
                  />
                  <span className="text-[13px] text-gray-700 font-medium">
                    Highlight as Large Hero Card
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Visual / Portrait Photo (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                    Profile Portrait
                  </h2>
                  <p className="text-[12px] text-gray-500">
                    High-resolution executive photo
                  </p>
                </div>
              </div>

              {/* Photo Preview Container */}
              <div className="w-full aspect-[4/3] rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center relative overflow-hidden mb-4 group">
                {image ? (
                  <>
                    <Image
                      src={image}
                      alt={name || "Management Member"}
                      fill
                      className="object-cover object-top"
                      onError={() => setImage("")}
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                      Active Preview
                    </div>
                  </>
                ) : (
                  <div className="text-center p-4">
                    <Upload className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-[13px] font-semibold text-gray-600">
                      No portrait selected
                    </p>
                    <p className="text-[11.5px] text-gray-400 mt-0.5">
                      PNG, JPG, WebP up to 15MB
                    </p>
                  </div>
                )}
              </div>

              {/* File input button */}
              <div className="flex items-center gap-3">
                <label className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#013D26] hover:bg-[#025234] text-white text-[13px] font-semibold rounded-xl cursor-pointer transition-all shadow-2xs">
                  <Upload className="w-4 h-4 text-[#8CCF24]" />
                  <span>Choose File</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/avif"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                {image && (
                  <button
                    type="button"
                    onClick={() => setImage("")}
                    className="px-3 py-2 border border-gray-300 hover:bg-gray-100 text-gray-600 text-[13px] font-medium rounded-xl transition-all"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Image URL text input */}
              <div className="mt-3">
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Or enter image URL path (e.g. /assets/leaders/...)"
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-[12px] text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#013D26]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Biographies (Short Summary + Full Extended Bio) */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                Biography & Profile Text
              </h2>
              <p className="text-[12px] text-gray-500">
                Summary card text and extended narrative for leadership details
              </p>
            </div>
          </div>

          {/* Short Bio (Card Overview) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[13px] font-bold text-gray-700">
                Short Bio (Shown on Card Overview) <span className="text-red-500">*</span>
              </label>
              <span className="text-[11.5px] text-gray-400">
                {bio.length} / 500 characters
              </span>
            </div>
            <textarea
              rows={3}
              required
              maxLength={500}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="e.g. Mr. Rahman is a highly energetic management and accounting graduate with extensive knowledge in trade and corporate finance, commodities, steel and metals..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all leading-relaxed"
            />
          </div>

          {/* Full Extended Biography */}
          <div>
            <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
              Full Biography (Displayed on &quot;See More &rarr;&quot; Extended View)
            </label>
            <textarea
              rows={5}
              value={fullBio}
              onChange={(e) => setFullBio(e.target.value)}
              placeholder="Provide complete professional background, leadership milestones, previous executive roles, and corporate governance vision..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all leading-relaxed"
            />
          </div>
        </div>

        {/* ROW 3: Publishing & Visibility */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-[15px] font-bold text-gray-900">
              Publish Status on Public Website
            </h3>
            <p className="text-[12.5px] text-gray-500 mt-0.5">
              When active, this management profile will be visible on the public website leadership page.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStatus(status === "ACTIVE" ? "INACTIVE" : "ACTIVE")}
              className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                status === "ACTIVE" ? "bg-[#013D26]" : "bg-gray-300"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  status === "ACTIVE" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-[13px] font-bold ${
                status === "ACTIVE" ? "text-[#013D26]" : "text-gray-400"
              }`}
            >
              {status === "ACTIVE" ? "Active on Site" : "Hidden / Inactive"}
            </span>
          </div>
        </div>

        {/* Form Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
          <Link
            href="/admin/management"
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
            <span>
              {submitting
                ? "Saving..."
                : mode === "edit"
                ? "Update Member"
                : "Create Member"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
