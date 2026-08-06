"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  exchangeOnlineBenefits,
  exchangeOnlineFAQs,
  exchangeOnlineHeroData,
  exchangeOnlineKeyFeatures,
  exchangeOnlineOverview,
  exchangeOnlineUsefulLinks,
} from "../data/exchangeOnlineData";

function BenefitCard({
  benefit,
}: {
  benefit: { title: string; desc: string };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</h3>
      <p className="text-slate-600 text-sm text-justify">{benefit.desc}</p>
    </div>
  );
}

function FeatureCard({
  feature,
}: {
  feature: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = feature.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex justify-center pb-4 text-brand-active">
        <Icon size={44} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 text-center mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{feature.desc}</p>
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-blue-100 rounded-xl overflow-hidden relative">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`text-blue-600 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ExchangeOnlinePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={exchangeOnlineHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/exchange-online/section.png"
              alt="Exchange Online"
              height={400}
              width={1000}
              className="object-cover"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {exchangeOnlineOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {exchangeOnlineOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {exchangeOnlineOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {exchangeOnlineOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {exchangeOnlineOverview.description3}
              </p>
              <a
                href="#features"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Key Features <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="features">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Key Features of Microsoft Exchange Online
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Everything you need for secure, reliable business email and
            collaboration
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exchangeOnlineKeyFeatures.map((feature, i) => (
              <Reveal key={i} delay={i * 80}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= USEFUL LINKS ================= */}
      <section className="py-8 lg:py-10 bg-slate-50" id="useful-links">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exchangeOnlineUsefulLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
                  className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
                >
                  <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    • {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {link.description}
                  </p>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="benefits">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Benefits of Using Exchange Online
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Why businesses choose Exchange Online for secure, reliable email
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exchangeOnlineBenefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 80}>
                <BenefitCard benefit={benefit} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="faq">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about Microsoft Exchange Online
          </p>
          <div className="space-y-4">
            {exchangeOnlineFAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
