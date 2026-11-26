import { Suspense } from "react";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth/session";
import ManagementMemberFormView from "@/components/admin/ManagementMemberFormView";
import AdminContentSkeleton from "@/components/admin/AdminContentSkeleton";

interface EditManagementMemberPageProps {
  params: Promise<{ id: string }>;
}

export const metadata = {
  title: "Edit Management Member | Merchants AgroValley Admin",
  description: "Update company leadership and executive details.",
};

async function EditManagementMemberContent({ params }: EditManagementMemberPageProps) {
  const { id } = await params;
  await requireAdmin();

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
    <ManagementMemberFormView
      mode="edit"
      initialData={memberData}
    />
  );
}

export default function EditManagementMemberPage({ params }: EditManagementMemberPageProps) {
  return (
    <Suspense fallback={<AdminContentSkeleton />}>
      <EditManagementMemberContent params={params} />
    </Suspense>
  );
}
