import { Bubble } from "@/app/components/Bubble";
import Image from "next/image";

export const ImageGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="grid grid-rows-11">
        <div className="relative row-start-2 row-span-10">
          <Image
            alt="villa"
            src={"/villa.png"}
            fill
            className="object-cover md:rounded-[30px] rounded-[20px] row-start-2 shadow-custom"
          />
        </div>
      </div>
      <div className="grid grid-rows-11 gap-5">
        <div className="relative row-span-5">
          <Image
            alt="bedroom"
            src={"/bedroom.png"}
            fill
            className="object-fill md:rounded-[30px] rounded-[20px] shadow-custom"
          />
        </div>
        <div className="relative row-span-5">
          <Bubble height={60} width={60} bottom={-30} left={70} zIndex={10} />
          <Image
            alt="livingroom"
            src={"/livingoom.png"}
            fill
            className="object-fill md:rounded-[30px] rounded-[20px] shadow-custom z-0"
          />
        </div>
      </div>
    </div>
  );
};
