import {
  ArrowRight,
  CheckCircle,
  Cloud,
  FileCheck,
  Lock,
  Mail,
  MessageSquare,
  Monitor,
  Settings,
  Shield,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";

export const modernWorkplaceHeroData = {
  title1: "Microsoft 365 Modern",
  title2: "Workplace",
  description1:
    "Microsoft 365 is a cloud-based productivity and security platform designed to support modern businesses of all sizes. It combines familiar applications such as Outlook, Word, Excel, and PowerPoint with intelligent cloud services that enable secure, flexible, and efficient work from anywhere.",
  bgImage: "/images/cloud/services/modern-workplace/bg.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "FEATURES", href: "#features" },
    { label: "OUR APPROACH", href: "#approach" },
  ],
};

export const modernWorkplaceOverview = {
  label: "Microsoft 365 Modern Workplace",
  title: "What is Microsoft 365 Modern Workplace?",
  description:
    "Microsoft 365 Modern Workplace is a cloud-first approach to how businesses work, collaborate, and stay secure in today's digital environment. Built on Microsoft 365, it brings together productivity tools, collaboration platforms, security, and device management into a single, integrated solution.",
  description2:
    "The modern workplace enables employees to work from anywhere, collaborate in real time, and securely access business data across multiple devices. Tools such as Microsoft Teams, SharePoint, OneDrive, and Exchange Online support seamless communication, file sharing, and teamwork.",
  description3:
    "Security and management are core components of the modern workplace. With identity protection, multi-factor authentication, conditional access, and device management through Intune, businesses can protect users, devices, and data without relying on traditional on-premises infrastructure.",
  description4:
    "By combining productivity, flexibility, cyber security, and scalability, Microsoft 365 Modern Workplace helps organisations improve efficiency, support remote work, and adapt confidently to changing business needs.",
};

export const coreApps = [
  {
    title: "Microsoft Outlook",
    desc: "Professional email hosting with advanced security, shared calendars, and seamless integration across all devices.",
    icon: Mail,
  },
  {
    title: "Microsoft Teams",
    desc: "Secure collaboration platform for chat, video meetings, calling, file sharing, and teamwork in one place.",
    icon: MessageSquare,
  },
  {
    title: "SharePoint Online",
    desc: "Secure document management, company intranets, and team collaboration sites for seamless content sharing.",
    icon: FileCheck,
  },
  {
    title: "OneDrive",
    desc: "Personal cloud storage for files and backups, enabling access from anywhere on any device.",
    icon: Cloud,
  },
  {
    title: "Word, Excel, PowerPoint",
    desc: "The complete Office suite for creating, editing, and sharing documents, spreadsheets, and presentations.",
    icon: FileCheck,
  },
  {
    title: "Mobile Apps",
    desc: "Access email, files, and meetings from anywhere using smartphone and tablet apps.",
    icon: Smartphone,
  },
];

export const advancedFeatures = [
  {
    title: "Microsoft Intune",
    desc: "Manage and secure company devices such as laptops, desktops, and mobile phones from a central cloud platform. Enforce security policies, compliance requirements, and conditional access controls across Windows, macOS, iOS, and Android devices.",
    icon: Monitor,
  },
  {
    title: "Microsoft Defender",
    desc: "Advanced cyber-security protection against threats like malware, ransomware, and phishing attacks. Real-time threat detection and response across all endpoints.",
    icon: Shield,
  },
  {
    title: "Microsoft Entra ID",
    desc: "Identity protection with multi-factor authentication (MFA), conditional access policies, and advanced sign-in protection to secure user logins.",
    icon: Lock,
  },
  {
    title: "Power Platform",
    desc: "Power Automate and Power Apps to automate workflows and create custom business applications, improving efficiency and reducing manual tasks.",
    icon: Zap,
  },
];

export const modernWorkplaceBenefits = [
  {
    title: "Work From Anywhere",
    desc: "Enable employees to work from anywhere, collaborate in real time, and securely access business data across multiple devices.",
    icon: Cloud,
  },
  {
    title: "Enhanced Collaboration",
    desc: "Microsoft Teams brings chat, video meetings, calling, file sharing, and teamwork into one secure workspace.",
    icon: Users,
  },
  {
    title: "Advanced Security",
    desc: "Identity protection, multi-factor authentication, conditional access, and device management protect users, devices, and data.",
    icon: Shield,
  },
  {
    title: "Device Management",
    desc: "Microsoft Intune enables centralised device management for Windows, macOS, iOS, and Android from a single cloud console.",
    icon: Smartphone,
  },
  {
    title: "Scalability",
    desc: "Cloud-based infrastructure scales with your business needs without requiring traditional on-premises hardware.",
    icon: Settings,
  },
  {
    title: "Business Continuity",
    desc: "Reliable cloud services ensure your business operations continue with minimal downtime during unexpected events.",
    icon: CheckCircle,
  },
];

export const modernWorkplaceServices = [
  {
    title: "Migration",
    desc: "As businesses grow, they inevitably need to upgrade their IT infrastructure. Fortunately, you can migrate all your Microsoft 365 business data and services from your old system to a new one with our Microsoft 365 Consulting services. However, migrations don't always go as smoothly as planned. Total Solutions IT provides a comprehensive Office 365 migration service, helping clients transfer data between networks and systems, regardless of how old their current setup is.",
    icon: ArrowRight,
  },
  {
    title: "Management",
    desc: "One of the key advantages of cloud-based software is the ability to manage it from anywhere. Total Solutions IT offers guidance and support in setting up and managing your Office 365 plan. Microsoft's SharePoint Online fosters collaboration among different teams, even when they can't be physically together. We can help you set up SharePoint Online and maximize its potential as a collaborative tool.",
    icon: Settings,
  },
  {
    title: "Security",
    desc: "If you're processing sensitive data through Microsoft 365 apps, security is paramount. While Microsoft 365 Business Premium includes numerous security and compliance features, navigating them can be challenging without experience. Total Solutions IT can audit your Office 365 setup, patch security gaps, and configure Azure Active Directory to ensure appropriate access controls and authentication are in place. We also assist with migrating from Outlook to Microsoft Exchange Online, ensuring your communications are private and secure.",
    icon: Shield,
  },
];

export const tsitServices = [
  "Microsoft 365 migration and tenant setup",
  "Microsoft Teams collaboration and communication",
  "SharePoint and OneDrive document management",
  "Security configuration including Conditional Access and Microsoft Defender",
  "Device management with Microsoft Intune",
  "Improving Microsoft Secure Score and cyber security posture",
];

export const modernWorkplaceUsefulLinks = [
  {
    title: "Microsoft 365",
    description:
      "The productivity cloud that brings together best-in-class Office apps with powerful cloud services.",
    href: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-basic",
  },
  {
    title: "Microsoft Teams",
    description:
      "Secure collaboration platform for chat, video meetings, calling, and file sharing.",
    href: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
  },
  {
    title: "Microsoft Intune",
    description:
      "Cloud-based endpoint management and security solution for modern workplaces.",
    href: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-for-business",
  },
  {
    title: "Microsoft Defender",
    description:
      "Advanced cyber-security protection against malware, ransomware, and phishing attacks.",
    href: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-for-business",
  },
];

export const modernWorkplaceFaqs = [
  {
    question: "What is Microsoft 365 Modern Workplace?",
    answer:
      "Microsoft 365 Modern Workplace is a cloud-first approach to how businesses work, collaborate, and stay secure. It brings together productivity tools, collaboration platforms, security, and device management into a single, integrated solution built on Microsoft 365.",
  },
  {
    question: "What applications are included in Microsoft 365?",
    answer:
      "Microsoft 365 includes Outlook, Word, Excel, PowerPoint, Teams, SharePoint, OneDrive, and advanced security tools. It also includes device management through Intune and identity protection through Microsoft Entra ID.",
  },
  {
    question: "Can I work from anywhere with Microsoft 365?",
    answer:
      "Yes. Microsoft 365 enables employees to work from anywhere, collaborate in real time, and securely access business data across multiple devices. All tools are cloud-based and accessible from any location with internet access.",
  },
  {
    question: "How does Microsoft 365 protect my business data?",
    answer:
      "Microsoft 365 includes multi-factor authentication, conditional access policies, device management through Intune, and advanced threat protection with Microsoft Defender. These features work together to protect users, devices, and data without relying on traditional on-premises infrastructure.",
  },
  {
    question: "What is Microsoft Intune?",
    answer:
      "Microsoft Intune is a cloud-based endpoint management solution that enables organisations to manage devices, applications, and security policies from a central console. It supports Windows, macOS, iOS, and Android devices.",
  },
  {
    question: "How can Total Solutions IT help with Microsoft 365?",
    answer:
      "Total Solutions IT provides comprehensive Microsoft 365 services including migration, setup, security configuration, device management, and ongoing support. We help businesses plan, deploy, and optimise their Microsoft 365 environment to improve productivity, security, and collaboration.",
  },
];

export const workplacePlatforms = [
  {
    title: "Email & Calendaring",
    desc: "Exchange Online provides reliable cloud email and calendaring for secure business communications.",
    image: "/images/cloud/services/modern-workplace/section-3.jpg",
  },
  {
    title: "Document Management",
    desc: "SharePoint enables secure document management and company intranets for seamless content sharing.",
    image: "/images/cloud/services/modern-workplace/section-10.jpg",
  },
  {
    title: "Cloud Storage",
    desc: "OneDrive provides personal cloud storage for files and backups, enabling access from anywhere.",
    image: "/images/cloud/services/modern-workplace/section-7.jpg",
  },
  {
    title: "Team Collaboration",
    desc: "Microsoft Teams brings chat, video meetings, and collaboration together in one platform.",
    image: "/images/cloud/services/modern-workplace/section-2.jpg",
  },
];

