import {
  Globe,
  HardDrive,
  Headphones,
  RefreshCcw,
  Server,
  Shield,
} from "lucide-react";

export const hostingHeroData = {
  title1: "Reliable",
  title2: "Web Hosting",
  description1:
    "Fast, secure, and dependable hosting solutions to keep your website online 24/7.",
  description2:
    "From domain registration to managed hosting, we provide everything you need for a powerful online presence.",
  bgImage: "/images/web/development/hero.png",
  actionButtons: [],
};

export const hostingFeatures = [
  {
    title: "Domain Registration",
    desc: "Register your perfect domain name with easy management and renewal options.",
    icon: Globe,
  },
  {
    title: "Fast Servers",
    desc: "High-performance servers with SSD storage for lightning-fast load times.",
    icon: Server,
  },
  {
    title: "SSL Certificates",
    desc: "Free SSL certificates to secure your website and build trust with your visitors.",
    icon: Shield,
  },
  {
    title: "Backup & Recovery",
    desc: "Automated daily backups with easy restoration to keep your data safe.",
    icon: HardDrive,
  },
  {
    title: "Easy Management",
    desc: "User-friendly control panel to manage your hosting, emails, and domains.",
    icon: RefreshCcw,
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock technical support to help you with any hosting issues.",
    icon: Headphones,
  },
];

export const hostingPlans = [
  {
    title: "Starter Plan",
    services: [
      "1 Website Hosting",
      "10 GB SSD Storage",
      "Free SSL Certificate",
      "1 Email Account",
      "Bandwidth Unmetered",
    ],
  },
  {
    title: "Business Plan",
    services: [
      "Unlimited Websites",
      "50 GB SSD Storage",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise Plan",
    services: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Free SSL + Domain",
      "Unlimited Email Accounts",
      "Dedicated Support",
    ],
  },
];

