"use client";
import Image from "next/image";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Heart, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { getCartProducts } from "@/actions/data";

export default function Navbar() {
  const [lenthProduct, setLenthProduct] = useState(0);
  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Plant Care", href: "/plant-care" },
    { name: "Blogs", href: "/blogs" },
  ];

  useEffect(() => {
    (async () => {
      const cartProducts = await getCartProducts();
      setLenthProduct(cartProducts.TotalCount);
    })();
  }, []);

  return (
    <header className="container border-b border-gray-200 py-3">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="h-auto w-auto"
            width={150}
            height={150}
          />
        </Link>
        <ul className="flex gap-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-7">
          <Link href="/search">Search</Link>
          <Link href="/cart" className="relative">
            <BsCart size={20} />
            <Badge className="absolute -top-2 -right-2 size-4 hover:bg-primary bg-primary flex justify-center items-center">
            {lenthProduct}
            </Badge>
          </Link>
          <Link href="/favorites" className="relative">
            <Heart size={20} />
            <Badge className="absolute -top-2 -right-2 size-4 hover:bg-primary bg-primary flex justify-center items-center">
              0
            </Badge>
          </Link>
          <Link href={"/login"}>
            <Button className="bg-primary hover:bg-primary/90 px-8 py-0">
              <LogOut /> Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
