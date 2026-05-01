import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const collabsMap: Record<string, { heading: string; description: string }> = {
  gymshark: {
    heading: "Collabs / Gymshark",
    description: "Exclusive collaboration selections and co-branded releases.",
  },
  "limited-edition": {
    heading: "Collabs / Limited Edition",
    description: "Small-batch drops and time-limited partner products.",
  },
};

export default async function CollabsSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = collabsMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Collabs"
    />
  );
}
