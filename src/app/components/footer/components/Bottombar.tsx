import Link from "next/link";

export const Bottombar = () => {
  return (
    <div className="relative">
      <div className="paragraph-regular text-[var(--text-colour-4)] h-12">
        <div className="flex justify-center md:justify-between items-center gap-4 mx-auto max-w-screen-xl h-full">
          <p>© Company - All rights reserved</p>
          <div className="hidden md:flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 w-screen bg-[var(--text-colour-1)] -z-10"></div>
    </div>
  );
};
