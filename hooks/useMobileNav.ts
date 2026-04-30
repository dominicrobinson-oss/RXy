"use client";

import { create } from "zustand";
import { useEffect } from "react";

interface MobileNavState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useMobileNav = create<MobileNavState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

// Body scroll lock + Escape key
export function MobileNavEffects() {
  const { isOpen, close } = useMobileNav();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  return null;
}
