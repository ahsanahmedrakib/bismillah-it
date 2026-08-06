import { createMetadata } from "@/shared/lib/seo";
import { TeamsPage } from "@/features/cloud/microsoft-solutions/teams/_components";

export const metadata = createMetadata({
  title: "Microsoft Teams",
  description: "Set up, manage, and optimise Microsoft Teams for seamless collaboration, meetings, and communication.",
  path: "/cloud/microsoft-solutions/teams",
});

const page = () => {
  return <TeamsPage />;
};

export default page;
