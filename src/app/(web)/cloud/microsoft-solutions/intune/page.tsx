import type { Metadata } from "next";
import { IntunePage } from "@/features/cloud/microsoft-solutions/intune/_components";

export const metadata: Metadata = {
  title: "Microsoft Intune",
  description:
    "Manage and secure devices, apps, and endpoints across your organisation with Microsoft Intune.",
};

const page = () => {
  return <IntunePage />;
};

export default page;
