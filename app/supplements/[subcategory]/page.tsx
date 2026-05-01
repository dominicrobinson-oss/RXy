import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const supplementsMap: Record<string, { heading: string; description: string }> = {
  energy: {
    heading: "Supplements / Energy",
    description: "Targeted formulas to support daily and training energy output.",
  },
  strength: {
    heading: "Supplements / Strength",
    description: "Build a stronger foundation with power and performance-focused support.",
  },
  endurance: {
    heading: "Supplements / Endurance",
    description: "Fuel longer sessions with hydration and endurance-friendly options.",
  },
  recovery: {
    heading: "Supplements / Recovery",
    description: "Promote post-session recovery and routine consistency.",
  },
  "pre-workout": {
    heading: "Supplements / Pre-Workout",
    description: "Get ready to train with focused pre-workout blends.",
  },
  bcaa: {
    heading: "Supplements / BCAA",
    description: "Amino-acid support options for around your training window.",
  },
  creatine: {
    heading: "Supplements / Creatine",
    description: "Creatine essentials for strength and explosive performance.",
  },
};

export default async function SupplementsSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = supplementsMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Supplements"
    />
  );
}
