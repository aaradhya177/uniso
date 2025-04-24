"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedUniversity, setSelectedUniversity] = useState("");

  // Function to generate a random password
  const generatePassword = () => {
    const length = 12; // Password length
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "!@#$%^&*";
    const allChars = uppercase + lowercase + numbers + special;

    let generatedPassword = "";
    generatedPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    generatedPassword += special[Math.floor(Math.random() * special.length)];
    generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];

    // Fill the rest of the password with random characters
    for (let i = 3; i < length; i++) {
      generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to randomize character positions
    setPassword(generatedPassword.split("").sort(() => Math.random() - 0.5).join(""));
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
            <Link href="/login">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2">
                Log In
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Signup Form */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="bg-gray-800 p-10 rounded-lg shadow-2xl w-full max-w-md animate-border">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Create Your Account</h2>
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="John Doe"
                required
              />
            </div>

            {/* University Dropdown */}
            <div>
              <label
                htmlFor="university"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                University
              </label>
              <select
                id="university"
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="" disabled>
                  Select your university
                </option>
                <option value="University A">University A</option>
                <option value="University B">University B</option>
                <option value="University C">University C</option>
                <option value="University D">University D</option>
              </select>
            </div>

            {/* University ID/Email Address */}
            <div>
              <label
                htmlFor="university-email"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                University ID/Email Address
              </label>
              <input
                type="email"
                id="university-email"
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="you@university.edu"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-20 flex items-center text-gray-400 hover:text-gray-200"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
                <button
                  type="button"
                  onMouseEnter={generatePassword} // Generate password on hover
                  className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-200"
                >
                  Generate
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-300 tracking-wide"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Signup Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 py-3 tracking-wide"
            >
              Sign Up
            </Button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-sm text-center text-gray-300 leading-relaxed">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-400 hover:underline">
              Log in
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