import type { Metadata } from "next";
import { NavBar } from "./ui/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { BASE_META_DATA } from "./lib/metadata";
import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
export const metadata: Metadata = BASE_META_DATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
