import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const accessoriesMap: Record<string, { heading: string; description: string }> = {
  bottles: {
    heading: "Accessories / Bottles",
    description: "Hydration-ready bottle options for gym and daily use.",
  },
  shakers: {
    heading: "Accessories / Shakers",
    description: "Shakers in multiple sizes and finishes for smooth mixing.",
  },
  bags: {
    heading: "Accessories / Bags",
    description: "Gym-ready bags with practical storage for your training kit.",
  },
  belts: {
    heading: "Accessories / Belts",
    description: "Training belts to support heavy lifts and form confidence.",
  },
};

export default async function AccessoriesSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = accessoriesMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Accessories"
    />
  );
}
