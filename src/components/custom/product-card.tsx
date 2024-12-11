"use client";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const token = localStorage.getItem("token") || null;

  console.log(token);

  return (
    <Card className="overflow-hidden drop-shadow-sm">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image_url[0]}
            alt={product.product_name}
            fill
            className="object-contain"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-medium">{product.product_name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${product.cost}
          </span>
          <span className="text-sm text-muted-foreground text-[#CBCBCB] line-through">
            ${product?.discount}
          </span>
        </div>
        {token && (
          <div className="flex gap-x-2 w-full mt-2 items-center">
            <Button
              className={`flex flex-auto items-center bg-primary hover:bg-primary/90 gap-2 w-full justify-center rounded-md px-4 py-2`}
            >
              <FaShoppingCart />
              Add to Cart
            </Button>
            <Button variant={"outline"}>
              <Heart />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
