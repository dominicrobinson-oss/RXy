import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const snacksMap: Record<string, { heading: string; description: string }> = {
  bars: {
    heading: "Bars, Snacks & Foods / Bars",
    description: "Protein bar options for convenient on-the-go nutrition.",
  },
  cookies: {
    heading: "Bars, Snacks & Foods / Cookies",
    description: "Soft-baked and crunchy protein cookie favourites.",
  },
  drinks: {
    heading: "Bars, Snacks & Foods / Drinks",
    description: "Ready-to-drink and mixable options for active routines.",
  },
  foods: {
    heading: "Bars, Snacks & Foods / Foods",
    description: "Functional food staples and snack cupboard essentials.",
  },
};

export default async function SnacksSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = snacksMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Bars, Snacks & Foods"
    />
  );
}
