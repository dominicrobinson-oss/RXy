import { Dumbbell, FlaskConical, Shirt, Sandwich, Pill, Zap } from "lucide-react";
import Link from "next/link";

const categories = [
  { label: "Protein", icon: Dumbbell, href: "/categories/protein" },
  { label: "Creatine", icon: FlaskConical, href: "/categories/creatine" },
  { label: "Activewear", icon: Shirt, href: "/categories/activewear" },
  { label: "Snacks", icon: Sandwich, href: "/categories/snacks" },
  { label: "Vitamins", icon: Pill, href: "/categories/vitamins" },
  { label: "Pre-Workout", icon: Zap, href: "/categories/pre-workout" },
];

export default function CategoryStrip() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.label}
                href={category.href}
                className="inline-flex items-center gap-2 rounded-md bg-[#003f4c] px-4 py-3 text-white text-sm font-medium whitespace-nowrap min-w-[150px] shadow-sm hover:bg-[#0a5462] transition"
              >
                <Icon size={16} className="shrink-0" />
                <span>{category.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
