import { createMetadata } from "@/shared/lib/seo";
import { EssentialEightPage } from "@/features/cloud/cyber-security/essential-eight/_components";

export const metadata = createMetadata({
  title: "Essential Eight",
  description: "Implement the ASD Essential Eight maturity framework to protect against cyber threats.",
  path: "/cloud/cyber-security/essential-eight",
});

const page = () => {
  return (
    <div>
      <EssentialEightPage />
    </div>
  );
};

export default page;
