import type { Metadata } from "next";
import { SecurityAwarenessTraining } from "@/features/it-support/cyber-security/_components";

export const metadata: Metadata = {
  title: "Security Awareness Training",
  description:
    "Educate your team with security awareness training to recognise and prevent phishing, social engineering, and cyber attacks.",
};

const page = () => {
  return (
    <div>
      <SecurityAwarenessTraining />
    </div>
  );
};

export default page;
