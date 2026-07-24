import {
  ShoppingBag,
  CreditCard,
  Package,
  BarChart3,
  Truck,
  ShieldCheck,
} from "lucide-react";

export const ecommerceHeroData = {
  title1: "Build Your",
  title2: "Online Store",
  description1:
    "Powerful eCommerce solutions to help you sell products and services online.",
  description2:
    "From secure payment processing to inventory management, we build stores that convert visitors into customers.",
  bgImage: "/images/web/web.png",
  actionButtons: [
    { label: "Start Selling", href: "/contact" },
    { label: "See Examples", href: "/web/portfolio" },
  ],
};

export const ecommerceFeatures = [
  {
    title: "Shopping Cart",
    desc: "Feature-rich shopping carts that simplify the checkout process and boost your sales.",
    icon: ShoppingBag,
  },
  {
    title: "Payment Integration",
    desc: "Secure payment gateways including Stripe, PayPal, and local payment methods.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management",
    desc: "Real-time inventory tracking and automated stock management for your products.",
    icon: Package,
  },
  {
    title: "Analytics Dashboard",
    desc: "Comprehensive sales analytics and reports to track your store performance.",
    icon: BarChart3,
  },
  {
    title: "Shipping Solutions",
    desc: "Integrated shipping options with real-time tracking and automated order fulfillment.",
    icon: Truck,
  },
  {
    title: "Secure Transactions",
    desc: "SSL encryption and PCI compliance to ensure every transaction is safe and secure.",
    icon: ShieldCheck,
  },
];

export const ecommercePlatforms = [
  {
    title: "WooCommerce",
    services: [
      "WordPress-based eCommerce",
      "Thousands of plugins available",
      "Full customization control",
      "Ideal for small to medium businesses",
    ],
  },
  {
    title: "Shopify",
    services: [
      "Hosted eCommerce platform",
      "Easy setup and management",
      "Built-in payment processing",
      "Scalable for growing businesses",
    ],
  },
  {
    title: "Custom Solutions",
    services: [
      "Tailored to your requirements",
      "Unique branding and features",
      "Full ownership of code",
      "Best for enterprise needs",
    ],
  },
];
