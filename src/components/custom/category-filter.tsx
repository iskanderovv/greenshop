import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="space-y-4 bg-[#FBFBFB] px-3.5 py-5">
      <h3 className="text-lg text-[#3D3D3D] font-bold">Categories</h3>
      <ul className="space-y-2">
        {categories?.map((category) => (
          <li key={category.category_id}>
            <button
              onClick={() =>
                onSelectCategory(
                  category.category_id === selectedCategory
                    ? null
                    : category.category_id
                )
              }
              className={cn(
                "flex w-full justify-between text-sm hover:text-primary",
                category.category_id === selectedCategory &&
                  "font-medium text-primary"
              )}
            >
              {category.category_name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
