import type { Metadata } from "next";
import { DeviceRepairPage } from "@/features/it-support/device-repair/_components";

export const metadata: Metadata = {
  title: "Device Repair",
  description:
    "Fast and affordable computer, laptop, and mobile device repair services for individuals and businesses.",
};

const page = () => {
  return (
    <div>
      <DeviceRepairPage />
    </div>
  );
};

export default page;
