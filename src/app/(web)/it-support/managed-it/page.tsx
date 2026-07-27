import type { Metadata } from "next";
import { ManagedITPage } from "@/features/it-support/managed-it/_components";

export const metadata: Metadata = {
  title: "Managed IT Services",
  description:
    "Proactive managed IT services including monitoring, maintenance, helpdesk, and strategic IT planning.",
};

const page = () => {
  return (
    <div>
      <ManagedITPage />
    </div>
  );
};

export default page;
