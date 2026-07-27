import type { Metadata } from "next";
import { Microsoft365 } from "@/features/cloud/microsoft-solutions/microsoft-365/_components";

export const metadata: Metadata = {
  title: "Microsoft 365",
  description:
    "Complete productivity suite with Microsoft 365 including Word, Excel, Teams, Outlook, and cloud storage.",
};

const page = () => {
  return (
    <div>
      <Microsoft365 />
    </div>
  );
};

export default page;
