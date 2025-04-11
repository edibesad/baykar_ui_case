import { HouseInfo } from "@/types/HouseInfo";
import Image from "next/image";
import { ListingSwiperCardCampaign } from "./ListingSwiperCardCampaign";

export const ListingSwiperCard = ({ houseInfo }: { houseInfo: HouseInfo }) => {
  return (
    <div className="md:h-[500px] md:w-[340px]">
      <div className="relative">
        <ListingSwiperCardCampaign type={houseInfo.state} />

        <Image
          src={houseInfo.image}
          alt={houseInfo.image}
          width={340}
          height={340}
          className="md:w-[340px] md:h-[340px] w-[338px] h-[220px] rounded-4xl"
        />
      </div>
      <div className="pt-8">
        <h3 className="h3-semibold text-[var(--text-colour-2)]">
          {houseInfo.price}
        </h3>
        <h4 className="h4-medium pt-5">{houseInfo.name}</h4>
        <p className="paragraph-regular text-[var(--text-colour-3)] pt-5">
          {houseInfo.address}
        </p>
        <div className="flex items-center pt-5">
          <div className="flex justify-center items-center">
            <Image
              src="/bed.svg"
              alt="bed"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            <span className="paragraph-regular text-[var(--text-colour-2)]">
              {houseInfo.bedNum} Beds
            </span>
          </div>
          <div className="flex ml-5">
            <Image
              src="/bath.svg"
              alt="bath"
              width={20}
              height={20}
              className="w-5 h-5 mr-2"
            />
            <span className="paragraph-regular text-[var(--text-colour-2)]">
              {houseInfo.bathNum} Baths
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
