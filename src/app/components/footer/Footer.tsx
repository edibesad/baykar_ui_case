"use client";

import { QuickLinks } from "./components/QuickLinks";
import { Discovery } from "./components/Discovery";
import { Newsletter } from "./components/Newsletter";
import { Bottombar } from "./components/Bottombar";
import { Info } from "./components/Info";

export function Footer() {
  return (
    <footer className="bg-[var(--colour-1)]/10 mt-24">
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 text-[var(--text-colour-2)]">
          <Info />

          <QuickLinks />

          <Discovery />

          <Newsletter />
        </div>
      </div>
      <Bottombar />
    </footer>
  );
}
