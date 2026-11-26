"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Workflow,
  Settings,
  UploadCloud,
  CheckCircle,
  AlertCircle,
  Trash2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { DIVISIONS_LIST } from "@/data/adminProducts";
import { ProductItem, createProductAction, updateProductAction } from "@/app/admin/products/actions";
import { CategoryItem, getCategoriesAction } from "@/app/admin/products-services/categories/actions";
import { useRouter } from "next/navigation";

interface AddProductFormViewProps {
  onBack?: () => void;
  onOpenNotice?: (title: string) => void;
  initialData?: ProductItem;
  categories?: CategoryItem[];
  mode?: "create" | "edit";
}

interface LifecycleStepState {
  url: string;
  file: File | null;
  previewUrl: string;
}

export default function AddProductFormView({
  onBack,
  onOpenNotice,
  initialData,
  categories,
  mode = "create",
}: AddProductFormViewProps) {
  const router = useRouter();

  // Dynamic Categories State
  const [availableCategories, setAvailableCategories] = useState<CategoryItem[]>(categories || []);
  const [categoryId, setCategoryId] = useState<string>(initialData?.categoryId || "");

  // 1. Basic Information State
  const [commodityName, setCommodityName] = useState(initialData?.commodityName || "");
  const [targetDivision, setTargetDivision] = useState(
    initialData?.division || ""
  );
  const [cardBadgeText, setCardBadgeText] = useState(initialData?.cardBadgeText || initialData?.division || "");
  const [description, setDescription] = useState(initialData?.description || "");

  // Sync / fetch dynamic categories
  React.useEffect(() => {
    if (categories && categories.length > 0) {
      setAvailableCategories(categories);
      if (!categoryId && !initialData?.categoryId) {
        setCategoryId(categories[0].id);
        if (!targetDivision) setTargetDivision(categories[0].name);
        if (!cardBadgeText) setCardBadgeText(categories[0].name);
      }
    } else {
      getCategoriesAction().then((res) => {
        if (res.success && res.categories && res.categories.length > 0) {
          setAvailableCategories(res.categories);
          if (!categoryId && !initialData?.categoryId) {
            setCategoryId(res.categories[0].id);
            if (!targetDivision) setTargetDivision(res.categories[0].name);
            if (!cardBadgeText) setCardBadgeText(res.categories[0].name);
          }
        }
      });
    }
  }, [categories]);

  // Auto-generate URL slug
  const generatedSlug = commodityName
    ? `/${commodityName
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")}`
    : "";

  // 2. Visual / Media State
  const [mainImageFile, setMainImageFile] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>(
    initialData?.image || "/assets/admin/products/fresh-grocery.jpg"
  );
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 3. Service Specifications & Export Details State (6 Fields)
  const [breedSpeciesVariety, setBreedSpeciesVariety] = useState(initialData?.breedSpeciesVariety || "");
  const [farmingHusbandryMethod, setFarmingHusbandryMethod] = useState(initialData?.farmingHusbandryMethod || "");
  const [processingColdChainTech, setProcessingColdChainTech] = useState(initialData?.processingColdChainTech || "");
  const [cutsPackagingFormats, setCutsPackagingFormats] = useState(initialData?.cutsPackagingFormats || "");
  const [certificationsStandards, setCertificationsStandards] = useState(initialData?.certificationsStandards || "");
  const [exportLogisticsShipping, setExportLogisticsShipping] = useState(initialData?.exportLogisticsShipping || "");

  // 4. 5-Step Commercial Lifecycle Images State
  const [lifecycleSteps, setLifecycleSteps] = useState<LifecycleStepState[]>(() => {
    if (initialData?.lifecycleImages && initialData.lifecycleImages.length === 5) {
      return initialData.lifecycleImages.map((s) => ({
        url: s.imageUrl || "",
        file: null,
        previewUrl: s.imageUrl || "",
      }));
    }
    return [
      { url: "", file: null, previewUrl: "" },
      { url: "", file: null, previewUrl: "" },
      { url: "", file: null, previewUrl: "" },
      { url: "", file: null, previewUrl: "" },
      { url: "", file: null, previewUrl: "" },
    ];
  });

  // 5. Publishing & Ordering State
  const [displayOrder, setDisplayOrder] = useState<number>(initialData?.displayOrder ?? 0);
  const [isPublished, setIsPublished] = useState<boolean>(
    initialData ? initialData.status === "ACTIVE" : true
  );

  // Form State
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Allowed MIME types (Max 15MB)
  const ALLOWED_MIME_TYPES = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/avif",
  ];
  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

  // Main Image Upload Handler
  const handleMainFileSelect = (file: File) => {
    setUploadError("");

    if (file.type === "image/svg+xml") {
      setUploadError(
        "SVG format requires server-side XML sanitization. Please upload PNG, JPG, WebP, or AVIF."
      );
      return;
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      setUploadError("Invalid image format. Allowed: PNG, JPG, WebP, AVIF.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadError("Image exceeds 15 MB limit. Please optimize the file.");
      return;
    }

    setMainImageFile(file);
    const objectUrl = URL.createObjectURL(file);
    setMainImagePreview(objectUrl);
  };

  const handleMainDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleMainFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveMainImage = () => {
    setMainImageFile(null);
    setMainImagePreview("/assets/admin/products/fresh-grocery.jpg");
    setUploadError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Lifecycle Step Handlers
  const handleLifecycleUrlChange = (index: number, val: string) => {
    setLifecycleSteps((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], url: val };
      return next;
    });
  };

  const handleLifecycleFileChange = (index: number, file: File | null) => {
    if (!file) return;

    if (file.type === "image/svg+xml") {
      alert("SVG format requires server-side XML sanitization. Please use PNG, JPG, WebP, or AVIF.");
      return;
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      alert("Invalid format. Allowed: PNG, JPG, WebP, AVIF.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File exceeds 15 MB limit.");
      return;
    }

    const preview = URL.createObjectURL(file);
    setLifecycleSteps((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], file, previewUrl: preview };
      return next;
    });
  };

  const handleRemoveLifecycleImage = (index: number) => {
    setLifecycleSteps((prev) => {
      const next = [...prev];
      next[index] = { url: "", file: null, previewUrl: "" };
      return next;
    });
  };

  // Form Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    if (!commodityName.trim()) {
      errors.push("Commodity / Service Name is required.");
    }
    if (!targetDivision) {
      errors.push("Target Division / Category is required.");
    }
    if (!description.trim()) {
      errors.push("Description (Shown on Homepage Card) is required.");
    }
    if (displayOrder < 0 || isNaN(displayOrder)) {
      errors.push("Display Order must be a valid non-negative integer.");
    }

    // Check for conflict where both URL and File are supplied for the same lifecycle step
    lifecycleSteps.forEach((step, idx) => {
      if (step.url.trim() && step.file) {
        errors.push(`Step ${idx + 1}: Both URL and uploaded file provided; please remove one.`);
      }
    });

    if (errors.length > 0) {
      setFormErrors(errors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setFormErrors([]);
    setSubmitting(true);

    try {
      const selectedCategoryObj = availableCategories.find((c) => c.id === categoryId);
      const effectiveDivision = targetDivision || selectedCategoryObj?.name || "";
      const effectiveBadge = cardBadgeText.trim() || effectiveDivision;

      if (mode === "edit" && initialData?.id) {
        const res = await updateProductAction(initialData.id, {
          commodityName: commodityName.trim(),
          categoryId: categoryId || undefined,
          division: effectiveDivision,
          cardBadgeText: effectiveBadge,
          description: description.trim(),
          image: mainImagePreview,
          breedSpeciesVariety: breedSpeciesVariety.trim() || undefined,
          farmingHusbandryMethod: farmingHusbandryMethod.trim() || undefined,
          processingColdChainTech: processingColdChainTech.trim() || undefined,
          cutsPackagingFormats: cutsPackagingFormats.trim() || undefined,
          certificationsStandards: certificationsStandards.trim() || undefined,
          exportLogisticsShipping: exportLogisticsShipping.trim() || undefined,
          displayOrder: Number(displayOrder) || 0,
          status: isPublished ? "ACTIVE" : "INACTIVE",
        });

        if (res.success) {
          setSuccessMessage("Commodity updated in database successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/products");
          }, 800);
        } else {
          setFormErrors([res.error || "Failed to update commodity."]);
        }
      } else {
        const res = await createProductAction({
          commodityName: commodityName.trim(),
          categoryId: categoryId || undefined,
          division: effectiveDivision,
          cardBadgeText: effectiveBadge,
          description: description.trim(),
          image: mainImagePreview,
          breedSpeciesVariety: breedSpeciesVariety.trim() || undefined,
          farmingHusbandryMethod: farmingHusbandryMethod.trim() || undefined,
          processingColdChainTech: processingColdChainTech.trim() || undefined,
          cutsPackagingFormats: cutsPackagingFormats.trim() || undefined,
          certificationsStandards: certificationsStandards.trim() || undefined,
          exportLogisticsShipping: exportLogisticsShipping.trim() || undefined,
          displayOrder: Number(displayOrder) || 0,
          status: isPublished ? "ACTIVE" : "INACTIVE",
        });

        if (res.success) {
          setSuccessMessage("Commodity created and saved to PostgreSQL successfully!");
          setTimeout(() => {
            if (onBack) onBack();
            else router.push("/admin/products");
          }, 800);
        } else {
          setFormErrors([res.error || "Failed to create commodity."]);
        }
      }
    } catch {
      setFormErrors(["Network error submitting commodity."]);
    } finally {
      setSubmitting(false);
    }
  };

  const lifecycleStepTitles = [
    { number: 1, title: "Step 1: Farming / Production Image", example: "/services/goat/step1.jpg" },
    { number: 2, title: "Step 2: Processing / Abattoir Image", example: "/services/goat/step2.jpg" },
    { number: 3, title: "Step 3: Packaging / Export Pack Image", example: "/services/goat/step3.jpg" },
    { number: 4, title: "Step 4: Maritime Export & Shipping Image", example: "/services/goat/step4.jpg" },
    { number: 5, title: "Step 5: Culinary Application Image", example: "/services/goat/step5.jpg" },
  ];

  return (
    <div className="w-full pb-16">
      {/* 1. PAGE HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
        <div>
          <span className="text-[11px] font-bold tracking-[1.5px] text-[#013D26] uppercase">
            SERVICES & PRODUCTS
          </span>
          <h1 className="font-serif text-[#013D26] text-[28px] sm:text-[34px] font-bold tracking-tight leading-tight mt-0.5">
            {mode === "edit" ? "Edit Commodity / Service" : "Add New Commodity / Service"}
          </h1>
          <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1">
            {mode === "edit"
              ? "Update commodity specifications, division, lifecycle and publishing."
              : "Configure commodity title, category, description, publishing options, and preview image."}
          </p>
        </div>

        {/* Back Link */}
        <div className="shrink-0">
          <Link
            href="/admin/products"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault();
                onBack();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300/90 bg-white hover:bg-[#F4F9F2] text-[#013D26] text-[13.5px] font-semibold shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </div>

      {/* Success Banner */}
      {successMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-[#E8F5E9] border border-[#A5D6A7] text-[#1E7E34] text-[13.5px] flex items-center gap-2.5">
          <CheckCircle className="w-4 h-4 text-[#2E7D32] shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* Validation Error Banner */}
      {formErrors.length > 0 && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-[13.5px]">
          <div className="flex items-center gap-2 font-bold mb-1">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span>Please correct the following errors before proceeding:</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 text-[13px] text-red-700 pl-2">
            {formErrors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* UPPER GRID: 2 COLUMNS (Basic Info + Visual/Media) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* 2. BASIC INFORMATION (UPPER-LEFT COLUMN) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 h-full flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3.5 pb-5 mb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                    Basic Information
                  </h2>
                  <p className="text-[12.5px] text-gray-500 mt-0.5">
                    Provide the key details about this commodity or service.
                  </p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {/* 1. Commodity / Service Name * */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Commodity / Service Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={commodityName}
                    onChange={(e) => setCommodityName(e.target.value)}
                    placeholder="e.g. Premium Basmati Rice"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
                  />
                  {generatedSlug && (
                    <p className="mt-1.5 text-[11.5px] text-gray-500 flex items-center gap-1.5 font-mono">
                      <span className="text-gray-400">Auto-generated URL:</span>
                      <span className="text-[#013D26] font-semibold bg-[#EAF5DC] px-2 py-0.5 rounded-md border border-[#8CCF24]/30">
                        {generatedSlug}
                      </span>
                    </p>
                  )}
                </div>

                {/* 2. Target Division / Category (Dynamic Foreign Key) * */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Target Division / Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={categoryId}
                    onChange={(e) => {
                      const selectedId = e.target.value;
                      setCategoryId(selectedId);
                      const selectedCat = availableCategories.find((c) => c.id === selectedId);
                      if (selectedCat) {
                        setTargetDivision(selectedCat.name);
                        if (!cardBadgeText || cardBadgeText === targetDivision) {
                          setCardBadgeText(selectedCat.name);
                        }
                      }
                    }}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all cursor-pointer font-medium"
                  >
                    <option value="">-- Select Dynamic Category / Phase --</option>
                    {availableCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  {availableCategories.length === 0 && (
                    <p className="mt-1 text-[11.5px] text-gray-400">Loading categories...</p>
                  )}
                </div>

                {/* 3. Card Badge Text */}
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-1.5">
                    Card Badge Text
                  </label>
                  <input
                    type="text"
                    value={cardBadgeText}
                    onChange={(e) => setCardBadgeText(e.target.value)}
                    placeholder="Bulk Commodities"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
                  />
                </div>

                {/* 4. Description (Shown on Homepage Card) * */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[13px] font-bold text-gray-700">
                      Description (Shown on Homepage Card) <span className="text-red-500">*</span>
                    </label>
                    <span
                      className={`text-[11.5px] font-mono font-medium ${
                        description.length >= 500 ? "text-red-600 font-bold" : "text-gray-400"
                      }`}
                    >
                      {description.length}/500
                    </span>
                  </div>
                  <textarea
                    required
                    maxLength={500}
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="High-quality essentials delivered with reliability, durability, and strong brand value."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all leading-relaxed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. VISUAL / MEDIA (UPPER-RIGHT COLUMN) */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7 h-full flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-start gap-3.5 pb-5 mb-5 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                    Visual / Media
                  </h2>
                  <p className="text-[12.5px] text-gray-500 mt-0.5">
                    Upload an attractive image to represent this commodity or service.
                  </p>
                </div>
              </div>

              {/* Upload & Preview Dual Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                {/* Drag and Drop Upload Area */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleMainDrop}
                  className={`border-2 border-dashed rounded-2xl p-5 text-center flex flex-col items-center justify-center min-h-[220px] transition-all cursor-pointer ${
                    isDragOver
                      ? "border-[#013D26] bg-[#EAF5DC]/40 scale-[1.01]"
                      : "border-gray-200 hover:border-[#013D26]/40 bg-gray-50/50 hover:bg-[#F0F7EB]/30"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".png,.jpg,.jpeg,.webp,.avif"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleMainFileSelect(e.target.files[0]);
                      }
                    }}
                  />

                  <div className="w-11 h-11 rounded-full bg-[#EAF5DC] flex items-center justify-center text-[#013D26] mb-2.5 shadow-2xs">
                    <UploadCloud className="w-5 h-5" />
                  </div>

                  <p className="text-[13px] font-bold text-gray-800 leading-tight mb-1">
                    Drag & drop your image here
                  </p>
                  <span className="text-[11.5px] text-gray-400 mb-2.5">or</span>

                  <button
                    type="button"
                    className="bg-[#013D26] hover:bg-[#025234] text-white text-[12px] font-semibold px-4 py-2 rounded-xl transition-all shadow-2xs cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    Choose File from Local Computer
                  </button>

                  <p className="text-[11px] text-gray-400 mt-3 leading-tight max-w-[200px]">
                    PNG, JPG, WebP, AVIF up to 15MB
                  </p>
                </div>

                {/* Active Preview Box */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full flex items-center justify-between mb-1.5 px-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#2E7D32] border border-[#A5D6A7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
                      Active Preview
                    </span>

                    {mainImageFile && (
                      <button
                        type="button"
                        onClick={handleRemoveMainImage}
                        className="text-[11.5px] text-red-600 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                        title="Remove uploaded image"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    )}
                  </div>

                  <div className="w-full h-[185px] rounded-2xl overflow-hidden border border-gray-200 relative shadow-xs bg-gray-100 group">
                    <Image
                      src={mainImagePreview}
                      alt="Commodity Preview"
                      fill
                      className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] font-medium text-white/90 truncate">
                        {mainImageFile ? mainImageFile.name : "Default Commodity Image"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload Error Banner */}
              {uploadError && (
                <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[12px] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4. SERVICE SPECIFICATIONS & EXPORT DETAILS (CORPORATE AGRO) */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7">
          {/* Card Header */}
          <div className="flex items-start gap-3.5 pb-5 mb-5 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                Service Specifications & Export Details (Corporate Agro)
              </h2>
              <p className="text-[12.5px] text-gray-500 mt-0.5">
                Key attributes displayed on the single service details page according to Corporate Agro Profile.
              </p>
            </div>
          </div>

          {/* Row 1: 4 Fields on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Field 1 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Breed / Species / Variety
              </label>
              <input
                type="text"
                value={breedSpeciesVariety}
                onChange={(e) => setBreedSpeciesVariety(e.target.value)}
                placeholder="American Brahman Crosses, Black Bengal Goat"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Field 2 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Farming & Husbandry Method
              </label>
              <input
                type="text"
                value={farmingHusbandryMethod}
                onChange={(e) => setFarmingHusbandryMethod(e.target.value)}
                placeholder="90-120 Day TMR Feedlot, RFID Individual Tracking"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Field 3 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Processing & Cold-Chain Tech
              </label>
              <input
                type="text"
                value={processingColdChainTech}
                onChange={(e) => setProcessingColdChainTech(e.target.value)}
                placeholder="Certified Halal Abattoir, -40°C IQF Blast Freeze"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Field 4 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Cuts & Packaging Formats
              </label>
              <input
                type="text"
                value={cutsPackagingFormats}
                onChange={(e) => setCutsPackagingFormats(e.target.value)}
                placeholder="Prime Ribeye, Chops, Vacuum Skin & 5-Ply Box"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>
          </div>

          {/* Row 2: 2 Fields on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Field 5 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Certifications & Standards
              </label>
              <input
                type="text"
                value={certificationsStandards}
                onChange={(e) => setCertificationsStandards(e.target.value)}
                placeholder="100% Halal Certified, HACCP, ISO 22000, DLS"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Field 6 */}
            <div>
              <label className="block text-[12.5px] font-bold text-gray-700 mb-1.5">
                Export Logistics & Shipping
              </label>
              <input
                type="text"
                value={exportLogisticsShipping}
                onChange={(e) => setExportLogisticsShipping(e.target.value)}
                placeholder="40ft High-Cube Reefer (-20°C), Air Freight (0-2°C)"
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>
          </div>
        </div>

        {/* 5. 5-STEP COMMERCIAL LIFECYCLE IMAGES (SINGLE SERVICE PAGE PIPELINE) */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7">
          {/* Card Header */}
          <div className="flex items-start gap-3.5 pb-5 mb-5 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                5-Step Commercial Lifecycle Images (Single Service Page Pipeline)
              </h2>
              <p className="text-[12.5px] text-gray-500 mt-0.5">
                Upload or specify URLs for the 5 lifecycle step images displayed on the single service page (Step 1 to Step 5).
              </p>
            </div>
          </div>

          {/* 5 Columns Grid on Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lifecycleStepTitles.map((step, idx) => {
              const current = lifecycleSteps[idx];
              const hasConflict = Boolean(current.url.trim() && current.file);

              return (
                <div
                  key={step.number}
                  className={`p-3.5 rounded-xl border bg-gray-50/60 transition-all flex flex-col justify-between ${
                    hasConflict
                      ? "border-amber-400 bg-amber-50/30"
                      : "border-gray-200 hover:border-[#013D26]/30"
                  }`}
                >
                  <div>
                    {/* Step Title */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-bold text-gray-800 leading-tight">
                        {step.title}
                      </span>
                    </div>

                    {/* URL Input */}
                    <div className="mb-2.5">
                      <input
                        type="text"
                        value={current.url}
                        onChange={(e) => handleLifecycleUrlChange(idx, e.target.value)}
                        placeholder={step.example}
                        className="w-full px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[12px] font-mono text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#013D26] transition-all"
                      />
                    </div>

                    {/* File Upload Selector */}
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-500 mb-1">
                        Or Upload File:
                      </label>
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.webp,.avif"
                        id={`lifecycle-file-${idx}`}
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleLifecycleFileChange(idx, e.target.files[0]);
                          }
                        }}
                      />
                      <label
                        htmlFor={`lifecycle-file-${idx}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 text-[11.5px] font-semibold text-gray-700 cursor-pointer transition-all shadow-2xs"
                      >
                        <UploadCloud className="w-3.5 h-3.5 text-gray-500" />
                        <span>{current.file ? "Change File" : "Choose File"}</span>
                      </label>

                      <div className="mt-1 text-[11px] text-gray-500 truncate">
                        {current.file ? current.file.name : "No file chosen"}
                      </div>
                    </div>
                  </div>

                  {/* Conflict Notice or Preview Thumbnail */}
                  <div className="mt-3 pt-2.5 border-t border-gray-200/60">
                    {hasConflict ? (
                      <p className="text-[11px] text-amber-700 leading-tight font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Both provided; please clear one.</span>
                      </p>
                    ) : current.file && current.previewUrl ? (
                      <div className="relative h-[65px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100 group">
                        <Image
                          src={current.previewUrl}
                          alt={`Step ${idx + 1}`}
                          fill
                          className="object-cover object-center"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveLifecycleImage(idx)}
                          className="absolute top-1 right-1 p-1 bg-red-600/80 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
                          title="Remove Image"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    ) : current.url ? (
                      <div className="text-[11px] text-[#013D26] font-medium flex items-center justify-between">
                        <span className="truncate">URL specified</span>
                        <button
                          type="button"
                          onClick={() => handleLifecycleUrlChange(idx, "")}
                          className="text-red-500 hover:text-red-700 ml-1 cursor-pointer"
                        >
                          Clear
                        </button>
                      </div>
                    ) : (
                      <span className="text-[11px] text-gray-400 italic">No image set</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. PUBLISHING & ORDERING */}
        <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 sm:p-7">
          {/* Card Header */}
          <div className="flex items-start gap-3.5 pb-5 mb-5 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center shrink-0 text-[#013D26]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-gray-900 leading-tight">
                Publishing & Ordering
              </h2>
              <p className="text-[12.5px] text-gray-500 mt-0.5">
                Configure publishing status and display order for this commodity or service.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Display Order (Sorting) */}
            <div className="w-full md:w-[320px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <label className="text-[13px] font-bold text-gray-700">
                  Display Order (Sorting)
                </label>
                <span title="Integer value to prioritize ordering on public cards" className="cursor-help inline-flex items-center">
                  <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                </span>
              </div>
              <input
                type="number"
                min={0}
                value={displayOrder}
                onChange={(e) => setDisplayOrder(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] font-bold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
              />
            </div>

            {/* Publish Active on Public Website (Toggle Switch) */}
            <div className="flex items-center gap-4 bg-gray-50/70 border border-gray-200/80 p-4 rounded-xl flex-1 max-w-[540px]">
              <button
                type="button"
                role="switch"
                aria-checked={isPublished}
                onClick={() => setIsPublished(!isPublished)}
                className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 ${
                  isPublished ? "bg-[#013D26]" : "bg-gray-300"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    isPublished ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>

              <div>
                <p className="text-[13.5px] font-bold text-gray-900 leading-tight">
                  Publish active on public website
                </p>
                <p className="text-[12px] text-gray-500 mt-0.5 leading-relaxed">
                  When enabled, this commodity/service will be visible on the public website. If disabled, the record must remain unpublished.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 7. FORM BUTTONS (BOTTOM-RIGHT) */}
        <div className="flex items-center justify-end gap-3 pt-3">
          <Link
            href="/admin/products"
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
            <span>{submitting ? "Saving..." : mode === "edit" ? "Update Commodity" : "Create Commodity"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
