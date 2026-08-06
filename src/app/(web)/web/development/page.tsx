import { createMetadata } from "@/shared/lib/seo";
import { DevelopmentPage } from "@/features/web/development/_components";

export const metadata = createMetadata({
  title: "Web Development",
  description: "Custom web development, web applications, API integrations, and CMS development tailored to your business needs.",
  path: "/web/development",
});

const page = () => {
  return (
    <div>
      <DevelopmentPage />
    </div>
  );
};

export default page;
