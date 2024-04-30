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

const FRONTEND_BADGE: BadgeProps = {
  text: "Frontend Engineer",
  color: "bg-sky-300",
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

const JS_BADGE: BadgeProps = {
  text: "Javascript",
  color: "bg-sky-600",
};

type BADGES =
  | "fe"
  | "qa"
  | "cs"
  | "econ"
  | "ta"
  | "react"
  | "ts"
  | "html"
  | "css"
  | "js";

export const BADGE_MAP: Record<BADGES, BadgeProps> = {
  fe: FRONTEND_BADGE,
  qa: QA_BADGE,
  cs: CS_BADGE,
  econ: ECON_BADGE,
  ta: TA_BADGE,
  react: REACT_BADGE,
  ts: TS_BADGE,
  html: HTML_BADGE,
  css: CSS_BADGE,
  js: JS_BADGE,
};
