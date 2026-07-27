import type { Metadata } from "next";
import { HostingPage } from "@/features/web/hosting/_components";

export const metadata: Metadata = {
  title: "Web Hosting",
  description:
    "Reliable, secure web hosting with cPanel, WordPress hosting, and domain management for your website.",
};

const page = () => {
  return (
    <div>
      <HostingPage />
    </div>
  );
};

export default page;
