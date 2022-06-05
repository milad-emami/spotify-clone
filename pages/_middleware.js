import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //Token will exist if user is logged in
  const token = getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname, token, req);
  //Allow the requests if the following is true...
  //1- its a request for next-auth session & provider fetching
  //2- the token exist
  if (pathname.includes("/api/auth") || token) {
    // console.log("byeeee", NextResponse.next());

    return NextResponse.next();
  }
  //redirect them to login if they dont have token AND are requesting a producted route
  console.log("asv", !token && pathname !== "/login");

  if (!token && pathname !== "/login") {
    console.log("hiiiii");
    return NextResponse.redirect("/login");
  }
}
