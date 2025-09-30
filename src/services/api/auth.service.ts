import api from "../http/createClient";
import { normalizeError } from "../http/interceptors";
import type { LoginCredentials, AuthTokenResponse, AuthSession } from "../types/auth.types";

function persistSession(token: string, expiresIn?: number): AuthSession {
  const tokenType = "Bearer";
  const expiresAt = expiresIn ? Date.now() + expiresIn * 1000 : undefined;

  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    if (expiresAt) localStorage.setItem("token_expires_at", String(expiresAt));
  }

  return { token, tokenType, expiresAt };
}

export async function login(
  creds: LoginCredentials
): Promise<AuthSession> {
  if (!creds?.userName) throw new Error("Username is required.");
  if (!creds?.password) throw new Error("Password is required.");

  try {
    const { data } = await api.post<AuthTokenResponse>(
      '/auth/login',
      {
        userName: creds.userName,
        password: creds.password,
        impersonateUser: creds.impersonateUser ?? "",
      }, {
        headers: {
          "Content-Type": "application/json",
        }
      });

    const token =
      (data as any)?.token ||
      (data as any)?.accessToken ||
      (data as any)?.access_token;

    if (!token) {
      throw new Error("Token missing from response.");
    }

    const expiresIn =
      (data as any)?.expiresIn ||
      (data as any)?.expires_in;

    return persistSession(token, typeof expiresIn === "number" ? expiresIn : undefined);
  } catch (err: any) {
    const e = normalizeError(err);
    throw new Error(e.message || "Login failed.");
  }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("token_expires_at");
  }
}

export function getSession(): AuthSession | null {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  if (!token) return null;
  const exp = localStorage.getItem("token_expires_at");
  return {
    token,
    tokenType: "Bearer",
    expiresAt: exp ? Number(exp) : undefined,
  };
}
