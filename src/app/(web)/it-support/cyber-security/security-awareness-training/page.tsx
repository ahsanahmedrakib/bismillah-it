import { createMetadata } from "@/shared/lib/seo";
import { SecurityAwarenessTraining } from "@/features/it-support/cyber-security/_components";

export const metadata = createMetadata({
  title: "Security Awareness Training",
  description: "Educate your team with security awareness training to recognise and prevent phishing, social engineering, and cyber attacks.",
  path: "/it-support/cyber-security/security-awareness-training",
});

const page = () => {
  return (
    <div>
      <SecurityAwarenessTraining />
    </div>
  );
};

export default page;
