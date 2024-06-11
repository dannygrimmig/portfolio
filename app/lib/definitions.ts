import { StaticImageData } from "next/image";
import { BadgeProps } from "../ui/badges";

export type Category = {
  key: string;
  title: string;
  subhead: string;
  image?: StaticImageData;
  text?: string;
  badges: BadgeProps[];
  imageBadge?: BadgeProps;
  className?: string;
  link?: string;
};
