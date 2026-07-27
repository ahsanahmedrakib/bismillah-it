import type { Metadata } from "next";
import { EmailSignaturePage } from "@/features/cloud/services/email-sgnature/_components";

export const metadata: Metadata = {
  title: "Email Signature",
  description:
    "Professional, centrally managed email signatures for your organisation using Exclaimer.",
};

const page = () => {
  return <EmailSignaturePage />;
};

export default page;
