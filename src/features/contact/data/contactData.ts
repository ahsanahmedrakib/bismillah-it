import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const WHATSAPP = `https://wa.me/+8801972721388?text=${encodeURIComponent("Hi there! I am interested in your services.")}`;
export const MESSENGER = "https://m.me/bct.com.bd";

export const contactHeroData = {
  title1: "Get In Touch",
  title2: "Contact Us",
  bgImage: "/images/it-support/hero.png",
  description1:
    "Have a question or need assistance? We are here to help. Reach out to us through any of the channels below.",
};

export const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "Bismillah Computer & Technology",
    sub: "Dhaka, Bangladesh",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1972-721388",
    sub: "Sat - Thu, 9AM - 6PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@bct.com.bd",
    sub: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sat - Thu: 9:00 AM - 6:00 PM",
    sub: "Friday: Closed",
  },
];
