"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types";
import { getCartProducts } from "@/actions/data";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getCartProducts();
      setCartItems(data.ProductId);
    })();
  }, []);

  return (
    <div className="container my-10">
      <div className="grid grid-cols-4 gap-6">
        {cartItems.map((product) => (
          <Card
            key={product.product_id}
            className="overflow-hidden drop-shadow-sm"
          >
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
                {product.discount && (
                  <span className="text-sm text-muted-foreground text-[#CBCBCB] line-through">
                    ${product.discount}
                  </span>
                )}
              </div>
              <Button className="bg-primary w-full hover:bg-primary/90 mt-2">Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
