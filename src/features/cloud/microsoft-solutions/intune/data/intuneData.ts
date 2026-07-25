import {
  AppWindow,
  BarChart3,
  Cloud,
  HardDrive,
  Laptop,
  Layout,
  Lock,
  Shield,
  Smartphone,
  Wrench,
} from "lucide-react";

export const intuneHeroData = {
  title1: "Microsoft",
  title2: "Intune",
  description1:
    "Microsoft Intune is a cloud-based endpoint management solution that helps organisations manage and secure devices, apps, and data across their entire fleet — whether corporate-owned or personal.",
  bgImage: "/images/cloud/microsoft-solutions/intune/intune.svg",
  actionButtons: [],
};

export const intuneOverview = {
  label: "Microsoft Intune",
  title: "What is Microsoft Intune?",
  description:
    "Microsoft Intune is a cloud-based endpoint management solution that helps organisations manage and secure devices, apps, and data across their entire fleet — whether corporate-owned or personal. As part of the Microsoft Endpoint Manager suite, Intune provides a unified platform for device configuration, application deployment, compliance enforcement, and security management.",
  description2:
    "Intune enables IT teams to manage Windows, macOS, iOS, Android, and Linux devices from a single console. It supports both Mobile Device Management (MDM) and Mobile Application Management (MAM), giving organisations flexibility in how they control corporate data on both managed and unmanaged devices.",
  description3:
    "With features like Windows Autopilot for zero-touch deployment, Endpoint Analytics for performance insights, and integration with Microsoft Defender for threat detection, Intune provides comprehensive endpoint management that scales with your organisation's needs.",
};

export const intuneFeatures = [
  {
    category: "Device Configuration & Policies",
    icon: Wrench,
    items: [
      {
        title: "Configuration Profiles",
        desc: "Create and deploy device configuration profiles to enforce settings across Windows, macOS, iOS, and Android devices — including Wi-Fi, VPN, email, and security settings.",
      },
      {
        title: "Compliance Policies",
        desc: "Define compliance rules (e.g., minimum OS version, encryption enabled) and automatically take actions on non-compliant devices such as blocking access or notifying users.",
      },
      {
        title: "Settings Catalog",
        desc: "Use the Settings Catalog to access a comprehensive library of configurable settings, making it easier to find and apply the exact policies you need.",
      },
    ],
  },
  {
    category: "Application Management",
    icon: AppWindow,
    items: [
      {
        title: "App Deployment",
        desc: "Deploy, update, and remove applications across managed devices — including Microsoft 365 apps, line-of-business apps, and third-party software.",
      },
      {
        title: "Mobile Application Management (MAM)",
        desc: "Protect corporate data within apps on unmanaged devices with policies like copy/paste restrictions, data encryption, and selective wipe — without requiring full device enrollment.",
      },
      {
        title: "App Protection Policies",
        desc: "Enforce data loss prevention at the application level, ensuring corporate information is protected even on personal devices.",
      },
    ],
  },
  {
    category: "Windows Autopilot",
    icon: Laptop,
    items: [
      {
        title: "Zero-Touch Deployment",
        desc: "Deploy Windows devices directly to end users without IT needing to physically image or configure them. Devices automatically configure themselves when first powered on.",
      },
      {
        title: "User-Driven Mode",
        desc: "Users sign in with their corporate credentials and Autopilot applies all necessary configurations, policies, and apps — making the device ready for work in minutes.",
      },
      {
        title: "Self-Deploying Mode",
        desc: "For kiosk or shared device scenarios, Autopilot can automatically deploy and configure devices without any user interaction required.",
      },
    ],
  },
  {
    category: "Endpoint Analytics",
    icon: BarChart3,
    items: [
      {
        title: "Performance Insights",
        desc: "Monitor device boot times, logon performance, and application reliability to identify and resolve issues affecting user productivity.",
      },
      {
        title: "Startup Score",
        desc: "Track and benchmark startup performance across your organisation to ensure devices are booting quickly and efficiently.",
      },
      {
        title: "Proactive Remediations",
        desc: "Create and deploy scripts that automatically detect and fix common issues before they impact end users.",
      },
    ],
  },
  {
    category: "Security & Compliance",
    icon: Shield,
    items: [
      {
        title: "Device Compliance",
        desc: "Ensure all devices meet your organisation's security standards with automated compliance checks and conditional access enforcement.",
      },
      {
        title: "Integration with Defender",
        desc: "Integrate with Microsoft Defender for Endpoint to provide real-time threat detection, vulnerability management, and automated response capabilities.",
      },
      {
        title: "Conditional Access",
        desc: "Enforce access controls based on device compliance, location, user risk level, and other signals to protect corporate resources.",
      },
    ],
  },
  {
    category: "Mobile Device Management (MDM)",
    icon: Smartphone,
    items: [
      {
        title: "Full Device Enrollment",
        desc: "Enroll corporate-owned and BYOD devices to gain full management capabilities including remote wipe, device encryption, and passcode enforcement.",
      },
      {
        title: "Selective Wipe",
        desc: "Remotely remove only corporate data from a device while leaving personal data intact — ideal for offboarding employees or lost devices.",
      },
      {
        title: "Device Categories",
        desc: "Organise devices into categories based on department, location, or usage to simplify policy and profile assignment.",
      },
    ],
  },
  {
    category: "Identity & Access Management",
    icon: Lock,
    items: [
      {
        title: "Azure AD Integration",
        desc: "Seamlessly integrate with Azure Active Directory for device registration, user authentication, and group-based policy assignment.",
      },
      {
        title: "Multi-Factor Authentication",
        desc: "Enforce MFA requirements for device enrollment and access to corporate resources, adding an extra layer of security.",
      },
    ],
  },
  {
    category: "Cloud Management Gateway",
    icon: Cloud,
    items: [
      {
        title: "Internet-Based Management",
        desc: "Manage devices outside the corporate network without requiring a VPN, enabling remote workers to receive policies and updates directly over the internet.",
      },
      {
        title: "Co-Management",
        desc: "Use Intune alongside Configuration Manager (SCCM) to gradually shift workloads to the cloud while maintaining on-premises management where needed.",
      },
    ],
  },
  {
    category: "Reporting & Monitoring",
    icon: Layout,
    items: [
      {
        title: "Device Inventory",
        desc: "Gain visibility into your entire device fleet with detailed hardware and software inventory reports.",
      },
      {
        title: "Audit Logs",
        desc: "Track all administrative actions and changes made in Intune for compliance auditing and troubleshooting.",
      },
      {
        title: "Diagnostic Reports",
        desc: "Generate diagnostic reports for individual devices to troubleshoot configuration issues and compliance problems.",
      },
    ],
  },
  {
    category: "Patch Management",
    icon: HardDrive,
    items: [
      {
        title: "Windows Update for Business",
        desc: "Control the deployment of Windows updates across your fleet with deferral rules, maintenance windows, and ring-based rollout strategies.",
      },
      {
        title: "Feature Updates",
        desc: "Manage Windows feature update adoption with phased rollouts and compatibility checks to ensure a smooth upgrade experience.",
      },
    ],
  },
];

export const intuneKeyFeatures = [
  {
    title: "Device Configuration",
    desc: "Deploy configuration profiles and compliance policies across all device platforms from a single cloud console.",
    icon: Wrench,
  },
  {
    title: "App Deployment",
    desc: "Push, update, and manage applications across your fleet with support for MAM on unmanaged devices.",
    icon: AppWindow,
  },
  {
    title: "Windows Autopilot",
    desc: "Zero-touch Windows device deployment that configures devices automatically when first powered on.",
    icon: Laptop,
  },
  {
    title: "Endpoint Analytics",
    desc: "Monitor device performance, startup times, and user experience with proactive remediation scripts.",
    icon: BarChart3,
  },
  {
    title: "Security & Compliance",
    desc: "Automated compliance checks, Defender integration, and conditional access to protect corporate resources.",
    icon: Shield,
  },
  {
    title: "Remote Device Management",
    desc: "Full MDM with selective wipe, device categories, and internet-based management for remote workers.",
    icon: Smartphone,
  },
];

export const intuneBenefits = [
  {
    title: "Unified Endpoint Management",
    desc: "Manage Windows, macOS, iOS, Android, and Linux devices from a single cloud-based console, eliminating the need for multiple management tools.",
  },
  {
    title: "Zero-Touch Deployment",
    desc: "Windows Autopilot enables devices to be configured and deployed directly to end users without IT intervention, reducing setup time from hours to minutes.",
  },
  {
    title: "Flexible BYOD Support",
    desc: "MAM policies protect corporate data on personal devices without requiring full device enrollment, giving employees flexibility while maintaining security.",
  },
  {
    title: "Proactive Issue Resolution",
    desc: "Endpoint Analytics identifies performance issues and proactively remediates common problems before they impact end users.",
  },
  {
    title: "Simplified Compliance",
    desc: "Automated compliance checks and conditional access policies ensure devices always meet your organisation's security standards.",
  },
  {
    title: "Reduced IT Overhead",
    desc: "Cloud-based management eliminates the need for on-premises infrastructure, while co-management allows gradual migration from Configuration Manager.",
  },
];

export const intuneFAQs = [
  {
    question: "What is Microsoft Intune?",
    answer:
      "Microsoft Intune is a cloud-based endpoint management solution that helps organisations manage and secure devices, apps, and data across their entire fleet. It provides Mobile Device Management (MDM) and Mobile Application Management (MAM) capabilities from a single console.",
  },
  {
    question: "What devices can Intune manage?",
    answer:
      "Intune supports management of Windows, macOS, iOS, Android, and Linux devices. It provides platform-specific features while maintaining a consistent management experience across all operating systems.",
  },
  {
    question: "What is Windows Autopilot?",
    answer:
      "Windows Autopilot is a collection of technologies used to set up and pre-configure new devices, getting them ready for productive use. It enables zero-touch deployment where devices automatically configure themselves when first powered on, without IT needing to physically image them.",
  },
  {
    question: "How does Intune handle BYOD scenarios?",
    answer:
      "Intune supports BYOD through Mobile Application Management (MAM), which protects corporate data within apps on personal devices without requiring full device enrollment. Users maintain privacy over their personal data while corporate information remains protected.",
  },
  {
    question: "Can Intune work alongside Configuration Manager?",
    answer:
      "Yes. Intune supports co-management with Configuration Manager (SCCM), allowing organisations to gradually shift management workloads to the cloud while maintaining on-premises management where needed. This enables a phased migration to cloud-based endpoint management.",
  },
];

export const intuneUsefulLinks = [
  {
    title: "Microsoft Intune Overview",
    description:
      "Learn about Microsoft Intune — a cloud-based endpoint management solution for managing devices, apps, and security across your organisation.",
    href: "https://www.microsoft.com/en-us/security-business/siem-and-xdr/microsoft-defender-endpoint",
  },
  {
    title: "Intune Documentation",
    description:
      "Technical documentation for Microsoft Intune — including deployment guides, configuration references, and best practices.",
    href: "https://learn.microsoft.com/en-us/mem/intune/",
  },
  {
    title: "Windows Autopilot Overview",
    description:
      "Understand how Windows Autopilot simplifies device deployment with zero-touch configuration and user-driven setup.",
    href: "https://learn.microsoft.com/en-us/windows/deployment/windows-autopilot/",
  },
  {
    title: "Intune Pricing & Plans",
    description:
      "Compare Microsoft Intune plans and pricing — find the right option for your organisation's endpoint management needs.",
    href: "https://www.microsoft.com/en-us/microsoft-365/enterprise/mobility-security-comparison",
  },
];

