import Link from "next/link";
import { Badge, BadgeProps } from "../badges";
import { Typewriter } from "../typing";
import { Button } from "../buttons";

type RightSplit = {
  title?: string;
  text?: string;
  badges?: BadgeProps[];
  link?: string;
};

export function RightSplit(props: RightSplit) {
  const { title = "", badges = [], text = "", link } = props;
  return (
    <div className="flex flex-col gap-12 sticky top-[104px]">
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

        <div className="flex flex-col gap-2">
          <h1 className="text-6xl">{title}</h1>
          {title === "Danny Grimmig" && (
            <ul className="flex gap-4 decoration-1 underline underline-offset-2">
              <li>
                <Link
                  href="https://www.linkedin.com/in/danny-grimmig"
                  target="_blank"
                >
                  linkedin
                </Link>
              </li>
              <li>
                <Link href="mailto:dannygrimmig17@gmail.com?subject=&#128075;Hey Danny!">
                  email
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      <Typewriter text={text} />

      <div className="flex gap-2">
        <Link href={link ?? "/portfolio"} rel="norefferer noopener">
          <Button type="primary" text={link ? "Check it out!" : "portfolio"} />
        </Link>
      </div>
    </div>
  );
}
