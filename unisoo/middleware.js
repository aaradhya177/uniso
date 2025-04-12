import { NextResponse } from "next/server"

// Paths that don't require authentication
const publicPaths = ["/", "/login", "/signup", "/api/auth/login", "/api/auth/signup", "/api/universities"]

export function middleware(request) {
  const path = request.nextUrl.pathname

  // Check if the path is public
  if (publicPaths.some((publicPath) => path === publicPath || path.startsWith(publicPath + "/"))) {
    return NextResponse.next()
  }

  // Check for authentication
  const sessionCookie = request.cookies.get("uniconnect_session")

  // If no session cookie and trying to access protected route, redirect to login
  if (!sessionCookie && !path.startsWith("/api/")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // For API routes, return 401 if not authenticated
  if (!sessionCookie && path.startsWith("/api/")) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public image files)
     */
    "/((?!_next/static|_next/image|favicon.ico|images).*)",
  ],
}
