"use client";
import { useEffect, useState } from "react";
import { PriceRangeSlider } from "@/components/custom/price-range-slider";
import { CategoryFilter } from "@/components/custom/category-filter";
import { ProductCard } from "@/components/custom/product-card";
import superSaleImg from "../../public/Super Sale Banner.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Category, Product } from "@/types";
import { getAllProducts, getCategories } from "@/actions/data";
import SizeFilter from "./custom/size-filter";

export default function PlantShop() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState("featured");
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filterByTag, setFilterByTag] = useState<"all" | "sale" | "newArrival">(
    "all"
  );

  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 500]);
    setFilterByTag("all");
    setSelectedSize(null);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (!selectedCategory || product.category_id === selectedCategory) &&
        (!selectedSize || product.size.includes(selectedSize)) &&
        product.cost >= priceRange[0] &&
        product.cost <= priceRange[1] &&
        (filterByTag === "all" ||
          (filterByTag === "sale" && product.product_status === "sale") ||
          (filterByTag === "newArrival" &&
            product.product_status === "new-arrival"))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.cost - b.cost;
        case "price-desc":
          return b.cost - a.cost;
        case "name":
          return a.product_name.localeCompare(b.product_name);
        default:
          return 0;
      }
    });

  useEffect(() => {
    (async () => {
      const categories = await getCategories();
      setCategories(categories.categories);
      const products = await getAllProducts();
      setProducts(products.products);
    })();
  }, []);

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
          <SizeFilter
            products={products} 
            selectedSize={selectedSize} 
            onSelectedSize={setSelectedSize}
          />
          <Image src={superSaleImg} alt="ads" width={310} height={300} />
        </aside>
        <div className="col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <p
                className={`cursor-pointer font-bold text-xl ${
                  filterByTag === "all" ? "text-green-600" : ""
                }`}
                onClick={() => resetFilters()}
              >
                All Plants
              </p>
              <p
                className={`cursor-pointer font-bold text-xl ${
                  filterByTag === "newArrival" ? "text-green-600" : ""
                }`}
                onClick={() => setFilterByTag("newArrival")}
              >
                New Arrivals
              </p>
              <p
                className={`cursor-pointer font-bold text-xl ${
                  filterByTag === "sale" ? "text-green-600" : ""
                }`}
                onClick={() => setFilterByTag("sale")}
              >
                Sale
              </p>
            </div>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
