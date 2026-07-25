import { Key, Lock, Shield } from "lucide-react";

export const entraIdHeroData = {
  title1: "Microsoft",
  title2: "Entra ID",
  description1:
    "Ensuring identity security has become paramount in the evolving work landscape, particularly with the flexibility of remote app access. Establishing secure access to your network and applications starts with Azure Active Directory.",
  bgImage: "/images/cloud/microsoft-solutions/entra-id/entra-id.png",
  actionButtons: [],
};

export const entraIdOverview = {
  label: "Microsoft Entra ID",
  title: "Identity & Access Management",
  description:
    "Ensuring identity security has become paramount in the evolving work landscape, particularly with the flexibility of remote app access. Establishing secure access to your network and applications starts with Azure Active Directory.",
  description2:
    "Azure Active Directory (Azure AD) serves as the bedrock of your cloud identity and serves as the security boundary for all Microsoft online services, including Microsoft 365. As an enterprise identity solution, Azure AD offers single sign-on, multi-factor authentication, and conditional access features to safeguard your users against 99.9% of cyber threats.",
  description3:
    "Microsoft Entra ID provides a comprehensive identity and access management solution that helps you manage user identities, control access to resources, and protect against security threats across your entire organisation.",
};

export const entraIdKeyFeatures = [
  {
    title: "Single Sign-On",
    desc: "Connect your workforce to all your apps, from any location, using any device. Simplify access to your apps from anywhere.",
    icon: Key,
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Help safeguard access to data and apps and keep it simple for users. Add an extra layer of security to the login process.",
    icon: Shield,
  },
  {
    title: "Conditional Access",
    desc: "Apply the right access controls to keep your organisation more secure. Enforce policies based on user, location, device, and risk.",
    icon: Lock,
  },
];

export const entraIdAzureAD = {
  title: "Protect your business with a universal identity platform",
  description:
    "The Azure Active Directory (Azure AD) enterprise identity service provides single sign-on and multi-factor authentication to help protect your users from 99.9 percent of cybersecurity attacks.",
  features: [
    {
      title: "Single sign-on simplifies access to your apps from anywhere",
      desc: "Users only need one set of credentials to access all their applications, whether they're in the office or working remotely.",
    },
    {
      title:
        "Conditional Access and multi-factor authentication help protect and govern access",
      desc: "Enforce security policies based on user identity, location, device compliance, and risk level to ensure the right people have the right access.",
    },
    {
      title:
        "A single identity platform lets you engage with internal and external users more securely",
      desc: "Manage identities for employees, customers, and partners from a unified platform, extending your security boundary beyond organisational walls.",
    },
    {
      title:
        "Developer tools make it easy to integrate identity into your apps and services",
      desc: "Accelerate adoption of your applications by supporting single sign-on and user provisioning with built-in developer tools and APIs.",
    },
  ],
};

export const entraIdFeatureSections = [
  {
    title: "Connect your workforce",
    description:
      "Whether people are on-site or remote, give them seamless access to all their apps so they can stay productive from anywhere. Automate workflows for user lifecycle and provisioning. Save time and resources with self-service management.",
    image: "/images/cloud/microsoft-solutions/entra-id/connect-workforce.svg",
    links: [
      {
        label: "Learn more about single sign-on",
        href: "https://azure.microsoft.com/en-us/services/active-directory/sso/",
      },
      {
        label: "Learn how to enable secure access for your remote workforce",
        href: "https://docs.microsoft.com/en-us/enterprise-mobility-security/remote-work",
      },
    ],
  },
  {
    title: "Choose from thousands of SaaS apps",
    description:
      "Simplify single sign-on. Azure AD supports more than 2,800 pre-integrated software as a service (SaaS) applications.",
    image: "/images/cloud/microsoft-solutions/entra-id/diagram-logos.svg",
    links: [
      {
        label: "Browse the Azure Marketplace",
        href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/category/azure-active-directory-apps",
      },
    ],
  },
  {
    title: "Protect and govern access",
    description:
      "Safeguard user credentials by enforcing strong authentication and conditional access policies. Efficiently manage your identities by ensuring that the right people have the right access to the right resources.",
    image: "/images/cloud/microsoft-solutions/entra-id/protect-govern.svg",
    links: [
      {
        label: "Learn more about security and governance",
        href: "https://azure.microsoft.com/en-us/services/active-directory/security/",
      },
    ],
  },
  {
    title: "Engage with your customers and partners",
    description:
      "Secure and manage customers and partners beyond your organisational boundaries, with one identity solution. Customise user journeys and simplify authentication with social identity and more.",
    image: "/images/cloud/microsoft-solutions/entra-id/engage.svg",
    links: [
      {
        label: "Learn more about External Identities",
        href: "https://azure.microsoft.com/en-us/services/active-directory/customer-partner-identity/",
      },
    ],
  },
  {
    title: "Integrate identity into your apps",
    description:
      "Accelerate adoption of your application in the enterprise by supporting single sign-on and user provisioning. Reduce sign-in friction and automate the creation, removal, and maintenance of user accounts.",
    image: "/images/cloud/microsoft-solutions/entra-id/integrate.svg",
    links: [
      {
        label: "Learn more about identity integration",
        href: "https://azure.microsoft.com/en-us/services/active-directory/integrate/",
      },
    ],
  },
];

export const entraIdUsefulLinks = [
  {
    title: "Microsoft Entra ID Overview",
    description:
      "Learn about Microsoft Entra ID — the cloud-based identity and access management service that helps your people sign in and access resources.",
    href: "https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id",
  },
  {
    title: "Single Sign-On Documentation",
    description:
      "Technical documentation for Azure AD Single Sign-On — including setup guides, SaaS app integration, and best practices.",
    href: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/",
  },
  {
    title: "Multi-Factor Authentication",
    description:
      "Learn how to enable and configure Multi-Factor Authentication in Azure AD to protect your organisation from compromised identities.",
    href: "https://learn.microsoft.com/en-us/entra/identity/authentication/",
  },
  {
    title: "Conditional Access Overview",
    description:
      "Understand how Conditional Access policies work in Azure AD to enforce access controls based on conditions and signals.",
    href: "https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview",
  },
];

export const entraIdBenefits = [
  {
    title: "Universal Identity Platform",
    desc: "Azure AD serves as the bedrock of your cloud identity, providing a single platform to manage identities for employees, customers, and partners across your entire organisation.",
  },
  {
    title: "99.9% Threat Protection",
    desc: "Enterprise-grade single sign-on, multi-factor authentication, and conditional access features safeguard your users against 99.9% of cybersecurity attacks.",
  },
  {
    title: "Seamless Remote Access",
    desc: "Whether people are on-site or remote, Entra ID gives them seamless access to all their apps so they can stay productive from anywhere, on any device.",
  },
  {
    title: "2,800+ SaaS Integrations",
    desc: "Azure AD supports more than 2,800 pre-integrated SaaS applications, making it easy to connect your workforce to all the tools they need.",
  },
  {
    title: "Granular Access Control",
    desc: "Conditional Access policies let you apply the right access controls based on user identity, location, device compliance, and risk level.",
  },
  {
    title: "Developer-Friendly Integration",
    desc: "Built-in developer tools make it easy to integrate identity into your apps and services, supporting SSO and automated user provisioning.",
  },
];

export const entraIdFAQs = [
  {
    question: "What is Microsoft Entra ID?",
    answer:
      "Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based identity and access management service. It helps your people sign in and access resources, providing single sign-on, multi-factor authentication, and conditional access to protect against cybersecurity threats.",
  },
  {
    question: "How does Single Sign-On work with Entra ID?",
    answer:
      "Single Sign-On (SSO) allows users to authenticate once with Entra ID and then access all their connected applications without needing to sign in again. This works across cloud apps, on-premises apps, and SaaS applications.",
  },
  {
    question: "What is Multi-Factor Authentication?",
    answer:
      "Multi-Factor Authentication (MFA) adds an extra layer of security by requiring users to provide two or more forms of verification when signing in — such as a password plus a code from their phone. This helps protect against 99.9% of identity attacks.",
  },
  {
    question: "How many SaaS apps does Azure AD support?",
    answer:
      "Azure AD supports more than 2,800 pre-integrated software as a service (SaaS) applications through the Azure Marketplace, making it easy to set up single sign-on for the tools your organisation already uses.",
  },
  {
    question:
      "Can I use Entra ID for external users like customers and partners?",
    answer:
      "Yes. Entra ID supports External Identities, allowing you to securely manage customers and partners beyond your organisational boundaries. You can customise user journeys and simplify authentication with social identity providers and more.",
  },
];

