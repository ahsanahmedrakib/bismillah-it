import { createMetadata } from "@/shared/lib/seo";
import { ContactPage } from "@/features/contact/_components";

export const metadata = createMetadata({
  title: "Contact Us",
  description: "Get in touch with Bismillah Computer & Technology for IT support, cloud services, web design, and more.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
