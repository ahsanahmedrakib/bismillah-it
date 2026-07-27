import type { Metadata } from "next";
import { PortfolioPage } from "@/features/web/portfolio/_components";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of web design, development, and IT projects delivered for clients across Australia.",
};

const page = () => {
  return (
    <div>
      <PortfolioPage />
    </div>
  );
};

export default page;
