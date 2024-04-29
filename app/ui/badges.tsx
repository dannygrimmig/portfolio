export type BadgeProps = {
  text: string;
  color?: string;
  className?: string;
};

export function Badge(props: BadgeProps) {
  const { text, color = "bg-sky-200", className = "" } = props;

  return (
    <p className={`px-4 py-2 rounded-full w-max ${color} ${className}`}>
      {text}
    </p>
  );
}
const REACT_BADGE: BadgeProps = {
  text: "React",
  color: "bg-sky-200",
};

const TS_BADGE: BadgeProps = {
  text: "Typescript",
  color: "bg-sky-400",
};

const HTML_BADGE: BadgeProps = {
  text: "HTML",
  color: "bg-sky-200",
};

const CSS_BADGE: BadgeProps = {
  text: "Tailwind CSS",
  color: "bg-sky-400",
};

const JS_BADGE: BadgeProps = {
  text: "Javascript",
  color: "bg-sky-600",
};

type BADGES = "react" | "ts" | "html" | "css" | "js";

export const BADGE_MAP: Record<BADGES, BadgeProps> = {
  react: REACT_BADGE,
  ts: TS_BADGE,
  html: HTML_BADGE,
  css: CSS_BADGE,
  js: JS_BADGE,
};
