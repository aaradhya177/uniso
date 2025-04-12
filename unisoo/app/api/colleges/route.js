import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

// Mock data - would be fetched from a database in production
const colleges = [
  {
    id: 0,
    name: "College of Engineering",
    departments: 8,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 1,
    name: "College of Business",
    departments: 6,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "College of Arts & Sciences",
    departments: 12,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "College of Medicine",
    departments: 5,
    image: "/placeholder.svg?height=40&width=40",
  },
]

export async function GET() {
  try {
    // Check if user is authenticated
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return NextResponse.json({ colleges })
  } catch (error) {
    console.error("Error fetching colleges:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
