import { createMetadata } from "@/shared/lib/seo";
import { EndPointSecurityPage } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Endpoint Security",
  description: "Protect endpoints including laptops, desktops, and mobile devices from malware and cyber threats.",
  path: "/it-support/cyber-security/endpoint-security",
});

const page = () => {
  return (
    <div>
      <EndPointSecurityPage />
    </div>
  );
};

export default page;
