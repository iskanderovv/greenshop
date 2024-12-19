import { useEffect, useState } from "react";
import { getCartProducts, getWishlists } from "@/actions/data";

export function useNavbarData() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const [cartProducts, wishlistProducts] = await Promise.all([
        getCartProducts(),
        getWishlists()
      ]);
      setCartCount(cartProducts.TotalCount);
      setWishlistCount(wishlistProducts);
    }
    fetchData();
  }, []);

  return { cartCount, wishlistCount };
}

