import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const events = [
  { name: "Career Fair", date: "Today, 2:00 PM", location: "Student Center" },
  { name: "Guest Lecture: AI Ethics", date: "Tomorrow, 4:00 PM", location: "Auditorium A" },
  { name: "Hackathon Kickoff", date: "Friday, 6:00 PM", location: "Engineering Building" },
  { name: "Research Symposium", date: "Next Monday, 10:00 AM", location: "Science Center" },
  { name: "Alumni Networking", date: "Next Wednesday, 5:30 PM", location: "Business School" },
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
    const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")) : events.length

    return NextResponse.json({ events: events.slice(0, limit) })
  } catch (error) {
    console.error("Error fetching events:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
