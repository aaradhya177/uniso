import { cookies } from "next/headers"

/**
 * Get the current user session from cookies
 * @returns {Promise<Object|null>} The user session or null if not authenticated
 */
export async function getSession() {
  const cookieStore = cookies()
  const sessionCookie = cookieStore.get("uniconnect_session")

  if (!sessionCookie) {
    return null
  }

  try {
    const session = JSON.parse(sessionCookie.value)

    // Check if session has expired
    if (session.expiresAt < Date.now()) {
      return null
    }

    return session
  } catch (error) {
    console.error("Error parsing session cookie:", error)
    return null
  }
}

/**
 * Check if the user is authenticated
 * @returns {Promise<boolean>} True if authenticated, false otherwise
 */
export async function isAuthenticated() {
  const session = await getSession()
  return session !== null
}

/**
 * Middleware to protect routes that require authentication
 * @param {Function} handler - The route handler
 * @returns {Function} A wrapped handler that checks authentication
 */
export function withAuth(handler) {
  return async (request, context) => {
    const session = await getSession()

    if (!session) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    // Add the session to the context
    context.session = session

    return handler(request, context)
  }
}
