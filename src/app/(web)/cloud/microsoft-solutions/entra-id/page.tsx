import { createMetadata } from "@/shared/lib/seo";
import { EntraIDPage } from "@/features/cloud/microsoft-solutions/entra-id/_components";

export const metadata = createMetadata({
  title: "Entra ID",
  description: "Identity and access management with Microsoft Entra ID (formerly Azure AD) for secure authentication.",
  path: "/cloud/microsoft-solutions/entra-id",
});

const page = () => {
  return <EntraIDPage />;
};

export default page;
