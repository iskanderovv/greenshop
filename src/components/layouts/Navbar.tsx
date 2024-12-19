"use client";
import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavbarData } from "@/hooks/useNavbarData";

const BsCart = dynamic(() => import("react-icons/bs").then(mod => mod.BsCart), { ssr: false });
const Heart = dynamic(() => import("lucide-react").then(mod => mod.Heart), { ssr: false });
const LogOut = dynamic(() => import("lucide-react").then(mod => mod.LogOut), { ssr: false });

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Plant Care", href: "/plant-care" },
  { name: "Blogs", href: "/blogs" },
];

function Navbar() {
  const { cartCount, wishlistCount } = useNavbarData();

  return (
    <header className="container border-b border-gray-200 py-3">
      <nav className="flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 mt-4 sm:mt-0">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-4 sm:gap-x-7 mt-4 sm:mt-0">
          <Link href="/search" className="hover:underline">
            Search
          </Link>
          <Link href="/cart" className="relative" aria-label={`Cart with ${cartCount} items`}>
            <BsCart size={20} />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 size-4 hover:bg-primary bg-primary flex justify-center items-center">
                {cartCount}
              </Badge>
            )}
          </Link>
          <Link href="/favorites" className="relative" aria-label={`Favorites with ${wishlistCount} items`}>
            <Heart size={20} />
            {wishlistCount > 0 && (
              <Badge className="absolute -top-2 -right-2 size-4 hover:bg-primary bg-primary flex justify-center items-center">
                {wishlistCount}
              </Badge>
            )}
          </Link>
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 px-4 sm:px-8 py-2">
              <LogOut className="mr-2" /> Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default memo(Navbar);
