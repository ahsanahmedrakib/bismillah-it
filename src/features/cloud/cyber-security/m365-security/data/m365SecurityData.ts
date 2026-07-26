import {
  AlertTriangle,
  Eye,
  FileCheck,
  Key,
  Lock,
  Mail,
  RefreshCw,
  Server,
  Settings,
  Shield,
  Smartphone,
  Users,
} from "lucide-react";

export const m365SecurityHeroData = {
  title1: "Microsoft 365 Cyber Security",
  title2: "Business Protection",
  description1:
    "In today's digital-first world, cybersecurity is no longer optional—it's a necessity. Businesses of all sizes face increasingly sophisticated threats, making robust security solutions critical for safeguarding sensitive data. Microsoft 365 stands out as a comprehensive suite designed to not only enhance productivity but also provide top-tier cybersecurity features.",
  bgImage: "/images/it-support/cyber-security/cloud-and-network/hero.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "FEATURES", href: "#features" },
    { label: "OUR APPROACH", href: "#approach" },
  ],
};

export const m365SecurityOverview = {
  label: "Microsoft 365 Cyber Security",
  title: "Why Microsoft 365 Cyber Security Matters",
  description:
    "Microsoft 365 is a powerful suite of productivity tools, but its widespread use makes it a prime target for cyberattacks. Without robust cybersecurity measures, businesses face risks such as data breaches, phishing scams, malware infections, and compliance violations.",
  description2:
    "Cybersecurity in Microsoft 365 is essential to protect your organisation's sensitive data, maintain business continuity, and meet regulatory requirements. The built-in security features provide comprehensive protection across identities, devices, applications, and data.",
  description3:
    "Microsoft 365 security solutions help businesses strengthen their cyber posture, meet compliance requirements, and operate securely in today's cloud-first world.",
};

export const essentialFeatures = [
  {
    title: "Identity & Access Protection",
    desc: "Multi-Factor Authentication (MFA), Conditional Access policies, and strong password enforcement significantly reduce the risk of account compromise.",
    icon: Key,
  },
  {
    title: "Threat Protection",
    desc: "Microsoft Defender provides advanced antivirus and endpoint protection against malware, ransomware, and phishing attacks.",
    icon: Shield,
  },
  {
    title: "Data Encryption",
    desc: "Secure information both at rest and in transit across email, files, and collaboration platforms.",
    icon: Lock,
  },
  {
    title: "Email Threat Protection",
    desc: "Advanced phishing protection, malware detection, and real-time threat intelligence for email communications.",
    icon: Mail,
  },
  {
    title: "Device Management",
    desc: "Microsoft Intune enables mobile device management (MDM), compliance enforcement, and secure access controls.",
    icon: Smartphone,
  },
  {
    title: "Data Loss Prevention",
    desc: "DLP policies automatically detect and prevent unauthorised sharing of confidential data across email, SharePoint, and OneDrive.",
    icon: FileCheck,
  },
];

export const advancedFeatures = [
  {
    title: "Conditional Access Policies",
    desc: "Enable organisations to enforce security rules based on user roles, device compliance, location, and risk level, significantly reducing the impact of compromised credentials.",
    icon: Settings,
  },
  {
    title: "Advanced Threat Protection",
    desc: "ATP helps identify and respond to zero-day attacks and sophisticated threats with real-time threat intelligence.",
    icon: AlertTriangle,
  },
  {
    title: "Privileged Access Management",
    desc: "Protect admin accounts using role-based access controls and enhanced monitoring to prevent unauthorised access.",
    icon: Eye,
  },
  {
    title: "Centralised Audit Logging",
    desc: "Continuous monitoring and security reporting provide strong visibility and control across all endpoints.",
    icon: Server,
  },
];

export const passwordPolicy = {
  title: "Password Policy & Identity Security",
  description:
    "The password policy in Microsoft 365, managed through Azure Active Directory (Azure AD), enforces strong security measures to protect user accounts.",
  features: [
    "Supports password complexity requirements including length, special characters, and expiration periods",
    "Self-service password reset (SSPR) allows users to securely reset passwords without IT intervention",
    "Azure AD Password Protection prevents weak or commonly used passwords using global banned password lists",
    "Multi-Factor Authentication (MFA) and Conditional Access Policies for added security",
    "Aligns with ACSC Essential 8, ensuring compliance and protection against password-related attacks",
  ],
};

export const dataProtection = {
  title: "Data Protection & Compliance",
  description:
    "Microsoft 365 data protection is built on enterprise-grade security designed to safeguard business information across emails, files, devices, and cloud applications.",
  features: [
    "Microsoft Purview protects sensitive data with encryption, Data Loss Prevention (DLP), and compliance controls",
    "Azure Active Directory (Entra ID) secures identity management with Multi-Factor Authentication (MFA)",
    "Microsoft Sentinel provides Security Information and Event Management (SIEM) for real-time threat detection",
    "Aligns with frameworks like ACSC Essential 8, ensuring secure and compliant cloud operations",
    "Supports compliance with ISO 27001, SOC 2, and HIPAA requirements",
  ],
};

export const essentialEight = {
  title: "ACSC Essential Eight Alignment",
  description:
    "The ACSC Essential Eight, developed by the Australian Cyber Security Centre, is a proven framework designed to help organisations protect against cyber attacks, ransomware, and data breaches.",
  description2:
    "It focuses on practical, high-impact controls that significantly reduce cybersecurity risk when implemented correctly. Microsoft 365 security features align with these controls to help businesses achieve compliance.",
  features: [
    {
      title: "Application Control",
      desc: "Restrict unauthorised software execution",
      icon: Shield,
    },
    {
      title: "Patch Applications",
      desc: "Address known vulnerabilities",
      icon: RefreshCw,
    },
    {
      title: "Macro Settings",
      desc: "Configure Microsoft Office macro settings to prevent malware delivery",
      icon: Settings,
    },
    {
      title: "User Hardening",
      desc: "User application hardening to reduce attack surface",
      icon: Lock,
    },
    {
      title: "Admin Privileges",
      desc: "Restrict administrative privileges to limit potential damage",
      icon: Key,
    },
    {
      title: "Patch Operating Systems",
      desc: "Maintain security integrity",
      icon: Server,
    },
    {
      title: "Multi-Factor Authentication",
      desc: "Verify user identities",
      icon: Users,
    },
    {
      title: "Regular Backups",
      desc: "Ensure data recovery capability",
      icon: FileCheck,
    },
  ],
};

export const tsitServices = [
  "Microsoft 365 security assessments and reviews",
  "Conditional Access and MFA configuration",
  "Microsoft Defender deployment and optimisation",
  "Data Loss Prevention (DLP) policy implementation",
  "ACSC Essential Eight alignment and compliance",
  "Ongoing monitoring and security management",
];

export const m365SecurityUsefulLinks = [
  {
    title: "Microsoft Defender for Business",
    description:
      "Enterprise-grade endpoint security solution designed specifically for small and medium-sized businesses.",
    href: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-for-business",
  },
  {
    title: "Microsoft Entra ID",
    description:
      "Identity and access management solution with MFA, Conditional Access, and identity protection.",
    href: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id",
  },
  {
    title: "Microsoft Purview",
    description:
      "Data governance and compliance solution for protecting sensitive information across your organisation.",
    href: "https://www.microsoft.com/en-us/security/business/sensitivity-labels",
  },
  {
    title: "ACSC Essential Eight",
    description:
      "Australian Cyber Security Centre framework for protecting against cyber attacks and data breaches.",
    href: "https://www.cyber.gov.au/business-and-organisations/essential-cyber-security/essential-eight",
  },
];

export const m365SecurityFaqs = [
  {
    question: "What is Microsoft 365 Cyber Security?",
    answer:
      "Microsoft 365 Cyber Security refers to the comprehensive security features built into Microsoft 365 to protect users, devices, email, and business data from cyber threats. It includes tools like Microsoft Defender, Multi-Factor Authentication, Conditional Access policies, and Data Loss Prevention.",
  },
  {
    question: "Do I need additional security if I use Microsoft 365?",
    answer:
      "While Microsoft 365 includes robust built-in security features, proper configuration is essential. Many businesses benefit from expert guidance to ensure security policies are correctly set up, optimised for their needs, and aligned with frameworks like the ACSC Essential Eight.",
  },
  {
    question: "What is Microsoft Defender for Business?",
    answer:
      "Microsoft Defender for Business is an endpoint security solution included in Microsoft 365 Business Premium. It provides enterprise-grade protection including antivirus, Endpoint Detection and Response (EDR), and automated investigation and remediation to protect against ransomware, phishing, and malware.",
  },
  {
    question: "How does Conditional Access work?",
    answer:
      "Conditional Access policies in Microsoft 365 allow organisations to enforce security rules based on specific conditions such as user role, device compliance, location, and risk level. This helps prevent unauthorised access and strengthens identity protection.",
  },
  {
    question: "What is the ACSC Essential Eight?",
    answer:
      "The ACSC Essential Eight is a framework developed by the Australian Cyber Security Centre that outlines eight mitigation strategies to protect against cyber attacks. Microsoft 365 security features align with these controls to help businesses achieve compliance and improve their security posture.",
  },
  {
    question: "How can Total Solutions IT help with Microsoft 365 security?",
    answer:
      "Total Solutions IT provides comprehensive Microsoft 365 security services including security assessments, Defender configuration, Conditional Access setup, DLP implementation, and ongoing monitoring. We help businesses align with the ACSC Essential Eight and maintain a strong security posture.",
  },
];

export const securityAreas = [
  {
    title: "Protect Users",
    desc: "Multi-Factor Authentication, Conditional Access, and identity protection to safeguard user accounts from compromise.",
    icon: Users,
  },
  {
    title: "Protect Devices",
    desc: "Endpoint security with Microsoft Defender for Business, device compliance, and Intune device management.",
    icon: Smartphone,
  },
  {
    title: "Protect Data",
    desc: "Data Loss Prevention, encryption, and sensitivity labels to safeguard sensitive business information.",
    icon: FileCheck,
  },
  {
    title: "Protect Email",
    desc: "Advanced phishing protection, anti-malware, and email encryption to secure communications.",
    icon: Mail,
  },
];

