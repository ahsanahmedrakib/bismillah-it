import type { Metadata } from "next";
import { EcommercePage } from "@/features/web/ecommerce/_components";

export const metadata: Metadata = {
  title: "eCommerce Development",
  description:
    "Custom eCommerce solutions including WooCommerce, Shopify, Magento, and WooCommerce POS setup.",
};

const page = () => {
  return (
    <div>
      <EcommercePage />
    </div>
  );
};

export default page;
