import { NextResponse } from "next/server"

// Mock data - would be fetched from a database in production
const departments = {
  harvard: [
    { id: "cs", name: "Computer Science" },
    { id: "business", name: "Business School" },
    { id: "law", name: "Law School" },
    { id: "medicine", name: "Medical School" },
    { id: "engineering", name: "Engineering" },
    { id: "arts", name: "Arts & Sciences" },
  ],
  mit: [
    { id: "cs", name: "Computer Science" },
    { id: "engineering", name: "Engineering" },
    { id: "business", name: "Sloan School of Management" },
    { id: "science", name: "Science" },
    { id: "humanities", name: "Humanities" },
  ],
  stanford: [
    { id: "cs", name: "Computer Science" },
    { id: "business", name: "Graduate School of Business" },
    { id: "engineering", name: "Engineering" },
    { id: "medicine", name: "Medicine" },
    { id: "humanities", name: "Humanities & Sciences" },
  ],
  // Other universities...
}

export async function GET(request, { params }) {
  try {
    const { id } = params

    const universityDepartments = departments[id]

    if (!universityDepartments) {
      return NextResponse.json({ error: "University not found" }, { status: 404 })
    }

    return NextResponse.json({ departments: universityDepartments })
  } catch (error) {
    console.error(`Error fetching departments for university ${params.id}:`, error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
