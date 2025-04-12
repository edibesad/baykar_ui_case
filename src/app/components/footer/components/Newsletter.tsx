import Link from "next/link";
import Image from "next/image";

export const Newsletter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 md:text-start text-center">
        Subscribe to our Newsletter!
      </h3>
      <div className="flex gap-2 md:justify-start justify-center">
        <div className="w-[333px] sm:w-[350px] h-[60px] bg-white rounded-full flex items-center px-4 shadow-custom">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent outline-none placeholder-[var(--text-colour-4]"
          />
          <button className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white">
            <Image src={"arrow2.svg"} alt="arrow" width={16} height={16} />
          </button>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-sm font-semibold mb-3 md:text-start text-center">
          Follow Us on
        </h4>
        <div className="flex gap-4 md:justify-start justify-center">
          <Link href="#" className="w-5 h-5 relative">
            <Image alt="linkedin" src={"linkedin.svg"} fill />
          </Link>
          <Link href="#" className="w-5 h-5 relative">
            <Image alt="facebook" src={"facebook.svg"} fill />
          </Link>
          <Link href="#" className="w-5 h-5 relative">
            <Image alt="instagram" src={"instagram.svg"} fill />
          </Link>
        </div>
      </div>
    </div>
  );
};
