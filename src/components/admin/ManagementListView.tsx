"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Search,
  Plus,
  ArrowUpDown,
  Edit2,
  Trash2,
  AlertCircle,
  CheckCircle,
  Star,
  UserCheck,
} from "lucide-react";
import {
  deleteManagementMemberAction,
  getManagementMembersAction,
  ManagementMemberItem,
} from "@/app/admin/management/actions";

interface ManagementListViewProps {
  initialMembers?: ManagementMemberItem[];
}

export default function ManagementListView({
  initialMembers = [],
}: ManagementListViewProps) {
  const [members, setMembers] = useState<ManagementMemberItem[]>(initialMembers);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (initialMembers && initialMembers.length > 0) {
      setMembers(initialMembers);
    } else {
      getManagementMembersAction().then((res) => {
        if (res.success && res.members) {
          setMembers(res.members);
        }
      });
    }
  }, [initialMembers]);

  // Filter & Sort
  const filtered = members
    .filter((m) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.designation.toLowerCase().includes(q) ||
        (m.boardBadge && m.boardBadge.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.order - b.order;
      return b.order - a.order;
    });

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(filtered.map((m) => m.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from company management?`)) {
      return;
    }

    setDeletingId(id);
    setStatusMessage(null);

    try {
      const res = await deleteManagementMemberAction(id);
      if (res.success) {
        setMembers((prev) => prev.filter((m) => m.id !== id));
        setSelectedIds((prev) => prev.filter((item) => item !== id));
        setStatusMessage({
          type: "success",
          text: `"${name}" was deleted successfully.`,
        });
      } else {
        setStatusMessage({
          type: "error",
          text: res.error || "Failed to delete member.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "An error occurred while deleting member.",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="w-full pb-16">
      {/* 1. Header Area with Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#F0F7EB] via-white to-[#F0F7EB] border border-[#8CCF24]/30 p-6 sm:p-8 mb-6 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_4px_24px_rgba(1,61,38,0.04)]">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-[#EAF5DC] border border-[#8CCF24]/40 flex items-center justify-center text-[#013D26]">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold tracking-[1.5px] text-[#013D26] uppercase">
              COMPANY LEADERSHIP
            </span>
          </div>
          <h1 className="font-serif text-[#013D26] text-[26px] sm:text-[32px] font-bold leading-tight">
            Company Management People
          </h1>
          <p className="text-gray-600 text-[13.5px] sm:text-[14.5px] mt-1">
            Manage executive board, directors, advisors, and corporate governance hierarchy displayed across the public website.
          </p>
        </div>

        {/* Right Facility Graphic Preview */}
        <div className="hidden md:block w-[240px] h-[100px] relative rounded-xl overflow-hidden border border-white/60 shadow-xs shrink-0">
          <Image
            src="/assets/admin/dashboard-welcome-banner.jpg"
            alt="Corporate Facility"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Status Feedback Banner */}
      {statusMessage && (
        <div
          className={`mb-6 p-4 rounded-xl text-[13.5px] flex items-center gap-2.5 ${
            statusMessage.type === "success"
              ? "bg-[#E8F5E9] border border-[#A5D6A7] text-[#1E7E34]"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {statusMessage.type === "success" ? (
            <CheckCircle className="w-4 h-4 shrink-0 text-[#2E7D32]" />
          ) : (
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {/* 2. Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-4 sm:p-5 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
          {/* Search Field */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search executive name, designation, badge..."
              className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[13.5px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#013D26]/20 focus:border-[#013D26] transition-all"
            />
          </div>

          {/* Hierarchy Sort Order Toggle */}
          <button
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-[13px] font-medium text-gray-700 transition-all cursor-pointer shrink-0"
          >
            <ArrowUpDown className="w-3.5 h-3.5 text-[#013D26]" />
            <span>
              Hierarchy: {sortOrder === "asc" ? "Ascending (1 → 9)" : "Descending (9 → 1)"}
            </span>
          </button>
        </div>

        {/* Add New Member Button */}
        <Link
          href="/admin/management/new"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#013D26] hover:bg-[#025234] text-white text-[13.5px] font-semibold rounded-xl shadow-xs hover:shadow transition-all cursor-pointer shrink-0"
        >
          <Plus className="w-4 h-4 text-[#8CCF24]" />
          <span>Add New Member</span>
        </Link>
      </div>

      {/* 3. Table Card */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-[#FAFBF9] text-[11.5px] font-bold text-gray-500 uppercase tracking-wider">
                <th className="py-4 pl-6 pr-3 w-12 text-center">
                  <input
                    type="checkbox"
                    checked={
                      filtered.length > 0 && selectedIds.length === filtered.length
                    }
                    onChange={handleSelectAll}
                    className="w-4 h-4 rounded text-[#013D26] focus:ring-[#013D26] border-gray-300"
                  />
                </th>
                <th className="py-4 px-3 w-16 text-center">Image</th>
                <th className="py-4 px-4 min-w-[200px]">Executive Name</th>
                <th className="py-4 px-4 min-w-[180px]">Designation & Badge</th>
                <th className="py-4 px-4 min-w-[280px]">Summary Bio</th>
                <th className="py-4 px-4 text-center w-28">Hierarchy Order</th>
                <th className="py-4 px-4 text-center w-28">Status</th>
                <th className="py-4 pr-6 pl-4 text-right w-28">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-[13.5px]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-gray-400">
                    <UserCheck className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-600">No management members found.</p>
                    <p className="text-[12px] text-gray-400 mt-1">
                      Click &quot;Add New Member&quot; to register company leadership.
                    </p>
                  </td>
                </tr>
              ) : (
                filtered.map((member) => (
                  <tr
                    key={member.id}
                    className="hover:bg-[#F9FCF7] transition-colors group"
                  >
                    {/* Checkbox */}
                    <td className="py-4 pl-6 pr-3 text-center">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(member.id)}
                        onChange={() => handleSelectOne(member.id)}
                        className="w-4 h-4 rounded text-[#013D26] focus:ring-[#013D26] border-gray-300"
                      />
                    </td>

                    {/* Portrait Avatar */}
                    <td className="py-4 px-3 text-center">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden relative border border-gray-200 mx-auto shrink-0 shadow-2xs">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-[14px]">
                            {member.name.charAt(0)}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Executive Name */}
                    <td className="py-4 px-4 font-semibold text-gray-900">
                      <div className="flex items-center gap-2">
                        <span>{member.name}</span>
                        {member.isKeyLeader && (
                          <span
                            title="Featured Hero Card"
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200/80"
                          >
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            <span>Featured</span>
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Designation & Board Badge */}
                    <td className="py-4 px-4">
                      <span className="inline-block text-[11.5px] font-bold text-[#013D26] bg-[#EAF5DC] px-2.5 py-1 rounded-md border border-[#8CCF24]/30 uppercase tracking-wide">
                        {member.designation}
                      </span>
                      {member.boardBadge && (
                        <p className="text-[12px] text-gray-500 mt-1 font-medium">
                          {member.boardBadge}
                        </p>
                      )}
                    </td>

                    {/* Bio Excerpt */}
                    <td className="py-4 px-4 text-gray-500 text-[12.5px] leading-relaxed line-clamp-2 max-w-md">
                      {member.bio || "No summary biography provided."}
                    </td>

                    {/* Hierarchy Order */}
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-[#013D26] font-bold text-[13px] border border-gray-200 shadow-2xs">
                        #{member.order}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11.5px] font-semibold ${
                          member.status === "ACTIVE"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-gray-100 text-gray-500 border border-gray-200"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            member.status === "ACTIVE"
                              ? "bg-emerald-500"
                              : "bg-gray-400"
                          }`}
                        />
                        <span>{member.status === "ACTIVE" ? "Active" : "Inactive"}</span>
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-4 pr-6 pl-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <Link
                          href={`/admin/management/${member.id}/edit`}
                          className="p-1.5 text-gray-500 hover:text-[#013D26] hover:bg-[#EAF5DC] rounded-lg transition-all"
                          title="Edit Member"
                        >
                          <Edit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(member.id, member.name)}
                          disabled={deletingId === member.id}
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
                          title="Delete Member"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#FAFBF9] border-t border-gray-100 flex items-center justify-between text-[12px] text-gray-500">
          <span>Showing {filtered.length} management profiles</span>
          <span>Hierarchy precedence: Order #1 is highest corporate rank</span>
        </div>
      </div>
    </div>
  );
}
