import type { Metadata } from "next";
import { CondtionalAccessPage } from "@/features/cloud/microsoft-solutions/conditional-access/_components";

export const metadata: Metadata = {
  title: "Conditional Access",
  description:
    "Implement risk-based conditional access policies to secure user authentication and access.",
};

const page = () => {
  return <CondtionalAccessPage />;
};

export default page;
