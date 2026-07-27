import type { Metadata } from "next";
import { EndPointSecurityPage } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Endpoint Security",
  description:
    "Protect endpoints including laptops, desktops, and mobile devices from malware and cyber threats.",
};

const page = () => {
  return (
    <div>
      <EndPointSecurityPage />
    </div>
  );
};

export default page;
