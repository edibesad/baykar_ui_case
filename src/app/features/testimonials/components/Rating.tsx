import Image from "next/image";

export const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex ">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src="/star.svg"
            alt="star"
            width={14}
            height={14}
            style={{
              filter:
                rating >= item
                  ? undefined
                  : "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
            }}
          />
        ))}
      </div>
    </div>
  );
};
