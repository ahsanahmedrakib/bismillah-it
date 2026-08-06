import { createMetadata } from "@/shared/lib/seo";
import { BackupRecoveryPage } from "@/features/cloud/cyber-security/backup-recovery/_components";

export const metadata = createMetadata({
  title: "Backup & Recovery",
  description: "Reliable cloud backup and disaster recovery solutions to protect your business-critical data.",
  path: "/cloud/cyber-security/backup-recovery",
});

const page = () => {
  return <BackupRecoveryPage />;
};

export default page;
