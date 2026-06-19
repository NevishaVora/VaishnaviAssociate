"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "./homeBanner.css";

import "swiper/css";
import "swiper/css/navigation";

const banners = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",
  "/images/banner3.jpg",
  "/images/banner4.jpg",
];

export default function HomeBanner() {
  return (
   <section className="bg-[#f5f5f5] pt-40 md:pt-44 pb-12">
      <div className="mainContainer">

        <div className="relative max-w-[1400px] mx-auto">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            className="bannerSlider"
          >
            {banners.map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[16/9] sm:aspect-[17/9] lg:aspect-[21/9] rounded-[20px] overflow-hidden shadow-lg">
                  <Image
                    src={banner}
                    alt={`Banner ${index + 1}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>
    </section>
  );
}