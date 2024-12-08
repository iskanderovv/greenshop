import { Plant, Category } from "@/types";

export const plants: Plant[] = [
  {
    id: "1",
    name: "Bathroom Palm",
    price: 149.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",
    category: "House Plants",
  },
  {
    id: "2",
    name: "Angel Wing Begonia",
    price: 169.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",

    category: "House Plants",
  },
  {
    id: "3",
    name: "African Violet",
    price: 199.0,
    originalPrice: 249.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",

    category: "Potter Plants",
    isSale: true,
  },
  {
    id: "4",
    name: "African Violet",
    price: 199.0,
    originalPrice: 249.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",

    category: "Potter Plants",
    isSale: true,
  },
  {
    id: "5",
    name: "African Violet",
    price: 199.0,
    originalPrice: 249.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",

    category: "Seeds",
    isSale: true,
  },
  {
    id: "6",
    name: "African Violet",
    price: 199.0,
    originalPrice: 249.0,
    image:
      "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",

    category: "Small Plants",
    isSale: true,
  },
];

export const categories: Category[] = [
  { name: "House Plants", count: 2 },
  { name: "Potter Plants", count: 2 },
  { name: "Seeds", count: 1 },
  { name: "Small Plants", count: 1 },
];
