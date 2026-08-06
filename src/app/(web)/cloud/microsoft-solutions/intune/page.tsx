import { createMetadata } from "@/shared/lib/seo";
import { IntunePage } from "@/features/cloud/microsoft-solutions/intune/_components";

export const metadata = createMetadata({
  title: "Microsoft Intune",
  description: "Manage and secure devices, apps, and endpoints across your organisation with Microsoft Intune.",
  path: "/cloud/microsoft-solutions/intune",
});

const page = () => {
  return <IntunePage />;
};

export default page;
