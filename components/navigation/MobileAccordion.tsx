"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface MobileAccordionProps {
  title: string;
  links: string[];
}

export default function MobileAccordion({ title, links }: MobileAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-4 px-2 text-[16px] font-semibold"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="pl-4 pb-3 space-y-3 text-[15px] text-gray-700">
          {links.map((link) => (
            <Link key={link} href="/" className="block">
              {link}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
