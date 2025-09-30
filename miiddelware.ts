import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";


export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;


  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth/login") ||
    pathname.startsWith("/api/logout") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return NextResponse.next();
  }


  const token = req.cookies.get("afn_token")?.value;
  console.log("Middleware check for path:", pathname, "Token present:", !!token);
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname || "/");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {};
