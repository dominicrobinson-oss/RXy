"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(data.error ?? "Login failed");
      return;
    }

    router.push("/admin/products");
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-semibold tracking-tight mb-3">
            Admin login
          </h1>
          <p className="text-gray-600 max-w-2xl mb-6">Sign in to manage your product catalog.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Password"
            />
            {error && <p className="text-xs text-red-600">{error}</p>}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
