import { createMetadata } from "@/shared/lib/seo";
import { EmailSignaturePage } from "@/features/cloud/services/email-sgnature/_components";

export const metadata = createMetadata({
  title: "Email Signature",
  description: "Professional, centrally managed email signatures for your organisation using Exclaimer.",
  path: "/cloud/services/email-signature",
});

const page = () => {
  return <EmailSignaturePage />;
};

export default page;
