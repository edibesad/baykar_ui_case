import Link from "next/link";

export const Discovery = () => {
  return (
    <div className="md:block hidden">
      <h3 className="h4-medium text-[var(--text-colour-1)] mb-4">Discovery</h3>
      <ul className="space-y-1 text-lg">
        {["Canada", "United States", "Germany", "Africa", "India"].map(
          (item) => (
            <li key={item}>
              <Link href="#">{item}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
