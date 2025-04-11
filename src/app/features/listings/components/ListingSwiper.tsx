"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ListingSwiperCard } from "./ListingSwiperCard";
import { HouseInfo } from "@/types/HouseInfo";

import "swiper/css";
import "swiper/css/pagination";

export const ListingSwiper = ({ listings }: { listings: HouseInfo[] }) => {
  return (
    <Swiper
      className="w-full md:h-[550px]"
      slidesPerView={3.2}
      pagination={{ clickable: true }}
    >
      {listings.map((houseInfo, index) => (
        <SwiperSlide key={index}>
          <ListingSwiperCard houseInfo={houseInfo} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
