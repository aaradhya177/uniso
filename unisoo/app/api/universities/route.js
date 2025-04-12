import { NextResponse } from "next/server"

// Mock data - would be fetched from a database in production
const universities = [
  {
    id: "harvard",
    name: "Harvard University",
    color: "from-red-500 to-red-700",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "mit",
    name: "MIT",
    color: "from-gray-700 to-gray-900",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "stanford",
    name: "Stanford University",
    color: "from-red-600 to-red-800",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "yale",
    name: "Yale University",
    color: "from-blue-600 to-blue-800",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "princeton",
    name: "Princeton University",
    color: "from-orange-500 to-orange-700",
    logo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: "columbia",
    name: "Columbia University",
    color: "from-blue-500 to-blue-700",
    logo: "/placeholder.svg?height=60&width=60",
  },
]

export async function GET() {
  try {
    return NextResponse.json({ universities })
  } catch (error) {
    console.error("Error fetching universities:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
