import { createMetadata } from "@/shared/lib/seo";
import { CondtionalAccessPage } from "@/features/cloud/microsoft-solutions/conditional-access/_components";

export const metadata = createMetadata({
  title: "Conditional Access",
  description: "Implement risk-based conditional access policies to secure user authentication and access.",
  path: "/cloud/microsoft-solutions/conditional-access",
});

const page = () => {
  return <CondtionalAccessPage />;
};

export default page;
