import { createMetadata } from "@/shared/lib/seo";
import { DefenderPage } from "@/features/cloud/microsoft-solutions/defender/_components";

export const metadata = createMetadata({
  title: "Microsoft Defender",
  description: "Protect your organisation from threats with Microsoft Defender for Endpoint, Office 365, and Identity.",
  path: "/cloud/microsoft-solutions/defender",
});

const page = () => {
  return (
    <div>
      <DefenderPage />
    </div>
  );
};

export default page;
