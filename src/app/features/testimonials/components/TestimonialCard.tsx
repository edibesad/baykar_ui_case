import Image from "next/image";
import { Rating } from "./Rating";

export const TestimonialCard = ({
  text,
  image,
  name,
  rating,
}: {
  text: string;
  image: string;
  name: string;
  rating: number;
}) => {
  return (
    <div className="flex justify-center items-center py-5 w-full h-full z-20">
      <div className="shadow-custom rounded-4xl md:h-96 w-[36rem] px-14 py-9">
        <div className="relative h-12 md:h-10 w-16">
          <Image
            alt="quote"
            src={"/quote.svg"}
            fill
            className="object-contain"
          />
        </div>
        <h4 className="h4-medium md:h5-buttons mt-5 md:h-32 h-[16rem]">
          {text}
        </h4>
        <div className="w-full h-[1px] bg-[var(--text-colour-5)] mt-10" />
        <div className="flex justify-between mt-5">
          <div className="flex gap-3.5 items-center">
            <div className="relative h-12 w-12">
              <Image
                alt={image}
                src={image}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h4 className="h4-semibold text-[var(--text-colour-2)]">{name}</h4>
          </div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};
