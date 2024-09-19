"use client";
import * as React from "react";

import emptyimage from "../../public/images/elementor-placeholder-image.webp";
import Image from "next/image";
import { Badge } from "./Badges/Badge";
import { Category } from "../lib/definitions";
import Link from "next/link";
import { Typewriter } from "./typing";

export function PortfolioCard({ category }: { category: Category }) {
  const [isOpen, setIsOpen] = React.useState(false);

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
            className={`p-4 bg-slate-950 text-white mt-auto flex justify-center flex-1 border border-black ${
              !category.link && "opacity-30 pointer-events-none"
            }`}
            href={category.link ?? "#"}
            rel="norefferer noopener"
            target="_blank"
          >
            <button disabled={!category.link} className="text-center">
              {category.link ? "Check it out" : "Private"}
            </button>
          </Link>

          <button
            className="border border-black p-4 flex-2 flex items-center justify-center gap-2 hover:bg-slate-200"
            onClick={() => setIsOpen(true)}
          >
            View Details
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute w-full h-full bg-white opacity-90 flex flex-col p-4"
          onClick={() => setIsOpen(false)}
        >
          <Typewriter text={category.text ?? ""} />
        </div>
      )}
    </div>
  );
}
