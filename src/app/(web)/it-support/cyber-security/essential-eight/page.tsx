import type { Metadata } from "next";
import { EssentialEight } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Essential Eight",
  description:
    "Implement and mature the ASD Essential Eight mitigation strategies to protect your business.",
};

const page = () => {
  return (
    <div>
      <EssentialEight />
    </div>
  );
};

export default page;
