import { BADGE_MAP } from "../ui/Badges/Badge";
import profileimage from "../../public/images/home/profile.png";
import colgateimage from "../../public/images/home/colgate-image.jpeg";
import toastimage from "../../public/images/home/toast-image.png";
import nextimage from "../../public/images/home/next_insurance.png";
import whoopimage from "../../public/images/home/whoop-image.png";
import { Category } from "./definitions";

const MAIN_CATEGORY: Category = {
  key: "main",
  title: "Danny Grimmig",
  subhead: "",
  image: profileimage,
  text: "Welcome to my website 👋 - click around to get a view into my experiences and favorite projects!",
  badges: [BADGE_MAP.software],
  className: "md:col-span-7",
};

const COLGATE_CATEGORY: Category = {
  key: "colgate",
  title: "Colgate University",
  subhead: "Computer Science & Economics",
  image: colgateimage,
  text: "I studied Computer Science and Economics. Additionally, I worked as a teaching assistant in the computer science department.",
  badges: [BADGE_MAP.cs, BADGE_MAP.econ, BADGE_MAP.ta],
  className: "md:col-span-5",
};

const TOAST_CATEGORY: Category = {
  key: "toast",
  title: "Toast, Inc",
  subhead: "Software Engineer",
  image: toastimage,
  text: "Grew from an engineering intern to a full time Software Engineer on the eCommerce Engineering team. Developed solutions with a focus on improving customer experience, product education, and developer efficiency.",
  badges: [BADGE_MAP.qa, BADGE_MAP.fe],
  className: "md:col-span-4",
};

const NEXT_CATEGORY: Category = {
  key: "next",
  title: "NEXT Insurance",
  subhead: "Software Engineer",
  image: nextimage,
  text: "Frontend Software Engineer at NEXT, my experience with an emphasis on web accessibilty. Refactored pages, components, and added e2e tests adhering to WCAG standards.",
  badges: [BADGE_MAP.fe],
  className: "md:col-span-4",
};

const WHOOP_CATEGORY: Category = {
  key: "whoop",
  title: "WHOOP",
  subhead: "Software Engineer",
  image: whoopimage,
  text: "Joining WHOOP as a Software Engineer!",
  badges: [BADGE_MAP.be],
  className: "md:col-span-4",
};

export const HOME_CATEGORIES = [
  MAIN_CATEGORY,
  COLGATE_CATEGORY,
  TOAST_CATEGORY,
  NEXT_CATEGORY,
  WHOOP_CATEGORY,
];
