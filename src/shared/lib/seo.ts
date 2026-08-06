import type { Metadata } from "next";

export const SITE_NAME = "Bismillah Computer & Technology";
export const SITE_URL = "https://bct.com.bd";
export const SITE_DESCRIPTION =
  "Comprehensive IT solutions including web design, cloud services, voice systems, internet connectivity, and managed IT support.";
export const SITE_KEYWORDS = [
  "IT services",
  "managed IT support",
  "cyber security",
  "cloud services",
  "Microsoft 365",
  "Azure",
  "web design",
  "web development",
  "SEO",
  "business phone systems",
  "VoIP",
  "NBN",
  "internet service provider",
  "Uttara Dhaka",
  "Bismillah Computer & Technology",
];

export const SITE_EMAIL = "support@bct.com.bd";
export const SITE_PHONE = "+8801972721388";
export const OG_IMAGE = "/opengraph-image";

export const CONTACT = {
  email: SITE_EMAIL,
  phone: SITE_PHONE,
  address: {
    streetAddress: "House#6, Road#Shera Bangal Avenue, Block#B, Dolipara Uttara",
    addressLocality: "Dhaka",
    postalCode: "1230",
    addressCountry: "BD",
  },
};

export const SOCIAL_LINKS = [
  "https://www.facebook.com/bct.com.bd",
  "https://www.linkedin.com/company/bctbd/",
  "https://www.twitter.com",
  "https://www.instagram.com",
];

interface CreateMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  titleAbsolute?: boolean;
}

export function createMetadata({
  title,
  description,
  path,
  keywords,
  openGraphType = "website",
  titleAbsolute = false,
}: CreateMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: titleAbsolute ? { absolute: fullTitle } : title,
    description,
    keywords: [...SITE_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: openGraphType,
      images: [
        {
          url: `${SITE_URL}${OG_IMAGE}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}${OG_IMAGE}`],
    },
  };
}
