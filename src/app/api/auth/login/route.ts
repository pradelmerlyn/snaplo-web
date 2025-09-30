import customAxios from "../../axios";
import { NextRequest, NextResponse } from "next/server";

const OAUTH_URL = process.env.AFN_OAUTH_URL || "/oauth/token";
const API_KEY = process.env.AFN_API_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { data } = await customAxios.post(OAUTH_URL, body, {
      headers: {
        ...(API_KEY ? { "X-API-KEY": API_KEY } : {}),
      },
    });

    const token = data?.access_token || data?.token;
    const res = NextResponse.json(data);

    if (token) {
      res.cookies.set("afn_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours
      });
    }

    return res;
  } catch (err: any) {
    console.error("OAuth login failed:", err?.message || err);
    return NextResponse.json(
      { error: "Login failed", details: err?.message || "Unknown error" },
      { status: 401 }
    );
  }
}
