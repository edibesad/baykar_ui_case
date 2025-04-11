"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { NewsCard } from "./NewsCard";
import { NewInfo } from "@/types/NewInfo";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/news-swiper.css";

export function NewsSwiper({ slides }: { slides: NewInfo[] }) {
  const [mounted, setMounted] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  const paginationRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  if (!mounted) return null;

  return (
    <div className="relative w-full py-16 text-white hidden md:block">
      <div className="container mx-auto w-[1120px] px-4">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={50}
          observer={true}
          observeParents={true}
          pagination={{
            el: paginationRef.current,
            clickable: true,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="h-auto justify-center">
              <NewsCard newInfo={slide} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-around mt-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="w-[50px] h-[50px] bg-white text-black p-2 rounded-full shadow-lg cursor-pointer"
          >
            {"<"}
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            className="w-[50px] h-[50px] bg-white text-black p-2 rounded-full shadow-lg cursor-pointer"
          >
            {">"}
          </button>
        </div>

        <div ref={paginationRef} className="news-swiper-pagination pt-10" />
      </div>
    </div>
  );
}
