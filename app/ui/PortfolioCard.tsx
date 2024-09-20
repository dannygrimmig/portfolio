"use client";
import * as React from "react";

import emptyimage from "../../public/images/elementor-placeholder-image.webp";
import Image from "next/image";
import { Badge } from "./Badges/Badge";
import { Category } from "../lib/definitions";
import Link from "next/link";
import { Button } from "./Button/Button";

export function PortfolioCard({
  category,
  onDetailClick,
}: {
  category: Category;
  onDetailClick: () => void;
}) {
  return (
    <div className="border border-black flex flex-col relative">
      <figure className="relative h-60 border-b border-black">
        <Image
          src={category.image ?? emptyimage}
          alt=""
          fill
          className="object-cover"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
          placeholder="blur"
        />
      </figure>

      {!!category.imageBadge && (
        <Badge
          text={category.imageBadge.text}
          color={category.imageBadge.color}
          className={`${category.imageBadge.className} absolute top-2 right-2 text-xs`}
        />
      )}

      <div className="flex-1 p-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{category.title}</h2>

        <div className="flex gap-1 flex-wrap">
          {category.badges.map((badge) => (
            <p key={badge.text} className={`${badge.color} p-1`}>
              {badge.text}
            </p>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <Link
            className={`flex-1 ${!category.link && "pointer-events-none"}`}
            href={category.link ?? "#"}
            rel="norefferer noopener"
            target="_blank"
          >
            <Button
              text={category.link ? "Check it out" : "Private"}
              type="primary"
              className={`w-full ${!category.link && "opacity-30"}`}
              disabled={!category.link}
              onClick={() => {}}
            />
          </Link>

          <Button
            text="View Details"
            type="secondary"
            onClick={onDetailClick}
          />
        </div>
      </div>
    </div>
  );
}
