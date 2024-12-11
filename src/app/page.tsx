import { BlogSection } from "@/components/BlogSection";
import { Hero } from "@/components/hero/Hero";
import Footer from "@/components/layouts/Footer";
import PlantShop from "@/components/PlantShop";

export default function Home() {
  return (
    <div>
      <Hero />
      <PlantShop />
      <BlogSection />
      <Footer />
    </div>
  );
}
