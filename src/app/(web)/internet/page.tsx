import { InternetPage } from "@/features/internet/_components";
import { createMetadata } from "@/shared/lib/seo";

export const metadata = createMetadata({
  title: "Internet Solutions",
  description:
    "High-speed internet connectivity including NBN, Starlink, 4G/5G, and Cel-Fi solutions for homes and businesses accross Bangladesh.",
  path: "/internet",
});

const page = () => {
  return (
    <div>
      <InternetPage />
    </div>
  );
};

export default page;

