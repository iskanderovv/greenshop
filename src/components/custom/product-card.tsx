"use client";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { addToCart, addToFavorite } from "@/actions/create";
import { toast } from "sonner";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const token = localStorage.getItem("token") || null;
  const [isCart, setIsCart] = useState(false);

  async function handleAddToFavorite(id: string) {
    const response = await addToFavorite(id);
    console.log(response);
    
    if (response) {
      toast.success("Product added to favorites!");
    } else {
      toast.error("Failed to add product to favorites!");
    }
  }

  async function handleAddToCart(id:string) {
    const response = await addToCart(id);
    console.log(response);
    
    if(response.id) {
      setIsCart(true);
      toast.success("Product added to cart!");
    } else {
      setIsCart(false);
      toast.error("Failed to add product to cart!");
    }
  }

  return (
    <Card className="overflow-hidden drop-shadow-sm">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image_url[0]}
            alt={product.product_name}
            fill
            sizes="100%"
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
              disabled={isCart}
            onClick={() => handleAddToCart(product.product_id)}
              className={`flex flex-auto items-center bg-primary hover:bg-primary/90 gap-2 w-full justify-center rounded-md px-4 py-2`}
            >
              <FaShoppingCart />
              Add to Cart
            </Button>
            <Button
              onClick={() => handleAddToFavorite(product.product_id)}
              variant={"outline"}
            >
              <Heart />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
