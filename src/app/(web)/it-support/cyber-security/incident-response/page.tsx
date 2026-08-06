import { createMetadata } from "@/shared/lib/seo";
import { IncidentResponse } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Incident Response",
  description: "Rapid incident response planning and execution to minimise damage and recover from security breaches quickly.",
  path: "/it-support/cyber-security/incident-response",
});

const page = () => {
  return (
    <div>
      <IncidentResponse />
    </div>
  );
};

export default page;
