export const ListingFilterButton = ({
  isActive = false,
  message,
}: {
  isActive?: boolean;
  message: string;
}) => {
  return (
    <div
      className={`h-[49px] px-[30px] py-[19px] rounded-full border border-[var(--primary)] flex items-center justify-center h5-buttons ${
        isActive ? "bg-[var(--primary)] text-white" : "text-[var(--primary)]"
      }`}
    >
      {message}
    </div>
  );
};
