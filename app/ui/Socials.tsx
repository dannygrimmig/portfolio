import Link from "next/link";

export function Socials() {
  return (
    <ul className="flex gap-4">
      {socials.map((social) => (
        <li key={social.title}>
          <Link href={social.href}>
            <p className="nav-item relative text-sm">{social.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type Social = {
  title: string;
  href: string;
};

const socials: Social[] = [
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/danny-grimmig",
  },
  {
    title: "email",
    href: "mailto:dannygrimmig17@gmail.com?subject=&#128075;Hey Danny!",
  },
];
