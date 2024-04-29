export type Category = {
  key: string;
  image: string;
  text: string;
  company: string;
  subhead: string;
  positions?: string[];
};

type CATEGORY_TYPES = "main" | "colgate" | "toast";

const MAIN_CATEGORY: Category = {
  key: "main",
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocJNMLmcmCb85fXFYSqaz75U4uz2-JloN5xNO4-AtrPVu4FWvk_c5: Categoryg=s576-c-no",
  text: "Hi! Here is a quick site about me. Threw together a bit about my background, including my education at Colgate and professional experience as a Software Developer at Toast",
  company: "Danny Grimmig",
  subhead: "Click through to learn more!",
};

const COLGATE_CATEGORY: Category = {
  key: "colgate",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Colgate_University_Seal_2018.svg/1200px-Colgate_University_Seal_2018.svg.png",
  text: "I studied Computer Science and Economics at Colgate University. Should put some more information in here too not sure what else to say for now",
  company: "Colgate University",
  subhead: "Computer Science and Economics",
  positions: ["CS Teaching Assistant"],
};

const TOAST_CATEGORY: Category = {
  key: "toast",
  image: "https://asset.brandfetch.io/idJCbAfjvP/id3Te8U8w0.png",
  text: "During my tenure at Toast, I transitioned from an engineering intern to a full-time software engineer, spearheading projects including product education pages, accesible component libraries, and designing and building the prospective e-commerce flow.",
  company: "Toast, Inc.",
  subhead: "eCommerce Engineering Team",
  positions: ["Engineering Intern", "Frontend Software Engineer"],
};

export const CATEGORYS: Category[] = [
  MAIN_CATEGORY,
  COLGATE_CATEGORY,
  TOAST_CATEGORY,
];

export const CATEGORY_MAP: Record<CATEGORY_TYPES, Category> = {
  main: MAIN_CATEGORY,
  colgate: COLGATE_CATEGORY,
  toast: TOAST_CATEGORY,
};
