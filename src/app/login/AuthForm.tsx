"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Register form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail.trim(),
          password: loginPassword,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(data?.error || "Invalid email or password.");
        setIsLoading(false);
        return;
      }

      window.location.href = data?.redirect || "/dashboard";
    } catch {
      setErrorMessage("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (regPassword !== regConfirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (regPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: regName.trim(),
          email: regEmail.trim(),
          password: regPassword,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMessage(data?.error || "Registration failed.");
        setIsLoading(false);
        return;
      }

      setSuccessMessage("Account created successfully! Redirecting...");
      window.location.href = data?.redirect || "/dashboard";
    } catch {
      setErrorMessage("Network error. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Segmented Tab Switcher */}
      <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
        <button
          type="button"
          onClick={() => {
            setActiveTab("login");
            setErrorMessage(null);
            setSuccessMessage(null);
          }}
          className={`flex-1 py-2 text-[13.5px] font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === "login"
              ? "bg-white text-[#013D26] shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("register");
            setErrorMessage(null);
            setSuccessMessage(null);
          }}
          className={`flex-1 py-2 text-[13.5px] font-bold rounded-lg transition-all cursor-pointer ${
            activeTab === "register"
              ? "bg-white text-[#013D26] shadow-xs"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Create Account
        </button>
      </div>

      {/* Messages */}
      {errorMessage && (
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[13px] mb-4">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {successMessage && (
        <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[13px] mb-4">
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
          <span>{successMessage}</span>
        </div>
      )}

      {/* TAB 1: SIGN IN */}
      {activeTab === "login" ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="login-email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="login-email"
                type="email"
                required
                autoComplete="username"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="you@domain.com"
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="login-password">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="login-password"
                type={showLoginPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••••••"
                disabled={isLoading}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
              <button
                type="button"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#013D26] hover:bg-[#024F32] active:bg-[#012E1C] text-white text-[14.5px] font-semibold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <span>Sign In to Dashboard</span>
            )}
          </button>
        </form>
      ) : (
        /* TAB 2: CREATE ACCOUNT */
        <form onSubmit={handleRegister} className="space-y-3.5">
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="reg-name">
              Full Name
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="reg-name"
                type="text"
                required
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="John Doe"
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="reg-email">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="reg-email"
                type="email"
                required
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="john@example.com"
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="reg-password">
              Password (min 8 characters)
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="reg-password"
                type={showRegPassword ? "text" : "password"}
                required
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                placeholder="••••••••••••"
                disabled={isLoading}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
              <button
                type="button"
                onClick={() => setShowRegPassword(!showRegPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showRegPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1" htmlFor="reg-confirm">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="reg-confirm"
                type="password"
                required
                value={regConfirmPassword}
                onChange={(e) => setRegConfirmPassword(e.target.value)}
                placeholder="••••••••••••"
                disabled={isLoading}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-[14px] text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-[#013D26]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-xl bg-[#68A617] hover:bg-[#589012] text-white text-[14.5px] font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating Account...</span>
              </>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
