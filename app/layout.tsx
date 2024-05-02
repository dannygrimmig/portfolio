import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "./ui/nav";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    template: "%s | Danny Grimmig",
    default: "Danny Grimmig",
  },
  description: "welcome to my portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
