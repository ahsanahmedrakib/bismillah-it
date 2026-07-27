import type { Metadata } from "next";
import { Windows365Page } from "@/features/cloud/microsoft-solutions/windows-365/_components";

export const metadata: Metadata = {
  title: "Windows 365",
  description:
    "Access a secure, cloud-based Windows desktop from any device with Windows 365 Cloud PC.",
};

const page = () => {
  return <Windows365Page />;
};

export default page;
