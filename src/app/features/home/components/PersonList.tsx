import Image from "next/image";

const persons = [
  "/person.png",
  "/person.png",
  "/person.png",
  "/person.png",
  "/person.png",
];

export default function PersonList() {
  return (
    <div className="flex items-center space-x-[-10px]">
      {persons.map((src, index) => (
        <div
          key={index}
          className="w-9 h-9 rounded-full overflow-hidden border-2 border-white"
        >
          <Image src={src} alt={`avatar-${index}`} width={36} height={36} />
        </div>
      ))}
      <div className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold border-2 border-white">
        +
      </div>
    </div>
  );
}
