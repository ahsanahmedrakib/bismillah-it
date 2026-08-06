import { createMetadata } from "@/shared/lib/seo";
import { OnedrivePage } from "@/features/cloud/microsoft-solutions/onedrive/_components";

export const metadata = createMetadata({
  title: "OneDrive",
  description: "Secure cloud file storage and sharing with Microsoft OneDrive for business and personal use.",
  path: "/cloud/microsoft-solutions/onedrive",
});

const page = () => {
  return (
    <div>
      <OnedrivePage />
    </div>
  );
};

export default page;
