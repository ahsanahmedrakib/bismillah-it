import type { Metadata } from "next";
import { WebPage } from "@/features/web/_components";

export const metadata: Metadata = {
  title: "Web Services",
  description:
    "Professional web design, SEO, hosting, eCommerce development, and custom web solutions to grow your business online.",
};

const page = () => {
  return (
    <div>
      <WebPage />
    </div>
  );
};

export default page;
