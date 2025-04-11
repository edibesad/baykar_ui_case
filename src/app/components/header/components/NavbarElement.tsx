export const NavbarElement = ({ text }: { text: string }) => {
  const active = true;
  return (
    <div
      className={`py-[13px] px-4 rounded-[30px] items-center text-[--text-color-2] h5-buttons ${
        active ? "bg-[#4361EE4D]" : ""
      }`}
    >
      {text}
    </div>
  );
};
