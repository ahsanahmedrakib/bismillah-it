import Homepage from "@/features/home/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Bismillah Computer & Technology",
  description:
    "Bismillah Computer & Technology - Your trusted partner for web design, cloud solutions, voice systems, internet connectivity, and managed IT support across Australia.",
};

export default function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

