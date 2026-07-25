import {
  Cloud,
  FileText,
  Fingerprint,
  HardDrive,
  KeyRound,
  Laptop,
  Lock,
  Mail,
  RefreshCw,
  Share2,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

export const microsoft365slides = [
  {
    title: "Microsoft 365 for Business",
    subtitle:
      "Everything your team needs to work, collaborate, and stay secure — anywhere.",
    buttonText: "FIND OUT MORE >",
    image: "/images/cloud/microsoft-solutions/micrsoft-365/bg-1.png",
    indicatorTitle: "Who is it for? Solutions for Growing Businesses.",
    indicatorSubtitle: "Microsoft 365 Modern workplace",
  },
  {
    title: "Microsoft 365 Licences strategy",
    subtitle:
      "Choosing the right plan to support security, compliance and business growth.",
    buttonText: "FIND OUT MORE >",
    image: "/images/cloud/microsoft-solutions/micrsoft-365/bg-2.png",
    indicatorTitle: "Strategic Licensing & Business Alignment",
    indicatorSubtitle: "Choosing the right plan for security and growth",
  },
  {
    title: "Microsoft 365 Team Collaboration Tools",
    subtitle:
      "Empowering Team Collaboration with Microsoft 365, (Email. File sharing, chat and more)",
    buttonText: "FIND OUT MORE >",
    image: "/images/cloud/microsoft-solutions/micrsoft-365/bg-3.png",
    indicatorTitle: "Collaboration & Productivity Tools",
    indicatorSubtitle: "Email, chat, meetings & file sharing",
  },
  {
    title: "Microsoft Copilot for Microsoft 365",
    subtitle: "AI built into the tools your team already uses",
    buttonText: "FIND OUT MORE >",
    image: "/images/cloud/microsoft-solutions/micrsoft-365/bg-4.png",
    indicatorTitle: "AI-Powered Business Innovation",
    indicatorSubtitle: "Smarter workflows with intelligent automation",
  },
  {
    title: "Cyber Security & Advanced features",
    subtitle: "Protect users, devices, and data in the workplace",
    buttonText: "FIND OUT MORE >",
    image: "/images/cloud/microsoft-solutions/micrsoft-365/bg-5.png",
    indicatorTitle: "Cyber Security & Data Protection",
    indicatorSubtitle: "Defence against modern business threats",
  },
];

export const m365HeroData = {
  title1: "Everything your team needs to",
  title2: "Microsoft 365",
  description1:
    "Work, collaborate, and stay secure — anywhere. Microsoft 365 is a cloud-based productivity and security platform designed to support modern businesses of all sizes.",
  bgImage: "/images/cloud/microsoft-365/hero.jpg",
  actionButtons: [
    { label: "Overview", href: "#overview" },
    { label: "Features", href: "#features" },
    { label: "Plans", href: "#plans" },
  ],
};

export const m365Overview = {
  label: "Microsoft 365 for Business",
  title: "Who is it for?",
  description:
    "Microsoft 365 is a cloud-based productivity and collaboration platform that includes Microsoft Word, Excel, PowerPoint, Outlook, Teams, SharePoint, and advanced security tools. It enables businesses to work securely from anywhere.",
  description2:
    "The platform includes business-class email, cloud file storage, and real-time collaboration tools that allow teams to communicate, share documents, and collaborate seamlessly. With tools like Microsoft Teams, SharePoint Online, and OneDrive, staff can work together effectively across office, remote, and hybrid environments.",
  description3:
    "Microsoft 365 also delivers built-in cyber security, identity management, and device management to help protect users, devices, and business data. By combining productivity, collaboration, and security into a single platform, Microsoft 365 helps businesses work smarter, stay connected, and remain protected as they grow.",
  apps: [
    { name: "Outlook", icon: Mail },
    { name: "Word", icon: FileText },
    { name: "Excel", icon: FileText },
    { name: "PowerPoint", icon: FileText },
    { name: "OneDrive", icon: HardDrive },
    { name: "Teams", icon: Users },
    { name: "SharePoint", icon: Share2 },
    { name: "Exchange", icon: Mail },
  ],
};

export const m365Bundles = [
  {
    name: "Basic",
    features: ["Exchange", "OneDrive", "SharePoint", "Teams"],
  },
  {
    name: "Standard",
    features: [
      "Exchange",
      "OneDrive",
      "SharePoint",
      "Teams",
      "Outlook",
      "Word",
      "Excel",
      "PowerPoint",
      "Publisher",
      "Access",
      "Azure",
    ],
  },
  {
    name: "Premium",
    features: [
      "Exchange",
      "OneDrive",
      "SharePoint",
      "Teams",
      "Outlook",
      "Word",
      "Excel",
      "PowerPoint",
      "Publisher",
      "Access",
      "Azure P2",
      "Intune",
    ],
  },
];

export const m365KeyFeatures = [
  {
    title: "Work from Anywhere",
    desc: "Access your emails, files, and apps securely from home, the office, or on the road using any internet-connected device at any time.",
    icon: Laptop,
  },
  {
    title: "Professional Business Email",
    desc: "Use a reliable business email with shared calendars, contacts, and scheduling tools that help teams stay organised, professional, and connected every day.",
    icon: Mail,
  },
  {
    title: "Cloud File Storage",
    desc: "Store files safely in the cloud and access them instantly from any device, without USB drives, emails, or worrying about losing important documents.",
    icon: Cloud,
  },
  {
    title: "Easy File Sharing",
    desc: "Share files and folders with coworkers using simple links, control access permissions, and always work from the latest version without confusion.",
    icon: Share2,
  },
  {
    title: "Team Chat & Meetings",
    desc: "Chat, call, video meet, and collaborate with your team in one place, reducing emails and making communication faster, clearer, and more productive.",
    icon: Users,
  },
  {
    title: "Office Apps Included",
    desc: "Microsoft 365 Cloud includes Word, Excel, PowerPoint, and other popular Office apps allowing employees to create, edit, and share documents anywhere.",
    icon: FileText,
  },
  {
    title: "Automatic File Saving",
    desc: "Your work saves automatically while you edit, protecting files from crashes, mistakes, or accidental deletion, and allowing easy recovery when needed.",
    icon: RefreshCw,
  },
  {
    title: "Works on All Devices",
    desc: "Use the same apps and files on your desktop, laptop, tablet, or phone, with everything syncing automatically across all your devices.",
    icon: Smartphone,
  },
  {
    title: "Built-In Security",
    desc: "Protect accounts and data with secure sign-ins, activity monitoring, and safeguards that help keep business information safe from unauthorised access.",
    icon: ShieldCheck,
  },
];

export const m365CollaborationTools = [
  "Microsoft Teams",
  "SharePoint Online",
  "OneDrive for Business",
  "Microsoft Planner",
  "Microsoft To Do",
  "Microsoft Loop",
  "Viva Engage",
  "Microsoft Whiteboard",
];

export const m365CollaborationDescription =
  "Microsoft 365 team collaboration tools empower organisations to work smarter, faster, and more securely in today's modern workplace. At the centre is Microsoft Teams, the hub for chat, video meetings, file sharing, and real-time communication. Supporting this is SharePoint Online, which provides structured document management, intranet sites, and team workspaces, while OneDrive for Business enables secure personal file storage and seamless co-authoring.";

export const m365SecurityFeatures = [
  {
    title: "Device & User Protection",
    desc: "Protect users, devices, and data in the workplace with advanced threat protection.",
    icon: ShieldCheck,
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Add an extra layer of security with MFA to prevent unauthorised access to accounts.",
    icon: KeyRound,
  },
  {
    title: "Conditional Access Policies",
    desc: "Control who can access what, when, and from where with zero-trust access controls.",
    icon: Lock,
  },
  {
    title: "Endpoint Security",
    desc: "Ensure only trusted and secure devices can access corporate systems.",
    icon: Shield,
  },
  {
    title: "Data Protection",
    desc: "Classify, encrypt, and prevent the loss of sensitive information across your organisation.",
    icon: Fingerprint,
  },
];

export const m365FAQs = [
  {
    question: "What is Microsoft 365?",
    answer:
      "Microsoft 365 is a cloud-based productivity and collaboration platform that includes Microsoft Word, Excel, PowerPoint, Outlook, Teams, SharePoint, and advanced security tools. It enables businesses to work securely from anywhere.",
  },
  {
    question: "What is included in Microsoft 365 for business?",
    answer:
      "Microsoft 365 business plans include email hosting (Exchange Online), cloud file storage (OneDrive & SharePoint), Microsoft Teams collaboration, desktop Office apps, device management, and built-in cybersecurity features.",
  },
  {
    question: "Is Microsoft 365 secure?",
    answer:
      "Yes. Microsoft 365 includes multi-factor authentication (MFA), conditional access policies, encryption, data loss prevention (DLP), and Microsoft Defender security tools to protect business data.",
  },
  {
    question: "Can Microsoft 365 support remote work?",
    answer:
      "Absolutely. Microsoft 365 is designed for hybrid and remote work environments, allowing secure access to files, email, and collaboration tools from any device.",
  },
  {
    question:
      "What is the difference between Business Basic, Standard, and Premium?",
    answer:
      "Business Basic includes web apps and email, Business Standard adds desktop Office apps, and Business Premium includes advanced security and device management with Microsoft Intune.",
  },
  {
    question: "Does Microsoft 365 include backup?",
    answer:
      "Microsoft provides data retention, but many businesses implement third-party backup solutions for enhanced protection and recovery.",
  },
  {
    question: "Can Microsoft 365 scale with business growth?",
    answer:
      "Yes. Microsoft 365 is highly scalable, making it suitable for small businesses through to enterprise organisations.",
  },
];

