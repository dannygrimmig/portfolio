"use client";

import * as React from "react";
import { CATEGORY_MAP, Category } from "./lib/home-data";
import { RightSplit, SplitPage } from "./ui/splitpage";

export default function Home() {
  // managed
  const [currentCategory, setCurrentCategory] = React.useState(
    CATEGORY_MAP.main
  );

  return (
    <SplitPage
      left={
        <Left
          activeCategory={currentCategory}
          onCategoryChange={(category) => setCurrentCategory(category)}
        />
      }
      right={
        <RightSplit
          title="Danny Grimmig"
          text={currentCategory?.text || ""}
          badges={currentCategory.badges}
        />
      }
    />
  );
}

type LeftProps = {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
};

function Left(props: LeftProps) {
  const { activeCategory, onCategoryChange } = props;
  return (
    <div className="w-full min-h-[calc(100vh-74px)] grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 p-4 gap-4">
      <Container
        isActive={activeCategory.key === "main"}
        className="col-span-1 md:row-span-2"
        onClick={() => onCategoryChange(CATEGORY_MAP.main)}
        category={CATEGORY_MAP.main}
      />
      <Container
        isActive={activeCategory.key === "colgate"}
        onClick={() => onCategoryChange(CATEGORY_MAP.colgate)}
        category={CATEGORY_MAP.colgate}
      />
      <Container
        isActive={activeCategory.key === "toast"}
        onClick={() => onCategoryChange(CATEGORY_MAP.toast)}
        category={CATEGORY_MAP.toast}
      />
    </div>
  );
}

type ContainerProps = {
  isActive: boolean;
  className?: string;
  onClick: () => void;
  category?: Category;
};

function Container(props: ContainerProps) {
  const { isActive, className = "", onClick, category } = props;

  return (
    <button
      onClick={onClick}
      className={`relative text-left h-[calc(100vh-100px)] sm:h-auto ${className} ${
        isActive && "border-4 border-black rounded"
      }`}
    >
      <img src={category?.image} alt="" className="object-cover h-full" />

      {!!category && (
        <div className="absolute bottom-2 left-2 text-white">
          <h2 className="text-xl font-bold">{category.title}</h2>
          <p>{category.subhead}</p>
        </div>
      )}
    </button>
  );
}
