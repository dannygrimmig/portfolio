import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="sm:grid grid-cols-5 min-h-[calc(100vh-74px)]">
      <div className="sm:col-span-2 lg:col-span-3 grid grid-rows-2 grid-flow-col gap-4 min-h-full p-8 border-r">
        <div className="rounded-md col-span-2 row-span-2 bg-slate-200">01</div>
        <div className="rounded-md row-span-1 col-span-1 bg-slate-200">02</div>
        <div className="rounded-md row-span-1 col-span-1 bg-slate-200">03</div>
      </div>

      <div className="sm:col-span-3 lg:col-span-2 px-4 pt-8 flex flex-col font-mono gap-12">
        <div className="flex flex-col">
          <p className="px-4 py-2 rounded-full bg-sky-200 w-max self-end">
            Frontend Engineer
          </p>
          <h1 className="text-6xl">Danny</h1>
          <h1 className="text-6xl">Grimmig</h1>
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          nesciunt necessitatibus laborum amet quis eveniet deleniti, omnis
          ducimus. Molestias, eum dignissimos ducimus, quas obcaecati enim
          temporibus alias earum rem eveniet quis voluptatibus, maiores
          doloremque ratione.
        </p>

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
