import Image from "next/image";

export const ListingSwiperCardCampaign = ({
  type,
}: {
  type?: "popular" | "new" | "discount" | undefined;
}) => {
  if (!type) return null;
  const theme = generateTheme(type);
  return (
    <div
      className={`absolute bottom-[30px] left-[30px] px-6 py-[10px] gap-3 z-20 flex h-[41px] items-center justify-center rounded-full`}
      style={{
        backgroundColor: theme.bg,
      }}
    >
      <div className="relative h-5 w-5">
        <Image alt={theme.icon} src={theme.icon} fill className="object-fill" />
      </div>
      <h5 style={{ color: theme.textColor }} className={`h5-buttons`}>
        {theme.text}
      </h5>
    </div>
  );
};

function generateTheme(type: "popular" | "new" | "discount") {
  switch (type) {
    case "popular":
      return {
        textColor: "#FF1111",
        text: "Popular",
        bg: "#FFE1E1",
        icon: "/fire.svg",
      };
    case "new":
      return {
        textColor: "#119BFF",
        text: "New Listing",
        bg: "#D7EEFF",
        icon: "/home.svg",
      };
    case "discount":
      return {
        textColor: "#00CE3A",
        text: "Discounted Price",
        bg: "#F1FFF1",
        icon: "/dollar.svg",
      };
  }
}
