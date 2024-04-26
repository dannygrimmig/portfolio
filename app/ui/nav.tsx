import Link from "next/link";

export function NavBar() {
  return (
    <nav className="border-b py-4 px-8 flex gap-16 items-end">
      <Link href="/">
        <h1 className="font-thin text-4xl">Danny</h1>
      </Link>
      <ul className="flex gap-8 font-mono">
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
