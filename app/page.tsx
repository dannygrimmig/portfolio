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
    <div className="w-full h-full p-16 flex flex-col-reverse md:grid md:grid-cols-10 gap-4">
      <div className="col-span-2 flex md:flex-col items-end gap-4">
        {CATEGORYS.map((category) => (
          <CategoryButton
            key={category.key}
            image={category.image}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>

      <div className="col-span-8 bg-slate-100 p-2 sm:p-4 md:p-8 rounded-lg h-[500px] flex flex-col ">
        <div className="flex-1 h-5/6 self-center place-self-center">
          <img src={category?.image} className="rounded-lg object-fit h-full" />
        </div>

        <div className="flex-1 content-end font-mono">
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
