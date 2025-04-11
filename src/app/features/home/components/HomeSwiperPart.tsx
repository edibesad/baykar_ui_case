import { HomeSwiper } from "./HomeSwiper";

export const HomeSwiperPart = () => {
  return (
    <div className="flex">
      <div className="flex flex-col w-full h-full">
        <h2 className="h2-semibold mt-5">Find a perfect home you love..!</h2>
        <p className="paragraph-regular text-[var(--text-colour-3)] mt-10">
          {
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
          }
        </p>
        <div className="pt-8">
          <HomeSwiper />
        </div>
      </div>
    </div>
  );
};
