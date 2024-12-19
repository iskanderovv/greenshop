"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { FaShoppingCart } from "react-icons/fa";
import { Heart } from "lucide-react";

import { Product } from "@/types";
import { addToCart, addToFavorite } from "@/actions/create";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isInCart, setIsInCart] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleAddToFavorite = useCallback(async () => {
    try {
      const response = await addToFavorite(product.product_id);
      if (response) {
        toast.success("Product added to favorites!");
      } else {
        throw new Error("Failed to add product to favorites");
      }
    } catch (error) {
      toast.error("Failed to add product to favorites!");
    }
  }, [product.product_id]);

  const handleAddToCart = useCallback(async () => {
    try {
      const response = await addToCart(product.product_id);
      if (response.id) {
        setIsInCart(true);
        toast.success("Product added to cart!");
      } else {
        throw new Error("Failed to add product to cart");
      }
    } catch (error) {
      setIsInCart(false);
      toast.error("Failed to add product to cart!");
    }
  }, [product.product_id]);

  const productImage =
    Array.isArray(product.image_url) && product.image_url[0]
      ? product.image_url[0]
      : "https://via.placeholder.com/300";

  return (
    <Card className="overflow-hidden drop-shadow-sm">
      <CardContent className="p-0">
        <Link
          href={`/shop/${product.product_id}`}
          className="relative aspect-square block"
        >
          <Image
            title={product.product_name}
            src={productImage}
            alt={product.product_name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </Link>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="font-medium">{product.product_name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ${product.cost}
          </span>
          {product.discount && (
            <span className="text-sm text-muted-foreground text-[#CBCBCB] line-through">
              ${product.discount}
            </span>
          )}
        </div>
        {token && (
          <div className="flex gap-x-2 w-full mt-2 items-center">
            <Button
              disabled={isInCart}
              onClick={handleAddToCart}
              className="flex flex-auto items-center bg-primary hover:bg-primary/90 gap-2 w-full justify-center rounded-md px-4 py-2"
            >
              <FaShoppingCart />
              Add to Cart
            </Button>
            <Button onClick={handleAddToFavorite} variant="outline">
              <Heart />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
