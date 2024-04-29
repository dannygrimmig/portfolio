import Link from "next/link";
import { Badge, BadgeProps } from "./badges";
import { Typewriter } from "./typing";
import { Button } from "./buttons";

type SplitPageProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export function SplitPage(props: SplitPageProps) {
  const { left, right } = props;
  return (
    <main className="sm:grid grid-cols-5 min-h-[calc(100vh-74px)]">
      <div className="sm:col-span-3 border-r">{left}</div>

      <div className="sm:col-span-2 px-4 pt-8">{right}</div>
    </main>
  );
}

type RightSplit = {
  title: string;
  text: string;
  badges?: BadgeProps[];
};

export function RightSplit(props: RightSplit) {
  const { title, badges = [], text } = props;
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <ul className="flex gap-2 justify-end flex-wrap">
          {badges.map((badge: BadgeProps, i) => (
            <li key={i}>
              <Badge
                text={badge.text}
                color={badge.color}
                className={badge.className}
              />
            </li>
          ))}
        </ul>
        <h1 className="text-6xl">{title}</h1>
      </div>

      <Typewriter text={text} />

      <div className="flex gap-2">
        <Link href="/portfolio">
          <Button type="primary" text="portfolio" />
        </Link>

        <Link href="/blog">
          <Button type="secondary" text="blog" />
        </Link>
      </div>
    </div>
  );
}
