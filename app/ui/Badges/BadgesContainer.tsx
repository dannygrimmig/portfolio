import * as React from "react";
import { Badge, BadgeProps } from "./Badge";

type BadgesContainerProps = {
  className?: string;
  badges: BadgeProps[];
};

export function BadgesContainer(props: BadgesContainerProps) {
  const { className = "flex gap-2 justify-end flex-wrap", badges } = props;

  return (
    <ul className={className}>
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
  );
}
