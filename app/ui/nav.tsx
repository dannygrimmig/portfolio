import Link from "next/link";

export function NavBar() {
  return (
    <nav className="font-mono border-b py-4 px-8 flex gap-16 items-end">
      <Link href="/">
        <h1 className="text-4xl font-thin">Danny&#128075;</h1>
      </Link>
      <ul className="flex gap-8">
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
