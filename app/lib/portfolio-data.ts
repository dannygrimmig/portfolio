import { BADGE_MAP, BadgeProps } from "../ui/badges";
import feedimage from "../../public/images/portfolio/feed-app.png";
import eduimage from "../../public/images/portfolio/edu-page.png";
import prospectimage from "../../public/images/portfolio/prospect-migration.png";
import movieimage from "../../public/images/portfolio/movie-graph.png";
import storybook from "../../public/images/portfolio/storybook_components.png";
import financeimage from "../../public/images/portfolio/financial-portfolio.png";
import workoutimage from "../../public/images/portfolio/workout-app.png";
import golfrangefinderimage from "../../public/images/portfolio/golf-range-finder.jpg";
import { Category } from "./definitions";

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
  image: storybook,
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
const WORKOUT_APP: Category = {
  key: "workout",
  title: "The Logs",
  subhead: "Full Stack Workout Tracker",
  image: workoutimage,
  text: "Workout tracking application with the ablity to log exercises, see history, and track trends with analitics. Mobile first design and a comprehensive design to take on the go.",
  badges: [
    BADGE_MAP.react,
    BADGE_MAP.ts,
    BADGE_MAP.next,
    BADGE_MAP.postgresql,
    BADGE_MAP.auth,
  ],
  imageBadge: BADGE_MAP.personal,
  link: "https://workout-app-one-self.vercel.app/",
};

const GOLF_RANGE_FINDER: Category = {
  key: "golfrangefinder",
  title: "Green Retriever",
  subhead: "Golf Range Finder",
  image: golfrangefinderimage,
  text: "Mobile Application, soon availiable in iOS App Store, that gives players accurate distances to each green, with a minimalistic UI that keeps their focus on the game",
  badges: [BADGE_MAP.reactnative, BADGE_MAP.ios, BADGE_MAP.expo],
  imageBadge: BADGE_MAP.personal,
};

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

export const PORTFOLIO_PROJECTS = [
  PRODUCT_EDU,
  COMPONENT_LIB,
  PROSPECT_MIGRATION,
  WORKOUT_APP,
  GOLF_RANGE_FINDER,
  FEED_DEVELOPMENT,
  FINANCIAL_PORTFOLIO,
  MOVIE_GRAPH,
];
