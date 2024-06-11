import { Metadata } from "next";
import { SplitPageContainer } from "../ui/pages/SplitPageContainer";
import { PORTFOLIO_PROJECTS } from "../lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Page() {
  return (
    <SplitPageContainer
      categories={PORTFOLIO_PROJECTS}
      gridClassName="grid md:grid-cols-2 gap-4 p-4"
      cardType="secondary"
    />
  );
}
