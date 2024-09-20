"use client";
import * as React from "react";
import Link from "next/link";
import { Typewriter } from "../typing";
import { Button } from "../Button";
import { Socials } from "../Socials";
import { BadgesContainer } from "../Badges/BadgesContainer";
import { Category } from "@/app/lib/definitions";
import useIsMobile from "@/app/lib/hooks/useIsMobile";

type RightSplit = {
  activeCategory?: Category;
  categories: Category[];
};

export function RightSplit(props: RightSplit) {
  // imported
  const { activeCategory, categories } = props;

  // managed
  const categoryRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  // Function to set the ref for each category
  React.useEffect(() => {
    if (activeCategory) {
      const activeIndex = categories.findIndex(
        (category) => category.key === activeCategory.key
      );
      const activeElement = categoryRefs.current[activeIndex];
      if (activeElement && !isMobile) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [activeCategory, categories, isMobile]);

  return (
    <div className="bg-sky-100 sm:h-[calc(100vh-74px)] overflow-y-scroll hide-scrollbar">
      {props.categories.map((category, index) => (
        <div
          key={category.key}
          ref={(el) => {
            categoryRefs.current[index] = el;
          }}
          className="snap-start min-h-full p-4 border-[.5px] border-black"
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <BadgesContainer
                badges={category.badges}
                className="flex gap-2 justify-end flex-wrap"
              />

              <div className="flex flex-col gap-2">
                <h1 className="text-6xl">{category.title}</h1>
                {category.title === "Danny Grimmig" && <Socials />}
              </div>
            </div>

            <Typewriter text={category.text ?? ""} />

            {category?.key === "main" && (
              <div className="flex gap-2">
                <Link
                  href={category.link ?? "/portfolio"}
                  rel="norefferer noopener"
                >
                  <Button
                    type="primary"
                    text={category.link ? "Check it out!" : "portfolio"}
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
