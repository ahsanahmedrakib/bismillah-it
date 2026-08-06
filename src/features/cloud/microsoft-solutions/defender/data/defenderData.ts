import {
  AlertTriangle,
  Bug,
  Eye,
  Laptop,
  Lock,
  Radar,
  RefreshCw,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

export const defenderHeroData = {
  title1: "Microsoft Defender",
  title2: "for Business",
  description1:
    "Microsoft Defender is a comprehensive security solution built into Windows, designed to protect your devices from a wide range of cyber threats. It includes robust antivirus protection, real-time threat detection, and a firewall to safeguard your system against malware, viruses, and ransomware.",
  description2:
    "Defender's features extend beyond basic antivirus, incorporating advanced tools like cloud-based protection, which utilizes Microsoft's vast threat intelligence network to identify and mitigate emerging threats quickly.",
  bgImage: "/images/cloud/microsoft-solutions/defender/defender.png",
  actionButtons: [],
};

export const defenderOverview = {
  label: "Endpoint Security for SMBs",
  title: "What is Microsoft Defender for Business?",
  description:
    "Microsoft Defender for Business is an endpoint security solution based on Microsoft Defender for Endpoint. It is designed for small and medium-sized businesses up to 300 users, offering protection from ransomware, malware, phishing, and other threats on devices.",
  description2:
    "It also offers performance monitoring and privacy controls to ensure safe browsing and system health. Regular updates and seamless integration with Windows make Microsoft Defender a convenient choice for maintaining security without additional software. Its integration with Microsoft 365 provides enhanced security features for enterprise environments, making it a versatile solution for both personal and professional use.",
  description3:
    "Defender for Business is available as a standalone subscription or as part of Microsoft 365 Business Premium. It supports Windows, macOS, iOS, and Android devices, providing enterprise-grade security across your entire device estate from a single, simplified management console.",
};

export const defenderWhatIs = {
  title:
    "What is Microsoft Defender for Business, and could it suit your Business?",
  description:
    "Small and Medium Enterprises (SMEs) form the backbone of the Bangladeshi economy and play a crucial role in the supply chain. However, in today's digital era, this significance also brings challenges. SMEs are increasingly targeted by malicious actors due to a fiercely competitive market and limited budgets for security measures, unlike larger corporations.",
  description2:
    "Over recent years, SMEs have embraced cloud technology for their operations, which has enhanced flexibility and mobility, positively impacting our daily lives. Yet, this shift has altered the risk landscape, emphasizing the importance of Endpoints and the necessity for a Zero Trust Architecture. The traditional notion of 'trust, but verify' is outdated, especially in light of current global events.",
  description3:
    "As Endpoints gain prominence and attackers become more sophisticated, conventional Endpoint protection methods like antivirus software fall short. SMEs often struggle to afford Enterprise-grade features such as Endpoint Detection and Response (EDR) and Threat and Vulnerability Management. However, the introduction of Microsoft Defender for Business aims to address this issue, offering SMEs a more accessible solution.",
};

export const defenderKeyFeatures = [
  {
    title: "Next-Generation Protection",
    desc: "Advanced antivirus and anti-malware protection using cloud-powered intelligence, machine learning, and behavioral heuristics to detect and block new and emerging threats in real time.",
    icon: Shield,
  },
  {
    title: "Endpoint Detection & Response",
    desc: "AI-powered EDR continuously monitors endpoint activities and generates alerts for suspicious behavior, enabling you to detect, investigate, and respond to advanced threats.",
    icon: Eye,
  },
  {
    title: "Automated Investigation & Remediation",
    desc: "Automated investigation and remediation capabilities automatically resolve most cyberthreats with minimal IT effort, reducing response time from hours to minutes.",
    icon: Zap,
  },
  {
    title: "Threat & Vulnerability Management",
    desc: "Discover, prioritize, and remediate software vulnerabilities and misconfigurations that pose the most urgent and highest risk to your business.",
    icon: Search,
  },
  {
    title: "Attack Surface Reduction",
    desc: "Block malicious macros, scripts, USB exploits, and other risky actions with built-in attack surface reduction rules that minimize vulnerabilities in devices and applications.",
    icon: ShieldCheck,
  },
  {
    title: "Ransomware Protection",
    desc: "Built-in ransomware mitigation with controlled folder access, behavior monitoring, and automatic attack disruption to stop ransomware before it encrypts your data.",
    icon: Lock,
  },
  {
    title: "Cross-Platform Support",
    desc: "Protect Windows, macOS, iOS, and Android devices from a single management console, ensuring consistent security across your entire device estate.",
    icon: Laptop,
  },
  {
    title: "Server Protection",
    desc: "Server security available as an add-on, providing simplified onboarding and management with security policies activated out of the box to quickly secure servers.",
    icon: Server,
  },
  {
    title: "Monthly Security Summaries",
    desc: "Receive monthly security summary reports to track your protection status, including threats blocked, device health, and pending vulnerabilities.",
    icon: AlertTriangle,
  },
];

export const defenderCapabilities = [
  {
    title: "Endpoint Protection",
    desc: "Defender for Business offers real-time protection against viruses, malware, ransomware, and other threats across all endpoints within the organization. It utilizes machine learning models and behavioral analytics to detect and block malicious activities.",
  },
  {
    title: "Advanced Threat Protection",
    desc: "The solution includes advanced threat protection capabilities such as endpoint detection and response (EDR), which allows businesses to detect, investigate, and respond to advanced threats and breaches.",
  },
  {
    title: "Endpoint Detection and Response (EDR)",
    desc: "Defender for Business provides EDR capabilities to enable organizations to investigate and respond to advanced threats and security incidents across their endpoints. It allows security teams to analyze endpoint activities, conduct forensic investigations, and take appropriate response actions.",
  },
  {
    title: "Threat & Vulnerability Management",
    desc: "Proactively discover, prioritize, and remediate vulnerabilities and misconfigurations early. Get a clear view of your cyberattack surface with actionable security recommendations to strengthen your defenses.",
  },
  {
    title: "Attack Surface Reduction",
    desc: "Minimize vulnerabilities with built-in capabilities including ransomware mitigation, application control, web protection, network protection, network firewall, and attack surface reduction rules.",
  },
  {
    title: "Centralized Management",
    desc: "Single dashboard in Microsoft 365 Defender to monitor, act, and report across all your endpoints. Wizard-based onboarding and simplified management experience for IT administrators.",
  },
];

export const defenderNistFramework = [
  {
    title: "Identify",
    desc: "Threat & Vulnerability Management provides asset visibility, intelligent assessments, and built-in remediation tools for various platforms, including Windows, macOS, Linux, Android, iOS, and network devices. It prioritizes vulnerabilities on critical assets and offers security recommendations for risk mitigation.",
    icon: Target,
  },
  {
    title: "Protect",
    desc: "Attack Surface Reduction helps reduce the attack surface by constraining certain software behaviors that could compromise devices or networks. Next Generation Protection complements the built-in Microsoft Defender Antivirus with additional functionality such as behavior-based, heuristic, and real-time AV protection.",
    icon: ShieldCheck,
  },
  {
    title: "Detect",
    desc: "Endpoint Detection & Response (EDR) offers advanced attack detection capabilities in near real-time. Security analysts can efficiently prioritize alerts, gain visibility into breach scopes, and take response actions to mitigate threats.",
    icon: Radar,
  },
  {
    title: "Respond",
    desc: "Auto Investigation & Remediation (AIR) utilizes various inspection algorithms and processes akin to those used by security analysts. AIR examines alerts and promptly takes action to resolve breaches, thereby reducing response times and minimizing damage.",
    icon: Bug,
  },
  {
    title: "Recover",
    desc: "Defender for Business supports recovery through automated remediation capabilities that restore affected systems and files. The solution helps organizations quickly return to a secure state after a security incident.",
    icon: RefreshCw,
  },
];

export const defenderFeatureTable = [
  {
    feature: "Threat & vulnerability management",
    defenderBusiness: true,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Attack surface reduction capabilities",
    defenderBusiness: true,
    endpointP1: true,
    endpointP2: true,
  },
  {
    feature: "Next-generation protection",
    defenderBusiness: true,
    endpointP1: true,
    endpointP2: true,
  },
  {
    feature: "Endpoint detection and response",
    defenderBusiness: true,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Automated investigation and response",
    defenderBusiness: true,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Threat hunting and six months of data retention",
    defenderBusiness: false,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Device discovery",
    defenderBusiness: true,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Custom detections",
    defenderBusiness: false,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Sandbox",
    defenderBusiness: false,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Device timeline events",
    defenderBusiness: false,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Threat analytics",
    defenderBusiness: "Optimized for SMBs",
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Cross-platform support (Windows, macOS, iOS, Android)",
    defenderBusiness: true,
    endpointP1: "Limited",
    endpointP2: "Limited",
  },
  {
    feature: "Server support",
    defenderBusiness: "Add-on",
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Microsoft Threat Experts",
    defenderBusiness: false,
    endpointP1: false,
    endpointP2: true,
  },
  {
    feature: "Partner APIs",
    defenderBusiness: true,
    endpointP1: true,
    endpointP2: true,
  },
  {
    feature: "Microsoft 365 Lighthouse integration",
    defenderBusiness: true,
    endpointP1: true,
    endpointP2: true,
  },
  {
    feature: "Stream events to Sentinel",
    defenderBusiness: true,
    endpointP1: "?",
    endpointP2: true,
  },
];

export const defenderIncludedFeatures = [
  { feature: "Centralized management", included: true },
  {
    feature: "Simplified Firewall and Antivirus configuration for Windows",
    included: true,
  },
  { feature: "Threat and Vulnerability Management", included: true },
  { feature: "Attack Surface Reduction", included: true },
  { feature: "Next-Gen Protection", included: true },
  { feature: "Endpoint Detection and Response", included: true },
  { feature: "Automated Investigation and Remediation", included: true },
  { feature: "Threat Analytics", included: true },
  {
    feature:
      "Cross platform support for Windows, MacOS, iOS, and Android clients",
    included: true,
  },
  { feature: "Windows server and Linux server", included: "Add-on" },
  { feature: "Partner APIs", included: true },
  {
    feature:
      "Microsoft 365 Lighthouse for viewing security incidents across customers",
    included: true,
  },
  { feature: "Threat Hunting and 6-months data retention", included: false },
  { feature: "Microsoft Threat Experts", included: false },
];

export const defenderBenefits = [
  {
    title: "Enterprise-Grade Security for SMBs",
    desc: "Access the same powerful endpoint security capabilities used by Fortune 500 companies, optimized and priced for small and medium-sized businesses with up to 300 employees.",
  },
  {
    title: "Cost-Effective Protection",
    desc: "At just $3.00 per user/month, Defender for Business provides comprehensive device security including next-gen antivirus, EDR, vulnerability management, and automated remediation.",
  },
  {
    title: "Reduced IT Overhead",
    desc: "Automated investigation and remediation capabilities resolve most threats automatically, reducing the burden on IT staff and eliminating the need for a dedicated security operations center.",
  },
  {
    title: "Proactive Threat Prevention",
    desc: "Move beyond reactive antivirus to proactive threat hunting with vulnerability management, attack surface reduction rules, and behavioral analysis that catches threats before they execute.",
  },
  {
    title: "Unified Security Console",
    desc: "Manage all endpoint security from a single, simplified dashboard in Microsoft 365 Defender, providing complete visibility across Windows, macOS, iOS, and Android devices.",
  },
  {
    title: "Seamless Microsoft 365 Integration",
    desc: "Integrates with Microsoft Intune for device compliance, Conditional Access policies, and the wider Microsoft 365 security ecosystem for comprehensive protection.",
  },
];

export const defenderLimitations = [
  "No Advanced Hunting or threat hunting capabilities",
  "No Threat Experts services",
  "No 6-months data retention (30 days advanced hunting only)",
  "No device timeline events",
  "Threat analytics optimized for small and medium-size business (not full enterprise features)",
  "No sandbox feature",
  "Limited in hunting and file/remediation capabilities",
  "No custom device groups support",
];

export const defenderUsefulLinks = [
  {
    title: "Microsoft Defender for Business Overview",
    description:
      "Official Microsoft documentation explaining what Defender for Business is, its features, capabilities, and how it compares to other Defender plans for enterprise environments.",
    href: "https://learn.microsoft.com/en-us/defender-business/mdb-overview",
  },
  {
    title: "Microsoft Defender for Business Pricing",
    description:
      "View pricing and plan options for Defender for Business. Available as a standalone subscription at $3.00/user/month or included with Microsoft 365 Business Premium.",
    href: "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-business",
  },
  {
    title: "Defender for Business Deployment Guide",
    description:
      "Step-by-step deployment guide for Microsoft Defender for Business, including onboarding devices, configuring policies, and setting up security management.",
    href: "https://learn.microsoft.com/en-us/defender-business/mdb-overview",
  },
  {
    title: "What's New in Defender for Business",
    description:
      "Stay up to date with the latest features, improvements, and enhancements to Microsoft Defender for Business, including new capabilities and release notes.",
    href: "https://learn.microsoft.com/en-us/defender-business/mdb-whats-new",
  },
];

export const defenderFAQs = [
  {
    question: "What is Microsoft Defender for Business?",
    answer:
      "Defender for Business is an AI-powered, enterprise-grade device security solution that helps businesses with up to 300 employees protect against ransomware and other cyberthreats in an easy-to-use and cost-effective package.",
  },
  {
    question:
      "How does Defender for Business differ from standard Microsoft Defender Antivirus?",
    answer:
      "Microsoft Defender Antivirus provides next-generation protection built into Windows devices, helping protect them from viruses, malware, and potentially unwanted applications. Defender for Business adds enterprise-grade capabilities including EDR, automated investigation and remediation, vulnerability management, and centralized management across multiple device platforms.",
  },
  {
    question: "What devices and operating systems are supported?",
    answer:
      "Defender for Business supports Windows 10/11, macOS (three most current releases), iOS, and Android devices. You can protect up to 300 users with up to five devices per user, with no minimum device requirement.",
  },
  {
    question:
      "Is Defender for Business included in Microsoft 365 Business Premium?",
    answer:
      "Yes. Microsoft 365 Business Premium includes Defender for Business, along with Defender for Office 365 Plan 1 for email protection, Azure AD Premium Plan 1, and Microsoft Intune for device management.",
  },
  {
    question: "Does Defender for Business protect against ransomware?",
    answer:
      "Yes. Defender for Business includes multiple layers of ransomware protection including next-generation antivirus, behavior monitoring, controlled folder access, and automatic attack disruption to stop ransomware before it encrypts your data.",
  },
  {
    question: "Can I add server protection to Defender for Business?",
    answer:
      "Yes. Defender for Business servers is an add-on that provides security for Windows and Linux servers with simplified onboarding, out-of-the-box security policies, and threat and vulnerability management.",
  },
  {
    question: "How do I onboard devices to Defender for Business?",
    answer:
      "Defender for Business supports multiple onboarding methods including Microsoft Intune/Endpoint Manager, Local Script, Group Policy, and VDI Onboarding script. The wizard-based setup guides you through the process.",
  },
  {
    question:
      "What are the differences between Defender for Business and Defender for Endpoint P2?",
    answer:
      "Defender for Business includes most features of P2 but lacks Advanced Hunting, Threat Experts, 6-month data retention, device timeline events, sandbox, and custom detections. It's optimized for SMBs with simplified management.",
  },
];

