import { NavbarElement } from "./components/NavbarElement";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-20 w-screen sm:px-[100px] px-[30px] items-center justify-between">
      <div className="hidden sm:flex items-center h-[37px]">
        <NavbarElement text="Home" />
        <NavbarElement text="About" />
        <NavbarElement text="Listings" />
        <NavbarElement text="Services" />
        <NavbarElement text="Blogs" />
      </div>
      <div>
        <div className="h-[50px] flex items-center gap-[18px]">
          <div className="rounded-full bg-[var(--primary)] w-[50px] h-[50px] flex items-center justify-center">
            <Image alt="logo" src="/logo.svg" width={24} height={24} />
          </div>
          <span className="text-[#1E1E1E] text-xl font-semibold">Logo</span>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-[15px]">
        <div className="flex items-center h-[18px] gap-2.5">
          <Image alt="user" src="/user.svg" width={18} height={18} />
          <h5 className="h5-buttons"> {"Login/Register"}</h5>
        </div>
        <button className="flex items-center h-[50px] bg-[var(--primary)] rounded-[50px] py-[15px] px-[26px] gap-2">
          <Image alt="logo" src="/logo.svg" width={20} height={20} />
          <h5 className="h5-buttons text-white">{"Add Listing"}</h5>
        </button>
      </div>
    </div>
  );
};
