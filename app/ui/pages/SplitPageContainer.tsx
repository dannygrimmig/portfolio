"use client";

import * as React from "react";
import { BADGE_MAP } from "../badges";
import { SplitPageLayout } from "./SplitPageLayout";
import { CategoryGrid } from "../categories";
import { Category } from "../../lib/definitions";
import { RightSplit } from "./RightSplit";

type SplitPageContainerProps = {
  initialActive?: Category;
  categories: Category[];
  gridClassName?: string;
  cardType?: "primary" | "secondary";
};

export function SplitPageContainer(props: SplitPageContainerProps) {
  // imported
  const {
    initialActive = undefined,
    categories,
    gridClassName,
    cardType,
  } = props;

  // managed
  const [activeProject, setActiveProject] = React.useState<
    Category | undefined
  >(initialActive);

  return (
    <SplitPageLayout
      left={
        <CategoryGrid
          activeCategory={activeProject}
          categories={categories}
          onCategoryChange={(project) => setActiveProject(project)}
          className={gridClassName}
          cardType={cardType}
        />
      }
      right={
        <RightSplit
          title={activeProject?.title ?? "My Portfolio"}
          text={
            activeProject?.text ??
            "Click through the images to explore some of my favorite projects. It is a collection of both personal projects, as well as professional projects."
          }
          badges={activeProject?.badges ?? [BADGE_MAP.software]}
          link={activeProject?.link}
        />
      }
    />
  );
}
