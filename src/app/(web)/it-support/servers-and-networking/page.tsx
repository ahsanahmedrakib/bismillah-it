import type { Metadata } from "next";
import { ServersAndNetworkingPage } from "@/features/it-support/servers-and-networking/_components";

export const metadata: Metadata = {
  title: "Servers & Networking",
  description:
    "Server setup, network infrastructure, firewalls, switches, and cabling for reliable business connectivity.",
};

const page = () => {
  return (
    <div>
      <ServersAndNetworkingPage />
    </div>
  );
};

export default page;
