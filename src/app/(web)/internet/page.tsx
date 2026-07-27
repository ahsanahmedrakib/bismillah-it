import type { Metadata } from "next";
import { InternetPage } from "@/features/internet/_components";

export const metadata: Metadata = {
  title: "Internet Solutions",
  description:
    "High-speed internet connectivity including NBN, Starlink, 4G/5G, and Cel-Fi solutions for homes and businesses across Australia.",
};

const page = () => {
  return (
    <div>
      <InternetPage />
    </div>
  );
};

export default page;
