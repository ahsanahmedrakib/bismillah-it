import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/_components";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Bismillah Computer & Technology for IT support, cloud services, web design, and more.",
};

export default function Page() {
  return <ContactPage />;
}
