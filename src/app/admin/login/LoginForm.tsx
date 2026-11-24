"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Loader2, AlertCircle } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 429) {
          setErrorMessage(data?.error || "Too many failed attempts. Please try again later.");
        } else {
          setErrorMessage(data?.error || "Invalid email or password.");
        }
        setIsLoading(false);
        return;
      }

      // Successful login
      window.location.href = data?.redirect || "/admin/dashboard";
    } catch {
      setErrorMessage("Network error or connection refused. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {errorMessage && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13.5px] animate-fadeIn">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
          <span className="leading-snug">{errorMessage}</span>
        </div>
      )}

      {/* Email input */}
      <div>
        <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5" htmlFor="admin-email">
          Admin Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            id="admin-email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@merchantsagrovalley.com"
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-[#013D26] focus:border-transparent transition-all placeholder:text-gray-400 disabled:opacity-60"
          />
        </div>
      </div>

      {/* Password input */}
      <div>
        <label className="block text-[13.5px] font-medium text-gray-700 mb-1.5" htmlFor="admin-password">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
            <Lock className="w-4 h-4" />
          </div>
          <input
            id="admin-password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••••"
            disabled={isLoading}
            className="w-full pl-10 pr-11 py-3 bg-gray-50/80 border border-gray-200 rounded-xl text-gray-900 text-[14.5px] focus:outline-none focus:ring-2 focus:ring-[#013D26] focus:border-transparent transition-all placeholder:text-gray-400 disabled:opacity-60"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-6 rounded-xl bg-[#013D26] hover:bg-[#024F32] active:bg-[#012E1C] text-white text-[15px] font-semibold transition-all shadow-[0_10px_24px_rgba(1,61,38,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Verifying Credentials...</span>
          </>
        ) : (
          <span>Sign In to Dashboard</span>
        )}
      </button>
    </form>
  );
}
