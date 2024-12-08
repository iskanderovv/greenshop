import HeroCarousel from './CarouselSlides';

import HeroImage from '../../../public/hero.png';

const slides = [
  {
    image: HeroImage,
    title: 'Let’s Make a Better Planet',
    subtitle: "Welcome to GreenShop",
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    btnTitle: 'Shop Now',
  },
  {
    image: HeroImage,
    title: 'Let’s Make a Better Planet',
    subtitle: "Welcome to GreenShop",
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    btnTitle: 'Shop Now',
  },
  {
    image: HeroImage,
    title: 'Let’s Make a Better Planet',
    subtitle: "Welcome to GreenShop",
    description: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!',
    btnTitle: 'Shop Now',
  },
];

export function Hero() {
  return (
    <div className='container'>
      <HeroCarousel slides={slides} />
    </div>
  );
}