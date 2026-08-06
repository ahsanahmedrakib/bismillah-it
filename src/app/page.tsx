import Homepage from "@/features/home/page";
import { createMetadata } from "@/shared/lib/seo";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Bismillah Computer & Technology - Your trusted partner for web design, cloud solutions, voice systems, internet connectivity, and managed IT support accross Bangladesh.",
  path: "/",
  titleAbsolute: true,
});

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

