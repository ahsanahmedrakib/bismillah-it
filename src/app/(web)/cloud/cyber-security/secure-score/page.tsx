import type { Metadata } from "next";
import { SecureScorePage } from "@/features/cloud/cyber-security/secure-score/_components";

export const metadata: Metadata = {
  title: "Secure Score",
  description:
    "Assess and improve your organisation's security posture with Microsoft Secure Score recommendations.",
};

const page = () => {
  return <SecureScorePage />;
};

export default page;
