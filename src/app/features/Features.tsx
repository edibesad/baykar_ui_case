import { About } from "./about/About";
import { HomeSection } from "./home/HomeSection";
import { Listings } from "./listings/Listings";
import { News } from "./news/News";
import { Testimonials } from "./testimonials/Tesimonials";

export const Features = () => {
  return (
    <main className="">
      <div className="px-[30px]">
        <HomeSection />
        <About />
        <Listings />
        <News />
        <Testimonials />
      </div>
    </main>
  );
};
