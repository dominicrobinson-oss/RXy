import { db } from "@/lib/db";
import EditProductForm from "./EditProductForm";

type Props = { params: Promise<{ id: string }> };

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;
  const product = await db.product.findUnique({ where: { id } });
  if (!product) return null;

  return (
    <main className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">Edit product</h1>
            <p className="text-gray-600 max-w-2xl">Update product details and media from one place.</p>
          </div>
          <EditProductForm product={product} />
        </div>
      </div>
    </main>
  );
}
