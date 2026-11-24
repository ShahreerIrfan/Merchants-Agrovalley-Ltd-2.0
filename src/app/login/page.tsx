import { Suspense } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import AuthForm from "./AuthForm";

export const metadata = {
  title: "Sign In / Register | Merchants AgroValley",
  description: "Sign in or create an account with Merchants AgroValley Ltd.",
};

async function LoginContent() {
  const session = await getSession();
  if (session) {
    if (session.role === "admin") {
      redirect("/admin/dashboard");
    } else {
      redirect("/dashboard");
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#032316] flex flex-col justify-between p-4 sm:p-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0A5A35]/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[350px] bg-[#68A617]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Top navigation back to home */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between relative z-10 py-2">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[13.5px] transition-colors">
          <span>&larr; Return to Homepage</span>
        </Link>
        <span className="text-[12px] text-white/50 tracking-wider uppercase font-semibold">
          Integrated Agro-Industrial Enterprise
        </span>
      </div>

      {/* Central Login / Register Container */}
      <div className="w-full max-w-[480px] mx-auto my-8 relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-[28px] border border-white/40 shadow-[0_24px_64px_rgba(0,0,0,0.35)] p-7 sm:p-9">
          {/* Brand Logo & Heading */}
          <div className="flex flex-col items-center text-center mb-6">
            <Link href="/" className="w-[180px] sm:w-[210px] h-auto mb-4 relative block">
              <Image
                src="/logo/logo.png"
                alt="Merchants AgroValley Logo"
                width={220}
                height={70}
                className="w-full h-auto object-contain"
                priority
              />
            </Link>
            <h1 className="font-serif text-[#013D26] text-[24px] sm:text-[28px] font-bold leading-tight">
              Welcome to AgroValley
            </h1>
            <p className="text-gray-600 text-[13.5px] mt-1">
              Access your personalized dashboard or create a new account
            </p>
          </div>

          {/* Interactive Form Component with Tabs */}
          <AuthForm />

          {/* Footer security note */}
          <div className="mt-7 pt-5 border-t border-gray-100 text-center">
            <p className="text-[11.5px] text-gray-400 leading-relaxed">
              Protected authentication system. Encrypted sessions with Argon2id and short-lived secure JWTs.
            </p>
          </div>
        </div>
      </div>

      {/* Page bottom copyright */}
      <div className="text-center text-[12px] text-white/40 relative z-10 py-2">
        &copy; {new Date().getFullYear()} Merchants AgroValley Ltd. All rights reserved.
      </div>
    </div>
  );
}

export default function LoginPage() {
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
