import type { Metadata } from "next";
import { IndustriesPage } from "@/features/industries/_components";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Tailored IT solutions for education, hospitality, healthcare, and other industries across Australia.",
};

const page = () => {
  return (
    <div>
      <IndustriesPage />
    </div>
  );
};

export default page;
