import { ArrowRight, Users, MessageSquare, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo and Text */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/uniso-logo.png"
              alt="UNiSO Logo"
              width={40}
              height={40}
              className="h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/uniso-text.png"
              alt="UNiSO Text"
              width={90}
              height={20}
              className="h-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-black opacity-90 hover:opacity-100 transition-opacity">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 opacity-90 hover:opacity-100 transition-opacity">
                Sign up
              </Button>
            </Link>
          </nav>
        </div>
      </header> 

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 text-left">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                Connect, Collaborate, and Grow
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Join communities, explore opportunities, and stay connected — all in one place.
              </p>
              <div className="mt-6 flex gap-4">
                <Link href="/signup">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button className="bg-gray-100 text-black hover:bg-gray-200 px-6 py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
              <Image
                src="/images/hero-illustration.png" // Replace with the correct path to your uploaded image
                alt="Hero Illustration"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="py-12 bg-gray-50 bg-opacity-90 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Communities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join vibrant communities to chat, share, and collaborate just like Discord.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Study Groups */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Users className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Study Groups</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Collaborate with peers in study groups tailored to your interests.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Join study groups to collaborate on projects, share knowledge, and grow together.
                  </p>
                </div>
              </div>

              {/* Discussion Forums */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <MessageSquare className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Discussion Forums</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Engage in meaningful conversations on topics that matter to you.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Participate in forums to discuss ideas, ask questions, and share insights with others.
                  </p>
                </div>
              </div>

              {/* Daily Updates */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Calendar className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Daily Updates</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Stay informed with the latest updates, announcements, and events happening in your community.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Get daily updates on events, announcements, and activities in your community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="py-12 bg-white bg-opacity-90 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover job opportunities, internships, and networking events like LinkedIn.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Job Board */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Briefcase className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Job Board</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Explore job postings from top companies and organizations.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Browse job listings from leading companies and find your next career opportunity.
                  </p>
                </div>
              </div>

              {/* Networking Events */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Calendar className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Networking Events</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Stay updated on events to connect with professionals and peers.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Attend networking events to meet professionals and grow your connections.
                  </p>
                </div>
              </div>

              {/* Professional Connections */}
              <div className="relative group p-6 border border-gray-200 rounded-lg transform transition-transform hover:scale-105 bg-white bg-opacity-90 hover:bg-opacity-100">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Users className="text-blue-500" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Professional Connections</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Build meaningful relationships with industry professionals and mentors.
                </p>
                {/* Hover Card */}
                <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-sm text-gray-600">
                    Connect with mentors and industry professionals to grow your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-6 py-10 text-center">
          <p className="text-sm text-gray-500">
            © 2025 UNiSO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
