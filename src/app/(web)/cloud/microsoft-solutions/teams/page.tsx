import type { Metadata } from "next";
import { TeamsPage } from "@/features/cloud/microsoft-solutions/teams/_components";

export const metadata: Metadata = {
  title: "Microsoft Teams",
  description:
    "Set up, manage, and optimise Microsoft Teams for seamless collaboration, meetings, and communication.",
};

const page = () => {
  return <TeamsPage />;
};

export default page;
