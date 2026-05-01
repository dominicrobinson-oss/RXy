import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  hasConfiguredLocalAdmin,
  isLocalAdminCredentialMatch,
} from "@/lib/adminAuth";

type LoginPayload = {
  email?: unknown;
  password?: unknown;
};

export async function POST(req: Request) {
  if (!hasConfiguredLocalAdmin()) {
    return NextResponse.json(
      { error: "Admin credentials are not configured" },
      { status: 503 }
    );
  }

  let body: LoginPayload;
  try {
    body = (await req.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!isLocalAdminCredentialMatch(email, password)) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  }

  const token = createAdminSessionToken(email);
  const res = NextResponse.json({ ok: true });

  res.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return res;
}