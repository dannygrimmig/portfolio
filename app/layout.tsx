import type { Metadata } from "next";
import { NavBar } from "./ui/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { BASE_META_DATA } from "./lib/metadata";
import "./globals.css";

export const metadata: Metadata = BASE_META_DATA;

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
