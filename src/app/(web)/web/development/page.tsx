import type { Metadata } from "next";
import { DevelopmentPage } from "@/features/web/development/_components";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Custom web development, web applications, API integrations, and CMS development tailored to your business needs.",
};

const page = () => {
  return (
    <div>
      <DevelopmentPage />
    </div>
  );
};

export default page;
