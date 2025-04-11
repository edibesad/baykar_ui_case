import { HomeSwiperPart } from "./components/HomeSwiperPart";
import { HomeSearchPart } from "./components/HomeSearchPart";
import Image from "next/image";
import PersonList from "./components/PersonList";

export const HomeSection = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl flex flex-col mt-[89px]">
        <div className="absolute h-[950px] top-0 right-0 left-0 bg-linear-to-b from-white to-[#4361EE] rounded-b-full opacity-30 -z-50" />
        <span className="text-[var(--colour-1)] text-[19.4px] font-medium tracking-widest">
          REAL ESTATE
        </span>
        <div className="md:flex">
          <HomeSwiperPart />
          <HomeSearchPart />
        </div>
      </div>
      <div className="flex w-full justify-center items-center md:flex-row flex-col h-[100px] gap-[30px] mt-[60px]">
        <div className="flex items-center justify-center rounded-full bg-white md:h-[100px] md:w-[320px] h-[100px] w-[333px] gap-[10px] py-[38px] px-5 shadow-custom">
          <div className="h-9 w-[155px]">
            <PersonList />
          </div>
          <h5 className="h5-buttons">72k+ Happy Customers!</h5>
        </div>
        <div className="flex items-center justify-center rounded-full bg-white md:h-[100px] md:w-[320px] h-[100px] w-[333px] gap-[10px] py-[38px] px-5 shadow-custom">
          <Image
            className="rounded-full aspect-square object-cover"
            alt="image2"
            src="/image2.png"
            width={60}
            height={60}
          />
          <h5 className="h5-buttons">200+ New Listings Everyday!</h5>
        </div>
      </div>
    </>
  );
};
