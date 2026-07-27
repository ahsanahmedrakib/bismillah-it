import type { Metadata } from "next";
import { CloudPage } from "@/features/cloud/_components";

export const metadata: Metadata = {
  title: "Cloud Services",
  description:
    "Microsoft 365, Azure, cloud migration, and cybersecurity solutions to keep your business connected and secure.",
};

const page = () => {
  return (
    <div>
      <CloudPage />
    </div>
  );
};

export default page;
