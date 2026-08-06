import { createMetadata } from "@/shared/lib/seo";
import { ManagedITPage } from "@/features/it-support/managed-it/_components";

export const metadata = createMetadata({
  title: "Managed IT Services",
  description: "Proactive managed IT services including monitoring, maintenance, helpdesk, and strategic IT planning.",
  path: "/it-support/managed-it",
});

const page = () => {
  return (
    <div>
      <ManagedITPage />
    </div>
  );
};

export default page;
