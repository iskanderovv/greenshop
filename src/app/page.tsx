import { BlogSection } from "@/components/BlogSection";
import { Hero } from "@/components/hero/Hero";
import PlantShop from "@/components/PlantShop";

export default function Home() {
  return (
    <div>
      <Hero />
      <PlantShop />
      <BlogSection />
    </div>
  );
}
