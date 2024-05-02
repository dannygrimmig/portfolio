import { StaticImageData } from "next/image";
import { HOME_CATEGORY } from "./home-data";
import { PORTFOLIO_PROJECT } from "./portfolio-data";
import { BadgeProps } from "../ui/badges";

export type Category = {
  key: PORTFOLIO_PROJECT | HOME_CATEGORY;
  title: string;
  subhead: string;
  image?: StaticImageData;
  text?: string;
  badges: BadgeProps[];
  imageBadge?: BadgeProps;
  className?: string;
  link?: string;
};
