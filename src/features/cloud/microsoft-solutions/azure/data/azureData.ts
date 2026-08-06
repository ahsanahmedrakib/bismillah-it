import {
  Cloud,
  Database,
  DollarSign,
  Globe,
  Server,
  Shield,
} from "lucide-react";

export const azureHeroData = {
  title1: "Microsoft",
  title2: "Azure",
  description1:
    "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It's the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
  bgImage: "/images/cloud/microsoft-solutions/azure/azure.png",
  actionButtons: [],
};

export const azureOverview = {
  label: "Microsoft Azure Cloud Platform",
  title: "What is Microsoft Azure?",
  description:
    "Microsoft Azure is an ever-expanding set of cloud services to help your organization meet your business challenges. It's the freedom to build, manage, and deploy applications on a massive, global network using your favorite tools and frameworks.",
  description2:
    "Find answers to the business challenges you face with an Azure solution that brings together everything you need — related products, services, and third-party applications. From DevOps to business analytics to the Internet of Things, you'll be up and running quickly with a scalable, cost-effective solution that works with your existing investments.",
  description3:
    "Total Solutions IT is a long-standing Microsoft Gold Certified Partner with high-levels of expertise in implementing and supporting Azure solutions for our clients.",
};

export const azureKeyFeatures = [
  {
    title: "Cloud Computing",
    desc: "Access virtual machines, containers, and serverless computing resources on-demand — scale up or down based on your needs.",
    icon: Cloud,
  },
  {
    title: "Global Network",
    desc: "Deploy applications across Microsoft's global network of datacentres for low latency and high availability worldwide.",
    icon: Globe,
  },
  {
    title: "Pay-As-You-Go",
    desc: "Only pay for the resources you actually use with flexible pricing models — no large upfront capital expenditure required.",
    icon: DollarSign,
  },
  {
    title: "Enterprise Security",
    desc: "Built-in security features including encryption, identity management, and compliance certifications to protect your data.",
    icon: Shield,
  },
  {
    title: "Hybrid Capability",
    desc: "Extend your on-premises infrastructure to the cloud with hybrid solutions that give you the best of both worlds.",
    icon: Server,
  },
  {
    title: "Managed Databases",
    desc: "Fully managed database services including SQL Database, Cosmos DB, and MySQL — with built-in intelligence and automation.",
    icon: Database,
  },
];

export const azureVPCReasons = {
  title: "Reasons a VPC May Suit Your Business",
  description:
    "A Virtual Private Cloud (VPC) on Microsoft Azure provides a secure, isolated environment for your infrastructure. Here are key reasons it may be right for your organisation:",
  reasons: [
    "Your business has multiple sites.",
    "You need to access your infrastructure on the road.",
    "You need to be able to upgrade the hardware on your server instantly.",
    "You don't want huge upfront costs.",
    "You only want to pay for the bandwidth and hardware that you use.",
  ],
};

export const azureBenefits = [
  {
    title: "Pay for What You Use",
    desc: "With a cloud server, you pay a fixed rate monthly for the services you use. No surprises, no hidden fees — just transparent, predictable costs.",
  },
  {
    title: "Mobility",
    desc: "You can access your cloud server from anywhere with an internet connection. Your team stays productive whether they're in the office, at home, or on the road.",
  },
  {
    title: "Scalability",
    desc: "As your business grows, so can your hardware — without downtime or physical work. Scale resources up or down instantly to match demand.",
  },
  {
    title: "No Upfront Hardware Costs",
    desc: "There is no infrastructure put in place on your site — it is all stored in another datacentre. Eliminate capital expenditure on physical servers.",
  },
  {
    title: "Bangladesh's Best Datacentres",
    desc: "Total Solutions IT uses the Telstra cloud server datacentre — the most stable and available service in the country. Your infrastructure is hosted in world-class facilities.",
  },
  {
    title: "Data Availability",
    desc: "Telstra cloud servers are maintained at the physical level by Telstra technicians — as part of your monthly fixed cost. You can ensure that your system will always be available.",
  },
];

export const azureUsefulLinks = [
  {
    title: "Azure DevOps",
    description:
      "Plan, develop, and deliver software faster with Azure DevOps — the set of development tools for CI/CD pipelines, repos, and project management.",
    href: "https://azure.microsoft.com/en-us/solutions/devops/",
  },
  {
    title: "Azure Business Analytics",
    description:
      "Turn your data into actionable insights with Azure's business analytics services — including Power BI, Data Factory, and Synapse Analytics.",
    href: "https://azure.microsoft.com/en-us/solutions/big-data/",
  },
  {
    title: "Azure Internet of Things",
    description:
      "Build IoT solutions with Azure — connect, monitor, and manage IoT devices at scale with comprehensive cloud services.",
    href: "https://azure.microsoft.com/en-us/overview/iot/",
  },
  {
    title: "Azure Documentation",
    description:
      "Official Microsoft Azure documentation — tutorials, API references, and guides for building and managing cloud solutions.",
    href: "https://learn.microsoft.com/en-us/azure/",
  },
];

export const azureFAQs = [
  {
    question: "What is Microsoft Azure?",
    answer:
      "Microsoft Azure is a cloud computing platform and service from Microsoft that provides a wide range of cloud services including compute, storage, networking, databases, and more. It allows organisations to build, deploy, and manage applications through Microsoft-managed datacentres worldwide.",
  },
  {
    question: "Why should my business use Azure?",
    answer:
      "Azure provides scalable, cost-effective cloud infrastructure without the need for large upfront hardware investments. It offers enterprise-grade security, global reach, hybrid capabilities, and pay-as-you-go pricing that scales with your business needs.",
  },
  {
    question: "How does Azure pricing work?",
    answer:
      "Azure uses a pay-as-you-go pricing model — you only pay for the resources you actually consume. There are no upfront costs, and you can scale resources up or down as needed. Various pricing calculators and cost management tools help you estimate and control your spend.",
  },
  {
    question: "What is a Virtual Private Cloud (VPC)?",
    answer:
      "A Virtual Private Cloud is an isolated section of a cloud environment where you can launch resources in a virtual network that you define. It provides control over your virtual networking environment including IP address ranges, subnets, route tables, and network gateways.",
  },
  {
    question: "Can Azure work with my existing infrastructure?",
    answer:
      "Yes. Azure offers extensive hybrid capabilities through Azure Arc and Azure Stack, allowing you to connect your on-premises infrastructure to the cloud. You can extend, manage, and govern resources across any infrastructure — on-premises, at the edge, or in multi-cloud environments.",
  },
];

