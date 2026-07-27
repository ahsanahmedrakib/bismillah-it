import type { Metadata } from "next";
import { EssentialEightPage } from "@/features/cloud/cyber-security/essential-eight/_components";

export const metadata: Metadata = {
  title: "Essential Eight",
  description:
    "Implement the ASD Essential Eight maturity framework to protect against cyber threats.",
};

const page = () => {
  return (
    <div>
      <EssentialEightPage />
    </div>
  );
};

export default page;
