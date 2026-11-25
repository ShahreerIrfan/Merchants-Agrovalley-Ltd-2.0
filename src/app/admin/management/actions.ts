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

// Default initial seeds matching company leadership
const DEFAULT_MANAGEMENT_SEEDS = [
  {
    name: "Mohammed H. Rahman",
    designation: "CHAIRMAN",
    boardBadge: "Executive Board",
    bio: "Mr. Rahman is a highly energetic management and accounting graduate with extensive knowledge in trade and corporate finance, commodities, steel and metals, land development, and precious metals mining. He is a financial analyst specializing in accounting and new business development, with more than 20 years of experience in the financial services and commodities sectors.",
    fullBio: "Throughout his career, he has successfully led major international investment initiatives, cross-border commercial partnerships, and large-scale agro-industrial infrastructure projects across Asia and Europe. Under his strategic vision, Merchants Agro Valley is establishing a vertically integrated agro-industrial network that sets new benchmarks for quality, corporate governance, and sustainable community prosperity.",
    image: "/assets/management-leaders/01_Mohammed_H_Rahman_Chairman.webp",
    order: 1,
    isKeyLeader: true,
    status: "ACTIVE",
  },
  {
    name: "Rahat F. Chowdhury",
    designation: "MANAGING DIRECTOR",
    boardBadge: "Executive Board",
    bio: "Mr. Chowdhury brings over 20 years of extensive professional experience in property management, the hospitality sector, and corporate security services. Throughout his career, he has developed a strong and versatile business portfolio, including active involvement in import and export operations across various industries.",
    fullBio: "His leadership has been instrumental in optimizing supply chain infrastructure, establishing rigorous operational standards, and fostering public-private agricultural partnerships to accelerate sustainable agro-industrial development.",
    image: "/assets/management-leaders/02_Rahat_F_Chowdhury_Managing_Director.webp",
    order: 2,
    isKeyLeader: false,
    status: "ACTIVE",
  },
  {
    name: "Lee Sanders",
    designation: "BUSINESS ADVISOR | UK & EUROPE",
    boardBadge: "Advisory Board",
    bio: "Lee Sanders as a Business Advisor to British Merchants Limited, focusing on strengthening the company's international business presence and establishing strategic commercial connections across the United Kingdom and European markets. He supports cross-border opportunities, strategic partnerships, and long-term business growth.",
    fullBio: "With deep expertise in European regulatory frameworks, ESG compliance, and bilateral trade mechanisms, he drives Merchants Agro Valley's international expansion into Western retail and institutional distribution channels.",
    image: "/assets/management-leaders/03_Mr_Michael_Sander_Business_Advisor_UK_Europe.webp",
    order: 3,
    isKeyLeader: false,
    status: "ACTIVE",
  },
  {
    name: "Kaikobad MM Meah",
    designation: "DIRECTOR",
    boardBadge: "Directorate",
    bio: "Mr. Meah serves as the International Development Manager and plays a central role in expanding local and international business operations, sales performance, and service capabilities. He contributes to strengthening the company's global market presence and promoting consistently high service standards.",
    fullBio: "He brings comprehensive acumen in cold-chain logistics, bilateral distributor relations, and international quality certification protocols across key export corridors.",
    image: "/assets/management-leaders/04_Kaikobad_MM_Meah_Director.webp",
    order: 4,
    isKeyLeader: false,
    status: "ACTIVE",
  },
];

// 1. READ: Fetch all management members (ordered by hierarchy sequence, auto-seeds if 0)
export async function getManagementMembersAction(): Promise<{
  success: boolean;
  members: ManagementMemberItem[];
  error?: string;
}> {
  try {
    await requireAdmin();

    let records = await prisma.managementMember.findMany({
      orderBy: [{ order: "asc" }, { createdAt: "asc" }],
    });

    if (records.length === 0) {
      await prisma.managementMember.createMany({
        data: DEFAULT_MANAGEMENT_SEEDS,
      });

      records = await prisma.managementMember.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "asc" }],
      });
    }

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
