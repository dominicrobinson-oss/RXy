'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type ProductFormValues = {
  name: string;
  slug: string;
  description: string;
  price: string;
  category: string;
  images: string[];
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function ProductForm({
  mode,
  productId,
  initialValues,
}: {
  mode: 'create' | 'edit';
  productId?: string;
  initialValues?: ProductFormValues;
}) {
  const router = useRouter();
  const defaults = useMemo<ProductFormValues>(
    () =>
      initialValues ?? {
        name: '',
        slug: '',
        description: '',
        price: '',
        category: '',
        images: [''],
      },
    [initialValues]
  );

  const [name, setName] = useState(defaults.name);
  const [slug, setSlug] = useState(defaults.slug);
  const [description, setDescription] = useState(defaults.description);
  const [price, setPrice] = useState(defaults.price);
  const [category, setCategory] = useState(defaults.category);
  const [imagesRaw, setImagesRaw] = useState(defaults.images.join('\n'));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const updateName = (value: string) => {
    setName(value);
    setSlug(slugify(value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const images = imagesRaw
      .split(/\n|,/g)
      .map((image) => image.trim())
      .filter(Boolean);

    const payload = {
      name,
      slug,
      description,
      price,
      category,
      images,
    };

    const endpoint = mode === 'create' ? '/api/products' : `/api/products/${productId}`;
    const method = mode === 'create' ? 'POST' : 'PUT';

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setError(body.error ?? 'Failed to save product');
        return;
      }

      router.push('/admin/products');
      router.refresh();
    } catch (submitError) {
      console.error(submitError);
      setError('Failed to save product');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(event) => updateName(event.target.value)}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <input
        value={slug}
        onChange={(event) => setSlug(slugify(event.target.value))}
        placeholder="Slug"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm min-h-28"
      />
      <input
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Price (e.g. 29.99)"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <input
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="Category"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />
      <textarea
        value={imagesRaw}
        onChange={(event) => setImagesRaw(event.target.value)}
        placeholder="Image URLs (one per line)"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm min-h-28"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors disabled:opacity-50"
      >
        {isSubmitting
          ? 'Saving...'
          : mode === 'create'
          ? 'Create product'
          : 'Update product'}
      </button>
    </form>
  );
}
