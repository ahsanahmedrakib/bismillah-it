import { createMetadata } from "@/shared/lib/seo";
import { SecureScorePage } from "@/features/cloud/cyber-security/secure-score/_components";

export const metadata = createMetadata({
  title: "Secure Score",
  description: "Assess and improve your organisation's security posture with Microsoft Secure Score recommendations.",
  path: "/cloud/cyber-security/secure-score",
});

const page = () => {
  return <SecureScorePage />;
};

export default page;
