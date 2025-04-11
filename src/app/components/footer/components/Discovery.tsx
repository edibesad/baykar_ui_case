import Link from "next/link";

export const Discovery = () => {
  return (
    <div>
      <h3 className="h4-medium text-[var(--text-colour-1)] mb-4">Discovery</h3>
      <ul className="space-y-2">
        {["Canada", "United States", "Germany", "Africa", "India"].map(
          (item) => (
            <li key={item}>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
