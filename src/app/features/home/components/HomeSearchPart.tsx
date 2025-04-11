import Image from "next/image";
import { SelectBox } from "./SelectBox";

export const HomeSearchPart = () => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center pt-10 md:px-[30px]">
      <div className="w-[333px] md:w-[420px] h-full bg-white rounded-[20px] px-[30px] shadow-custom">
        <div className="flex justify-around h-20 items-center text-center border-b-[1px] border-b-[var(--text-colour-4)]">
          <div className="relative h-full items-center flex">
            <h5 className="h-5-buttons text-[var(--primary)]">For Sale</h5>
            <div className="absolute bottom-0 w-[150px] h-[3px] bg-[var(--primary)] left-1/2 -translate-x-1/2 "></div>
          </div>
          <div className="relative h-full items-center flex">
            <h5 className="h-5-buttons ">For Rent</h5>
            <div className="hidden absolute bottom-0 w-[150px] h-[3px] bg-[var(--primary)] left-1/2 -translate-x-1/2 "></div>
          </div>
        </div>
        <div className="pt-[50px] px-10">
          <div className="flex flex-col gap-[30px]">
            <input
              type="text"
              placeholder="New York, San Francisco, etc"
              className="h-[59px] bg-[#D4D4D433] rounded-[20px] px-4 py-2 w-full text-[var(--text-colour-5)] placeholder-[var(--text-colour-4)] focus:outline-none border-[1px] border-[#D4D4D433]"
            />
            <SelectBox
              placeholder="Select Property Type"
              options={["Apartment", "Villa", "Studio"]}
            />
            <SelectBox
              placeholder="Select Rooms"
              options={["1 Room", "2 Rooms", "3+ Rooms"]}
            />
          </div>
          <div className="flex gap-[10px] pt-5">
            <Image
              alt="settings"
              src={"/settings.svg"}
              width={14}
              height={14}
            />
            <p className="small-paragraph text-[var(--primary)]">
              Advance Search
            </p>
          </div>
          <button className="w-full h-[60px] bg-[var(--primary)] rounded-full flex gap-[10px] items-center justify-center mt-[61px] mb-[60px] cursor-pointer">
            <Image alt="search" src={"/search.svg"} width={20} height={20} />
            <h5 className="h5-buttons text-white">Search</h5>
          </button>
        </div>
      </div>
    </div>
  );
};
