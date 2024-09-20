export type BadgeProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Badge(props: BadgeProps) {
  const { text, color = "bg-sky-200", className = "" } = props;

  return (
    <p
      className={`px-4 py-2 rounded-full border border-black w-max ${color} ${className}`}
    >
      {text}
    </p>
  );
}
const TOAST_BADGE: BadgeProps = {
  text: "Toast",
  color: "bg-orange-500",
};

const SOFTWARE_BADGE: BadgeProps = {
  text: "Software Engineer",
  color: "bg-sky-300",
};

const FRONTEND_BADGE: BadgeProps = {
  text: "Frontend Engineer",
  color: "bg-sky-600",
};

const BACKEND_BADGE: BadgeProps = {
  text: "Backend Engineer",
  color: "bg-slate-200",
};

const QA_BADGE: BadgeProps = {
  text: "QA Engineer Intern",
  color: "bg-orange-400",
};

const CS_BADGE: BadgeProps = {
  text: "CS Major",
  color: "bg-red-500",
};

const ECON_BADGE: BadgeProps = {
  text: "Econ Minor",
  color: "bg-green-300",
};

const TA_BADGE: BadgeProps = {
  text: "Teaching Assistant",
  color: "bg-sky-400",
};

const REACT_BADGE: BadgeProps = {
  text: "React",
  color: "bg-sky-300",
};

const TS_BADGE: BadgeProps = {
  text: "Typescript",
  color: "bg-sky-500",
};

const HTML_BADGE: BadgeProps = {
  text: "HTML",
  color: "bg-sky-600",
};

const CSS_BADGE: BadgeProps = {
  text: "Tailwind CSS",
  color: "bg-sky-700",
};

const JEST_BADGE: BadgeProps = {
  text: "Jest Testing",
  color: "bg-yellow-300",
};

const WCAG_BADGE: BadgeProps = {
  text: "WCAG Accessibility",
  color: "bg-green-300",
};

const STORYBOOK_BADGE: BadgeProps = {
  text: "Storybook.js",
  color: "bg-red-300",
};

const JS_BADGE: BadgeProps = {
  text: "Javascript",
  color: "bg-green-600",
};

const AWS_BADGE: BadgeProps = {
  text: "AWS",
  color: "bg-slate-200",
};

const API_BADGE: BadgeProps = {
  text: "3rd Party API's",
  color: "bg-green-400",
};

const COLGATE_BADGE: BadgeProps = {
  text: "Colgate",
  color: "bg-red-400",
};

const PERSONAL_BADGE: BadgeProps = {
  text: "Personal Project",
  color: "bg-sky-200",
};

const FIREBASE_BADGE: BadgeProps = {
  text: "Firebase",
  color: "bg-red-200",
};

const NOSQL_BADGE: BadgeProps = {
  text: "NoSQL Database",
  color: "bg-pink-600",
};

const AUTH_BADGE: BadgeProps = {
  text: "OAuth",
  color: "bg-purple-400",
};

const CONTEXT_API_BADGE: BadgeProps = {
  text: "React Context API",
  color: "bg-slate-300",
};

const LOCAL_STORAGE_BADGE: BadgeProps = {
  text: "Local Storage",
  color: "bg-orange-400",
};

const NEXT_BADGE: BadgeProps = {
  text: "Next JS",
  color: "bg-slate-200",
};

const POSTGRESQL_BADGE: BadgeProps = {
  text: "PostgreSQL",
  color: "bg-orange-300",
};

const REACT_NATIVE_BADGE: BadgeProps = {
  text: "React Native",
  color: "bg-green-300",
};

const IOS_BADGE: BadgeProps = {
  text: "iOS",
  color: "bg-blue-300",
};

const EXPO_CLI_BADGE: BadgeProps = {
  text: "Expo CLI",
  color: "bg-slate-300",
};

const NEXT_INSURANCE_BADGE: BadgeProps = {
  text: "Next Insurance",
  color: "bg-blue-500",
};

const WHOOP_BADGE: BadgeProps = {
  text: "WHOOP",
  color: "bg-slate-400",
};

const ANGULAR_BADGE: BadgeProps = {
  text: "Angular",
  color: "bg-red-400",
};

const CYPRESS_BADGE: BadgeProps = {
  text: "Cypress e2e",
  color: "bg-blue-400",
};

type BADGES =
  | "toast"
  | "software"
  | "fe"
  | "be"
  | "qa"
  | "cs"
  | "econ"
  | "ta"
  | "react"
  | "ts"
  | "html"
  | "css"
  | "js"
  | "storybook"
  | "wcag"
  | "jest"
  | "aws"
  | "api"
  | "colgate"
  | "personal"
  | "firebase"
  | "nosql"
  | "auth"
  | "localstorage"
  | "context"
  | "next"
  | "postgresql"
  | "reactnative"
  | "ios"
  | "expo"
  | "NEXT"
  | "WHOOP"
  | "angular"
  | "cypress";

export const BADGE_MAP: Record<BADGES, BadgeProps> = {
  toast: TOAST_BADGE,
  fe: FRONTEND_BADGE,
  be: BACKEND_BADGE,
  qa: QA_BADGE,
  cs: CS_BADGE,
  econ: ECON_BADGE,
  ta: TA_BADGE,
  react: REACT_BADGE,
  ts: TS_BADGE,
  html: HTML_BADGE,
  css: CSS_BADGE,
  js: JS_BADGE,
  storybook: STORYBOOK_BADGE,
  wcag: WCAG_BADGE,
  jest: JEST_BADGE,
  aws: AWS_BADGE,
  api: API_BADGE,
  colgate: COLGATE_BADGE,
  personal: PERSONAL_BADGE,
  software: SOFTWARE_BADGE,
  firebase: FIREBASE_BADGE,
  nosql: NOSQL_BADGE,
  auth: AUTH_BADGE,
  localstorage: LOCAL_STORAGE_BADGE,
  context: CONTEXT_API_BADGE,
  next: NEXT_BADGE,
  postgresql: POSTGRESQL_BADGE,
  reactnative: REACT_NATIVE_BADGE,
  ios: IOS_BADGE,
  expo: EXPO_CLI_BADGE,
  NEXT: NEXT_INSURANCE_BADGE,
  WHOOP: WHOOP_BADGE,
  angular: ANGULAR_BADGE,
  cypress: CYPRESS_BADGE,
};
