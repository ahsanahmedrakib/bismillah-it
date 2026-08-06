import { createMetadata } from "@/shared/lib/seo";
import { SeoPage } from "@/features/web/seo/_components";

export const metadata = createMetadata({
  title: "SEO",
  description: "Boost your search engine rankings with expert SEO services including on-page optimisation, link building, and analytics.",
  path: "/web/seo",
});

const page = () => {
  return (
    <div>
      <SeoPage />
    </div>
  );
};

export default page;
