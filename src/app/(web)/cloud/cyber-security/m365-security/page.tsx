import type { Metadata } from "next";
import { M365SecurityPage } from "@/features/cloud/cyber-security/m365-security/_components";

export const metadata: Metadata = {
  title: "M365 Security",
  description:
    "Secure your Microsoft 365 environment with advanced threat protection, data loss prevention, and compliance tools.",
};

const page = () => {
  return <M365SecurityPage />;
};

export default page;
