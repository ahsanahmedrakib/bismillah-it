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
  essentialEightFaqs,
  essentialEightHeroData,
  essentialEightOverview,
  essentialEightStrategies,
  essentialEightUsefulLinks,
  m365Features,
} from "../data/essentialEightData";

function StrategyCard({
  strategy,
}: {
  strategy: {
    title: string;
    desc: string;
    image: string;
    icon: React.ComponentType<{ size?: number }>;
  };
  index: number;
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = strategy.icon;
  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all overflow-hidden ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={strategy.image}
          alt={strategy.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{strategy.title}</h3>
        </div>
        <p className="text-slate-600 text-sm text-justify">{strategy.desc}</p>
      </div>
    </div>
  );
}

function FeatureAccordion({
  feature,
}: {
  feature: {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const [open, setOpen] = useState(false);
  const Icon = feature.icon;

  return (
    <div className="border-2 border-blue-100 rounded-xl overflow-hidden relative">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Icon size={20} />
          </div>
          <span className="font-medium text-slate-900">{feature.title}</span>
        </div>
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
          <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed text-justify">
            {feature.description}
          </p>
        </div>
      </div>
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

export default function EssentialEightPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={essentialEightHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/it-support/cyber-security/acsc.png"
              alt="Bangladeshi Cyber Security Centre Logo"
              height={400}
              width={400}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {essentialEightOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {essentialEightOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {essentialEightOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {essentialEightOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {essentialEightOverview.description3}
              </p>
              <a
                href="#strategies"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                The Eight Strategies <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= THE EIGHT STRATEGIES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="strategies">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            The ACSC Essential Eight Strategies
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Eight proven mitigation strategies that significantly reduce
            cybersecurity risk when implemented correctly
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialEightStrategies.map((strategy, i) => (
              <Reveal key={i} delay={i * 80}>
                <StrategyCard strategy={strategy} index={i} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= MICROSOFT 365 FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="features">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            How Microsoft 365 Achieves Essential 8 Compliance
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 provides comprehensive security tools and features
            that address each of the Essential Eight strategies
          </p>
          <div className="space-y-4">
            {m365Features.map((feature, i) => (
              <FeatureAccordion key={i} feature={feature} />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {essentialEightUsefulLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all">
                  <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {link.description}
                  </p>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Find Out More &rarr;
                  </Link>
                </div>
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
            Common questions about Microsoft 365 and ACSC Essential Eight
            compliance
          </p>
          <div className="space-y-4">
            {essentialEightFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
