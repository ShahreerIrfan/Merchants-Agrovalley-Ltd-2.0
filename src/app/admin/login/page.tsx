import { Suspense } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getAdminSession } from "@/lib/auth/session";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin Login | Merchants AgroValley",
  description: "Secure single-admin authentication portal for Merchants AgroValley.",
};

async function LoginContent() {
  const session = await getAdminSession();
  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen w-full bg-[#032316] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A5A35]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-[#68A617]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Login Container */}
      <div className="w-full max-w-[460px] relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-[28px] border border-white/40 shadow-[0_24px_64px_rgba(0,0,0,0.35)] p-8 sm:p-10">
          {/* Logo Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-[180px] sm:w-[210px] h-auto mb-5 relative">
              <Image
                src="/logo/logo.png"
                alt="Merchants AgroValley Logo"
                width={220}
                height={70}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#013D26]/8 border border-[#013D26]/15 text-[#013D26] text-[12px] font-semibold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#68A617]" />
              Secure Admin Portal
            </div>
            <h1 className="font-serif text-[#013D26] text-[26px] sm:text-[30px] font-bold leading-tight">
              Admin Sign In
            </h1>
            <p className="text-[#013D26]/70 text-[14px] mt-1.5">
              Enter authorized administrator credentials to continue
            </p>
          </div>

          {/* Login Interactive Form */}
          <LoginForm />

          {/* Security Notice Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Protected single-admin console. All access requests are encrypted, monitored, and rate-limited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#032316] flex items-center justify-center text-white">
          <div className="w-8 h-8 border-3 border-[#8CCF24] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
