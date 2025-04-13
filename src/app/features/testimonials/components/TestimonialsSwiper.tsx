"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "./TestimonialCard";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/testimonial-swiper.css";
import { Bubble } from "@/app/components/Bubble";

const testimonails = [
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    image: "/person2.png",
    name: "Barbara D. Smith",
    rating: 4,
  },
  {
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    image: "/person.png",
    name: "John Doe",
    rating: 1,
  },
  {
    text: "Lorem Ipsum has been the industry's....",
    image: "/person.png",
    name: "John Doe",
    rating: 5,
  },
];

export const TestimonialsSwiper = ({
  swiperInstance,
  setSwiperInstance,
}: {
  swiperInstance: SwiperClass | null;
  setSwiperInstance: (swiper: SwiperClass) => void;
}) => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
      swiperInstance.pagination.el = paginationRef.current;
    }
  }, [swiperInstance]);

  if (!mounted) return null;

  return (
    <div className="relative flex md:flex-row-reverse flex-col-reverse">
      <Bubble width={60} height={60} top={0} left={0} zIndex={-10} />

      <div ref={paginationRef} className="testimonial-swiper-pagination" />
      <Swiper
        className="w-full h-full z-20"
        onSwiper={setSwiperInstance}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          clickable: true,
          el: paginationRef.current,
        }}
      >
        {testimonails.map((item, index) => (
          <SwiperSlide key={index} className="z-20 p-4">
            <TestimonialCard
              text={item.text}
              image={item.image}
              name={item.name}
              rating={item.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
