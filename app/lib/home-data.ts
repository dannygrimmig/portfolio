type CATEGORY_TYPES = "main" | "colgate" | "toast";

export type Category = {
  key: CATEGORY_TYPES;
  title: string;
  subhead: string;
  image: string;
  text?: string;
};

const MAIN_CATEGORY: Category = {
  key: "main",
  title: "Danny Grimmig",
  subhead: "",
  image:
    "https://media.licdn.com/dms/image/D4E03AQEN2dChHQZJtQ/profile-displayphoto-shrink_800_800/0/1704128348334?e=1720051200&v=beta&t=Uil2CnH35ICr7VVQfY4jadyhtfkazt2UyQH0TUWECnI",
  text: "Hello! Welcome to a quick site where I threw together a little about me, including my experience and projects!",
};

const COLGATE_CATEGORY: Category = {
  key: "colgate",
  title: "Colgate University",
  subhead: "Computer Science & Economics",
  image: "https://images.shiksha.com/mediadata/images/1550145379phpIpgSMg.jpeg",
  text: "At Colgate University, I studied both Computer Science and Economics. Addtionally as a Computer Science Teaching assistant, I was able to foster a collaborative environment and learn from my peers.",
};

const TOAST_CATEGORY: Category = {
  key: "toast",
  title: "Toast, Inc",
  subhead: "Software Engineer",
  image:
    "https://d2w1ef2ao9g8r9.cloudfront.net/images/_sameSizeHero/20230921_toast_1243-Edit-600x400-9801ebf_2023-11-15-021358_vhci.png",
  text: "I joined the eCommerce Engineering team as an Engineering Intern, before progressing to a full-time Frontend Software Engineer postiion. I had the exciting opportunity to spearhead customer facing initiatives, including product education pages, component librarys, and scaffolding new eCommerce flows.",
};

export const CATEGORY_MAP: Record<CATEGORY_TYPES, Category> = {
  main: MAIN_CATEGORY,
  colgate: COLGATE_CATEGORY,
  toast: TOAST_CATEGORY,
};
