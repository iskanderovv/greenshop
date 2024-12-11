export interface Plant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  newArrival?: boolean;
}

export interface Category {
  category_id: string;
  category_name: string
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string | StaticImageData;
  slug: string;
}

export interface PromoSection {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface FormValues {
  username: string;
  password: string;
  token: string
  role: string
}

interface PromoSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface Product {
  product_id: string;
  product_name: string;
  category_id: string;
  short_description: string;
  product_description: string;
  product_status: string;
  size: string[];
  count: number;
  cost: number;
  discount: number;
  tags: string[];
  liked: boolean;
  basket: boolean;
  image_url: string[];
}
