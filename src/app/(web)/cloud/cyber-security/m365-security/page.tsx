import { createMetadata } from "@/shared/lib/seo";
import { M365SecurityPage } from "@/features/cloud/cyber-security/m365-security/_components";

export const metadata = createMetadata({
  title: "M365 Security",
  description: "Secure your Microsoft 365 environment with advanced threat protection, data loss prevention, and compliance tools.",
  path: "/cloud/cyber-security/m365-security",
});

const page = () => {
  return <M365SecurityPage />;
};

export default page;
