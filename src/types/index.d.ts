export interface Plant {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface Category {
  name: string;
  count: number;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
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