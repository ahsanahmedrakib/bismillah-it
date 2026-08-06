import { PortfolioPage } from "@/features/web/portfolio/_components";
import { createMetadata } from "@/shared/lib/seo";

export const metadata = createMetadata({
  title: "Portfolio",
  description:
    "View our portfolio of web design, development, and IT projects delivered for clients accross Bangladesh.",
  path: "/web/portfolio",
});

const page = () => {
  return (
    <div>
      <PortfolioPage />
    </div>
  );
};

export default page;

