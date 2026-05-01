'use client';

export default function TopUtilityBar() {
  return (
    <div className="bg-gray-100 text-gray-700 py-1 md:py-1.5 text-[10px] md:text-[11px]">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
        <p>🚚 FREE delivery on orders over £50</p>
        <div className="flex flex-wrap gap-6">
          <a href="#" className="hover:underline">Track Order</a>
          <a href="#" className="hover:underline">Sign In</a>
        </div>
      </div>
    </div>
  );
}
