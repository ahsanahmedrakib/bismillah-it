import { createMetadata } from "@/shared/lib/seo";
import { EcommercePage } from "@/features/web/ecommerce/_components";

export const metadata = createMetadata({
  title: "eCommerce Development",
  description: "Custom eCommerce solutions including WooCommerce, Shopify, Magento, and WooCommerce POS setup.",
  path: "/web/ecommerce",
});

const page = () => {
  return (
    <div>
      <EcommercePage />
    </div>
  );
};

export default page;
