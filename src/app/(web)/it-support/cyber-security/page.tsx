import { createMetadata } from "@/shared/lib/seo";
import { CyberSecurityPage } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Cyber Security",
  description: "Comprehensive cyber security services including zero trust, endpoint security, incident response, and security awareness training.",
  path: "/it-support/cyber-security",
});

const page = () => {
  return (
    <div>
      <CyberSecurityPage />
    </div>
  );
};

export default page;
