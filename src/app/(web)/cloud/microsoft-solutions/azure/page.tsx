import type { Metadata } from "next";
import { AzurePage } from "@/features/cloud/microsoft-solutions/azure/_components";

export const metadata: Metadata = {
  title: "Azure",
  description:
    "Cloud computing, virtual machines, databases, and scalable infrastructure with Microsoft Azure.",
};

const page = () => {
  return <AzurePage />;
};

export default page;
