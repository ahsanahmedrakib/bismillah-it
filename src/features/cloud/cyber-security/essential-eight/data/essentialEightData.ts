import {
  Cloud,
  Eye,
  FileCheck,
  Fingerprint,
  Globe,
  Key,
  Lock,
  RefreshCw,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Users,
} from "lucide-react";

export const essentialEightHeroData = {
  title1: "How Microsoft 365 Achieves",
  title2: "ACSC Essential 8 Compliance",
  description1:
    "Microsoft 365 provides a comprehensive suite of security tools and features that help organisations achieve and maintain compliance with the ACSC Essential Eight framework. From identity protection to data backup, Microsoft 365 addresses each of the eight mitigation strategies with built-in capabilities.",
  bgImage:
    "/images/cloud/microsoft-solutions/conditional-access/conditional-access.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "THE EIGHT STRATEGIES", href: "#strategies" },
    { label: "MICROSOFT 365 FEATURES", href: "#features" },
  ],
};

export const essentialEightOverview = {
  label: "ACSC Essential Eight",
  title: "What is the ACSC Essential Eight?",
  description:
    "The ACSC Essential Eight, developed by the Australian Cyber Security Centre, is a proven framework designed to help organisations protect against cyber attacks, ransomware, and data breaches. It focuses on practical, high-impact controls that significantly reduce cybersecurity risk when implemented correctly.",
  description2:
    "The framework includes Application Control, Patch Applications, and Patch Operating Systems, which work together to prevent malicious software from running and reduce exposure to known vulnerabilities. Restrict Administrative Privileges limits high-risk access, while Multi-Factor Authentication (MFA) strengthens identity security and helps prevent unauthorised access.",
  description3:
    "To support resilience and recovery, the Essential Eight also mandates regular backups and tested data restoration processes, ensuring business continuity after an incident. When implemented across increasing maturity levels, the ACSC Essential Eight provides a structured, measurable approach to improving cyber security posture, supporting compliance, and safeguarding critical systems in today's evolving threat landscape.",
};

export const essentialEightStrategies = [
  {
    title: "Application Control",
    desc: "Application Control restricts execution of unapproved software to prevent malware and unauthorized programs on systems. This relates to the level of application control and constraints you have over user applications and the ability for staff to execute unapproved and malicious programs on workstations. This includes .exe, DLL, scripts and installers.",
    icon: ShieldCheck,
    image: "/images/cloud/cyber-security/essential-eight/section-1.jpg",
  },
  {
    title: "Patch Applications",
    desc: "Application Patching involves updating software to fix vulnerabilities, reducing security risks and preventing exploitation by attackers. Updating third-party applications quickly is essential for ensuring the latest security updates and patches are in place. For example, using the latest version of applications and patches of web browsers, Microsoft Office, Java and PDF viewers.",
    icon: RefreshCw,
    image: "/images/cloud/cyber-security/essential-eight/section-2.webp",
  },
  {
    title: "Configure Microsoft Office Macro Settings",
    desc: "Office Macro Settings restrict macro execution in Microsoft Office to prevent malicious code from compromising systems. This is the amount of freedom your users have to run macros in Microsoft Office applications. Most users should have macros blocked as default unless they have a specific organisational requirement.",
    icon: Settings,
    image: "/images/cloud/cyber-security/essential-eight/section-3.jpg",
  },
  {
    title: "User Application Hardening",
    desc: "User Application Hardening configures apps to block unnecessary features, reducing exposure to security threats and exploits. Limitations should be placed on user applications. At its most basic, web browsers should block Flash, ads and Java, with users unable to change these settings.",
    icon: Shield,
    image: "/images/cloud/cyber-security/essential-eight/section-4.jpg",
  },
  {
    title: "Restrict Administrative Privileges",
    desc: "Restrict Administrative Privileges limits admin access to essential users, reducing potential damage from compromised accounts. Tightly manage administrative privileges and access to operating systems and applications based on user duties. Privileged accounts should not be used for reading email and browsing the web.",
    icon: Users,
    image: "/images/cloud/cyber-security/essential-eight/section-5.jpg",
  },
  {
    title: "Patch Operating Systems",
    desc: "Patch Operating Systems involves regularly updating OS to fix vulnerabilities and protect against security threats and exploits. This focuses on keeping operating systems up to date to ensure that OS patches, updates, and security mitigations for internet-facing services are applied within two weeks of release.",
    icon: Server,
    image: "/images/cloud/cyber-security/essential-eight/section-6.jpg",
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Multi-Factor Authentication uses two or more verification methods to secure accounts and prevent unauthorized access. Enforce MFA for all privileged access. Turn on MFA for VPNs, RDP, SSH and other remote access, and for all users when they access an important data repository.",
    icon: Key,
    image: "/images/cloud/cyber-security/essential-eight/section-7.jpg",
  },
  {
    title: "Regular Backups",
    desc: "Regular Backups involve performing daily backups of important new or changed data, software and configuration settings. Store backups disconnected from the Internet and retain them for at least three months. Test restoration initially, annually and whenever IT infrastructure changes.",
    icon: RefreshCw,
    image: "/images/cloud/cyber-security/essential-eight/section-8.jpg",
  },
];

export const m365Features = [
  {
    title: "Password Policy",
    description:
      "The password policy in Microsoft 365, managed through Azure Active Directory (Azure AD), enforces strong security measures to protect user accounts. It supports password complexity requirements, including length, special characters, and expiration periods to reduce vulnerabilities. Self-service password reset (SSPR) allows users to securely reset passwords without IT intervention. Azure AD Password Protection prevents weak or commonly used passwords using global banned password lists and custom banned lists. Organizations can also enable Multi-Factor Authentication (MFA) and Conditional Access Policies for added security. These features align with ACSC Essential 8, ensuring compliance and protection against password-related attacks.",
    icon: Lock,
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Multi-Factor Authentication (MFA) in Microsoft 365 enhances security by requiring users to verify their identity using two or more factors — something they know (password), have (device or token), or are (biometrics). It integrates with Azure Active Directory (Azure AD) and supports methods like Microsoft Authenticator, SMS codes, phone calls, and FIDO2 security keys. MFA protects against phishing and unauthorized access, even if passwords are compromised. It also works with Conditional Access Policies to enforce risk-based authentication. By adding an extra layer of defense, MFA helps meet ACSC Essential 8 compliance and secures identities in hybrid and cloud environments.",
    icon: Key,
  },
  {
    title: "Phishing-Resistant MFA",
    description:
      "Phishing-resistant Multi-Factor Authentication (MFA) in Microsoft 365 provides advanced protection against phishing attacks by eliminating reliance on traditional passwords and one-time codes, which are vulnerable to phishing. Instead, it uses FIDO2-based authentication methods, such as passkeys, Windows Hello for Business, and hardware security keys (e.g., YubiKeys). These methods verify user identities using biometric data or PINs stored locally on devices, making them resistant to credential theft. Microsoft Authenticator also supports number matching and push notifications to combat phishing attempts. Integrated with Azure Active Directory (Azure AD), phishing-resistant MFA enforces Conditional Access Policies for secure, compliant access aligned with ACSC Essential 8 standards.",
    icon: Fingerprint,
  },
  {
    title: "Passkeys",
    description:
      "Microsoft 365 supports passkeys through Windows Hello for Business, Microsoft Authenticator, and security keys like YubiKeys. These methods integrate with Azure Active Directory to enforce Multi-Factor Authentication (MFA) and Conditional Access Policies, ensuring secure, seamless access while meeting compliance standards like ACSC Essential 8.",
    icon: Key,
  },
  {
    title: "Entra ID",
    description:
      "Entra ID (formerly Azure Active Directory) in Microsoft 365 is a cloud-based identity and access management (IAM) solution that secures user authentication and enforces access control. It provides Single Sign-On (SSO) for seamless access to apps, Multi-Factor Authentication (MFA) for enhanced security, and Conditional Access Policies to restrict access based on device compliance, location, and risk levels. Privileged Identity Management (PIM) ensures just-in-time admin access, while Identity Protection detects and mitigates identity risks. Entra ID supports hybrid environments, integrates with on-premises AD, and meets compliance standards like ACSC Essential 8 for secure identity management and governance.",
    icon: Users,
  },
  {
    title: "Conditional Access",
    description:
      "Conditional Access in Microsoft 365 is a key security feature that allows organizations to control how users access corporate resources based on specific conditions. Built into Azure Active Directory (Azure AD), Conditional Access is central to Microsoft's Zero Trust security model, helping businesses protect sensitive data while enabling secure, flexible work environments. With Conditional Access, IT admins can define policies that evaluate signals like user identity, device compliance, location, risk level, and application type before granting access. For example, you can require multi-factor authentication (MFA) if a user is signing in from an unfamiliar location or block access if the device isn't compliant with company standards.",
    icon: Globe,
  },
  {
    title: "Data Backup",
    description:
      "Data backup in Microsoft 365 ensures data protection through built-in features and third-party solutions. Services like OneDrive, SharePoint Online, and Exchange Online provide versioning, recycle bins, and retention policies to recover deleted or modified data. Microsoft Purview enables data retention and litigation hold for compliance and legal requirements. For enhanced protection, third-party backup solutions such as Veeam, AvePoint, and Commvault offer automated backups, long-term storage, and granular recovery options. These features safeguard against data loss from accidental deletion, ransomware, or corruption, ensuring compliance with standards like ACSC Essential 8 and business continuity requirements.",
    icon: RefreshCw,
  },
  {
    title: "Cloud Security",
    description:
      "Cloud security in Microsoft 365 ensures data protection, threat prevention, and compliance in the cloud. It uses Microsoft Defender for Cloud Apps to monitor and control cloud app usage, detecting threats and enforcing policies. Microsoft Purview protects sensitive data with encryption, Data Loss Prevention (DLP), and compliance controls. Azure Active Directory (Entra ID) secures identity management with Multi-Factor Authentication (MFA) and Conditional Access Policies. Microsoft Sentinel provides Security Information and Event Management (SIEM) for real-time threat detection and response. These features align with frameworks like ACSC Essential 8, ensuring secure and compliant cloud operations.",
    icon: Cloud,
  },
  {
    title: "Zero Trust Framework",
    description:
      "The Zero Trust Framework in Microsoft 365 enforces 'never trust, always verify' to secure identities, devices, and data. It uses Multi-Factor Authentication (MFA) and Conditional Access Policies in Azure Active Directory (Azure AD) to verify identities and enforce least-privilege access with Role-Based Access Control (RBAC) and Privileged Identity Management (PIM). Microsoft Defender for Endpoint secures devices, while Data Loss Prevention (DLP) and Information Protection safeguard sensitive data. Microsoft Intune manages device compliance, and Microsoft Sentinel provides real-time monitoring and threat detection. This approach ensures robust security and compliance with frameworks like ACSC Essential 8.",
    icon: Shield,
  },
  {
    title: "Compliance",
    description:
      "Compliance in Microsoft 365 helps organizations meet legal, regulatory, and industry standards through tools in the Microsoft Purview Compliance Portal. It includes Data Loss Prevention (DLP) to protect sensitive data, retention policies for data governance, and audit logs for tracking activities. Information Protection applies labels and encryption, while eDiscovery supports legal data retrieval. Insider Risk Management detects internal threats, and Advanced Threat Protection safeguards against cyberattacks. Microsoft 365 ensures compliance with standards like ACSC Essential 8, ISO 27001, GDPR, and HIPAA, providing organizations with secure, auditable, and policy-driven data management and protection.",
    icon: FileCheck,
  },
  {
    title: "App Protection Policies",
    description:
      "App Protection Policies in Microsoft 365, managed through Microsoft Intune, secure corporate data within apps on both managed and unmanaged devices. They enforce data encryption, prevent copy-paste actions, and enable remote wipe for lost or stolen devices. Policies require PINs, biometric authentication, and Multi-Factor Authentication (MFA) to control access. They also block access on non-compliant or jailbroken devices and integrate with Azure AD Conditional Access for additional security. Supporting apps like Outlook, Teams, and OneDrive, these policies enable secure BYOD scenarios while meeting compliance standards, including ACSC Essential 8, for data protection and regulatory requirements.",
    icon: Smartphone,
  },
  {
    title: "Azure Sensitivity Labels",
    description:
      "Azure Sensitivity Labels, part of Microsoft Purview Information Protection, empower organizations to classify, label, and protect sensitive data across Microsoft 365. These labels help enforce data security and compliance by identifying and managing sensitive content in apps like Microsoft Teams, SharePoint, OneDrive, Outlook, Word, and Excel. Azure Sensitivity Labels support zero-trust data protection by ensuring only authorized users access sensitive content, whether stored or shared. They help businesses meet regulatory requirements including GDPR, HIPAA, and ISO 27001.",
    icon: Eye,
  },
  {
    title: "Windows Defender Application Control (WDAC)",
    description:
      "Windows Defender Application Control (WDAC) is a powerful security feature in Windows that helps prevent unauthorized or malicious code from running on Windows devices. Designed for enterprise environments, WDAC enforces a strict application control policy by allowing only trusted, signed, and approved applications to execute. WDAC helps organizations implement a zero-trust security model by reducing the attack surface and blocking unapproved executables, scripts, and dynamic-link libraries (DLLs). Policies can be customized to define which apps are permitted based on publisher, file path, hash, or reputation via Microsoft's Intelligent Security Graph. Integrated with Microsoft Defender for Endpoint, WDAC offers centralized management and reporting, making it easier to monitor compliance and policy enforcement across your network.",
    icon: ShieldCheck,
  },
  {
    title: "Microsoft Intune",
    description:
      "Microsoft Intune is a cloud-based endpoint management solution that enables organizations to securely manage devices, apps, and user access across Windows, macOS, iOS, and Android platforms. As part of Microsoft Endpoint Manager, Intune simplifies mobile device management (MDM) and mobile application management (MAM) in a single unified platform. With Intune, IT administrators can enforce security policies, deploy software, manage updates, and remotely wipe or lock lost or stolen devices. It integrates with Microsoft 365 and Azure Active Directory, supporting conditional access and compliance-based access controls to protect corporate data. Intune also allows businesses to separate work and personal data on BYOD (Bring Your Own Device) endpoints, enhancing both security and user privacy.",
    icon: Settings,
  },
];

export const essentialEightFaqs = [
  {
    question: "What is the ACSC Essential Eight?",
    answer:
      "The ACSC Essential Eight is a cybersecurity framework developed by the Australian Cyber Security Centre (ACSC). It outlines eight mitigation strategies designed to help organisations protect against cyber threats, including application control, patching, macro settings, application hardening, administrative privilege restriction, OS patching, multi-factor authentication, and regular backups.",
  },
  {
    question: "How does Microsoft 365 help with Essential Eight compliance?",
    answer:
      "Microsoft 365 provides built-in tools and features that address each of the eight strategies. For example, Windows Defender Application Control (WDAC) handles application control, Microsoft Intune manages patching and device compliance, Entra ID provides MFA and conditional access, and OneDrive/SharePoint offer backup capabilities. Together, these tools create a comprehensive compliance framework.",
  },
  {
    question: "What is Windows Defender Application Control (WDAC)?",
    answer:
      "WDAC is a security feature in Windows that helps prevent unauthorized or malicious code from running on devices. It enforces a strict application control policy by allowing only trusted, signed, and approved applications to execute. WDAC can be managed through Microsoft Intune and integrates with Microsoft Defender for Endpoint.",
  },
  {
    question:
      "How does Multi-Factor Authentication (MFA) help with Essential Eight compliance?",
    answer:
      "MFA is one of the eight Essential Eight strategies. Microsoft 365 provides MFA through Entra ID, supporting various authentication methods including Microsoft Authenticator, SMS codes, phone calls, and FIDO2 security keys. Phishing-resistant MFA using passkeys and Windows Hello for Business provides even stronger protection aligned with higher maturity levels.",
  },
  {
    question: "What backup options are available in Microsoft 365?",
    answer:
      "Microsoft 365 provides built-in data protection through OneDrive, SharePoint Online, and Exchange Online with versioning, recycle bins, and retention policies. Microsoft Purview enables data retention and litigation hold. For enhanced protection, third-party solutions like Veeam, AvePoint, and Commvault offer automated backups, long-term storage, and granular recovery options.",
  },
  {
    question: "What is the Zero Trust Framework in Microsoft 365?",
    answer:
      "The Zero Trust Framework in Microsoft 365 follows the 'never trust, always verify' principle. It uses MFA, Conditional Access Policies, Role-Based Access Control (RBAC), Privileged Identity Management (PIM), Microsoft Defender for Endpoint, Data Loss Prevention (DLP), Microsoft Intune, and Microsoft Sentinel to secure identities, devices, and data across the organization.",
  },
  {
    question: "How does Microsoft Intune support Essential Eight compliance?",
    answer:
      "Microsoft Intune manages device compliance, enforces security policies, deploys software, and manages updates across Windows, macOS, iOS, and Android. It supports patch management, app protection policies, and conditional access controls. Intune also separates work and personal data on BYOD endpoints while maintaining security standards.",
  },
  {
    question: "What are Azure Sensitivity Labels?",
    answer:
      "Azure Sensitivity Labels, part of Microsoft Purview Information Protection, help organizations classify, label, and protect sensitive data across Microsoft 365. They enforce data security and compliance by identifying and managing sensitive content in apps like Teams, SharePoint, OneDrive, Outlook, Word, and Excel, supporting zero-trust data protection.",
  },
];

export const essentialEightUsefulLinks = [
  {
    title: "ACSC Essential Eight Overview",
    description:
      "Official ACSC documentation explaining the Essential Eight mitigation strategies and maturity levels for Australian organisations.",
    href: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
  },
  {
    title: "Microsoft Essential Eight on Microsoft Learn",
    description:
      "Microsoft's official documentation mapping the Essential Eight to Microsoft 365 controls and licensing requirements.",
    href: "https://learn.microsoft.com/en-us/compliance/anz/e8-overview",
  },
  {
    title: "Microsoft 365 Cyber Security",
    description:
      "Learn how Microsoft 365 provides comprehensive cybersecurity features to protect your business from modern threats.",
    href: "https://totalsolutionsit.com/cloud-services/microsoft-365-consulting/microsoft-365-cyber-security/",
  },
  {
    title: "Microsoft Secure Score",
    description:
      "Measure your organisation's security posture with Microsoft Secure Score and get recommendations for improvement.",
    href: "https://www.microsoft.com/en-us/security/business/security-101/what-is-microsoft-secure-score",
  },
];

