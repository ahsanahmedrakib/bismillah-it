import { IndustriesPage } from "@/features/industries/_components";
import { createMetadata } from "@/shared/lib/seo";

export const metadata = createMetadata({
  title: "Industries",
  description:
    "Tailored IT solutions for education, hospitality, healthcare, and other industries across Bangladesh.",
  path: "/industries",
});

const page = () => {
  return (
    <div>
      <IndustriesPage />
    </div>
  );
};

export default page;

