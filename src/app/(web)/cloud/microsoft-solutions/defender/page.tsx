import type { Metadata } from "next";
import { DefenderPage } from "@/features/cloud/microsoft-solutions/defender/_components";

export const metadata: Metadata = {
  title: "Microsoft Defender",
  description:
    "Protect your organisation from threats with Microsoft Defender for Endpoint, Office 365, and Identity.",
};

const page = () => {
  return (
    <div>
      <DefenderPage />
    </div>
  );
};

export default page;
