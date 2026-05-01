import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "rxy_admin_session";
const DEFAULT_SESSION_TTL_SECONDS = 60 * 60 * 8;

type AdminSessionPayload = {
  email: string;
  exp: number;
};

function getAdminEmail(): string {
  return (process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();
}

function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "";
}

function getSessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "dev-only-insecure-admin-session-secret"
  );
}

function safeEquals(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);

  if (aBuf.length !== bBuf.length) return false;
  return timingSafeEqual(aBuf, bBuf);
}

function sign(value: string): string {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

export function hasConfiguredLocalAdmin(): boolean {
  return Boolean(getAdminEmail() && getAdminPassword());
}

export function isLocalAdminCredentialMatch(email: string, password: string): boolean {
  const configuredEmail = getAdminEmail();
  const configuredPassword = getAdminPassword();

  if (!configuredEmail || !configuredPassword) return false;

  return (
    safeEquals(email.trim().toLowerCase(), configuredEmail) &&
    safeEquals(password, configuredPassword)
  );
}

export function createAdminSessionToken(email: string): string {
  const payload: AdminSessionPayload = {
    email: email.trim().toLowerCase(),
    exp: Math.floor(Date.now() / 1000) + DEFAULT_SESSION_TTL_SECONDS,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSessionToken(token: string | undefined): boolean {
  if (!token) return false;

  const [encodedPayload, providedSignature] = token.split(".");
  if (!encodedPayload || !providedSignature) return false;

  const expectedSignature = sign(encodedPayload);
  if (!safeEquals(providedSignature, expectedSignature)) return false;

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8")
    ) as AdminSessionPayload;

    if (!payload?.email || !payload?.exp) return false;
    if (payload.exp < Math.floor(Date.now() / 1000)) return false;

    const configuredEmail = getAdminEmail();
    if (!configuredEmail) return false;

    return safeEquals(payload.email, configuredEmail);
  } catch {
    return false;
  }
}