import Image from "next/image";

export const Information = () => {
  return (
    <div className="hidden sm:flex justify-between h-10 bg-[var(--primary)] px-[100px] small-paragraph text-white">
      <div className="flex items-center gap-2">
        <Image src="/location.svg" alt="location" width={12} height={16} />
        <p>{"Lorem Ipsum has been the industry's standard dummy"}</p>
      </div>
      <div className="flex items-center gap-9">
        <div className="flex items-center gap-2">
          <Image src="/phone.svg" alt="phone" width={12} height={16} />
          <p>{"+90123 45 67"}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/mail.svg" alt="phone" width={12} height={16} />
          <p>{"mail@mail.com"}</p>
        </div>
      </div>
    </div>
  );
};
