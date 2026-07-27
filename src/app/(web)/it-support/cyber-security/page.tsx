import type { Metadata } from "next";
import { CyberSecurityPage } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Cyber Security",
  description:
    "Comprehensive cyber security services including zero trust, endpoint security, incident response, and security awareness training.",
};

const page = () => {
  return (
    <div>
      <CyberSecurityPage />
    </div>
  );
};

export default page;
