import { createMetadata } from "@/shared/lib/seo";
import { Microsoft365 } from "@/features/cloud/microsoft-solutions/microsoft-365/_components";

export const metadata = createMetadata({
  title: "Microsoft 365",
  description: "Complete productivity suite with Microsoft 365 including Word, Excel, Teams, Outlook, and cloud storage.",
  path: "/cloud/microsoft-solutions/microsoft-365",
});

const page = () => {
  return (
    <div>
      <Microsoft365 />
    </div>
  );
};

export default page;
