"use client";

import { useState } from "react";
import { plants, categories } from "@/data/plants";
import { PriceRangeSlider } from "@/components/custom/price-range-slider";
import { CategoryFilter } from "@/components/custom/category-filter";
import { ProductCard } from "@/components/custom/product-card";
import superSaleImg from "../../public/Super Sale Banner.png"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function PlantShop() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredPlants = plants
    .filter(
      (plant) =>
        (!selectedCategory || plant.category === selectedCategory) &&
        plant.price >= priceRange[0] &&
        plant.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto min-h-screen px-4 py-8">
      <div className="grid grid-cols-4 gap-8">
        <aside className="space-y-8 bg-[#FBFBFB] px-3.5 py-5">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <PriceRangeSlider
            min={0}
            max={500}
            value={priceRange}
            onValueChange={setPriceRange}
          />
          <Image src={superSaleImg} alt="ads" width={310} height={300} />
        </aside>
        <div className="col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">All Plants</h1>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPlants.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
