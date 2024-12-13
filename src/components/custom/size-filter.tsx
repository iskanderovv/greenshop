import { cn } from "@/lib/utils";
import { Product } from "@/types"

interface ProductFilterProps {
    products: Product[];
    selectedSize: string | null;
    onSelectedSize: (size: string | null) => void;
}

export default function SizeFilter({
    products,
    selectedSize,
    onSelectedSize,
}: ProductFilterProps) {
  const sizes = ["Small", "Medium", "Large"];

  return (
    <div className="space-y-4 bg-[#FBFBFB] px-3.5 py-5">
      <h3 className="text-lg text-[#3D3D3D] font-bold">Sizes</h3>
      <ul className="space-y-2">
        {sizes.map((size) => (
          <li key={size}>
            <button
              onClick={() => onSelectedSize(size === selectedSize ? null : size)} 
              className={cn(
                "flex w-full justify-between text-sm hover:text-primary",
                size === selectedSize && "font-medium text-primary"
              )}
            >
              {size.charAt(0).toUpperCase() + size.slice(1)} 
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
