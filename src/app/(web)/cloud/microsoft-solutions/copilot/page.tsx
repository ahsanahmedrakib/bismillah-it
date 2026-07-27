import type { Metadata } from "next";
import { CopilotPage } from "@/features/cloud/microsoft-solutions/copilot/_components";

export const metadata: Metadata = {
  title: "Microsoft Copilot",
  description:
    "Supercharge productivity with AI-powered assistance from Microsoft Copilot across Microsoft 365 apps.",
};

const page = () => {
  return <CopilotPage />;
};

export default page;
