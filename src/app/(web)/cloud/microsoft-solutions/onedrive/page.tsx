import type { Metadata } from "next";
import { OnedrivePage } from "@/features/cloud/microsoft-solutions/onedrive/_components";

export const metadata: Metadata = {
  title: "OneDrive",
  description:
    "Secure cloud file storage and sharing with Microsoft OneDrive for business and personal use.",
};

const page = () => {
  return (
    <div>
      <OnedrivePage />
    </div>
  );
};

export default page;
