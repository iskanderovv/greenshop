"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";

type HeroCarouselProps = {
  slides: {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    description: string;
    btnTitle: string;
  }[];
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  return (
    <section className="relative my-3 w-full h-[500px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#F5F5F580] h-full px-[43px] py-[68px] flex items-center justify-between">
              <div>
                <strong className="text-[#3D3D3D] text-[14px] tracking-[10%] font-medium">
                  {slide.subtitle}
                </strong>
                <h1 className="text-[#3D3D3D] py-1 text-[70px] leading-[70px] font-extrabold uppercase w-[730px]">
                  {slide.title}
                </h1>
                <p className="text-[#727272] text-[14px] leading-[24px] font-normal w-[730px]">
                  {slide.description}
                </p>
                <Button className="bg-primary mt-10 px-7 hover:bg-primary/90">
                  {slide.btnTitle}
                </Button>
              </div>
              <Image src={slide.image} alt={slide.title} className="size-[500px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
