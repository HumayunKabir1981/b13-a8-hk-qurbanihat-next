import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 🔥 1. NEVER touch these routes
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 🔑 2. Get token (adjust if needed)
  const token =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("session_token")?.value;

  // 🔒 3. Protected routes
  const protectedRoutes = ["/animals", "/myprofile"];

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // 🚫 4. Redirect if not logged in
  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  // ✅ allow everything else
  return NextResponse.next();
}

// ⚡ IMPORTANT matcher (VERY SAFE)
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};