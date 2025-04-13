import Image from "next/image";

export const AboutCard = ({ image, text }: { image: string; text: string }) => {
  return (
    <div className="lg:h-[131px] lg:w-[400px] h-[117px] w-[333px] flex gap-[25px] px-6 rounded-4xl justify-center items-center mt-[30px] shadow-custom">
      <Image
        src={image}
        alt={image}
        width={40}
        height={40}
        className="w-[34px] h-[34px] lg:w-[40px] md:h-[40px]"
      />
      <div className="col-span-2">
        <h5 className="h5-buttons text-[var(--colour-1)]">{text}</h5>
        <p className="paragraph-regular text-[var(--text-colour-3)]">
          when an unknown printer took a galley
        </p>
      </div>
    </div>
  );
};
