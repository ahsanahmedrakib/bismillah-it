import { createMetadata } from "@/shared/lib/seo";
import { WebPage } from "@/features/web/_components";

export const metadata = createMetadata({
  title: "Web Services",
  description: "Professional web design, SEO, hosting, eCommerce development, and custom web solutions to grow your business online.",
  path: "/web",
});

const page = () => {
  return (
    <div>
      <WebPage />
    </div>
  );
};

export default page;
