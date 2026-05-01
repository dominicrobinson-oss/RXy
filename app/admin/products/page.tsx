import Link from "next/link";
import { db } from "@/lib/db";
import DeleteProductButton from "./DeleteProductButton";
import ProductDisplayCard from "@/app/components/ProductDisplayCard";

export const dynamic = 'force-dynamic';

export default async function AdminProductsPage() {
  const products = await db.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="py-10 md:py-14 lg:py-20">
      <div className="max-w-screen-xl mx-auto px-4 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">Products</h1>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin/products/new"
              className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              New product
            </Link>
            <form action="/api/admin/logout" method="post">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Log out
              </button>
            </form>
          </div>
        </div>

        <p className="text-gray-600 max-w-2xl">Manage live products, pricing, and content.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductDisplayCard
              key={product.id}
              name={product.name}
              price={product.price.toString()}
              image={product.images[0]}
              actions={
                <>
                  <span className="text-xs text-gray-500 mr-auto">{product.category}</span>
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="text-gray-900 underline-offset-4 hover:underline"
                  >
                    Edit
                  </Link>
                  <DeleteProductButton id={product.id} />
                </>
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
