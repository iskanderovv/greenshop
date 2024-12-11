// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// interface CartItem {
//   category: string;
//   id: string;
//   image: string;
//   isSale: boolean;
//   name: string;
//   originalPrice: number;
//   price: number;
//   quantity: number;
// }

// export default function Cart() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cart") || "[]");

//     const validatedItems: CartItem[] = items.map((item: Partial<CartItem>) => ({
//       category: item.category || "",
//       id: item.id || "",
//       image: item.image || "",
//       isSale: item.isSale || false,
//       name: item.name || "Unknown",
//       originalPrice: item.originalPrice || 0,
//       price: item.price || 0,
//       quantity: item.quantity || 1,
//     }));
//     setCartItems(validatedItems);
//   }, []);

//   const updateQuantity = (id: string, newQuantity: number) => {
//     const updatedCart = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
//     );
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeItem = (id: string) => {
//     const updatedCart = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const totalCost = cartItems.reduce(
//     (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
//     0
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty</p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-3">
//           <div className="md:col-span-2 space-y-4">
//             {cartItems.map((item) => (
//               <Card key={item.id}>
//                 <CardContent className="flex items-center p-4">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     width={80}
//                     height={80}
//                     className="rounded-md object-cover mr-4"
//                   />
//                   <div className="flex-grow">
//                     <h2 className="font-semibold">{item.name}</h2>
//                     <p className="text-sm text-gray-500">{item.category}</p>
//                     <div className="flex items-center mt-2">
//                       <span className="font-bold text-lg">
//                         ${item.price.toFixed(2)}
//                       </span>
//                       {item.isSale && (
//                         <span className="ml-2 text-sm line-through text-gray-500">
//                           ${item.originalPrice.toFixed(2)}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     >
//                       -
//                     </Button>
//                     <span className="w-8 text-center">{item.quantity}</span>
//                     <Button
//                       variant="outline"
//                       size="icon"
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     >
//                       +
//                     </Button>
//                   </div>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="ml-4"
//                     onClick={() => removeItem(item.id)}
//                   >
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//           <div>
//             <Card>
//               <CardContent className="p-6">
//                 <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//                 <div className="space-y-2">
//                   {cartItems.map((item) => (
//                     <div key={item.id} className="flex justify-between text-sm">
//                       <span>
//                         {item.name} (x{item.quantity})
//                       </span>
//                       <span>${(item.price * item.quantity).toFixed(2)}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="border-t mt-4 pt-4">
//                   <div className="flex justify-between font-semibold">
//                     <span>Total</span>
//                     <span>${totalCost.toFixed(2)}</span>
//                   </div>
//                 </div>
//                 <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
//                   Proceed to Checkout
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
