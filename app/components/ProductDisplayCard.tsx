import Link from "next/link";
import type { ReactNode } from "react";

type ProductDisplayCardProps = {
  name: string;
  price: string;
  image?: string;
  href?: string;
  actions?: ReactNode;
};

export default function ProductDisplayCard({
  name,
  price,
  image,
  href,
  actions,
}: ProductDisplayCardProps) {
  const content = (
    <>
      <div className="aspect-[4/5] bg-gray-100 rounded-md mb-4 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium line-clamp-2">{name}</h3>
        <p className="text-base font-semibold">£{price}</p>
      </div>
      {actions && <div className="mt-4 flex items-center gap-3 text-sm">{actions}</div>}
    </>
  );

  const baseClassName =
    "bg-white rounded-lg shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow";

  if (href) {
    return (
      <Link href={href} className={baseClassName}>
        {content}
      </Link>
    );
  }

  return <div className={baseClassName}>{content}</div>;
}
