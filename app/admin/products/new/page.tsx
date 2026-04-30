import ProductForm from '../ProductForm';

export default function NewAdminProductPage() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Create Product</h1>
        <p className="text-gray-600 mb-8">Add a new product to the catalog.</p>
        <ProductForm mode="create" />
      </div>
    </main>
  );
}
