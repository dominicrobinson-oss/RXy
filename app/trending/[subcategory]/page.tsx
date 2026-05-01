import { notFound } from "next/navigation";
import MyproteinCategoryPage from "@/app/components/MyproteinCategoryPage";

type Props = { params: Promise<{ subcategory: string }> };

const trendingMap: Record<string, { heading: string; description: string }> = {
  new: {
    heading: "Trending / New",
    description: "Browse the latest launches and fresh category arrivals.",
  },
  bestsellers: {
    heading: "Trending / Bestsellers",
    description: "Explore top-performing products chosen by the community.",
  },
  offers: {
    heading: "Trending / Offers",
    description: "Find current deals and limited-time promotions.",
  },
};

export default async function TrendingSubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const config = trendingMap[subcategory];
  if (!config) notFound();

  return (
    <MyproteinCategoryPage
      heading={config.heading}
      description={config.description}
      highlight="Top Bar / Trending"
    />
  );
}
