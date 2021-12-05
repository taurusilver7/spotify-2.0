import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // without the secret, anyone can get access to the token. Token will only exist when user is loged in.
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  //   Allow the request if the following is true
  //  if token exists
  if (pathname.includes("api/auth" || token)) {
    return NextResponse.next(); //continue on to client.
  }

  //   Redirect them to login if token is absent AND are requesting a protected route.
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
