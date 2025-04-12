import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const departments = [
  {
    id: 0,
    name: "Computer Science",
    description: "Advancing computing technology through education and research.",
    courses: [
      { code: "CS101", name: "Introduction to Programming", credits: 3 },
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
  // Other departments...
]

export async function GET(request, { params }) {
  try {
    // Check if user is authenticated
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id, deptId } = params
    const departmentId = Number.parseInt(deptId)

    // In a real app, you would filter departments by college ID
    const department = departments.find((d) => d.id === departmentId)

    if (!department) {
      return NextResponse.json({ error: "Department not found" }, { status: 404 })
    }

    return NextResponse.json({ department })
  } catch (error) {
    console.error(`Error fetching department ${params.deptId} for college ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
