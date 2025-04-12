import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const resources = [
  { title: "Calculus Study Guide", type: "PDF", shared: "Yesterday" },
  { title: "Programming Project Examples", type: "ZIP", shared: "2 days ago" },
  { title: "Research Paper Template", type: "DOCX", shared: "3 days ago" },
  { title: "Physics Lab Manual", type: "PDF", shared: "1 week ago" },
  { title: "Literature Review Guidelines", type: "PDF", shared: "2 weeks ago" },
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
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")) : resources.length
    const type = searchParams.get("type")

    let filteredResources = resources

    // Filter by type if specified
    if (type) {
      filteredResources = resources.filter((resource) => resource.type.toLowerCase() === type.toLowerCase())
    }

    return NextResponse.json({ resources: filteredResources.slice(0, limit) })
  } catch (error) {
    console.error("Error fetching resources:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
