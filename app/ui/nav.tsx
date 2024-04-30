import Link from "next/link";

export function NavBar() {
  return (
    <nav className="z-10 font-mono sticky top-0 bg-white border-b py-4 px-2 sm:px-8 flex gap-16 items-end">
      <Link href="/">
        <h1 className="text-4xl">Danny&#128075;</h1>
      </Link>
      <ul className="flex gap-4 sm:gap-8">
        {LINKS.map((link) => (
          <Link key={link} href={`/${link}`}>
            {link}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

const LINKS = ["portfolio", "blog"];
