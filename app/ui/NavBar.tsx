"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="z-10 font-mono sticky top-0 bg-white border-b border-black py-4 px-2 sm:px-8 flex gap-16 items-end">
      <Link href="/">
        <h1 className="nav-item relative text-4xl">Danny&#128075;</h1>
      </Link>

      <ul className="flex gap-4 sm:gap-8">
        {LINKS.map((link) => (
          <Link key={link} href={`/${link}`}>
            <p
              className={`nav-item relative ${
                pathname === `/${link}` && "active"
              }`}
            >
              {link}
            </p>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

const LINKS = ["portfolio"];
