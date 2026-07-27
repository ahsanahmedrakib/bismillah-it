import type { Metadata } from "next";
import { CloudAndNetworkSecurity } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Cloud & Network Security",
  description:
    "Secure your cloud infrastructure and network with firewalls, VPNs, monitoring, and access controls.",
};

const page = () => {
  return (
    <div>
      <CloudAndNetworkSecurity />
    </div>
  );
};

export default page;
