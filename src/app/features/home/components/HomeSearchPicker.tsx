"use client";

import { useState } from "react";

export const HomeSearchPicker = () => {
  const [isRent, setIsRent] = useState(false);

  return (
    <div className="flex justify-around h-20 items-center text-center border-b-[1px] border-b-[var(--text-colour-4)]">
      <button
        onClick={() => {
          setIsRent(false);
        }}
        className="relative h-full items-center flex"
      >
        <h5 className="h-5-buttons text-[var(--primary)]">For Sale</h5>
        <div
          className="absolute bottom-0 w-[150px] h-[3px] bg-[var(--primary)] left-1/2 -translate-x-1/2 "
          style={
            isRent
              ? { display: "none" }
              : {
                  display: "block",
                }
          }
        ></div>
      </button>
      <button
        onClick={() => {
          setIsRent(true);
        }}
        className="relative h-full items-center flex"
      >
        <h5 className="h-5-buttons ">For Rent</h5>
        <div
          className="absolute bottom-0 w-[150px] h-[3px] bg-[var(--primary)] left-1/2 -translate-x-1/2"
          style={
            !isRent
              ? { display: "none" }
              : {
                  display: "block",
                }
          }
        ></div>
      </button>
    </div>
  );
};
