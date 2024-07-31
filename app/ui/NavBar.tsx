"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./Badges/Badge";

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="z-10 sticky top-0 bg-white border-b border-black py-4 px-2 sm:px-8 flex flex-col sm:flex-row flex-wrap sm:gap-4">
      <Link href="/">
        <h1 className="nav-item relative text-4xl w-max">Danny&#128075;</h1>
      </Link>

      <div className="flex-1 flex justify-between items-center">
        <ul className="flex gap-4 gap-8 self-end">
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

        <Link href={"https://www.garden.dannygrimmig.com/"} target="_blank">
          <Badge
            text="Digital Garden"
            className="text-xs text-white hover:text-transparent"
            color="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:bg-clip-text transition duration-300 ease-in-out background-animate"
          />
        </Link>
      </div>
    </nav>
  );
}

const LINKS = ["portfolio"];
