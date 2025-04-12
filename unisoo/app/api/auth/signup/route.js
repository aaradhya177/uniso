import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// Mock database - would be replaced with a real database in production
const mockUsers = [
  {
    id: "1",
    email: "john@harvard.edu",
    password: "password123",
    firstName: "John",
    lastName: "Doe",
    university: "harvard",
    department: "cs",
  },
]

export async function POST(request) {
  try {
    const body = await request.json()
    const { email, password, firstName, lastName, university, department } = body

    // Validate input
    if (!email || !password || !firstName || !lastName || !university || !department) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Check if email is a valid university email
    // This is a simplified check - in a real app, you'd verify the domain
    if (!email.includes("@") || !email.endsWith(".edu")) {
      return NextResponse.json({ error: "Please use a valid university email" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = mockUsers.find((user) => user.email === email)
    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 })
    }

    // Create new user
    // In a real app, you would hash the password before storing
    const newUser = {
      id: String(mockUsers.length + 1),
      email,
      password, // Would be hashed in production
      firstName,
      lastName,
      university,
      department,
      createdAt: new Date().toISOString(),
    }

    // Add to mock database
    mockUsers.push(newUser)

    // Create a session
    const session = {
      userId: newUser.id,
      name: `${firstName} ${lastName}`,
      university,
      department,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
    }

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
        id: newUser.id,
        name: `${firstName} ${lastName}`,
        email: newUser.email,
        university: newUser.university,
        department: newUser.department,
      },
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
