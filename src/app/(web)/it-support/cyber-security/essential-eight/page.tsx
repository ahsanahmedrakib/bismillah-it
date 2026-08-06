import { createMetadata } from "@/shared/lib/seo";
import { EssentialEight } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Essential Eight",
  description: "Implement and mature the ASD Essential Eight mitigation strategies to protect your business.",
  path: "/it-support/cyber-security/essential-eight",
});

const page = () => {
  return (
    <div>
      <EssentialEight />
    </div>
  );
};

export default page;
