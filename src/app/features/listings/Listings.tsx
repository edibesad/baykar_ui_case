import { HouseInfo } from "@/types/HouseInfo";
import { ListingFilterButton } from "./components/ListingFilterButton";
import { ListingSwiper } from "./components/ListingSwiper";
import { ListingSwiperCard } from "./components/ListingSwiperCard";

const listings: HouseInfo[] = [
  {
    image: "/house1.png",
    bedNum: 4,
    bathNum: 3,
    name: "Tranquil Haven in the Woods",
    address: "103 Wright CourtBurien, WA 98168",
    price: "$5,9700",
    state: "popular",
  },
  {
    image: "/house2.png",
    bedNum: 3,
    bathNum: 2,
    name: "Serene Retreat by the Lake",
    address: "1964 Jehovah Drive, VA 22408",
    price: "$ 1,970",
    state: "new",
  },
  {
    image: "/house3.png",
    bedNum: 4,
    bathNum: 4,
    name: "Charming Cottage in the Meadow",
    address: "1508 Centennial Farm RoadHarlan, 51537",
    price: "$ 3,450",
    state: "discount",
  },
  {
    image: "/house4.png",
    bedNum: 4,
    bathNum: 3,
    name: "Grand Estate on the Hilltop",
    address: "103 Wright CourtBurien, WA 98168",
    price: "$ 2,389",
  },
];

export const Listings = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-20 mb-10">
      <span className="text-[var(--colour-1)] text-[19.4px] font-medium tracking-widest">
        CHECKOUT OUR NEW
      </span>
      <div className="flex flex-col md:flex-row md:justify-between pb-[50px]">
        <div>
          <h2 className="hidden md:block h2-semibold text-[var(--text-colour-2)]">
            Latest Listed Properties
          </h2>
          <h2 className="md:hidden h3-semibold text-[var(--text-colour-2)]">
            Latest Listed Properties
          </h2>
          <p className="paragraph-regular text-[var(--text-colour-3)] mt-[30px]">
            Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
            dignissim purus.
          </p>
        </div>
        <div className="flex justify-between md:gap-5 mt-[30px] md:mt-0">
          <ListingFilterButton message="All" />
          <ListingFilterButton isActive message="Sell" />
          <ListingFilterButton message="Rent" />
        </div>
      </div>
      <div className="hidden md:block">
        <ListingSwiper listings={listings} />
      </div>
      <div className="flex flex-col items-center justify-center md:hidden ">
        {listings.map((houseInfo, index) => (
          <div key={index} className="mb-5">
            <ListingSwiperCard houseInfo={houseInfo} />
          </div>
        ))}
        <div className="text-[var(--primary)] h5-buttons border border-[var(--primary)] rounded-full w-[233px] h-[49px] justify-center items-center flex mt-10">
          View More Properties
        </div>
      </div>
    </div>
  );
};
