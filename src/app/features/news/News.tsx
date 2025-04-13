import { NewInfo } from "@/types/NewInfo";
import { NewsSwiper } from "./components/NewsSwiper";
import { NewsCard } from "./components/NewsCard";

const news: NewInfo[] = [
  {
    title: "Top 10 Home Buying Mistakes to Avoid",
    description:
      "Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
    date: "28",
    day: "Tue",
    image: "/news1.png",
  },
  {
    title: "How to Stage Your Home for a Quick Sale",
    description:
      "Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
    date: "08",
    day: "Mon",
    image: "/news2.png",
  },
  {
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    date: "26",
    day: "Wed",
    image: "/news3.png",
  },
  {
    title: "Understanding the Real Estate Market Trends",
    description:
      "Curabitur non ligula nec nunc efficitur facilisis. Nulla facilisi.",
    date: "15",
    day: "Fri",
    image: "/news1.png",
  },
  {
    title: "How to Choose the Right Neighborhood for You",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    date: "05",
    day: "Sat",
    image: "/news2.png",
  },
  {
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    date: "26",
    day: "Wed",
    image: "/news3.png",
  },
  {
    title: "Understanding the Real Estate Market Trends",
    description:
      "Curabitur non ligula nec nunc efficitur facilisis. Nulla facilisi.",
    date: "15",
    day: "Fri",
    image: "/news1.png",
  },
  {
    title: "How to Choose the Right Neighborhood for You",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    date: "05",
    day: "Sat",
    image: "/news2.png",
  },
  {
    title: "5 Tips for First-Time Home Sellers",
    description:
      "In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
    date: "26",
    day: "Wed",
    image: "/news3.png",
  },
];

export const News = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[var(--primary)] lg:h-[900px]">
      <div className="max-w-screen-xl mx-auto px-4 lg:pt-0 lg:pb-0 pt-10 pb-[6.25rem] items-center flex flex-col justify-center h-full">
        <h4 className="text-white text-[19.4px] tracking-widest">
          WHAT’S TRENDING
        </h4>
        <h2 className="hidden lg:block h2-semibold text-white mt-[1.8rem]">
          Latest Blogs & Posts
        </h2>
        <span className="h3-semibold lg:hidden text-white mt-[1.2rem]">
          Latest Blogs & Posts
        </span>
        <div>
          <NewsSwiper slides={news} />
          <div className="lg:hidden mt-[2.5rem]">
            <div className="flex flex-col gap-8">
              {news.slice(0, 3).map((slide, index) => (
                <NewsCard key={index} newInfo={slide} />
              ))}
            </div>
            <button className="rounded-full bg-white px-10 py-4 mt-[3.75rem] border border-[var(--primary)] ">
              <h5 className="h5-buttons text-[var(--primary)]">
                View more blogs
              </h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
