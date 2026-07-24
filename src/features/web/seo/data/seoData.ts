import {
  BarChart3,
  FileText,
  Link,
  MapPin,
  Search,
  PenTool,
  Star,
  Monitor,
  ExternalLink,
  Settings,
} from "lucide-react";

export const seoHeroData = {
  title1: "Search Engine",
  title2: "Optimisation (SEO)",
  description1:
    "We help your business get found on Google with data-driven SEO strategies that deliver measurable results.",
  description2:
    "From keyword research to technical optimization, we ensure your website ranks for the right terms.",
  bgImage: "/images/web/seo.png",
  actionButtons: [
    { label: "Get SEO Audit", href: "/contact" },
    { label: "Our Services", href: "/web/seo" },
  ],
};

export const seoServices = [
  {
    title: "Analytics and Reporting",
    desc: "Gain valuable insights into your SEO performance with our monthly reporting enabling data-driven decision-making and continuous improvement.",
    icon: BarChart3,
  },
  {
    title: "Local SEO Strategies",
    desc: "Target local customers with tailored SEO strategies, enhancing your presence in specific regions and dominate search in your area.",
    icon: MapPin,
  },
  {
    title: "SEO Content",
    desc: "We write SEO content tailored to increasing your authority on targeted words proving to Google your website is about that topic.",
    icon: FileText,
  },
  {
    title: "Link Building",
    desc: "Getting other websites to link to your website is like someone voting for you. These are called back links and we do the hard work in creating them for you.",
    icon: Link,
  },
];

export const yoastFeatures = [
  {
    title: "Adds structured data to help Google.",
    desc: "Adding structured data is one of the most effective ways of getting your site noticed by search engines. Yoast SEO automatically adds the right structured data and comes with options for you to enrich your site with extra structured data. Increases your chances to get rich results!",
  },
  {
    title: "Streamlines your SEO strategy.",
    desc: "Bid farewell to the complexities of SEO. Yoast SEO handles the technical aspects, such as canonical URLs and meta tags, automating essential optimizations behind the scenes. Unleash your focus on creating captivating content that connects with your audience.",
  },
  {
    title: "Climbs those rankings.",
    desc: "Take advantage of advanced features like XML sitemaps, title and meta description templating, and Schema.org structured data integration. Empower search engines to fully understand and appreciate your website, helping you reach the top of search results.",
  },
];

export const seoPointers = [
  {
    title: "Keyword Research",
    desc: "Identify relevant keywords that users are likely to search for when looking for information related to your website.",
    icon: Search,
  },
  {
    title: "On-Page SEO",
    desc: "Optimize individual pages of your website for selected keywords. This involves including keywords in titles, headings, meta descriptions, and throughout the content.",
    icon: PenTool,
  },
  {
    title: "Quality Content",
    desc: "Create high-quality, relevant, and valuable content. Search engines aim to provide users with the best possible results, so quality content is crucial for ranking.",
    icon: Star,
  },
  {
    title: "User Experience",
    desc: "Ensure a positive user experience by having a well-designed and user-friendly website. This includes fast loading times, mobile responsiveness, and easy navigation.",
    icon: Monitor,
  },
  {
    title: "Backlinks",
    desc: "Acquire high-quality backlinks from reputable websites. Backlinks act as a vote of confidence for your content, contributing to higher search engine rankings.",
    icon: ExternalLink,
  },
  {
    title: "Technical SEO",
    desc: "Optimize technical aspects of your website, such as improving site speed, using clean URL structures, and having a sitemap. This helps search engines crawl and index your site more efficiently.",
    icon: Settings,
  },
];

