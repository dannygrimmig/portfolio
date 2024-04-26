"use client";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const CATEGORYS = [
  {
    key: "main",
    image:
      "https://lh3.googleusercontent.com/a/ACg8ocJNMLmcmCb85fXFYSqaz75U4uz2-JloN5xNO4-AtrPVu4FWvk_c5g=s576-c-no",
    text: "Hi! Here is a quick site about me. Threw together a bit about my background, including my education at Colgate and professional experience as a Software Developer at Toast",
  },
  {
    key: "colgate",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Colgate_University_Seal_2018.svg/1200px-Colgate_University_Seal_2018.svg.png",
    text: "I studied Computer Science and Economics at Colgate University. Should put some more information in here too not sure what else to say for now",
  },
  {
    key: "toast",
    image: "https://static.stocktitan.net/company-logo/tost.png",
    text: "During my tenure at Toast, I transitioned from an engineering intern to a full-time software engineer, spearheading projects including product education pages, accesible component libraries, and designing and building the prospective e-commerce flow.",
  },
];

export default function Home() {
  // managed
  const [currentCategory, setCurrentCategory] = React.useState(
    CATEGORYS.find((category) => category.key === "main")
  );

  return (
    <main className="sm:grid grid-cols-5 min-h-[calc(100vh-74px)]">
      <div className="sm:col-span-3 border-r">
        <div className="w-full h-full p-16 grid grid-cols-10 gap-4">
          <div className="col-span-2 flex flex-col items-end gap-4">
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

          <div className="col-span-8 bg-slate-100 p-2 sm:p-4 md:p-8 rounded-lg h-[500px] flex justify-center">
            <img
              src={currentCategory?.image}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-2 px-4 pt-8 flex flex-col font-mono gap-12">
        <div className="flex flex-col">
          <p className="px-4 py-2 rounded-full bg-sky-200 w-max self-end">
            Frontend Engineer
          </p>
          <h1 className="text-6xl">Danny</h1>
          <h1 className="text-6xl">Grimmig</h1>
        </div>

        <p>{currentCategory?.text}</p>

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
