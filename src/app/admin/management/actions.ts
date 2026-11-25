"use server";

import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import { revalidatePath } from "next/cache";

export interface ManagementMemberItem {
  id: string;
  name: string;
  designation: string;
  boardBadge: string | null;
  bio: string | null;
  fullBio: string | null;
  image: string | null;
  order: number;
  isKeyLeader: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
}

// 1. READ: Fetch all management members (ordered by hierarchy sequence)
export async function getManagementMembersAction(): Promise<{
  success: boolean;
  members: ManagementMemberItem[];
  error?: string;
}> {
  try {
    await requireAdmin();

    const records = await prisma.managementMember.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    const members: ManagementMemberItem[] = records.map((m) => ({
      id: m.id,
      name: m.name,
      designation: m.designation,
      boardBadge: m.boardBadge,
      bio: m.bio,
      fullBio: m.fullBio,
      image: m.image,
      order: m.order,
      isKeyLeader: m.isKeyLeader,
      status: m.status,
      createdAt: m.createdAt.toISOString(),
      updatedAt: m.updatedAt.toISOString(),
    }));

    return { success: true, members };
  } catch {
    return {
      success: false,
      members: [],
      error: "Failed to fetch management members from database.",
    };
  }
}

// 2. CREATE: Add new management member
export async function createManagementMemberAction(data: {
  name: string;
  designation: string;
  boardBadge?: string;
  bio?: string;
  fullBio?: string;
  image?: string;
  order?: number;
  isKeyLeader?: boolean;
  status?: string;
}): Promise<{ success: boolean; error?: string; member?: ManagementMemberItem }> {
  try {
    await requireAdmin();

    const name = data.name.trim();
    const designation = data.designation.trim();

    if (!name || name.length < 2) {
      return { success: false, error: "Member name must be at least 2 characters." };
    }
    if (!designation || designation.length < 2) {
      return { success: false, error: "Designation title must be at least 2 characters." };
    }

    // Default order: if not provided or 0, append to highest order + 1
    let orderNum = typeof data.order === "number" && !isNaN(data.order) ? data.order : 0;
    if (orderNum === 0) {
      const highest = await prisma.managementMember.findFirst({
        orderBy: { order: "desc" },
        select: { order: true },
      });
      orderNum = (highest?.order ?? 0) + 1;
    }

    const created = await prisma.managementMember.create({
      data: {
        name,
        designation,
        boardBadge: data.boardBadge?.trim() || null,
        bio: data.bio?.trim() || null,
        fullBio: data.fullBio?.trim() || null,
        image: data.image?.trim() || null,
        order: orderNum,
        isKeyLeader: Boolean(data.isKeyLeader),
        status: data.status || "ACTIVE",
      },
    });

    revalidatePath("/admin/management");
    revalidatePath("/management");

    return {
      success: true,
      member: {
        id: created.id,
        name: created.name,
        designation: created.designation,
        boardBadge: created.boardBadge,
        bio: created.bio,
        fullBio: created.fullBio,
        image: created.image,
        order: created.order,
        isKeyLeader: created.isKeyLeader,
        status: created.status,
        createdAt: created.createdAt.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
      },
    };
  } catch {
    return { success: false, error: "Database error creating management member." };
  }
}

// 3. UPDATE: Edit existing management member
export async function updateManagementMemberAction(
  id: string,
  data: {
    name?: string;
    designation?: string;
    boardBadge?: string;
    bio?: string;
    fullBio?: string;
    image?: string;
    order?: number;
    isKeyLeader?: boolean;
    status?: string;
  }
): Promise<{ success: boolean; error?: string; member?: ManagementMemberItem }> {
  try {
    await requireAdmin();

    const existing = await prisma.managementMember.findUnique({ where: { id } });
    if (!existing) {
      return { success: false, error: "Management member not found." };
    }

    const updated = await prisma.managementMember.update({
      where: { id },
      data: {
        ...(data.name ? { name: data.name.trim() } : {}),
        ...(data.designation ? { designation: data.designation.trim() } : {}),
        ...(data.boardBadge !== undefined ? { boardBadge: data.boardBadge?.trim() || null } : {}),
        ...(data.bio !== undefined ? { bio: data.bio?.trim() || null } : {}),
        ...(data.fullBio !== undefined ? { fullBio: data.fullBio?.trim() || null } : {}),
        ...(data.image !== undefined ? { image: data.image?.trim() || null } : {}),
        ...(data.order !== undefined ? { order: data.order } : {}),
        ...(data.isKeyLeader !== undefined ? { isKeyLeader: data.isKeyLeader } : {}),
        ...(data.status ? { status: data.status } : {}),
      },
    });

    revalidatePath("/admin/management");
    revalidatePath("/management");

    return {
      success: true,
      member: {
        id: updated.id,
        name: updated.name,
        designation: updated.designation,
        boardBadge: updated.boardBadge,
        bio: updated.bio,
        fullBio: updated.fullBio,
        image: updated.image,
        order: updated.order,
        isKeyLeader: updated.isKeyLeader,
        status: updated.status,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      },
    };
  } catch {
    return { success: false, error: "Database error updating management member." };
  }
}

// 4. DELETE: Remove management member
export async function deleteManagementMemberAction(id: string): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    await requireAdmin();

    const existing = await prisma.managementMember.findUnique({ where: { id } });
    if (!existing) {
      return { success: false, error: "Management member not found." };
    }

    await prisma.managementMember.delete({ where: { id } });

    revalidatePath("/admin/management");
    revalidatePath("/management");

    return { success: true };
  } catch {
    return { success: false, error: "Database error deleting management member." };
  }
}
