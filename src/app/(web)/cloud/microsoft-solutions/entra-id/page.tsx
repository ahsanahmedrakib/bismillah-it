import type { Metadata } from "next";
import { EntraIDPage } from "@/features/cloud/microsoft-solutions/entra-id/_components";

export const metadata: Metadata = {
  title: "Entra ID",
  description:
    "Identity and access management with Microsoft Entra ID (formerly Azure AD) for secure authentication.",
};

const page = () => {
  return <EntraIDPage />;
};

export default page;
