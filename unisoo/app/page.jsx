import { ArrowRight, Users, MessageSquare, Share2, Calendar, Briefcase, BookOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={32} height={32} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              UniConnect
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-900">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-black to-purple-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Your university, connected.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  A social platform exclusively designed for college students, providing a safe and engaging space to
                  connect, share ideas, and collaborate.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-700">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-black border-t border-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Key Features
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Everything you need to make the most of your university experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Community Groups</h3>
                <p className="text-center text-gray-400">
                  Join groups based on interests, courses, or colleges within the university.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Discussion Forums</h3>
                <p className="text-center text-gray-400">Participate in meaningful conversations on various topics.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <Share2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Resource Sharing</h3>
                <p className="text-center text-gray-400">
                  Access and share study materials, notes, and other resources with peers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Event Calendar</h3>
                <p className="text-center text-gray-400">Stay updated on upcoming events, workshops, and seminars.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <Briefcase className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Job Board</h3>
                <p className="text-center text-gray-400">
                  Explore opportunities posted by relevant businesses and organizations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 shadow-sm transition-all hover:shadow-md hover:shadow-purple-900/20 hover:border-purple-900/50 bg-gradient-to-b from-gray-900/50 to-black">
                <div className="rounded-full bg-purple-900/20 p-3 border border-purple-900/50">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Personalized Profile</h3>
                <p className="text-center text-gray-400">
                  Create a profile showcasing your interests, skills, and achievements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800 bg-black">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={24} height={24} />
              <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                UniConnect
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your university, connected. A social platform exclusively designed for college students.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="space-y-2">
              <h4 className="font-medium text-white">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Colleges
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Departments
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-500 md:text-left">© 2025 UniConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
