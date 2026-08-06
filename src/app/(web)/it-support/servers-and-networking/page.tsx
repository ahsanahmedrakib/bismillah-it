import { createMetadata } from "@/shared/lib/seo";
import { ServersAndNetworkingPage } from "@/features/it-support/servers-and-networking/_components";

export const metadata = createMetadata({
  title: "Servers & Networking",
  description: "Server setup, network infrastructure, firewalls, switches, and cabling for reliable business connectivity.",
  path: "/it-support/servers-and-networking",
});

const page = () => {
  return (
    <div>
      <ServersAndNetworkingPage />
    </div>
  );
};

export default page;
