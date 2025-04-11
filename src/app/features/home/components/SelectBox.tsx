import React from "react";

export const SelectBox = ({
  options,
  placeholder,
}: {
  options: string[];
  placeholder: string;
}) => {
  return (
    <div className="relative">
      <select
        className="appearance-none w-full h-[59px] bg-gray-100 text-gray-400 px-4 py-3 rounded-full focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
