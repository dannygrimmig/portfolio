import * as React from "react";
import { HOME_CATEGORIES } from "./lib/home-data";
import { SplitPageContainer } from "./ui/pages/SplitPageContainer";

export default function Home() {
  return (
    <SplitPageContainer
      initialActive={HOME_CATEGORIES[0]}
      categories={HOME_CATEGORIES}
      gridClassName="grid grid-cols-1 grid-rows-3 md:grid-cols-12 md:grid-rows-2 p-4 gap-4 text-white"
    />
  );
}
