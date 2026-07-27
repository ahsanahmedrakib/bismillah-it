import type { Metadata } from "next";
import { ZeroTrustFramework } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Zero Trust Framework",
  description:
    "Implement a zero trust security model to verify every access request and protect your business from modern threats.",
};

const page = () => {
  return (
    <div>
      <ZeroTrustFramework />
    </div>
  );
};

export default page;
