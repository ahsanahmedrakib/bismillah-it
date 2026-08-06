import { createMetadata } from "@/shared/lib/seo";
import { CloudPage } from "@/features/cloud/_components";

export const metadata = createMetadata({
  title: "Cloud Services",
  description: "Microsoft 365, Azure, cloud migration, and cybersecurity solutions to keep your business connected and secure.",
  path: "/cloud",
});

const page = () => {
  return (
    <div>
      <CloudPage />
    </div>
  );
};

export default page;
