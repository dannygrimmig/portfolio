"use client";

import { useState } from "react";
import { Category } from "../lib/definitions";
import { PORTFOLIO_PROJECTS } from "../lib/portfolio-data";
import { PortfolioCard } from "../ui/PortfolioCard";
import { Badge, BADGE_MAP, BadgeProps } from "../ui/Badges/Badge";

export default function Page() {
  const categories = PORTFOLIO_PROJECTS;
  const company_filters = [BADGE_MAP.personal, BADGE_MAP.toast, BADGE_MAP.NEXT];

  // Filter states
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  // Filtered categories based on selected badge or imageBadge
  const filteredCategories = categories.filter((category) => {
    const badgeMatch = selectedBadge
      ? category.imageBadge?.text === selectedBadge
      : true;

    return badgeMatch;
  });

  return (
    <main className="p-4">
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
          <PortfolioCard category={category} key={category.key} />
        ))}
      </div>
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
