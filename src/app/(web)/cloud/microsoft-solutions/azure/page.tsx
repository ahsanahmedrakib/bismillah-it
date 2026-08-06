import { createMetadata } from "@/shared/lib/seo";
import { AzurePage } from "@/features/cloud/microsoft-solutions/azure/_components";

export const metadata = createMetadata({
  title: "Azure",
  description: "Cloud computing, virtual machines, databases, and scalable infrastructure with Microsoft Azure.",
  path: "/cloud/microsoft-solutions/azure",
});

const page = () => {
  return <AzurePage />;
};

export default page;
