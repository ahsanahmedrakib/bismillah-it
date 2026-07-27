import type { Metadata } from "next";
import { BackupRecoveryPage } from "@/features/cloud/cyber-security/backup-recovery/_components";

export const metadata: Metadata = {
  title: "Backup & Recovery",
  description:
    "Reliable cloud backup and disaster recovery solutions to protect your business-critical data.",
};

const page = () => {
  return <BackupRecoveryPage />;
};

export default page;
