"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, ChevronRight, Briefcase, BookOpen, Users, MessageSquare, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const colleges = [
  {
    id: 0,
    name: "Example University",
    description: "A leading university in the heart of the city.",
    departments: [
      { name: "Computer Science", faculty: 50, students: 500 },
      { name: "Engineering", faculty: 40, students: 400 },
      { name: "Business", faculty: 60, students: 600 },
    ],
    events: [
      { name: "Freshers Party", date: "2023-09-01", location: "Main Auditorium" },
      { name: "Tech Fest", date: "2023-10-15", location: "Engineering Block" },
    ],
    jobs: [
      { title: "Software Engineer", company: "Tech Corp", deadline: "2023-12-31" },
      { title: "Marketing Intern", company: "Ad Agency", deadline: "2023-11-30" },
    ],
  },
  {
    id: 1,
    name: "State College",
    description: "A public college with a focus on community service.",
    departments: [
      { name: "Arts", faculty: 30, students: 300 },
      { name: "Science", faculty: 35, students: 350 },
      { name: "Education", faculty: 45, students: 450 },
    ],
    events: [
      { name: "Welcome Day", date: "2023-08-28", location: "Central Park" },
      { name: "Science Fair", date: "2023-11-20", location: "Science Building" },
    ],
    jobs: [
      { title: "Teacher Assistant", company: "Local School", deadline: "2023-12-15" },
      { title: "Research Assistant", company: "State Lab", deadline: "2023-11-15" },
    ],
  },
]

export default function CollegePage({ params }: { params: { id: string } }) {
  const collegeId = Number.parseInt(params.id)
  const college = colleges[collegeId] || colleges[0]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950">
        <div className="container flex h-16 items-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-900 to-pink-900">
          <div className="container h-full flex items-end pb-6">
            <div className="text-white">
              <h1 className="text-3xl font-bold">{college.name}</h1>
              <p className="mt-1 max-w-2xl text-gray-300">{college.description}</p>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <Tabs defaultValue="departments">
            <TabsList className="mb-6 bg-gray-900 border border-gray-800">
              <TabsTrigger
                value="departments"
                className="data-[state=active]:bg-blue-900 data-[state=active]:text-white"
              >
                Departments
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Events
              </TabsTrigger>
              <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Job Opportunities
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="departments" className="space-y-6">
              <div className="space-y-6">
                <div className="relative">
                  <select
                    className="w-full bg-gray-900 border border-gray-800 rounded-lg p-3 text-white appearance-none focus:border-blue-500 focus:ring-blue-500"
                    onChange={(e) => {
                      if (e.target.value) {
                        window.location.href = `/dashboard/college/${collegeId}/department/${e.target.value}`
                      }
                    }}
                  >
                    <option value="">Select a department</option>
                    {college.departments.map((department, i) => (
                      <option key={i} value={i}>
                        {department.name}
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {college.departments.map((department, i) => (
                    <Link href={`/dashboard/college/${collegeId}/department/${i}`} key={i}>
                      <Card className="h-full hover:shadow-md transition-shadow bg-gray-950 border-gray-800 hover:border-blue-900/50 shadow-blue-900/5">
                        <CardHeader>
                          <CardTitle className="text-white">{department.name}</CardTitle>
                          <CardDescription className="text-gray-400">Department of {college.name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4">
                              <span className="text-2xl font-bold text-blue-400">{department.faculty}</span>
                              <span className="text-sm text-gray-400">Faculty</span>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4">
                              <span className="text-2xl font-bold text-blue-400">{department.students}</span>
                              <span className="text-sm text-gray-400">Students</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full justify-between text-gray-400 hover:text-blue-400">
                            View Department
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Upcoming Events</CardTitle>
                  <CardDescription className="text-gray-400">Events hosted by {college.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {college.events.map((event, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{event.name}</h3>
                          <div className="mt-1 flex items-center text-sm text-gray-400">
                            <span>{event.date}</span>
                            <span className="mx-2">•</span>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
                          Register
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View All Events
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Job Opportunities</CardTitle>
                  <CardDescription className="text-gray-400">Opportunities for {college.name} students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {college.jobs.map((job, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{job.title}</h3>
                          <div className="mt-1 flex items-center text-sm text-gray-400">
                            <span>{job.company}</span>
                            <span className="mx-2">•</span>
                            <span>Deadline: {job.deadline}</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
                          Apply
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View All Jobs
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">College Resources</CardTitle>
                  <CardDescription className="text-gray-400">
                    Resources available for {college.name} students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">Academic Resources</h3>
                        <p className="mt-1 text-sm text-gray-400">Study materials, guides, and academic support</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                        <Users className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">Student Organizations</h3>
                        <p className="mt-1 text-sm text-gray-400">Clubs and organizations within the college</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">Discussion Forums</h3>
                        <p className="mt-1 text-sm text-gray-400">Connect with peers and faculty</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                        <Globe className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">Online Learning</h3>
                        <p className="mt-1 text-sm text-gray-400">Virtual classrooms and e-learning resources</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    Browse All Resources
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
