import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const vitaminsMap: Record<string, { heading: string; description: string }> = {
  multivitamins: {
    heading: "Vitamins / Multivitamins",
    description: "Daily multivitamin support for a well-rounded routine.",
  },
  immunity: {
    heading: "Vitamins / Immunity",
    description: "Target immune support with purpose-built vitamin stacks.",
  },
  wellbeing: {
    heading: "Vitamins / Wellbeing",
    description: "Wellbeing-focused essentials to support everyday balance.",
  },
};

export default async function VitaminsSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = vitaminsMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Vitamins"
    />
  );
}
