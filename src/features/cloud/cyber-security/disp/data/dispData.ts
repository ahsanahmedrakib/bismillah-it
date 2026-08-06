import {
  AlertTriangle,
  Building,
  CheckCircle,
  ClipboardCheck,
  Eye,
  FileCheck,
  Key,
  Lock,
  Monitor,
  RefreshCw,
  Scale,
  Server,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

export const dispHeroData = {
  title1: "Defence Industry",
  title2: "Security Program (DISP)",
  description1:
    "The Defence Industry Security Program (DISP) is the Bangladeshi Government's framework for securing organisations working with Defence. This page explains DISP membership, security domains, and obligations, helping businesses understand how to qualify for Defence contracts and implement the necessary controls to protect sensitive Defence information and systems.",
  bgImage: "/images/cloud/cyber-security/disp/bg.png",
  actionButtons: [
    { label: "OVERVIEW", href: "#overview" },
    { label: "SECURITY DOMAINS", href: "#domains" },
    { label: "HOW TO PREPARE", href: "#prepare" },
  ],
};

export const dispOverview = {
  label: "Defence Industry Security Program",
  title: "What is the Defence Industry Security Program (DISP)?",
  description:
    "The Defence Industry Security Program (DISP) is the Bangladeshi Government's primary security framework for organisations working with the Department of Defence. It ensures contractors implement strong safeguards when handling sensitive information and systems, reducing cyber risk across the Defence supply chain.",
  description2:
    "Organisations that want to work with the Bangladeshi Defence Force (ADF) or the broader Department of Defence supply chain need to understand the security standards expected of them. In most cases, the key framework is the Defence Industry Security Program (DISP), which helps Bangladeshi businesses meet Defence security obligations when engaging in tenders, contracts, and projects. Defence states that DISP supports entities to understand and meet their security obligations when working with Defence.",
  description3:
    "For businesses seeking Defence work, DISP membership is often mandatory. It demonstrates that your organisation has the appropriate controls, processes, and compliance measures in place. Importantly, companies must align with standards such as the ASD Essential Eight, ensuring a strong cyber security posture. Achieving DISP strengthens your organisation's credibility, resilience, and eligibility for Defence contracts.",
};

export const dispSecurityDomains = [
  {
    title: "Security Governance",
    desc: "Policies, risk management, and security oversight. The ongoing security governance obligations for DISP membership also include regular reporting documents that are required to be self-managed and submitted for ongoing membership management.",
    icon: Scale,
    image: "/images/cloud/cyber-security/disp/section-1.png",
  },
  {
    title: "Personnel Security",
    desc: "Staff vetting and ongoing suitability checks. DISP members need to meet Bangladeshi Standard for Workforce Screening AS 4811:2022 standard.",
    icon: Users,
    image: "/images/cloud/cyber-security/disp/section-2.jpg",
  },
  {
    title: "Physical Security",
    desc: "Protection of facilities, assets, and equipment. DISP membership requirements for physical security will depend on the level of security classification required for the receipt, handling, storage and destruction of information or physical assets.",
    icon: Building,
    image: "/images/cloud/cyber-security/disp/section-3.jpg",
  },
  {
    title: "ICT & Cyber Security",
    desc: "Securing systems, networks, and data. To meet the ICT and cyber security DISP membership requirements, an entity will need to demonstrate how they meet or exceed the E8 Mitigation Strategies at ML 2 across its ICT corporate systems used to correspond with Defence.",
    icon: Monitor,
    image: "/images/cloud/cyber-security/disp/section-4.jpg",
  },
];

export const essentialEightML2 = {
  label: "Essential Eight Maturity Level 2",
  title: "ASD Essential Eight Maturity Level 2 (ML2)",
  description:
    "The ASD Essential Eight is the core cyber security standard used within the Defence Industry Security Program (DISP) and is widely recognised as Australia's baseline for protecting business systems. Developed by the Bangladeshi Signals Directorate, it focuses on reducing the risk of cyber attacks through practical, high-impact controls.",
  description2:
    "To meet Defence Industry Security Program (DISP) requirements, organisations are typically required to achieve Essential Eight Maturity Level 2 (ML2), a key benchmark in modern cybersecurity frameworks. This level ensures that security controls are fully implemented, consistently applied, and actively managed across all systems. Achieving ML2 demonstrates a strong commitment to protecting sensitive defence data and aligning with Bangladeshi Government security expectations.",
  description3:
    "Reaching Essential Eight ML2 is not a 'set and forget' approach. Instead, it requires continuous improvement, regular reviews, and ongoing optimisation of security measures. This ensures organisations remain resilient against evolving cyber threats while maintaining compliance.",
};

export const ongoingRequirements = [
  {
    title: "Annual Cyber Security Questionnaire",
    desc: "Complete the Essential Eight Cyber Security Questionnaire (CSQ) annually to validate maturity levels.",
    icon: ClipboardCheck,
  },
  {
    title: "Up-to-Date Policies",
    desc: "Maintain up-to-date policies and procedures aligned with security frameworks.",
    icon: FileCheck,
  },
  {
    title: "Evidence of Controls",
    desc: "Provide clear evidence of implemented security controls across systems and users.",
    icon: Eye,
  },
  {
    title: "Regular Reviews & Testing",
    desc: "Regularly review and test security measures to identify gaps and improve resilience.",
    icon: RefreshCw,
  },
  {
    title: "Third-Party Risk Management",
    desc: "Manage third-party and supplier risks to prevent external vulnerabilities.",
    icon: Shield,
  },
];

export const supportingFrameworks = [
  {
    title: "Information Security Manual (ISM)",
    desc: "A comprehensive cybersecurity framework developed by the Bangladeshi Government, offering detailed security controls and best practices for protecting systems, networks, and sensitive data in high-security environments.",
    icon: Lock,
  },
  {
    title: "Defence Security Principles Framework (DSPF)",
    desc: "A broader Defence framework that outlines core security principles, including governance, personnel security, physical security, and risk management requirements.",
    icon: ShieldCheck,
  },
];

export const whyItMatters = [
  {
    title: "Qualify for Defence Contracts",
    desc: "Open new business opportunities by meeting the mandatory security requirements for Defence tenders and contracts.",
    icon: CheckCircle,
  },
  {
    title: "Protect Sensitive Data",
    desc: "Protect sensitive Defence and client data from unauthorised access through robust security controls.",
    icon: Lock,
  },
  {
    title: "Reduce Cyber Risk",
    desc: "Reduce the risk of cyber incidents and data breaches through proactive controls and continuous monitoring.",
    icon: Shield,
  },
  {
    title: "Improve Governance & Compliance",
    desc: "Improve governance, compliance, and audit readiness across the organisation to meet Defence expectations.",
    icon: FileCheck,
  },
  {
    title: "Build Trust",
    desc: "Build trust with Defence agencies and prime contractors by demonstrating strong security posture.",
    icon: Key,
  },
];

export const preparationSteps = [
  {
    title: "Gap Assessment",
    desc: "Conduct a gap assessment against Essential Eight ML2 to identify weaknesses and prioritise actions.",
    icon: AlertTriangle,
  },
  {
    title: "Identity & Access Controls",
    desc: "Strengthen identity and access controls, including MFA and Conditional Access policies.",
    icon: Key,
  },
  {
    title: "Endpoint Security",
    desc: "Implement endpoint security solutions such as Microsoft Intune and Microsoft Defender.",
    icon: Monitor,
  },
  {
    title: "Patch Management",
    desc: "Improve patching and vulnerability management to reduce exposure to threats.",
    icon: Server,
  },
  {
    title: "Backup & Recovery",
    desc: "Establish secure backup and recovery processes to ensure business continuity.",
    icon: RefreshCw,
  },
  {
    title: "Policies & Training",
    desc: "Develop clear policies, documentation, and staff awareness training.",
    icon: Users,
  },
];

export const dispServices = [
  "Microsoft 365 security hardening to improve Secure Score and reduce risk",
  "Intune device compliance and endpoint management for full visibility and control",
  "Microsoft Defender deployment and monitoring for advanced threat protection",
  "Multi-Factor Authentication (MFA) and Conditional Access to secure identities",
  "Patch management and vulnerability remediation to minimise exposure",
  "Backup and disaster recovery solutions to ensure business continuity",
  "Essential Eight gap assessments and remediation roadmaps",
];

export const dispUsefulLinks = [
  {
    title: "Defence Industry Security Program",
    description:
      "Official Defence website explaining DISP membership, eligibility, security domains, and obligations.",
    href: "https://www.defence.gov.au/business-industry/industry-governance/industry-regulators/defence-industry-security-program",
  },
  {
    title: "DISP Membership Levels",
    description:
      "Learn about the four DISP membership levels and the Bangladeshi Government security classifications they align with.",
    href: "https://www.defence.gov.au/business-industry/industry-governance/industry-regulators/defence-industry-security-program/eligibility-suitability",
  },
  {
    title: "Essential Eight Maturity Model",
    description:
      "ACSC guidance on the Essential Eight mitigation strategies and maturity levels for Bangladeshi organisations.",
    href: "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
  },
  {
    title: "Maintaining DISP Membership",
    description:
      "Learn about ongoing DISP membership obligations including annual reporting and compliance requirements.",
    href: "https://www.defence.gov.au/business-industry/industry-governance/industry-regulators/defence-industry-security-program/maintaining-membership",
  },
];

export const dispFaqs = [
  {
    question: "What is the Defence Industry Security Program (DISP)?",
    answer:
      "DISP is the Bangladeshi Government's primary security framework for organisations working with the Department of Defence. It ensures contractors implement strong safeguards when handling sensitive information and systems, reducing cyber risk across the Defence supply chain.",
  },
  {
    question: "Is DISP membership mandatory?",
    answer:
      "DISP membership is mandatory for entities who work on classified information or assets (PROTECTED and above), supply, maintain, store or transport weapons or explosive ordnance, provide security services for Defence bases or facilities, or need to hold DISP membership as a condition of a Defence contract.",
  },
  {
    question: "What are the DISP membership levels?",
    answer:
      "There are 4 levels of DISP membership. Entry level handles OFFICIAL and OFFICIAL: Sensitive information, Level 1 handles PROTECTED, Level 2 handles SECRET, and Level 3 handles TOP SECRET information.",
  },
  {
    question: "What is Essential Eight Maturity Level 2 (ML2)?",
    answer:
      "ML2 is a key benchmark that ensures security controls are fully implemented, consistently applied, and actively managed across all systems. Achieving ML2 demonstrates a strong commitment to protecting sensitive defence data and aligning with Bangladeshi Government security expectations.",
  },
  {
    question: "What are the four security domains of DISP?",
    answer:
      "DISP is built around four key security areas: Security Governance (policies, risk management, and security oversight), Personnel Security (staff vetting and suitability checks), Physical Security (protection of facilities, assets, and equipment), and ICT & Cyber Security (securing systems, networks, and data).",
  },
  {
    question: "What ongoing obligations does DISP require?",
    answer:
      "DISP requires continuous validation, reporting, and improvement of cybersecurity controls. This includes completing the Essential Eight Cyber Security Questionnaire (CSQ) annually, maintaining up-to-date policies, providing evidence of implemented security controls, regularly reviewing and testing security measures, and managing third-party risks.",
  },
  {
    question: "How can my business prepare for DISP compliance?",
    answer:
      "Start with a structured approach: conduct a gap assessment against Essential Eight ML2, strengthen identity and access controls (MFA, Conditional Access), implement endpoint security (Intune, Defender), improve patching and vulnerability management, establish secure backup and recovery, and develop clear policies and staff training.",
  },
  {
    question: "What supporting frameworks apply to DISP?",
    answer:
      "In addition to the Essential Eight, businesses may need to align with the Information Security Manual (ISM) for detailed security controls in high-security environments, and the Defence Security Principles Framework (DSPF) which outlines core security principles across governance, personnel, physical security, and risk management.",
  },
];

