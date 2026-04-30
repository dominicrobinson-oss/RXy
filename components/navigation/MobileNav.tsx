"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useMobileNav } from "@/hooks/useMobileNav";

export default function MobileNav() {
  const { open } = useMobileNav();

  return (
    <div className="flex lg:hidden h-16 px-4 items-center justify-between fixed top-0 left-0 right-0 bg-white shadow z-50">
      <button onClick={open} aria-label="Open menu">
        <Menu size={28} />
      </button>

      <Link href="/" className="text-xl font-bold">
        RXy+
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/account">Account</Link>
        <Link href="/basket">Basket</Link>
      </div>
    </div>
  );
}

