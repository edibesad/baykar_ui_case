export const NavbarElement = ({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`py-[13px] px-4 rounded-[30px] items-center text-[--text-color-2] h5-buttons cursor-pointer hover:bg-[#4361EE4D] transition-all duration-300 ${
        active ? "bg-[#4361EE4D]" : ""
      }`}
    >
      {text}
    </div>
  );
};
