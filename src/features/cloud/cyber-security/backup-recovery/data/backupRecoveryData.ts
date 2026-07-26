import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Cloud,
  HardDrive,
  Lock,
  RefreshCw,
  Server,
  Shield,
} from "lucide-react";

export const backupRecoveryHeroData = {
  title1: "Backup & Recovery",
  title2: "Business Continuity",
  description1:
    "Backup and Data Recovery are essential for protecting your business from data loss, cyber attacks, hardware failure, or accidental deletion. By creating secure copies of critical files and systems, businesses can quickly restore information and minimise downtime if something goes wrong.",
  bgImage: "/images/cloud/cyber-security/backup-recovery/bg.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "OUR APPROACH", href: "#approach" },
  ],
};

export const backupRecoveryOverview = {
  label: "Backup & Recovery",
  title: "What is Backup and Recovery?",
  description:
    "Backup and Data Recovery are critical components of a modern business continuity and cybersecurity strategy. They ensure that important files, systems, and applications can be restored if data is lost due to hardware failure, cyber attacks, accidental deletion, or ransomware incidents.",
  description2:
    "By maintaining secure backup copies of business data, organisations can minimise downtime and quickly recover from unexpected disruptions. Modern backup solutions often combine local backups, cloud storage, and offsite replication to provide multiple layers of protection.",
  description3:
    "Automated backup systems regularly capture and store data so that recovery can occur quickly when needed. This ensures that important data stored on servers, computers, and cloud services can be recovered quickly, helping organisations maintain operations and protect valuable business information.",
};

export const backupSolutions = [
  {
    title: "Cove Data Protection",
    desc: "Cove Backup, now known as Cove Data Protection, is a cloud-first data protection service developed by N-able. It is designed to cater primarily to managed service providers (MSPs) and IT teams, offering a streamlined, appliance-free backup solution that includes both backup and disaster recovery capabilities.",
    icon: Cloud,
    features: [
      "Cloud-first architecture with no local hardware required",
      "Built-in disaster recovery capabilities",
      "Designed for MSPs and IT teams",
      "Streamlined, appliance-free solution",
    ],
  },
  {
    title: "Datto Backup",
    desc: "Datto Backup is a comprehensive data protection solution designed primarily for managed service providers (MSPs) and small to medium-sized businesses (SMBs). It offers a range of features that provide robust backup, disaster recovery, and business continuity services.",
    icon: Server,
    features: [
      "Hybrid cloud architecture combining on-site and cloud backups",
      "Instant virtualization of backups locally or in the cloud",
      "Image-based backups with offsite replication",
      "Failover to cloud-based environments",
    ],
  },
  {
    title: "StorageCraft ShadowProtect",
    desc: "StorageCraft ShadowProtect is the next level of on-site backup that we offer. It captures full, differential and incremental backups of your entire system, including the entire operating system, applications, configuration settings, and files.",
    icon: HardDrive,
    features: [
      "Full, differential, and incremental backups",
      "Hardware Independent Restore (HIR) capability",
      "Recover entire system state to different hardware",
      "Deploy state backup to another machine",
    ],
  },
  {
    title: "Mozy Pro Cloud Backup",
    desc: "MozyPro is our preferred cloud-based backup solution for your business. Available for both desktops and servers, it ensures peace of mind that your data is stored and archived in the cloud, ready for when you need it restored.",
    icon: Cloud,
    features: [
      "Desktop and server backup solutions",
      "Cloud-based storage and archiving",
      "Supplements Windows Server Backup",
      "Essential for business-critical data",
    ],
  },
];

export const businessBenefits = [
  {
    title: "Minimise Downtime",
    desc: "Quick recovery ensures your business operations continue with minimal interruption when data loss occurs.",
    icon: Clock,
  },
  {
    title: "Protect Against Cyber Threats",
    desc: "Secure backup copies protect your data from ransomware, malware, and other cyber attacks that could compromise business-critical information.",
    icon: Shield,
  },
  {
    title: "Business Continuity",
    desc: "Maintain operations and serve customers even during unexpected disruptions with reliable recovery solutions.",
    icon: RefreshCw,
  },
  {
    title: "Data Security",
    desc: "Protect sensitive business data with encrypted backups stored in secure locations, both on-site and in the cloud.",
    icon: Lock,
  },
  {
    title: "Compliance Requirements",
    desc: "Meet regulatory and industry standards for data protection and retention with proper backup strategies.",
    icon: CheckCircle,
  },
  {
    title: "Peace of Mind",
    desc: "Know that your important files and systems can be restored quickly, protecting your business from unforeseen events.",
    icon: AlertTriangle,
  },
];

export const backupTypes = [
  {
    title: "Local Backup",
    desc: "Store backup copies on local devices or servers for quick access and recovery. This provides immediate recovery options without internet connectivity.",
    icon: HardDrive,
  },
  {
    title: "Cloud Backup",
    desc: "Securely store backup copies in the cloud for offsite protection and accessibility from anywhere. This ensures data is protected even if local infrastructure fails.",
    icon: Cloud,
  },
  {
    title: "Hybrid Backup",
    desc: "Combine local and cloud backups for maximum protection and flexibility. This provides both quick local recovery and secure offsite redundancy.",
    icon: RefreshCw,
  },
];

export const howItWorksSteps = [
  {
    step: 1,
    title: "Assessment",
    desc: "We assess your current backup infrastructure and identify gaps in your data protection strategy.",
  },
  {
    step: 2,
    title: "Strategy Design",
    desc: "Our team designs a tailored backup solution that meets your business needs and recovery objectives.",
  },
  {
    step: 3,
    title: "Implementation",
    desc: "We implement your backup solution with minimal disruption to your daily operations.",
  },
  {
    step: 4,
    title: "Monitoring & Support",
    desc: "Ongoing monitoring ensures your backups are running successfully and can be relied upon when needed.",
  },
];

export const tsitServices = [
  "Comprehensive backup assessments and strategy planning",
  "Cloud-first and hybrid backup solutions",
  "Disaster recovery planning and implementation",
  "24/7 monitoring and management of backup systems",
  "Regular testing and validation of backup integrity",
  "Quick recovery and data restoration support",
];

export const backupRecoveryUsefulLinks = [
  {
    title: "Microsoft Azure Backup",
    description:
      "Enterprise-grade cloud backup and disaster recovery solutions powered by Microsoft Azure.",
    href: "https://azure.microsoft.com/en-us/products/backup/",
  },
  {
    title: "N-able Cove Data Protection",
    description:
      "Cloud-first data protection service designed for managed service providers and IT teams.",
    href: "https://www.n-able.com/products/cove-data-protection",
  },
  {
    title: "Datto Backup Solutions",
    description:
      "Comprehensive data protection and business continuity solutions for SMBs and MSPs.",
    href: "https://www.datto.com/products",
  },
  {
    title: "StorageCraft ShadowProtect",
    description:
      "System-level backup and recovery solution with hardware-independent restore capabilities.",
    href: "https://www.storagecraft.com/products/shadowprotect",
  },
];

export const backupRecoveryFaqs = [
  {
    question: "What is the difference between backup and disaster recovery?",
    answer:
      "Backup refers to creating copies of your data to be restored later, while disaster recovery is a broader strategy that includes the processes and tools to recover entire systems and operations after a major incident. Backup is one component of a complete disaster recovery plan.",
  },
  {
    question: "How often should we backup our business data?",
    answer:
      "The frequency of backups depends on how critical your data is and how much data loss your business can tolerate. For most businesses, daily backups are essential, with more frequent backups for critical systems. We can help determine the optimal backup schedule for your specific needs.",
  },
  {
    question: "What types of data should be backed up?",
    answer:
      "All business-critical data should be backed up, including databases, email systems, documents, configurations, and application data. We recommend a comprehensive approach that covers all systems essential to your business operations.",
  },
  {
    question: "How long does it take to restore from backup?",
    answer:
      "Recovery time depends on the amount of data, the type of backup solution, and your recovery objectives. Local backups can often be restored quickly, while cloud recoveries depend on internet speeds. We design solutions with your specific recovery time objectives in mind.",
  },
  {
    question: "Is cloud backup secure?",
    answer:
      "Yes, reputable cloud backup providers use enterprise-grade encryption both in transit and at rest. Your data is stored in secure data centres with multiple layers of physical and digital security. We only recommend cloud backup solutions that meet strict security standards.",
  },
  {
    question: "What happens if we lose our local backup?",
    answer:
      "This is why we recommend offsite or cloud backup as part of your strategy. If local backups are lost due to fire, theft, or hardware failure, your data remains protected in the cloud or at an offsite location, ensuring you can still recover your business-critical information.",
  },
];

export const fullSystemBackup = {
  title: "Full System Backup",
  description:
    "StorageCraft ShadowProtect captures full, differential and incremental backups of your entire system, including the entire operating system, applications, configuration settings, and files.",
  features: [
    "Full System Backup: Complete image of your entire system",
    "Differential Backups: Changes since the last full backup",
    "Incremental Backups: Changes since the last backup of any type",
    "Hardware Independent Restore (HIR): Recover entire system state to different hardware",
  ],
};

export const mozyPro = {
  title: "Mozy Pro Cloud Backup",
  description:
    "MozyPro is our preferred cloud-based backup solution for your business. Available for both desktops and servers, it ensures peace of mind that your data is stored and archived in the cloud, ready for when you need it restored.",
  features: [
    "Desktop and server backup solutions",
    "Cloud-based storage and archiving",
    "Can be deployed with Windows Server Backup or ShadowProtect",
    "Essential for business-critical data that cannot be lost",
  ],
};

