import type { Metadata } from "next";
import { SharePointPage } from "@/features/cloud/microsoft-solutions/sharepoint/_components";

export const metadata: Metadata = {
  title: "SharePoint",
  description:
    "Build intranets, document libraries, and team sites with Microsoft SharePoint for improved collaboration.",
};

const page = () => {
  return (
    <div>
      <SharePointPage />
    </div>
  );
};

export default page;
