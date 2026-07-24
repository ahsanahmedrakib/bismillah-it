import {
  Search,
  TrendingUp,
  BarChart3,
  Target,
  PenTool,
  Link,
} from "lucide-react";

export const seoHeroData = {
  title1: "Boost Your",
  title2: "Online Visibility",
  description1:
    "Data-driven SEO strategies to help you rank higher and reach your target audience.",
  description2:
    "From keyword research to technical optimization, we ensure your website gets found by the right people.",
  bgImage: "/images/web/seo.png",
  actionButtons: [
    { label: "Get SEO Audit", href: "/contact" },
    { label: "Our Services", href: "/web/seo" },
  ],
};

export const seoFeatures = [
  {
    title: "Keyword Research",
    desc: "In-depth keyword analysis to target the most valuable search terms for your business.",
    icon: Search,
  },
  {
    title: "On-Page SEO",
    desc: "Optimizing your website content, meta tags, and structure for maximum search visibility.",
    icon: PenTool,
  },
  {
    title: "Technical SEO",
    desc: "Ensuring your website is technically sound with fast load times and proper indexing.",
    icon: Target,
  },
  {
    title: "Link Building",
    desc: "Building high-quality backlinks to increase your domain authority and rankings.",
    icon: Link,
  },
  {
    title: "Analytics & Reporting",
    desc: "Comprehensive reports and insights to track your SEO performance and ROI.",
    icon: BarChart3,
  },
  {
    title: "Growth Strategy",
    desc: "Customized strategies to drive organic traffic growth and conversions over time.",
    icon: TrendingUp,
  },
];

export const seoServices = [
  {
    title: "Local SEO",
    services: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review management strategy",
      "Local keyword targeting",
    ],
  },
  {
    title: "Ecommerce SEO",
    services: [
      "Product page optimization",
      "Category structure improvement",
      "Schema markup implementation",
      "Competitor analysis",
    ],
  },
  {
    title: "Content Strategy",
    services: [
      "Blog content planning",
      "Content gap analysis",
      "SEO copywriting",
      "Content performance tracking",
    ],
  },
  {
    title: "Technical Audits",
    services: [
      "Site speed optimization",
      "Mobile-first indexing",
      "Crawl error resolution",
      "Core Web Vitals improvement",
    ],
  },
];
