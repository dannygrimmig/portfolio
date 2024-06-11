import { BADGE_MAP } from "../ui/badges";
import profileimage from "../../public/profile.png";
import colgateimage from "../../public/colgate-image.jpeg";
import toastimage from "../../public/toast-image.png";
import nextimage from "../../public/next_insurance.png";
import { Category } from "./definitions";

const MAIN_CATEGORY: Category = {
  key: "main",
  title: "Danny Grimmig",
  subhead: "",
  image: profileimage,
  text: "Hello! Welcome to my website - click around to get a view into some of my experiences and favorite projects!",
  badges: [BADGE_MAP.software],
};

const COLGATE_CATEGORY: Category = {
  key: "colgate",
  title: "Colgate University",
  subhead: "Computer Science & Economics",
  image: colgateimage,
  text: "At Colgate University, I studied both Computer Science and Economics. Addtionally as a Computer Science Teaching assistant, I was able to foster a collaborative environment and learn from my peers.",
  badges: [BADGE_MAP.cs, BADGE_MAP.econ, BADGE_MAP.ta],
};

const TOAST_CATEGORY: Category = {
  key: "toast",
  title: "Toast, Inc",
  subhead: "Software Engineer",
  image: toastimage,
  text: "I joined the eCommerce Engineering team as an Engineering Intern, before progressing to a full-time Frontend Software Engineer postiion. I had the exciting opportunity to spearhead customer facing initiatives, including product education pages, component librarys, and scaffolding new eCommerce flows.",
  badges: [BADGE_MAP.qa, BADGE_MAP.software],
};

const NEXT_CATEGORY: Category = {
  key: "next",
  title: "NEXT Insurance",
  subhead: "Frontend Software Engineer",
  image: nextimage,
  text: "Joining NEXT Insurance as a Frontend Software Engineer!",
  badges: [BADGE_MAP.software, BADGE_MAP.fe],
};

export const HOME_CATEGORIES = [
  MAIN_CATEGORY,
  COLGATE_CATEGORY,
  TOAST_CATEGORY,
  NEXT_CATEGORY,
];
