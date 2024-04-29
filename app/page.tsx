"use client";

import * as React from "react";
import { CATEGORYS, CATEGORY_MAP, Category } from "./lib/home-data";
import { CategoryButton } from "./ui/buttons";
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
          category={currentCategory}
          onCategoryChange={(category) => setCurrentCategory(category)}
        />
      }
      right={
        <RightSplit
          title="Danny Grimmig"
          text={currentCategory?.text || ""}
          badges={[
            {
              text: "Frontend Engineer",
              color: "bg-sky-200",
            },
          ]}
        />
      }
    />
  );
}

type LeftProps = {
  category: Category;
  onCategoryChange: (category: Category) => void;
};

function Left(props: LeftProps) {
  const { category, onCategoryChange } = props;
  return (
    <div className="w-full h-full sm:p-12 flex flex-col-reverse pb-4 md:grid md:grid-cols-10 gap-4">
      <div className="md:col-span-2 lg:col-span-4 flex flex-wrap justify-end gap-4 h-max">
        {CATEGORYS.map((category) => (
          <CategoryButton
            key={category.key}
            image={category.image}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>

      <div className="md:col-span-8 lg:col-span-6 p-2 sm:p-4">
        <div className="mb-4 sm:p-4">
          <img src={category?.image} className="rounded-lg object-fit h-full" />
        </div>

        <div>
          <h3 className="font-bold">{category?.company}</h3>
          <p>{category?.subhead}</p>
          {category?.positions?.map((position, i) => (
            <li key={i}>{position}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
