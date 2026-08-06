import { createMetadata } from "@/shared/lib/seo";
import { ItSupportPage as ItSupport } from "@/features/it-support/_components";

export const metadata = createMetadata({
  title: "IT Support",
  description: "Comprehensive IT support including managed services, cyber security, device repair, servers, and networking solutions.",
  path: "/it-support",
});

const page = () => {
  return (
    <div>
      <ItSupport />
    </div>
  );
};

export default page;
