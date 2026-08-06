import { createMetadata } from "@/shared/lib/seo";
import { CopilotPage } from "@/features/cloud/microsoft-solutions/copilot/_components";

export const metadata = createMetadata({
  title: "Microsoft Copilot",
  description: "Supercharge productivity with AI-powered assistance from Microsoft Copilot across Microsoft 365 apps.",
  path: "/cloud/microsoft-solutions/copilot",
});

const page = () => {
  return <CopilotPage />;
};

export default page;
