import Image from "next/image";

const persons = [
  "/person.png",
  "/user5.png",
  "/user4.png",
  "/user5.png",
  "/user6.png",
];

export default function PersonList() {
  return (
    <div className="flex items-center space-x-[-10px]">
      {persons.map((src, index) => (
        <div
          key={index}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white relative"
        >
          <Image
            src={src}
            alt={`avatar-${index}`}
            fill
            className="object-center"
          />
        </div>
      ))}
      <div className="w-9 h-9 relative">
        <Image
          src="/user6.png"
          alt="avatar-others"
          fill
          className="object-fill rounded-full border-2 border-white"
        />
        <div className="absolute bg-gray-800 rounded-full opacity-80 top-0 left-0 w-full h-full flex items-center justify-center border-white text-white font-semibold text-[12px]">
          +
        </div>
      </div>
    </div>
  );
}
