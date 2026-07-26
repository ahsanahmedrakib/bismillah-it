import {
  Settings,
  Users,
  Shield,
  Mail,
  Globe,
  Smartphone,
  FileCheck,
  Lock,
  Zap,
  Building,
  Target,
} from "lucide-react";

export const emailSignatureHeroData = {
  title1: "CodeTwo Email Signature",
  title2: "Management",
  description1:
    "Centrally manage professional email signatures, legal disclaimers, banners and automatic replies across your Microsoft 365 environment.",
  bgImage: "/images/cloud/services/email-signature/bg.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "FEATURES", href: "#features" },
    { label: "OUR APPROACH", href: "#approach" },
  ],
};

export const emailSignatureOverview = {
  label: "CodeTwo Email Signatures 365",
  title: "What is CodeTwo Email Signatures 365?",
  description:
    "CodeTwo Email Signatures 365 helps businesses centrally manage email signatures, legal disclaimers, marketing banners and automatic replies across Microsoft 365. It works with Outlook, Apple devices, mobiles and other email apps, giving organisations a consistent and professional brand experience on every email.",
  description2:
    "With cloud-based management, flexible signature rules, and support for Entra ID attributes, CodeTwo makes signature management easier, more scalable, and more professional.",
  description3:
    "CodeTwo Email Signatures 365 is a powerful cloud-based email signature management solution for Microsoft 365 that allows organisations to centrally manage email signatures, legal disclaimers, marketing banners and automatic replies across the entire business. Instead of relying on employees to manually update their own Outlook signatures, administrators can control everything from a centralised web-based management portal, ensuring consistent branding and professional communication in every email sent.",
  description4:
    "This solution works across Outlook, webmail and mobile devices, allowing businesses to maintain a uniform signature regardless of the device being used. CodeTwo also integrates with Microsoft Entra ID, automatically populating signatures with user information such as names, job titles, departments and contact details.",
};

export const coreFeatures = [
  {
    title: "Centralised Management",
    desc: "Control signatures for the whole organisation from a single web-based portal. Administrators can update signatures for the entire organisation instantly without needing to configure each user's Outlook settings.",
    icon: Settings,
  },
  {
    title: "Consistent Branding",
    desc: "Ensure consistent company branding across every email sent by employees. Maintain a uniform signature regardless of the device being used.",
    icon: Building,
  },
  {
    title: "Automatic User Details",
    desc: "Signatures automatically include user details pulled from Microsoft Entra ID such as names, job titles, departments and contact information.",
    icon: Users,
  },
  {
    title: "Marketing Banners",
    desc: "Add marketing banners and promotional messaging in signatures to support campaigns and announcements.",
    icon: Target,
  },
  {
    title: "Cross-Platform Support",
    desc: "Supports Windows, Mac, Outlook on the web, iOS, Android and other email apps, depending on the mode used.",
    icon: Smartphone,
  },
  {
    title: "Automatic Replies",
    desc: "Centrally manage out-of-office messages and branded auto replies across the organisation.",
    icon: Mail,
  },
];

export const businessScenarios = [
  {
    title: "Company-Wide Standardisation",
    desc: "Maintain consistent branding across all emails with standardised signatures for the entire organisation.",
    icon: Building,
  },
  {
    title: "Marketing Campaigns",
    desc: "Use promotional banners and announcements in email signatures to support marketing campaigns.",
    icon: Target,
  },
  {
    title: "Centralised IT Management",
    desc: "Manage signatures, disclaimers and updates from a single platform, reducing administrative burden.",
    icon: Settings,
  },
  {
    title: "Automatic User Details",
    desc: "Populate signatures automatically from Microsoft Entra ID attributes like names, job titles and departments.",
    icon: Users,
  },
  {
    title: "Cross-Device Consistency",
    desc: "Ensure signatures appear correctly regardless of the device used - desktop, web or mobile.",
    icon: Globe,
  },
  {
    title: "Compliance & Legal",
    desc: "Automatically add compliance and legal disclaimers to outbound emails.",
    icon: Shield,
  },
];

export const signatureModes = [
  {
    title: "Server-Side (Cloud)",
    desc: "In this mode, a signature is added after an email is sent and does not require the installation of the CodeTwo Signatures add-in. Signatures are added to emails sent from any device or mail application.",
    image: "/images/cloud/services/email-signature/section-1.jpg",
  },
  {
    title: "Client-Side (Outlook)",
    desc: "A signature is added as you type an email. This mode requires installation of the CodeTwo Signatures add-in to add signatures directly to Outlook and Outlook Web App.",
    image: "/images/cloud/services/email-signature/section-2.png",
  },
  {
    title: "Combo Mode",
    desc: "This mode provides the best of both types of processing (client-side and server-side). It requires you to set up Office 365 connectors and the CodeTwo Signatures add-in. Client-side signatures will be added to messages created in Outlook desktop and OWA, and server-side signatures will be added to emails sent from other email clients including mobile devices.",
    image: "/images/cloud/services/email-signature/section-3.png",
  },
];

export const keyBenefits = [
  {
    title: "Cloud-Based Solution",
    desc: "It is cloud-based, so there is no infrastructure to deploy or maintain on-premises. The deployment process is fully automated and based on wizards.",
    icon: Globe,
  },
  {
    title: "Centralised Management",
    desc: "It centralises the management of email signatures and disclaimer additions to Microsoft 365 organisations - one person can manage all signatures.",
    icon: Settings,
  },
  {
    title: "Easy Configuration",
    desc: "It is easy to configure and provision. Just authorise with your Microsoft 365 global admin credentials and you'll be ready to create your first email signature.",
    icon: Zap,
  },
  {
    title: "Device Independent",
    desc: "CodeTwo signatures are not device-specific and work on Windows, Mac, mobile devices, and tablets.",
    icon: Smartphone,
  },
  {
    title: "Flexible Templates",
    desc: "It provides a flexible email signature editor with web-based HTML templates, signature rule automation, and predefined signature layouts.",
    icon: FileCheck,
  },
  {
    title: "Security & Compliance",
    desc: "High level of security and compliance with ISO/IEC 27001 and ISO/IEC 27018 certifications. It is the only vendor with a modern signature add-in for Outlook and Outlook Web App.",
    icon: Lock,
  },
];

export const tsitServices = [
  "CodeTwo Email Signatures 365 deployment and configuration",
  "Microsoft Entra ID integration for automatic user details",
  "Signature template design and branding setup",
  "Signature rule configuration for different scenarios",
  "Outlook add-in deployment across the organisation",
  "Ongoing support and signature management",
];

export const emailSignatureUsefulLinks = [
  {
    title: "CodeTwo Email Signatures 365",
    description:
      "The official CodeTwo website for email signature management solutions for Microsoft 365.",
    href: "https://www.codetwo.com/email-signatures/",
  },
  {
    title: "CodeTwo Getting Started",
    description:
      "Learn how to get started with CodeTwo Email Signatures 365 for your Microsoft 365 organisation.",
    href: "https://www.codetwo.com/userguide/email-signatures-for-office-365/first-steps.htm",
  },
  {
    title: "CodeTwo Pricing",
    description:
      "View pricing plans and licensing options for CodeTwo Email Signatures 365.",
    href: "https://www.codetwo.com/email-signatures/pricing",
  },
  {
    title: "CodeTwo Free Trial",
    description:
      "Start a 14-day free trial of CodeTwo Email Signatures 365 with no credit card required.",
    href: "https://login.codetwo.com/account/create",
  },
];

export const emailSignatureFaqs = [
  {
    question: "What is CodeTwo Email Signatures 365?",
    answer:
      "It is a cloud-based email signature management platform for Microsoft 365 that lets organisations centrally manage signatures, disclaimers, banners and automatic replies.",
  },
  {
    question: "Does it work with Microsoft 365?",
    answer:
      "Yes. It is built for Microsoft 365 and integrates with Microsoft 365 mail flow and Outlook-based deployment options.",
  },
  {
    question: "What devices are supported?",
    answer:
      "CodeTwo signatures work across Windows, Mac, Outlook on the web, iOS, Android and other email apps, depending on the signature mode used.",
  },
  {
    question: "How does the server-side mode work?",
    answer:
      "In server-side mode, signatures are added after an email is sent. This does not require the installation of any add-in and works with emails sent from any device or mail application.",
  },
  {
    question: "How does the client-side mode work?",
    answer:
      "In client-side mode, signatures are added as you type an email. This requires installation of the CodeTwo Signatures add-in for Outlook and Outlook Web App.",
  },
  {
    question: "What is the combo mode?",
    answer:
      "Combo mode provides the best of both processing types. Client-side signatures are added to messages created in Outlook desktop and OWA, while server-side signatures are added to emails sent from other email clients including mobile devices.",
  },
  {
    question: "How are user details populated in signatures?",
    answer:
      "CodeTwo integrates with Microsoft Entra ID (Azure AD) to automatically populate signatures with user information such as names, job titles, departments and contact details.",
  },
  {
    question: "How can Total Solutions IT help with CodeTwo?",
    answer:
      "Total Solutions IT provides comprehensive CodeTwo Email Signatures 365 services including deployment, configuration, template design, rule setup, and ongoing support to ensure your organisation maintains professional and consistent email signatures.",
  },
];
