import Image from "next/image";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      <div className="flex gap-1 items-center justify-center">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="relative min-w-[10px] min-h-[10px] max-h-[14px] max-w-[14px]"
          >
            <Image
              src="/star.svg"
              alt="star"
              fill
              className="object-contain"
              style={{
                filter:
                  rating >= item
                    ? undefined
                    : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
