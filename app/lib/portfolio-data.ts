import { BADGE_MAP, BadgeProps } from "../ui/badges";
import feedimage from "../../public/feed-app.png";
import eduimage from "../../public/edu-page.png";
import prospectimage from "../../public/prospect-migration.png";
import movieimage from "../../public/movie-graph.png";
import componentimage from "../../public/component-image.webp";
import financeimage from "../../public/financial-portfolio.png";
import emptyimage from "../../public/elementor-placeholder-image.webp";
import { Category } from "./categories";

export type PORTFOLIO_PROJECT =
  | "edu"
  | "component"
  | "prospect"
  | "feed"
  | "finance"
  | "movie";

// TOAST
const PRODUCT_EDU: Category = {
  key: "edu",
  title: "Product Education Pages",
  subhead: "Enhace User Retention",
  image: eduimage,
  text: "Created product education pages for Toast's Prospect eCommerce Starter Kits. Given a product, pages will render the corresponding Kit's included items, details, and necessary specs. Improved customer retention in the initial stage of the flow.",
  badges: [BADGE_MAP.react, BADGE_MAP.ts, BADGE_MAP.css, BADGE_MAP.jest],
  imageBadge: BADGE_MAP.toast,
  link: "https://pos.toasttab.com/shop/starter-kits/countertop-starter-kit/details",
};

const COMPONENT_LIB: Category = {
  key: "component",
  title: "eCommerce Component Library",
  subhead: "Improved Developer Efficiency",
  image: componentimage,
  text: "Turned Figma files for the internal marketing design system into a component library with 25+ net new component. Components were created with a user centric and accessibility first mindset, comforming to WCAG 2.0 guidlines. Improved developer efficiency with DRY code.",
  badges: [
    BADGE_MAP.react,
    BADGE_MAP.ts,
    BADGE_MAP.css,
    BADGE_MAP.jest,
    BADGE_MAP.storybook,
    BADGE_MAP.wcag,
  ],
  imageBadge: BADGE_MAP.toast,
};

const PROSPECT_MIGRATION: Category = {
  key: "prospect",
  title: "Prospect eCommerce Flow",
  subhead: "Improved User Experience",
  image: prospectimage,
  text: "Migrated the existing Prospect eCommerce Flow, the flow for new Toast customers, into a single spa React Application. The team scaffolded the design from scratch, including new landing and checkout pages, and migrating out of the existing twig templating language.",
  badges: [BADGE_MAP.fe, BADGE_MAP.aws, BADGE_MAP.jest, BADGE_MAP.api],
  imageBadge: BADGE_MAP.toast,
  link: "https://pos.toasttab.com/shop/starter-kits",
};

// PERSONAL
const FEED_DEVELOPMENT: Category = {
  key: "feed",
  title: "Feed Application",
  subhead: "Full Stack React App",
  image: feedimage,
  text: "A full stack react application that allows users to create, read, and share recipes with one another. Bridges the gap between finding recipes, and sharing your own. React, Firebase, Firebase Realtime Database, Firebase OAuth, Tailwind CSS",
  badges: [
    BADGE_MAP.react,
    BADGE_MAP.js,
    BADGE_MAP.firebase,
    BADGE_MAP.nosql,
    BADGE_MAP.auth,
    BADGE_MAP.context,
  ],
  imageBadge: BADGE_MAP.personal,
  link: "https://feed-development.web.app/",
};

const FINANCIAL_PORTFOLIO: Category = {
  key: "finance",
  title: "Financial Portfolio",
  subhead: "",
  image: financeimage,
  text: "Full stack react application to keep track of personal finances, including long term and monthly finances. Utilize local storage to retain data, and MUI React Charts to create graph components.",
  badges: [
    BADGE_MAP.react,
    BADGE_MAP.js,
    BADGE_MAP.css,
    BADGE_MAP.localstorage,
    BADGE_MAP.context,
  ],
  imageBadge: BADGE_MAP.personal,
  link: "https://github.com/dannygrimmig",
};

const MOVIE_GRAPH: Category = {
  key: "movie",
  title: "Movie Graph",
  subhead: "Data Visualization",
  image: movieimage,
  text: "Demonstrate knowledge of datastructures and algorithms in combination with datavisualiation to display movie correlation by actor connections. Perform KMeans on IMDB data set, and a Force Direction algorithm upon it.",
  badges: [BADGE_MAP.html, BADGE_MAP.css, BADGE_MAP.js],
  imageBadge: BADGE_MAP.colgate,
  link: "https://dannygrimmig.github.io/DataViz-MovieGraph/",
};

export const PORTFOLIO_MAP: Record<PORTFOLIO_PROJECT, Category> = {
  edu: PRODUCT_EDU,
  component: COMPONENT_LIB,
  prospect: PROSPECT_MIGRATION,
  feed: FEED_DEVELOPMENT,
  finance: FINANCIAL_PORTFOLIO,
  movie: MOVIE_GRAPH,
};

export const PORTFOLIO_PROJECTS = [
  PRODUCT_EDU,
  COMPONENT_LIB,
  PROSPECT_MIGRATION,
  FEED_DEVELOPMENT,
  FINANCIAL_PORTFOLIO,
  MOVIE_GRAPH,
];