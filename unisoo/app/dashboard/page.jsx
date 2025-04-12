"use client"

import { Home, Users, MessageSquare, Share2, Calendar, Briefcase, BookOpen, Settings, Search, Bell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 z-50 bg-gray-950 border-r border-gray-800">
        <div className="flex h-14 items-center border-b border-gray-800 px-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={24} height={24} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">UniConnect</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-gray-900 px-3 py-2 text-blue-400 transition-all hover:text-blue-300"
            >
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              href="/dashboard/communities"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <Users className="h-4 w-4" />
              Communities
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <MessageSquare className="h-4 w-4" />
              Messages
              <Badge className="ml-auto bg-blue-600 hover:bg-blue-700">3</Badge>
            </Link>
            <Link
              href="/dashboard/resources"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <Share2 className="h-4 w-4" />
              Resources
            </Link>
            <Link
              href="/dashboard/events"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <Calendar className="h-4 w-4" />
              Events
            </Link>
            <Link
              href="/dashboard/jobs"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <Briefcase className="h-4 w-4" />
              Jobs
            </Link>
            <Link
              href="/dashboard/courses"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:text-blue-400"
            >
              <BookOpen className="h-4 w-4" />
              Courses
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t border-gray-800">
          <Link href="/dashboard/settings">
            <Button
              variant="outline"
              className="w-full justify-start border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950">
          <div className="flex h-14 items-center px-4">
            <div className="md:hidden mr-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
                <div className="flex items-center justify-center">
                  <Image src="/images/uniconnect-logo.png" alt="UniConnect" width={24} height={24} />
                </div>
              </Button>
            </div>
            <div className="flex-1 flex items-center gap-4 md:ml-auto">
              <form className="flex-1 relative max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-gray-900 border-gray-800 pl-8 focus-visible:ring-blue-600 text-white"
                />
              </form>
              <Button variant="ghost" size="icon" className="h-8 w-8 relative text-gray-400 hover:text-white">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-blue-600"></span>
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user" />
                <AvatarFallback className="bg-gray-800 text-gray-300">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="container py-6">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Welcome back, John!
              </h1>
              <p className="text-gray-400">Here's what's happening at your university today.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Your Colleges</CardTitle>
                  <CardDescription className="text-gray-400">Select a college to explore departments</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="relative">
                    <select
                      className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white appearance-none focus:border-blue-500 focus:ring-blue-500"
                      onChange={(e) => {
                        if (e.target.value) {
                          window.location.href = `/dashboard/college/${e.target.value}`
                        }
                      }}
                    >
                      <option value="">Select a college</option>
                      {[
                        { id: 0, name: "College of Engineering" },
                        { id: 1, name: "College of Business" },
                        { id: 2, name: "College of Arts & Sciences" },
                        { id: 3, name: "College of Medicine" },
                      ].map((college) => (
                        <option key={college.id} value={college.id}>
                          {college.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>

                  <p className="text-center text-gray-400 text-sm">or select from the list</p>

                  {[
                    { name: "College of Engineering", departments: 8, image: "/placeholder.svg?height=40&width=40" },
                    { name: "College of Business", departments: 6, image: "/placeholder.svg?height=40&width=40" },
                    {
                      name: "College of Arts & Sciences",
                      departments: 12,
                      image: "/placeholder.svg?height=40&width=40",
                    },
                    { name: "College of Medicine", departments: 5, image: "/placeholder.svg?height=40&width=40" },
                  ].map((college, i) => (
                    <Link href={`/dashboard/college/${i}`} key={i}>
                      <div className="flex items-center gap-4 rounded-lg border border-gray-800 p-3 hover:bg-gray-900 hover:border-blue-900/50 transition-all">
                        <Image
                          src={college.image || "/placeholder.svg"}
                          alt={college.name}
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium text-white">{college.name}</p>
                          <p className="text-xs text-gray-400">{college.departments} departments</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View All Colleges
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Upcoming Events</CardTitle>
                  <CardDescription className="text-gray-400">Events happening this week</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    { name: "Career Fair", date: "Today, 2:00 PM", location: "Student Center" },
                    { name: "Guest Lecture: AI Ethics", date: "Tomorrow, 4:00 PM", location: "Auditorium A" },
                    { name: "Hackathon Kickoff", date: "Friday, 6:00 PM", location: "Engineering Building" },
                  ].map((event, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 rounded-lg border border-gray-800 p-3 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white">{event.name}</p>
                        <Badge variant="outline" className="border-blue-900 text-blue-400">
                          {event.date}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400">{event.location}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View Calendar
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white">Job Opportunities</CardTitle>
                  <CardDescription className="text-gray-400">Recent postings for your major</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    { title: "Research Assistant", company: "University Lab", type: "Part-time" },
                    { title: "Software Engineering Intern", company: "Tech Corp", type: "Internship" },
                    { title: "Teaching Assistant", company: "Computer Science Dept", type: "On-campus" },
                  ].map((job, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-1 rounded-lg border border-gray-800 p-3 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white">{job.title}</p>
                        <Badge variant="secondary" className="bg-gray-800 text-blue-400 hover:bg-gray-700">
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400">{job.company}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    Browse All Jobs
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Discussion Forums</CardTitle>
                  <CardDescription className="text-gray-400">Recent topics from your communities</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    { title: "Tips for final exams?", replies: 24, community: "Academic Support" },
                    { title: "Looking for study group partners", replies: 8, community: "Computer Science" },
                    { title: "Internship application advice", replies: 15, community: "Career Development" },
                  ].map((topic, i) => (
                    <div key={i} className="flex flex-col gap-1 p-3 border-b border-gray-800 last:border-0">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-white">{topic.title}</p>
                        <span className="text-xs text-gray-400">{topic.replies} replies</span>
                      </div>
                      <p className="text-xs text-gray-400">in {topic.community}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View All Forums
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Resources</CardTitle>
                  <CardDescription className="text-gray-400">Recently shared materials</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {[
                    { title: "Calculus Study Guide", type: "PDF", shared: "Yesterday" },
                    { title: "Programming Project Examples", type: "ZIP", shared: "2 days ago" },
                    { title: "Research Paper Template", type: "DOCX", shared: "3 days ago" },
                  ].map((resource, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 border border-gray-800">
                        <Share2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium text-white">{resource.title}</p>
                        <div className="flex items-center text-xs text-gray-400">
                          <span className="font-medium text-blue-400">{resource.type}</span>
                          <span className="mx-1">•</span>
                          <span>Shared {resource.shared}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    Browse Resources
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
