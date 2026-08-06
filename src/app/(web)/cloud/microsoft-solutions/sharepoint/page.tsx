import { createMetadata } from "@/shared/lib/seo";
import { SharePointPage } from "@/features/cloud/microsoft-solutions/sharepoint/_components";

export const metadata = createMetadata({
  title: "SharePoint",
  description: "Build intranets, document libraries, and team sites with Microsoft SharePoint for improved collaboration.",
  path: "/cloud/microsoft-solutions/sharepoint",
});

const page = () => {
  return (
    <div>
      <SharePointPage />
    </div>
  );
};

export default page;
