import Link from "next/link";
import { BadgeProps } from "../Badges/Badge";
import { Typewriter } from "../typing";
import { Button } from "../Button";
import { Socials } from "../Socials";
import { BadgesContainer } from "../Badges/BadgesContainer";

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
        <BadgesContainer
          badges={badges}
          className="flex gap-2 justify-end flex-wrap"
        />

        <div className="flex flex-col gap-2">
          <h1 className="text-6xl">{title}</h1>
          {title === "Danny Grimmig" && <Socials />}
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
