import type { Metadata } from "next";
import { DispPage } from "@/features/cloud/cyber-security/disp/_components";

export const metadata: Metadata = {
  title: "Defence Industry Security Program",
  description:
    "Meet DISP membership requirements and comply with the Australian Government's defence security standards.",
};

const page = () => {
  return (
    <div>
      <DispPage />
    </div>
  );
};

export default page;
