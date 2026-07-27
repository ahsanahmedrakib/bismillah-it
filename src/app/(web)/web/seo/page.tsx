import type { Metadata } from "next";
import { SeoPage } from "@/features/web/seo/_components";

export const metadata: Metadata = {
  title: "SEO",
  description:
    "Boost your search engine rankings with expert SEO services including on-page optimisation, link building, and analytics.",
};

const page = () => {
  return (
    <div>
      <SeoPage />
    </div>
  );
};

export default page;
