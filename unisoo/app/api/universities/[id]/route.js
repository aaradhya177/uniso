import { NextResponse } from "next/server"

// Mock data - would be fetched from a database in production
const universities = [
  {
    id: "harvard",
    name: "Harvard University",
    description: "A leading university in the heart of Cambridge.",
    color: "from-red-500 to-red-700",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "mit",
    name: "MIT",
    description: "Massachusetts Institute of Technology - a premier research institution.",
    color: "from-gray-700 to-gray-900",
    logo: "/placeholder.svg?height=60&width=60",
  },
  // Other universities...
]

export async function GET(request, { params }) {
  try {
    const { id } = params

    const university = universities.find((uni) => uni.id === id)

    if (!university) {
      return NextResponse.json({ error: "University not found" }, { status: 404 })
    }

    return NextResponse.json({ university })
  } catch (error) {
    console.error(`Error fetching university ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
