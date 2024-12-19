"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";
import { getCartProducts } from "@/actions/data";
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

export default function Cart() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    (async () => {
      const data = await getCartProducts();
      setCartItems(data.ProductId);
      const initialQuantities = data.ProductId.reduce((acc: { [key: string]: number }, product: Product) => {
        acc[product.product_id] = 1;
        return acc;
      }, {});
      setQuantities(initialQuantities);
    })();
  }, []);

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities(prev => {
      const newQuantity = Math.max(1, (prev[productId] || 1) + delta);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const removeItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product_id !== productId));
    setQuantities(prev => {
      const newQuantities = { ...prev };
      delete newQuantities[productId];
      return newQuantities;
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.cost * (quantities[item.product_id] || 1));
    }, 0);
  };

  if (cartItems?.length === 0 || cartItems === undefined)
    return (
      <div className="container my-10 min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <ShoppingCart className="w-24 h-24 text-gray-300" />
        <h2 className="text-3xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-500">Add some items to get started!</p>
        <Button className="mt-4">Continue Shopping</Button>
      </div>
    );

  return (
    <div className="container my-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      <div className="grid gap-6">
        {cartItems?.map((product) => (
          <Card key={product.product_id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={product.image_url[0]}
                    alt={product.product_name}
                    fill
                    sizes="100%"
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium text-lg">{product.product_name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-primary">
                      ${product.cost}
                    </span>
                    {product.discount && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.discount}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(product.product_id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">
                    {quantities[product.product_id] || 1}
                  </span>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => updateQuantity(product.product_id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 hover:bg-red-100"
                  onClick={() => removeItem(product.product_id)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Separator className="my-6" />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Total</h2>
          <p className="text-sm text-gray-500">Shipping and taxes will be calculated at checkout</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">${calculateTotal().toFixed(2)}</p>
          <Button className="bg-primary hover:bg-primary/90 mt-2 w-full">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}

