"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProductPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  function slugify(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const description = (form.elements.namedItem("description") as HTMLTextAreaElement).value;
    const price = parseFloat(
      (form.elements.namedItem("price") as HTMLInputElement).value
    );
    const category = (form.elements.namedItem("category") as HTMLInputElement).value;
    const imagesRaw = (form.elements.namedItem("images") as HTMLTextAreaElement).value;
    const images = imagesRaw
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        slug: slugify(name),
        description,
        price,
        category,
        images,
      }),
    });

    if (!res.ok) {
      setError("Failed to create product");
      return;
    }

    router.push("/admin/products");
  }

  return (
    <main className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">New product</h1>
            <p className="text-gray-600 max-w-2xl">Add a product with pricing, category, and images.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Name"
            />
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Description"
              rows={4}
            />
            <input
              name="price"
              type="number"
              step="0.01"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Price"
            />
            <input
              name="category"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Category (e.g. snacks)"
            />
            <textarea
              name="images"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              placeholder="Image URLs (one per line)"
              rows={4}
            />
            {error && <p className="text-xs text-red-600">{error}</p>}
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Create product
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
