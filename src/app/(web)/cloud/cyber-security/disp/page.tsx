import { DispPage } from "@/features/cloud/cyber-security/disp/_components";
import { createMetadata } from "@/shared/lib/seo";

export const metadata = createMetadata({
  title: "Defence Industry Security Program",
  description:
    "Meet DISP membership requirements and comply with the Bangladeshi Government's defence security standards.",
  path: "/cloud/cyber-security/disp",
});

const page = () => {
  return (
    <div>
      <DispPage />
    </div>
  );
};

export default page;

