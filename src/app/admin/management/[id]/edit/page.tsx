import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import AdminDashboardView from "@/components/admin/AdminDashboardView";

interface EditManagementMemberPageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Edit Management Member | Merchants AgroValley Admin",
  description: "Update company leadership and executive details.",
};

async function EditManagementMemberContent({ params }: EditManagementMemberPageProps) {
  const { id } = await params;
  const session = await requireAdmin();

  const member = await prisma.managementMember.findUnique({
    where: { id },
  });

  if (!member) {
    notFound();
  }

  const memberData = {
    id: member.id,
    name: member.name,
    designation: member.designation,
    boardBadge: member.boardBadge,
    bio: member.bio,
    fullBio: member.fullBio,
    image: member.image,
    order: member.order,
    isKeyLeader: member.isKeyLeader,
    status: member.status,
    createdAt: member.createdAt.toISOString(),
    updatedAt: member.updatedAt.toISOString(),
  };

  return (
    <AdminDashboardView
      adminEmail={session.email}
      initialTab="management-edit"
      editManagementData={memberData}
    />
  );
}

export default function EditManagementMemberPage({ params }: EditManagementMemberPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#002D1B] flex items-center justify-center text-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
            <p className="text-[14px] text-white/70">Loading Management Details...</p>
          </div>
        </div>
      }
    >
      <EditManagementMemberContent params={params} />
    </Suspense>
  );
}
