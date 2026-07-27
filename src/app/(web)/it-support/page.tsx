import type { Metadata } from "next";
import { ItSupportPage as ItSupport } from "@/features/it-support/_components";

export const metadata: Metadata = {
  title: "IT Support",
  description:
    "Comprehensive IT support including managed services, cyber security, device repair, servers, and networking solutions.",
};

const page = () => {
  return (
    <div>
      <ItSupport />
    </div>
  );
};

export default page;
