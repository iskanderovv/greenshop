import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import transactionImg from "../../../public/transactions.svg";
import footer1 from "../../../public/footer1.png";
import footer2 from "../../../public/footer2.png";
import footer3 from "../../../public/footer3.png";

const services = [
  {
    image: footer1,
    alt: "Garden Care",
    title: "Garden Care",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants."
  },
  {
    image: footer2,
    alt: "Plant Renovation",
    title: "Plant Renovation",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants."
  },
  {
    image: footer3,
    alt: "Watering Graden",
    title: "Watering Graden",
    description: "We are an online plant shop offering a wide range of cheap and trendy plants."
  }
];

const links = [
  {
    title: "My Account",
    items: ["My Account", "Our stores", "Contact us", "Career", "Specials"]
  },
  {
    title: "Help & Guide",
    items: ["Help Center", "How to Buy", "Shipping & Delivery", "Product Policy", "How to Return"]
  },
  {
    title: "Categories",
    items: ["House Plants", "Potter Plants", "Seeds", "Small Plants", "Accessories"]
  }
];

const socialMedia = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBFBFB] pt-12 container">
      <div className="flex justify-between gap-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="">
              <div className="w-24 h-24 mb-4 bg-[#fbfbfb] rounded-full flex items-center justify-center">
                <Image src={service.image} alt={service.alt} width={150} height={40} />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="container mb-12 max-w-[454px] w-full">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Would you like to join newsletters?</h3>
            <div className="flex gap-2 mb-4">
              <Input 
                type="email" 
                placeholder="enter your email address..." 
                className="max-w-md"
              />
              <Button className="bg-[#46A358] hover:bg-[#46A358]/90">Join</Button>
            </div>
            <p className="text-sm text-[#727272] text-muted-foreground">
              We usually post offers and challenges in newsletter. We're your online houseplant destination. 
              We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#46A3581A] py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[#46A358]">
            <div className="w-6 h-6 rounded-full bg-[#46A358] flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <span className="font-bold">GREENSHOP</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">70 West Buckingham Ave. Farmingdale, NY 11735</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">contact@greenshop.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">+88 01911 717 490</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {links.map((linkSection, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{linkSection.title}</h4>
              <ul className="space-y-2">
                {linkSection.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className="text-muted-foreground hover:text-[#46A358] text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-bold mb-4">Social Media</h4>
            <div className="flex gap-4 mb-8">
              {socialMedia.map((social, index) => (
                <Link key={index} href={social.href} className="text-muted-foreground hover:text-[#46A358]">
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <h4 className="font-bold mb-4">We accept</h4>
            <div className="flex gap-2">
              <Image src={transactionImg} alt="transaction" width={250} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}