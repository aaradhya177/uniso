import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-3 gap-4 p-6 opacity-30">
        <Image
          src="/images/hero-illustration.png"
          alt="Collage Image 1"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <Image
          src="/images/uniso-logo.png"
          alt="Collage Image 2"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <Image
          src="/images/uniso-text.png"
          alt="Collage Image 3"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <Image
          src="/images/hero-illustration.png"
          alt="Collage Image 4"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <Image
          src="/images/uniso-logo.png"
          alt="Collage Image 5"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
        <Image
          src="/images/uniso-text.png"
          alt="Collage Image 6"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Signup Form */}
      <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* University */}
          <div>
            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
              University
            </label>
            <input
              type="text"
              id="university"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Your University Name"
              required
            />
          </div>

          {/* University ID/Email Address */}
          <div>
            <label htmlFor="university-email" className="block text-sm font-medium text-gray-700">
              University ID/Email Address
            </label>
            <input
              type="email"
              id="university-email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="you@university.edu"
              required
            />
          </div>

          {/* ID Card Upload */}
          <div>
            <label htmlFor="id-card" className="block text-sm font-medium text-gray-700">
              Upload University ID Card
            </label>
            <input
              type="file"
              id="id-card"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              required
            />
          </div>

          {/* Signup Button */}
          <Button type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-600">
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}