import type { Metadata } from "next";
import { IncidentResponse } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Incident Response",
  description:
    "Rapid incident response planning and execution to minimise damage and recover from security breaches quickly.",
};

const page = () => {
  return (
    <div>
      <IncidentResponse />
    </div>
  );
};

export default page;
