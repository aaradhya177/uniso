import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const jobs = [
  { title: "Research Assistant", company: "University Lab", type: "Part-time" },
  { title: "Software Engineering Intern", company: "Tech Corp", type: "Internship" },
  { title: "Teaching Assistant", company: "Computer Science Dept", type: "On-campus" },
  { title: "Data Analyst", company: "Finance Startup", type: "Full-time" },
  { title: "Marketing Coordinator", company: "Media Agency", type: "Full-time" },
]

export async function GET(request) {
  try {
    // Check if user is authenticated
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")) : jobs.length
    const type = searchParams.get("type")

    let filteredJobs = jobs

    // Filter by type if specified
    if (type) {
      filteredJobs = jobs.filter((job) => job.type.toLowerCase() === type.toLowerCase())
    }

    return NextResponse.json({ jobs: filteredJobs.slice(0, limit) })
  } catch (error) {
    console.error("Error fetching jobs:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
