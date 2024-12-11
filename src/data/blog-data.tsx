import { BlogPost, PromoSection } from "@/types";
import blog1 from "../../public/blog1.png";
import blog2 from "../../public/blog2.png";
import blog3 from "../../public/blog3.png";
import blog4 from "../../public/blog4.png";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Cactus & Succulent Care Tips",
    description: "Cacti and succulents are easy care plants for any home or patio.",
    date: "September 15",
    readTime: "5 minutes",
    image: blog1,
    slug: "cactus-succulent-care-tips"
  },
  {
    id: "2",
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
    date: "September 13",
    readTime: "5 minutes",
    image: blog2,
    slug: "top-10-succulents-home"
  },
  {
    id: "3",
    title: "Cacti & Succulent Care Tips",
    description: "Cacti and succulents thrive in containers and because most are...",
    date: "September 15",
    readTime: "3 minutes",
    image: blog3,
    slug: "cacti-succulent-care"
  },
  {
    id: "4",
    title: "Best Houseplants Room By Room",
    description: "The benefits of houseplants are endless. In addition to...",
    date: "September 15",
    readTime: "2 minutes",
    image: blog4,
    slug: "best-houseplants-room-by-room"
  }
]

export const promoSections: PromoSection[] = [
  {
    title: "SUMMER CACTUS & SUCCULENTS",
    subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants",
    buttonText: "Find More"
  },
  {
    title: "STYLING TRENDS & MUCH MORE",
    subtitle: "We are an online plant shop offering a wide range of cheap and trendy plants",
    buttonText: "Find More"
  }
]

