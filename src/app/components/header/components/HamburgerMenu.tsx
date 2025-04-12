"use client";
import { useState } from "react";
import Image from "next/image";

export function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-0 fixed top-5 right-5 text-white p-2 rounded-md md:hidden"
      >
        <Image
          src={"hamburger-menu.svg"}
          alt="hamburger-menu"
          height={24}
          width={20}
        />
      </button>

      <div
        className={`fixed inset-0 bg-[var(--primary)]/90 text-white transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5"
        >
          X
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
          <a onClick={() => setIsOpen(false)}>Home</a>
          <a onClick={() => setIsOpen(false)}>About</a>
          <a onClick={() => setIsOpen(false)}>Listings</a>
          <a onClick={() => setIsOpen(false)}>Services</a>
          <a onClick={() => setIsOpen(false)}>Blogs</a>
        </div>
      </div>
    </>
  );
}
