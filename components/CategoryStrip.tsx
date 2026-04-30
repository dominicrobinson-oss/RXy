import { Dumbbell, FlaskConical, Shirt, Sandwich, Pill, Zap } from "lucide-react";

const categories = [
  { label: "Protein", icon: Dumbbell },
  { label: "Creatine", icon: FlaskConical },
  { label: "Activewear", icon: Shirt },
  { label: "Snacks", icon: Sandwich },
  { label: "Vitamins", icon: Pill },
  { label: "Pre-Workout", icon: Zap },
];

export default function CategoryStrip() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.label}
                type="button"
                className="inline-flex items-center gap-2 rounded-md bg-[#003f4c] px-4 py-3 text-white text-sm font-medium whitespace-nowrap min-w-[150px] shadow-sm hover:bg-[#0a5462] transition"
              >
                <Icon size={16} className="shrink-0" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
