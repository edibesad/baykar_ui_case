import Image from "next/image";

export const Communications = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 bg-[var(--primary)] flex items-center justify-center rounded-full">
          <Image alt="logo" src={"/logo.svg"} width={24} height={24} />
        </div>
        <span className="text-xl font-bold">Rezilla</span>
      </div>
      <h5 className="h5-buttons">
        Lorem ipsum has been the industry standard dummy text
      </h5>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {/* TODO: Phone Icon */}
          <span>+90123 45 67</span>
        </div>
        <div className="flex items-center gap-2">
          {/* Mail Icon */}
          <span>mail@email.com</span>
        </div>
      </div>
    </div>
  );
};
