import { NewInfo } from "@/types/NewInfo";
import Image from "next/image";

export const NewsCard = ({ newInfo }: { newInfo: NewInfo }) => {
  const { title, description, date, day, image } = newInfo;

  return (
    <div className="w-[340px] h-fit flex flex-col group overflow-hidden text-white">
      <div className="relative w-full h-[240px] rounded-[14px] overflow-hidden border-2 border-[var(--primary)]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover custom-shadow"
        />

        <div className="absolute top-0 left-5 bg-white rounded-b-xl px-2 py-1 text-center shadow">
          <h4 className="h-4-semibold text-[var(--text-colour-2)] leading-none">
            {date}
          </h4>
          <p className="paragraph-regular text-[var(--text-colour-3)]">{day}</p>
        </div>
      </div>

      <div className="pt-4 px-1 flex-1 flex flex-col justify-start">
        <h3 className="h3-medium text-white">{title}</h3>
        <p className="paragraph-regular text-[var(--text-colour-5)] mt-2">
          {description}
        </p>
      </div>
    </div>
  );
};
