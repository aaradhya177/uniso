import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const forums = [
  { title: "Tips for final exams?", replies: 24, community: "Academic Support" },
  { title: "Looking for study group partners", replies: 8, community: "Computer Science" },
  { title: "Internship application advice", replies: 15, community: "Career Development" },
  { title: "Best places to eat near campus", replies: 32, community: "Campus Life" },
  { title: "Research opportunities for undergrads", replies: 12, community: "Research" },
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
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")) : forums.length
    const community = searchParams.get("community")

    let filteredForums = forums

    // Filter by community if specified
    if (community) {
      filteredForums = forums.filter((forum) => forum.community.toLowerCase() === community.toLowerCase())
    }

    return NextResponse.json({ forums: filteredForums.slice(0, limit) })
  } catch (error) {
    console.error("Error fetching forums:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
