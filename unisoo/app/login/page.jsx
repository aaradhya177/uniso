"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/uniso-logo.png"
              alt="UNiSO Logo"
              className="h-8 w-auto"
            />
            <img
              src="/images/uniso-text.png"
              alt="UNiSO Text"
              className="h-6 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="/signup">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2">
                Sign Up
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Login Form */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="bg-gray-800 p-10 rounded-lg shadow-2xl w-full max-w-md animate-border">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Log In</h2>
          <form className="space-y-6">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                  pattern="(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}"
                  title="Password must be at least 8 characters long, contain one uppercase letter, and one number."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-300"
              >
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-3 tracking-wide"
            >
              Log In
            </Button>
          </form>

          {/* Signup Link */}
          <p className="mt-6 text-sm text-center text-gray-300 leading-relaxed">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes border-glow {
          0% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6;
          }
          50% {
            border-color: #9333ea;
            box-shadow: 0 0 20px #9333ea;
          }
          100% {
            border-color: #3b82f6;
            box-shadow: 0 0 10px #3b82f6;
          }
        }
        .animate-border {
          border: 2px solid transparent;
          animation: border-glow 3s infinite;
        }
      `}</style>
    </div>
  );
}
