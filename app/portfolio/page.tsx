"use client";

import { useState } from "react";
import { Category } from "../lib/definitions";
import { PORTFOLIO_PROJECTS } from "../lib/portfolio-data";
import { PortfolioCard } from "../ui/PortfolioCard";
import { Badge, BADGE_MAP, BadgeProps } from "../ui/Badges/Badge";
import Image from "next/image";
import emptyimage from "../../public/images/elementor-placeholder-image.webp";
import Link from "next/link";

export default function Page() {
  const categories = PORTFOLIO_PROJECTS;
  const company_filters = [
    BADGE_MAP.personal,
    BADGE_MAP.colgate,
    BADGE_MAP.toast,
    BADGE_MAP.NEXT,
  ];

  // Filter states
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const [isSideOpen, setIsSideOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filtered categories based on selected badge or imageBadge
  const filteredCategories = categories.filter((category) => {
    const badgeMatch = selectedBadge
      ? category.imageBadge?.text === selectedBadge
      : true;

    return badgeMatch;
  });

  return (
    <main className="p-4 relative">
      <div className="mb-4 flex gap-4">
        {company_filters.map((badge) => (
          <FilterButton
            key={badge.text}
            badge={badge}
            isActive={selectedBadge === badge.text}
            onClick={() =>
              setSelectedBadge(selectedBadge === badge.text ? null : badge.text)
            }
          />
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category: Category) => (
          <PortfolioCard
            category={category}
            key={category.key}
            onDetailClick={() => {
              setSelectedCategory(category);
              setIsSideOpen(true);
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div
        className={`fixed z-20 inset-0 bg-black transition-opacity duration-300 ${
          isSideOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSideOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-20 top-0 right-0 h-full w-full sm:w-1/2 bg-white transition-transform duration-300 border-l border-black ${
          isSideOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col justify-between gap-4 h-full">
          {/* HEADER */}
          <div className="flex flex-col gap-2 pb-4 border-b border-black">
            <h1 className="text-4xl font-bold">{selectedCategory.title}</h1>

            {/* BADGES */}
            <div className="flex gap-2 flex-wrap">
              {selectedCategory.badges.map((badge) => (
                <p key={badge.text} className={`${badge.color} p-2`}>
                  {badge.text}
                </p>
              ))}
            </div>
          </div>

          {/* TEXT / IMAGE */}

          <figure className="relative h-60 mb-4">
            <Image
              src={selectedCategory.image ?? emptyimage}
              alt=""
              fill
              className="object-cover"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              placeholder="blur"
            />

            {!!selectedCategory.imageBadge && (
              <Badge
                text={selectedCategory.imageBadge.text}
                color={selectedCategory.imageBadge.color}
                className={`${selectedCategory.imageBadge.className} absolute top-2 right-2 text-xs`}
              />
            )}
          </figure>

          <p>{selectedCategory.text}</p>

          {/* BUTTONS */}
          <div className="flex gap-4 pt-4 border-t border-black">
            <Link
              className={`p-4 bg-slate-950 text-white mt-auto flex justify-center flex-1 border border-black ${
                !selectedCategory.link && "opacity-30 pointer-events-none"
              }`}
              href={selectedCategory.link ?? "#"}
              rel="norefferer noopener"
              target="_blank"
            >
              <button disabled={!selectedCategory.link} className="text-center">
                {selectedCategory.link ? "Check it out" : "Private"}
              </button>
            </Link>

            <button
              className="border border-black p-4 flex-2 flex items-center justify-center gap-2 hover:bg-slate-200"
              onClick={() => setIsSideOpen(false)}
            >
              Close Details
            </button>
          </div>
        </div>
      </aside>
    </main>
  );
}

// Filter Button Component
function FilterButton({
  badge,
  isActive,
  onClick,
}: {
  badge: BadgeProps;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`p-2 border border-black text-xs  ${
        isActive ? badge.color : "bg-slate-100 hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      {badge.text}
    </button>
  );
}
