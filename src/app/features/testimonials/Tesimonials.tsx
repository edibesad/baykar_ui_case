"use client";

import Image from "next/image";
import { TestimonialsSwiper } from "./components/TestimonialsSwiper";
import { useState } from "react";
import { SwiperClass } from "swiper/react";

export const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(
    null
  );
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="container mx-auto pt-[10rem] w-full h-full md:grid md:grid-cols-2">
        <div>
          <span className="text-[var(--colour-1)] text-[19.4px] font-medium tracking-widest">
            TESTIMONIALS
          </span>
          <h2 className="h2-semibold mt-[2rem]">
            Look What Our Customers Say!
          </h2>
          <p className="paragraph-regular text-[var(--text-colour-2)] mt-8">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </p>
          <div className="hidden md:flex gap-12 mt-8">
            <button
              onClick={() => {
                swiperInstance?.slidePrev();
              }}
              className="w-12 h-12 rounded-full p-3 justify-center items-center flex border-2 border-[var(--colour-1)] cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <Image src={"/arrow.svg"} alt="arrow" width={50} height={50} />
            </button>
            <div
              onClick={() => {
                swiperInstance?.slideNext();
              }}
              className="w-12 h-12 rounded-full p-3 justify-center items-center flex border-2 border-[var(--colour-1)] cursor-pointer hover:bg-gray-300 transition-all duration-300 ease-in-out"
            >
              <Image
                className="rotate-180"
                src={"/arrow.svg"}
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        <TestimonialsSwiper
          setSwiperInstance={setSwiperInstance}
          swiperInstance={swiperInstance}
        />
      </div>
    </div>
  );
};
