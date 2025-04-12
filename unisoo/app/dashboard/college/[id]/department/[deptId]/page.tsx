import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, BookOpen, Briefcase, Download, FileText, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// This is a simplified version - in a real app, you'd fetch this data from an API
const departments = [
  {
    id: 0,
    name: "Computer Science",
    description: "Advancing computing technology through education and research.",
    courses: [
      { code: "CS101", name: "Introduction to Programming", credits: 3 },
      { code: "CS201", name: 'Data Structures  name: "Introduction to Programming', credits: 3 },
      { code: "CS201", name: "Data Structures and Algorithms", credits: 4 },
      { code: "CS301", name: "Database Systems", credits: 3 },
      { code: "CS401", name: "Artificial Intelligence", credits: 4 },
      { code: "CS450", name: "Software Engineering", credits: 3 },
    ],
    faculty: [
      { name: "Dr. Sarah Johnson", title: "Department Chair", image: "/placeholder.svg?height=40&width=40" },
      { name: "Dr. Michael Chen", title: "Professor", image: "/placeholder.svg?height=40&width=40" },
      { name: "Dr. Emily Rodriguez", title: "Associate Professor", image: "/placeholder.svg?height=40&width=40" },
      { name: "Dr. David Kim", title: "Assistant Professor", image: "/placeholder.svg?height=40&width=40" },
    ],
    jobs: [
      {
        title: "Software Engineering Intern",
        company: "Tech Innovations",
        deadline: "April 30, 2025",
        type: "Internship",
      },
      { title: "Junior Developer", company: "Software Solutions", deadline: "May 15, 2025", type: "Full-time" },
      { title: "Research Assistant", company: "University Lab", deadline: "May 5, 2025", type: "Part-time" },
    ],
    resources: [
      { name: "Programming Fundamentals Guide", type: "PDF", size: "2.4 MB" },
      { name: "Data Structures Lecture Notes", type: "ZIP", size: "5.1 MB" },
      { name: "Algorithm Visualization Tools", type: "Link", size: "External" },
    ],
  },
]

export default function DepartmentPage({ params }: { params: { id: string; deptId: string } }) {
  const collegeId = Number.parseInt(params.id)
  const departmentId = Number.parseInt(params.deptId)
  const department = departments[departmentId] || departments[0]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950">
        <div className="container flex h-16 items-center">
          <Link
            href={`/dashboard/college/${collegeId}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to College
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-blue-900 to-pink-900">
          <div className="container h-full flex items-end pb-6">
            <div className="text-white">
              <h1 className="text-3xl font-bold">Department of {department.name}</h1>
              <p className="mt-1 max-w-2xl text-gray-300">{department.description}</p>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <Tabs defaultValue="courses">
            <TabsList className="mb-6 bg-gray-900 border border-gray-800">
              <TabsTrigger value="courses" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Courses
              </TabsTrigger>
              <TabsTrigger value="faculty" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Faculty
              </TabsTrigger>
              <TabsTrigger value="jobs" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Job Opportunities
              </TabsTrigger>
              <TabsTrigger value="resources" className="data-[state=active]:bg-blue-900 data-[state=active]:text-white">
                Resources
              </TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Available Courses</CardTitle>
                  <CardDescription className="text-gray-400">
                    Courses offered by the {department.name} department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {department.courses.map((course, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white">{course.name}</h3>
                            <Badge variant="outline" className="border-blue-900 text-blue-400">
                              {course.code}
                            </Badge>
                          </div>
                          <div className="mt-1 flex items-center text-sm text-gray-400">
                            <span>{course.credits} Credits</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                        >
                          Details
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
                    View All Courses
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="faculty" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Faculty Members</CardTitle>
                  <CardDescription className="text-gray-400">
                    Meet the {department.name} department faculty
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {department.faculty.map((member, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <Avatar className="h-14 w-14 border border-gray-800">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="bg-blue-900/20 text-blue-400">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{member.name}</h3>
                          <p className="text-sm text-gray-400">{member.title}</p>
                          <div className="mt-2 flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 px-2 text-xs text-gray-400 hover:text-blue-400"
                            >
                              <MessageSquare className="mr-1 h-3 w-3" />
                              Contact
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 px-2 text-xs text-gray-400 hover:text-blue-400"
                            >
                              <Users className="mr-1 h-3 w-3" />
                              Office Hours
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                  >
                    View All Faculty
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <Card className="bg-gray-950 border-gray-800 shadow-md shadow-blue-900/5">
                <CardHeader>
                  <CardTitle className="text-white">Job Opportunities</CardTitle>
                  <CardDescription className="text-gray-400">
                    Opportunities for {department.name} students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {department.jobs.map((job, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-white">{job.title}</h3>
                            <Badge className="bg-blue-900/50 text-blue-200 hover:bg-blue-900">{job.type}</Badge>
                          </div>
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
                  <CardTitle className="text-white">Department Resources</CardTitle>
                  <CardDescription className="text-gray-400">Resources for {department.name} students</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {department.resources.map((resource, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-lg border border-gray-800 p-4 hover:bg-gray-900 hover:border-blue-900/50 transition-all"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-900/20 text-blue-400 border border-blue-900/50">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-white">{resource.name}</h3>
                          <div className="mt-1 flex items-center text-sm text-gray-400">
                            <span className="text-blue-400">{resource.type}</span>
                            <span className="mx-2">•</span>
                            <span>{resource.size}</span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-800 text-gray-400 hover:text-white hover:border-blue-500 bg-transparent"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
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
                    View All Resources
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
