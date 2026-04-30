"use client";

import { Product } from "@prisma/client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({ product }: { product: Product }) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

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

    const res = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        slug: product.slug,
        description,
        price,
        category,
        images,
      }),
    });

    if (!res.ok) {
      setError("Failed to update product");
      return;
    }

    router.push("/admin/products");
  }

  async function handleDelete() {
    const res = await fetch(`/api/products/${product.id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      setError("Failed to delete product");
      return;
    }
    router.push("/admin/products");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        defaultValue={product.name}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <textarea
        name="description"
        defaultValue={product.description}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        rows={4}
      />
      <input
        name="price"
        type="number"
        step="0.01"
        defaultValue={product.price.toString()}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <input
        name="category"
        defaultValue={product.category}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <textarea
        name="images"
        defaultValue={product.images.join("\n")}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        rows={4}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          Save changes
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="text-sm text-red-600 underline-offset-4 hover:underline"
        >
          Delete product
        </button>
      </div>
    </form>
  );
}
