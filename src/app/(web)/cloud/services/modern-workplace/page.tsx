import { createMetadata } from "@/shared/lib/seo";
import { ModernWorkplacePage } from "@/features/cloud/services/modern-workplace/_components";

export const metadata = createMetadata({
  title: "Modern Workplace",
  description: "Transform your workplace with Microsoft Teams, SharePoint, and modern collaboration tools.",
  path: "/cloud/services/modern-workplace",
});

const page = () => {
  return <ModernWorkplacePage />;
};

export default page;
