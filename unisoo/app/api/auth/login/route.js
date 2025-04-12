import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// This would connect to a real database in production
const mockUsers = [
  {
    id: "1",
    email: "john@harvard.edu",
    password: "password123", // In a real app, this would be hashed
    name: "John Doe",
    university: "harvard",
    department: "cs",
  },
  {
    id: "2",
    email: "jane@mit.edu",
    password: "password123",
    name: "Jane Smith",
    university: "mit",
    department: "engineering",
  },
]

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password, universityId } = body

    // In a real app, you would:
    // 1. Validate the input
    // 2. Check if the email belongs to the university domain
    // 3. Hash the password and compare with the stored hash

    const user = mockUsers.find((user) => user.email === email && user.password === password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create a session
    const session = {
      userId: user.id,
      name: user.name,
      university: user.university,
      department: user.department,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    }

    // In a real app, you would:
    // 1. Store the session in a database
    // 2. Only store the session ID in the cookie

    // Set a cookie with the session
    cookies().set({
      name: "uniconnect_session",
      value: JSON.stringify(session),
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      sameSite: "strict",
    })

    // Return user data (excluding sensitive information)
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        university: user.university,
        department: user.department,
      },
    })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
