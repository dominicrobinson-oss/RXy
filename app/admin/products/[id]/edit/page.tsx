import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import ProductForm from '../../ProductForm';

type Params = {
  params: Promise<{ id: string }>;
};

export const dynamic = 'force-dynamic';

export default async function EditAdminProductPage({ params }: Params) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    notFound();
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Edit Product</h1>
        <p className="text-gray-600 mb-8">Update product details.</p>
        <ProductForm
          mode="edit"
          productId={product.id}
          initialValues={{
            name: product.name,
            slug: product.slug,
            description: product.description,
            price: Number(product.price).toString(),
            category: product.category,
            images: product.images,
          }}
        />
      </div>
    </main>
  );
}
