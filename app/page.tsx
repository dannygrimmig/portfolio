"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CATEGORYS } from "./lib/home-data";

export default function Home() {
  // managed
  const [currentCategory, setCurrentCategory] = React.useState(
    CATEGORYS.find((category) => category.key === "main")
  );

  return (
    <main className="sm:grid grid-cols-5 min-h-[calc(100vh-74px)]">
      <div className="sm:col-span-3 border-r">
        <div className="w-full h-full p-16 flex flex-col-reverse md:grid md:grid-cols-10 gap-4">
          <div className="col-span-2 flex md:flex-col items-end gap-4">
            {CATEGORYS.map((category) => (
              <button
                type="button"
                onClick={() => setCurrentCategory(category)}
                key={category.key}
                className="rounded-md p-4 bg-slate-100 h-24 w-24 flex justify-center items-center"
              >
                <img src={category.image} className="rounded-md" />
              </button>
            ))}
          </div>

          <div className="col-span-8 bg-slate-100 p-2 sm:p-4 md:p-8 rounded-lg h-[500px] flex flex-col ">
            <div className="flex-1 h-5/6 self-center place-self-center">
              <img
                src={currentCategory?.image}
                className="rounded-lg object-fit h-full"
              />
            </div>

            <div className="flex-1 content-end font-mono">
              <h3 className="font-bold">{currentCategory?.company}</h3>
              <p>{currentCategory?.subhead}</p>
              {currentCategory?.positions?.map((position, i) => (
                <li key={i}>{position}</li>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:col-span-2 px-4 pt-8 flex flex-col font-mono gap-12">
        <div className="flex flex-col">
          <p className="px-4 py-2 rounded-full bg-sky-200 w-max self-end">
            Frontend Engineer
          </p>
          <h1 className="text-6xl">
            Danny
            <br />
            Grimmig
          </h1>
        </div>

        <Typewriter text={currentCategory?.text ?? ""} />

        <div className="flex gap-2">
          <Link href="/portfolio">
            <Button type="primary" text="portfolio" />
          </Link>

          <Link href="/blog">
            <Button type="secondary" text="blog" />
          </Link>
        </div>
      </div>
    </main>
  );
}

type ButtonProps = {
  type: "primary" | "secondary";
  text: string;
};
export function Button(props: ButtonProps) {
  const { type, text } = props;

  return (
    <h3
      className={`px-6 py-3 rounded-md border w-max ${
        type === "primary" && "bg-sky-600 text-white"
      }`}
    >
      {text}
    </h3>
  );
}

function Typewriter({ text }: { text: string }) {
  // managed
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 25);

      return () => clearTimeout(timeout);
    }
  }, [text, index]);

  // derived
  const displayedText = text.slice(0, index);

  return <p>{displayedText}</p>;
}
