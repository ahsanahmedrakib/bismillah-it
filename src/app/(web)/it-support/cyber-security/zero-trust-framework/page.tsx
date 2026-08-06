import { createMetadata } from "@/shared/lib/seo";
import { ZeroTrustFramework } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Zero Trust Framework",
  description: "Implement a zero trust security model to verify every access request and protect your business from modern threats.",
  path: "/it-support/cyber-security/zero-trust-framework",
});

const page = () => {
  return (
    <div>
      <ZeroTrustFramework />
    </div>
  );
};

export default page;
