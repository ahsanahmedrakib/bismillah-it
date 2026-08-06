import { createMetadata } from "@/shared/lib/seo";
import { HostingPage } from "@/features/web/hosting/_components";

export const metadata = createMetadata({
  title: "Web Hosting",
  description: "Reliable, secure web hosting with cPanel, WordPress hosting, and domain management for your website.",
  path: "/web/hosting",
});

const page = () => {
  return (
    <div>
      <HostingPage />
    </div>
  );
};

export default page;
