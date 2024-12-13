"use client";
import { Product } from "@/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, Link } from "lucide-react";
import { addToFavorite } from "@/actions/create";
import { toast } from "sonner";
import { getWishlists } from "@/actions/data";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishlist = async () => {
      const wishlist = await getWishlists();
      setWishlistProducts(wishlist);
    };
    fetchWishlist();
  }, []);

  console.log(wishlistProducts);

  return (
    <Card className="overflow-hidden container my-10 drop-shadow-sm">
      {wishlistProducts.length > 0 ? (
        wishlistProducts?.map((product) => (
          <>
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

              <div className="flex gap-x-2 w-full mt-2 items-center">
                <Button className="flex flex-auto items-center bg-primary hover:bg-primary/90 gap-2 w-full justify-center rounded-md px-4 py-2">
                  <FaShoppingCart />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={() => addToFavorite(product.product_id)}
                >
                  <Heart />
                </Button>
              </div>
            </CardFooter>
          </>
        ))
      ) : (
        <div className="h-[60vh] flex flex-col items-center justify-center">
          <p className="text-center">No products in your wishlist</p>
        </div>
      )}
    </Card>
  );
}
