import * as React from "react";
import { HOME_CATEGORIES, HOME_CATEGORIES_MAP } from "./lib/home-data";
import { SplitPageContainer } from "./ui/portfolio";

export default function Home() {
  return (
    <SplitPageContainer
      initialActive={HOME_CATEGORIES_MAP.main}
      categories={HOME_CATEGORIES}
      gridClassName="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 p-4 gap-4 text-white"
    />
  );
}
