import { BADGE_MAP } from "../ui/badges";
import { RightSplit, SplitPage } from "../ui/splitpage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <SplitPage
      left={<div className="p-16">Coming soon...</div>}
      right={
        <RightSplit
          title="My Portfolio"
          text="Click through the images to explore some of my favorite projects. It is a collection of both personal projects, as well as professional projects."
          badges={[
            BADGE_MAP.react,
            BADGE_MAP.ts,
            BADGE_MAP.html,
            BADGE_MAP.css,
          ]}
        />
      }
    />
  );
}
