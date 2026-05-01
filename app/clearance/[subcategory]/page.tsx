import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const clearanceMap: Record<string, { heading: string; description: string }> = {
  protein: {
    heading: "Clearance / Protein",
    description: "Discounted protein lines with limited stock availability.",
  },
  supplements: {
    heading: "Clearance / Supplements",
    description: "Save on selected supplements while promotional lines last.",
  },
  snacks: {
    heading: "Clearance / Snacks",
    description: "Browse reduced-price bars, cookies, and snack options.",
  },
};

export default async function ClearanceSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = clearanceMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Clearance"
    />
  );
}
