import type { Metadata } from "next";
import { VoicePage } from "@/features/voice/_components";

export const metadata: Metadata = {
  title: "Voice & Phone Systems",
  description:
    "Business phone systems, VoIP solutions, unified communications, and conferencing from top brands for businesses of all sizes.",
};

const page = () => {
  return (
    <div>
      <VoicePage />
    </div>
  );
};

export default page;
