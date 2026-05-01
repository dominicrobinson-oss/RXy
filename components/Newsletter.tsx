"use client";

import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Hook this up to your real newsletter / CRM later
  };

  return (
    <section className="bg-[#f5f5f5] py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mx-auto max-w-2xl space-y-6 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">Sign up &amp; save</h2>
          <p className="text-gray-600 max-w-2xl">
            Be the first to hear about new products, exclusive offers, and training inspiration.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full rounded-md border border-slate-300 px-4 py-3 text-[16px] outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-gray-900 sm:w-auto"
            >
              Join now
            </button>
          </form>

          <p className="text-[11px] text-slate-500">
            By signing up, you agree to receive marketing emails. You can
            unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
