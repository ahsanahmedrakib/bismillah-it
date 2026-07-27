import type { Metadata } from "next";
import { ModernWorkplacePage } from "@/features/cloud/services/modern-workplace/_components";

export const metadata: Metadata = {
  title: "Modern Workplace",
  description:
    "Transform your workplace with Microsoft Teams, SharePoint, and modern collaboration tools.",
};

const page = () => {
  return <ModernWorkplacePage />;
};

export default page;
