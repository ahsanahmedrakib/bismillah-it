import { createMetadata } from "@/shared/lib/seo";
import { CloudAndNetworkSecurity } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Cloud & Network Security",
  description: "Secure your cloud infrastructure and network with firewalls, VPNs, monitoring, and access controls.",
  path: "/it-support/cyber-security/cloud-and-network-security",
});

const page = () => {
  return (
    <div>
      <CloudAndNetworkSecurity />
    </div>
  );
};

export default page;
