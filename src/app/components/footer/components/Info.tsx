import Image from "next/image";

export const Info = () => {
  return (
    <div className="space-y-4 text-[var(--text-colour-3)] md:text-[var(--text-colour-2)]">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <div className="h-12 w-12 bg-[var(--primary)] flex items-center justify-center rounded-full">
          <Image alt="logo" src={"/logo.svg"} width={24} height={24} />
        </div>
        <span className="text-xl font-semibold text-[var(--text-colour-2)]">
          Rezilla
        </span>
      </div>
      <h5 className="h5-buttons mt-8 text-[var(--text-colour-3)] md:text-[var(--text-colour-2)] text-center md:text-left">
        Lorem ipsum has been the industry standard dummy text
      </h5>
      <div className="space-y-2 md:mt-12">
        <div className="flex items-center gap-2 md:justify-start justify-center">
          <Image alt="mail" src={"phone2.svg"} width={20} height={20} />
          <span>+90123 45 67</span>
        </div>
        <div className="flex items-center gap-2 md:justify-start justify-center">
          <Image alt="mail" src={"mail2.svg"} width={20} height={20} />
          <span>mail@email.com</span>
        </div>
      </div>
    </div>
  );
};
