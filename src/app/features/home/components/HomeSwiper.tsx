"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/home-swiper.css";
import { Bubble } from "@/app/components/Bubble";

export const HomeSwiper = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const paginationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full md:w-[580px] md:h-[351px]">
        <Bubble right={-30} top={-40} width={60} height={60} rotate="30deg" />
        <div className="rounded-[20px] overflow-hidden">
          <Swiper
            modules={[Pagination]}
            onSwiper={setSwiperInstance}
            loop
            className="home-swiper w-full h-full"
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[580/351]">
                  <Image
                    alt="room"
                    src="/image.png"
                    fill
                    className="object-cover rounded-[20px]"
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button
          className="absolute top-1/2 -translate-y-1/2 md:-translate-x-1/2 bg-white text-gray-600 hover:bg-gray-200 transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
          onClick={() => swiperInstance?.slidePrev()}
        >
          {"<"}
        </button>

        <button
          className="absolute top-1/2 right-0 -translate-y-1/2 md:translate-x-1/2 bg-white text-gray-600 hover:bg-gray-200 transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
          onClick={() => swiperInstance?.slideNext()}
        >
          {">"}
        </button>

        <div ref={paginationRef} className="home-swiper-pagination" />
      </div>
    </div>
  );
};
