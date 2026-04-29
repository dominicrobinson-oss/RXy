import Image from "next/image";

type Item = {
  id: number;
  name: string;
  tag?: string;
  price: string;
  image: string;
};

const items: Item[] = [
  {
    id: 1,
    name: "Seamless Training Leggings",
    tag: "New in",
    price: "£39.99",
    image: "/images/activewear-leggings.jpg",
  },
  {
    id: 2,
    name: "Performance Training Tee",
    tag: "New in",
    price: "£24.99",
    image: "/images/activewear-tee.jpg",
  },
  {
    id: 3,
    name: "Lightweight Training Hoodie",
    tag: "New in",
    price: "£44.99",
    image: "/images/activewear-hoodie.jpg",
  },
  {
    id: 4,
    name: "Everyday Training Shorts",
    tag: "New in",
    price: "£29.99",
    image: "/images/activewear-shorts.jpg",
  },
];

export default function NewInActivewear() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-baseline justify-between">
          <h2 className="text-xl font-semibold uppercase tracking-[0.08em] text-slate-800 md:text-2xl">
            New in activewear
          </h2>
          <button className="text-xs font-semibold uppercase tracking-wide text-[#0071e3] hover:underline">
            Shop all activewear
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-lg bg-slate-50 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center"
                />
                {item.tag && (
                  <span className="absolute left-2 top-2 rounded-full bg-black/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-1 p-3.5 text-sm">
                <h3 className="line-clamp-2 text-[13px] font-semibold">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-bold">{item.price}</p>
                <p className="mt-1 text-[11px] text-slate-500">
                  Free next\u2011day delivery over £75.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
