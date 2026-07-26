import {
  BarChart3,
  CheckCircle,
  Database,
  Eye,
  FileCheck,
  Globe,
  Key,
  Lock,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

export const secureScoreHeroData = {
  title1: "Microsoft Secure Score",
  title2: "Security Posture",
  description1:
    "Microsoft Secure Score is a built-in security measurement tool that helps organizations identify risks, implement recommended security controls, and continuously improve their Microsoft 365 security posture. By reviewing your Secure Score and applying Microsoft's best-practice recommendations, businesses can reduce vulnerabilities, improve compliance, and gain greater visibility into their organization's security health.",
  bgImage: "/images/cloud/cyber-security/secure-score/bg.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "IMPROVE YOUR SCORE", href: "#improve" },
  ],
};

export const secureScoreOverview = {
  label: "Microsoft Secure Score",
  title: "What is Microsoft Secure Score?",
  description:
    "Microsoft Secure Score is a built-in security measurement tool within Microsoft 365 and Microsoft Defender that helps organisations understand and improve their cybersecurity posture. It provides a numerical score that represents how well your Microsoft 365 environment is protected against common security threats such as phishing, malware, and unauthorised access.",
  description2:
    "The score is calculated based on the security controls and configurations enabled across your Microsoft 365 services. As recommended security settings are implemented, the score increases, giving businesses a clear way to track improvements and identify areas that require attention.",
  description3:
    "Microsoft Secure Score is more than just a number — it provides organisations with a clear and measurable view of their Microsoft 365 security posture. By analysing security configurations across identities, devices, applications, and data, Secure Score highlights areas where improvements can significantly reduce cybersecurity risks.",
};

export const secureScoreBenefits = [
  {
    title: "Visibility",
    desc: "Understand what security controls are enabled and where improvements are needed across your Microsoft 365 environment.",
    icon: Eye,
  },
  {
    title: "Accountability",
    desc: "Assign recommended actions to IT teams and track security improvements over time with measurable goals.",
    icon: Users,
  },
  {
    title: "Continuous Improvement",
    desc: "Monitor how your organisation's security posture evolves as new protections are implemented across your tenant.",
    icon: TrendingUp,
  },
  {
    title: "Benchmarking",
    desc: "Compare your Secure Score against similar organisations and industry standards to understand your competitive position.",
    icon: BarChart3,
  },
  {
    title: "Compliance Alignment",
    desc: "Many recommendations support frameworks such as the ACSC Essential Eight, ISO 27001, NIST, and GDPR.",
    icon: FileCheck,
  },
];

export const secureScoreCategories = [
  {
    title: "Identity Protection",
    desc: "Multi-Factor Authentication (MFA), secure sign-in policies, Conditional Access, Entra ID Protection, password policies, admin account protection, and legacy authentication blocking.",
    icon: Key,
    image: "/images/cloud/cyber-security/secure-score/section-1.jpg",
  },
  {
    title: "Device Security",
    desc: "Compliance policies, endpoint protection, Microsoft Intune device management, device health monitoring, and attack surface reduction rules across Windows, macOS, iOS, and Android.",
    icon: Smartphone,
    image: "/images/cloud/cyber-security/secure-score/section-2.jpg",
  },
  {
    title: "Data Protection",
    desc: "Email security, file protection controls, Data Loss Prevention (DLP), sensitivity labels, SharePoint and OneDrive sharing controls, and Microsoft Purview compliance tools.",
    icon: Database,
    image: "/images/cloud/cyber-security/secure-score/section-3.jpg",
  },
  {
    title: "Application Security",
    desc: "Safe configuration of Microsoft 365 services, Microsoft Defender for Office 365, Safe Links, Safe Attachments, anti-phishing policies, and impersonation protection.",
    icon: Settings,
  },
];

export const secureScoreCalculation = {
  label: "How It Works",
  title: "How is Microsoft Secure Score Calculated?",
  description:
    "Understanding how your Microsoft Secure Score is calculated is key to improving your Microsoft 365 security posture and strengthening your overall cybersecurity framework. Secure Score provides a measurable benchmark to assess how effectively your organisation protects identities, devices, data, and applications.",
  description2:
    "Your Microsoft Secure Score is displayed as a percentage that reflects how your current security configuration compares to Microsoft's recommended best practices. The score is calculated based on the security controls and configurations enabled across your Microsoft 365 services.",
  description3:
    "While Secure Score isn't a compliance tool, improving your score often aligns with regulatory frameworks like ISO 27001, NIST, and GDPR. It's a solid step in your compliance journey. As recommended security settings are implemented, the score increases, giving businesses a clear way to track improvements and identify areas that require attention.",
};

export const howToImprove = [
  {
    title: "Enable Multi-Factor Authentication (MFA) for all users",
    desc: "The single most impactful control in any M365 tenant. Password compromise does not lead to account takeover when MFA is required. Ideally enforced via Conditional Access policy rather than per-user MFA, which gives more granular control and supports phishing-resistant methods.",
    icon: Key,
  },
  {
    title: "Disable legacy authentication protocols",
    desc: "Disable legacy authentication protocols (e.g., POP, IMAP, SMTP basic auth). Legacy protocols do not support MFA and represent a significant attack vector for credential theft and account compromise.",
    icon: Lock,
  },
  {
    title: "Apply Intune compliance policies",
    desc: "Apply Intune compliance policies for device health and encryption. Ensure only trusted and compliant devices can access company systems through device compliance policies and endpoint protection.",
    icon: Smartphone,
  },
  {
    title: "Use Microsoft Defender for Office 365",
    desc: "Use Microsoft Defender for Office 365 to protect against phishing and malware. Deploy Safe Links and Safe Attachments for real-time content scanning and anti-phishing impersonation protections.",
    icon: Shield,
  },
  {
    title: "Deploy Sensitivity Labels",
    desc: "Deploy Sensitivity Labels to classify and protect data across Microsoft 365. Ensure only authorised users access sensitive content, whether stored or shared, supporting zero-trust data protection.",
    icon: Eye,
  },
  {
    title: "Implement Conditional Access",
    desc: "Implement Conditional Access to enforce secure access rules. Define policies that evaluate user identity, device compliance, location, risk level, and application type before granting access.",
    icon: Globe,
  },
  {
    title: "Audit privileged roles",
    desc: "Audit privileged roles and restrict global admin usage. Enforce least-privilege access with Role-Based Access Control (RBAC) and Privileged Identity Management (PIM).",
    icon: Users,
  },
  {
    title: "Enable Safe Links and Safe Attachments",
    desc: "Enable Safe Links and Safe Attachments for real-time content scanning. Protect against phishing attempts, malware, and ransomware attacks across email, Teams, and SharePoint.",
    icon: CheckCircle,
  },
];

export const secureScoreReview = {
  label: "Review Best Practices",
  title: "How Often Should You Review Your Secure Score?",
  description:
    "Regularly reviewing your Microsoft Secure Score is essential for maintaining a strong Microsoft 365 security posture. We recommend reviewing your Secure Score monthly, or weekly for high-risk industries such as healthcare, finance, or legal services.",
  description2:
    "As your environment evolves — adding new users, devices, applications, or licences — new security recommendations may appear. Making Secure Score reviews part of your ongoing IT security checklist ensures continuous improvement and proactive risk management.",
};

export const secureScoreLimitations = [
  "Not all third-party security tools are reflected in your score",
  "Some recommendations may not apply to your licensing or business needs",
  "Secure Score is not a guarantee of protection — it is a baseline framework to guide stronger cybersecurity resilience",
  "Secure Score does not evaluate Conditional Access policy quality, RBAC hygiene, incident response capability, or user awareness",
];

export const tsitServices = [
  "Assess your current Secure Score and identify gaps",
  "Implement best-practice security policies across your tenant",
  "Remediate high-risk items and prioritise critical actions",
  "Monitor improvements over time with regular reviews",
  "Provide Secure Score reports in our quarterly IT reviews",
  "Microsoft 365 security hardening to improve Secure Score and reduce risk",
  "Intune device compliance and endpoint management",
  "Microsoft Defender deployment and monitoring",
];

export const secureScoreUsefulLinks = [
  {
    title: "Microsoft Secure Score Portal",
    description:
      "Access your organisation's Microsoft Secure Score directly in the Microsoft Defender portal to review recommendations and track improvements.",
    href: "https://security.microsoft.com/securescore",
  },
  {
    title: "Microsoft Secure Score Documentation",
    description:
      "Official Microsoft documentation explaining how Secure Score works, how it's calculated, and how to interpret your results.",
    href: "https://learn.microsoft.com/en-us/microsoft-365/security/defender/microsoft-secure-score",
  },
  {
    title: "Microsoft 365 Cyber Security",
    description:
      "Learn how Microsoft 365 provides comprehensive cybersecurity features to protect your business from modern threats.",
    href: "https://totalsolutionsit.com/cloud-services/microsoft-365-consulting/microsoft-365-cyber-security/",
  },
  {
    title: "Essential Eight Maturity Model",
    description:
      "ACSC guidance on the Essential Eight mitigation strategies and maturity levels for Australian organisations.",
    href: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
  },
];

export const secureScoreFaqs = [
  {
    question: "What is Microsoft Secure Score?",
    answer:
      "Microsoft Secure Score is a built-in tool in Microsoft 365 that helps organizations understand and improve their security posture. It analyzes your current configuration and behaviors and provides a score along with recommended actions to enhance security. It provides a numerical score representing how well your Microsoft 365 environment is protected against common security threats.",
  },
  {
    question: "How is my Secure Score calculated?",
    answer:
      "Your Secure Score is displayed as a percentage that reflects how your current security configuration compares to Microsoft's recommended best practices. It is calculated based on the security controls and configurations enabled across your Microsoft 365 services, including identity protection, device security, data protection, and application security.",
  },
  {
    question: "How often should I review my Secure Score?",
    answer:
      "We recommend reviewing your Secure Score at least monthly, or weekly if you're in a regulated industry or working toward compliance. Secure Score updates automatically as your environment changes — adding new users, devices, applications, or licences may trigger new recommendations.",
  },
  {
    question: "Can Total Solutions IT help us improve our Secure Score?",
    answer:
      "Absolutely. We specialize in Microsoft 365 security, and we can assess your current score, implement best-practice policies, remediate high-risk items, monitor improvements over time, and provide Secure Score reports in our quarterly IT reviews.",
  },
  {
    question: "Is a higher Secure Score always better?",
    answer:
      "While a higher score generally indicates stronger security configurations, Secure Score is not a guarantee of protection. It is a baseline framework to guide cybersecurity improvements. Some recommendations may not apply to your licensing or business needs, and not all third-party security tools are reflected in your score.",
  },
  {
    question: "Does Secure Score cover all security frameworks?",
    answer:
      "While Secure Score isn't a compliance tool, improving your score often aligns with regulatory frameworks like ISO 27001, NIST, and GDPR. Many recommendations also support frameworks such as the ACSC Essential Eight. It's a solid step in your compliance journey.",
  },
  {
    question: "What are the main categories of Secure Score?",
    answer:
      "Secure Score is divided into four main categories: Identity (user accounts, authentication, Conditional Access), Device (endpoint compliance, Defender for Endpoint, Intune), Data (classification, sensitivity labels, DLP policies), and Apps (Defender for Office 365, Exchange Online Protection, Teams, SharePoint).",
  },
  {
    question: "Can Secure Score detect actual threats?",
    answer:
      "No. Secure Score is a configuration score, not a threat score. It measures how many of Microsoft's recommended settings are enabled in your tenant. It does not tell you whether you are currently under attack or compromised. Use it as a configuration hygiene baseline alongside other security monitoring tools.",
  },
];

