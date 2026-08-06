import { createMetadata } from "@/shared/lib/seo";
import { Windows365Page } from "@/features/cloud/microsoft-solutions/windows-365/_components";

export const metadata = createMetadata({
  title: "Windows 365",
  description: "Access a secure, cloud-based Windows desktop from any device with Windows 365 Cloud PC.",
  path: "/cloud/microsoft-solutions/windows-365",
});

const page = () => {
  return <Windows365Page />;
};

export default page;
