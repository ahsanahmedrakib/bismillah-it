import { createMetadata } from "@/shared/lib/seo";
import { ExchangeOnlinePage } from "@/features/cloud/microsoft-solutions/exchange-online/_components";

export const metadata = createMetadata({
  title: "Exchange Online",
  description: "Professional email hosting with Microsoft Exchange Online, including shared mailboxes, calendars, and contacts.",
  path: "/cloud/microsoft-solutions/exchange-online",
});

const page = () => {
  return <ExchangeOnlinePage />;
};

export default page;
