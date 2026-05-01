import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const proteinMap: Record<string, { heading: string; description: string }> = {
  whey: {
    heading: "Protein / Whey",
    description: "High-quality whey protein options for post-workout and daily goals.",
  },
  vegan: {
    heading: "Protein / Vegan",
    description: "Plant-based protein blends for performance-focused nutrition.",
  },
  "clear-whey": {
    heading: "Protein / Clear Whey",
    description: "Light, juice-style protein options with refreshing flavours.",
  },
  casein: {
    heading: "Protein / Casein",
    description: "Slow-release casein formulas designed for sustained support.",
  },
  bundles: {
    heading: "Protein / Bundles",
    description: "Value packs and stackable combinations for your routine.",
  },
};

export default async function ProteinSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = proteinMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Protein"
    />
  );
}
