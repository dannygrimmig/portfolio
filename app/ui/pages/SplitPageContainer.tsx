"use client";

import * as React from "react";
import { SplitPageLayout } from "./SplitPageLayout";
import { CategoryGrid } from "../Categories/CategoryCardGrid";
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
        <RightSplit activeCategory={activeProject} categories={categories} />
      }
    />
  );
}
