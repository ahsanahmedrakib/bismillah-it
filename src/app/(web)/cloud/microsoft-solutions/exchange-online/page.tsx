import type { Metadata } from "next";
import { ExchangeOnlinePage } from "@/features/cloud/microsoft-solutions/exchange-online/_components";

export const metadata: Metadata = {
  title: "Exchange Online",
  description:
    "Professional email hosting with Microsoft Exchange Online, including shared mailboxes, calendars, and contacts.",
};

const page = () => {
  return <ExchangeOnlinePage />;
};

export default page;
