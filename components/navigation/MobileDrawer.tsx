"use client";

import { X } from "lucide-react";
import { useMobileNav } from "@/hooks/useMobileNav";
import MobileAccordion from "./MobileAccordion";
import Link from "next/link";

export default function MobileDrawer() {
  const { isOpen, close } = useMobileNav();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 md:hidden bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 md:hidden h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={close} aria-label="Close menu">
            <X size={26} />
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full border rounded-md px-3 py-2 text-[15px]"
          />
        </div>

        {/* Accordions */}
        <div className="px-2">
          <MobileAccordion title="Trending" links={["Best Sellers", "New In"]} />
          <MobileAccordion title="Protein" links={["Whey", "Clear Whey", "Vegan"]} />
          <MobileAccordion title="Supplements" links={["Creatine", "Pre‑Workout"]} />
          <MobileAccordion title="Vitamins" links={["Daily Multi", "Immunity"]} />
          <MobileAccordion title="Snacks" links={["Bars", "Cookies"]} />
          <MobileAccordion title="Accessories" links={["Shakers", "Bottles"]} />
          <MobileAccordion title="Collabs" links={["Limited Editions"]} />
          <MobileAccordion title="Clearance" links={["Last Chance"]} />
        </div>

        {/* Footer links */}
        <div className="mt-6 px-4 space-y-3 text-[15px]">
          <Link href="/account" className="block">Account</Link>
          <Link href="/help" className="block">Help &amp; Information</Link>
        </div>
      </div>
    </>
  );
}
