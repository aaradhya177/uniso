import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
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
  // Other colleges...
]

export async function GET(request, { params }) {
  try {
    // Check if user is authenticated
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = params
    const collegeId = Number.parseInt(id)

    const college = colleges.find((c) => c.id === collegeId)

    if (!college) {
      return NextResponse.json({ error: "College not found" }, { status: 404 })
    }

    return NextResponse.json({ college })
  } catch (error) {
    console.error(`Error fetching college ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
