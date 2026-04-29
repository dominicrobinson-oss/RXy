"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Hook this up to your real newsletter / CRM later
  };

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-lg border border-slate-200 bg-slate-50 px-4 py-8 sm:px-8 sm:py-10">
          <h2 className="text-lg font-semibold uppercase tracking-[0.08em] text-slate-800 md:text-xl">
            Sign up &amp; save
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Be the first to hear about new products, exclusive offers, and
            training inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-[#0071e3] px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#005bb5] sm:w-auto"
            >
              Join now
            </button>
          </form>

          <p className="mt-2 text-[11px] text-slate-500">
            By signing up, you agree to receive marketing emails. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
