import Link from "next/link";

export const QuickLinks = () => {
  return (
    <div>
      <h3 className="h4-medium text-[var(--text-colour-1)] mb-4">
        Quick Links
      </h3>
      <ul className="space-y-2 text-[var(--text-colour-2)] text-lg">
        {[
          "Home",
          "About",
          "Listings",
          "Services",
          "Blogs",
          "Become a Agent",
        ].map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
