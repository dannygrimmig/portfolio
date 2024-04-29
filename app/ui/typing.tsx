"use client";
import * as React from "react";

export function Typewriter({ text }: { text: string }) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 25);

      return () => clearTimeout(timeout);
    }
  }, [text, index]);

  const displayedText = text.slice(0, index);

  return <p>{displayedText}</p>;
}
