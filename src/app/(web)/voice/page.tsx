import { createMetadata } from "@/shared/lib/seo";
import { VoicePage } from "@/features/voice/_components";

export const metadata = createMetadata({
  title: "Voice & Phone Systems",
  description: "Business phone systems, VoIP solutions, unified communications, and conferencing from top brands for businesses of all sizes.",
  path: "/voice",
});

const page = () => {
  return (
    <div>
      <VoicePage />
    </div>
  );
};

export default page;
