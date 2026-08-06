"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  copilotBenefits,
  copilotChat,
  copilotFAQs,
  copilotFeatures,
  copilotHeroData,
  copilotImageGenerator,
  copilotOverview,
  copilotPages,
  copilotUsefulLinks,
} from "../data/copilotData";

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

function FeatureCategory({
  feature,
  index,
}: {
  feature: {
    category: string;
    items: { title: string; desc: string }[];
  };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-blue-100 rounded-xl overflow-hidden relative">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-blue-600 font-bold text-sm shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-medium text-slate-900">{feature.category}</span>
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
          <div className="px-6 pb-5 space-y-4">
            {feature.items.map((item, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CopilotFeatureSection({
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: {
    title: string;
    desc: string;
    items: string[];
  }[];
  imageSrc: string;
  imageAlt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <Reveal
        variant="fade-up"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-3">{title}</h2>
            <p className="text-slate-600 text-sm italic mb-6">{subtitle}</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 text-justify">
              {description}
            </p>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="border-2 border-blue-100 hover:border-blue-300 rounded-xl overflow-hidden relative transition-all"
                >
                  <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left"
                  >
                    <span className="font-medium text-slate-900 text-sm">
                      {feature.title}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-blue-600 shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-4">
                        <p className="text-sm text-slate-600 mb-3 text-justify">
                          {feature.desc}
                        </p>
                        <ul className="space-y-2">
                          {feature.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle
                                className="text-blue-600 shrink-0 mt-0.5"
                                size={14}
                              />
                              <span className="text-xs text-slate-600">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              height={400}
              width={400}
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function CopilotPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={copilotHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/copilot/section.png"
              alt="Microsoft 365 Co-Pilot"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {copilotOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {copilotOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {copilotOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {copilotOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {copilotOverview.description3}
              </p>
              <a
                href="#features"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Features <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="features">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Microsoft Co-Pilot Features
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Comprehensive AI capabilities across Microsoft 365
          </p>
          <div className="space-y-4">
            {copilotFeatures.map((feature, i) => (
              <FeatureCategory key={i} feature={feature} index={i} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= COPILOT CHAT ================= */}
      <CopilotFeatureSection
        title={copilotChat.title}
        subtitle={copilotChat.subtitle}
        description={copilotChat.description}
        features={copilotChat.features}
        imageSrc="/images/cloud/microsoft-solutions/copilot/section-chat.svg"
        imageAlt="Microsoft Copilot Chat"
      />

      {/* ================= COPILOT PAGES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <CopilotFeatureSection
          title={copilotPages.title}
          subtitle={copilotPages.subtitle}
          description={copilotPages.description}
          features={copilotPages.features}
          imageSrc="/images/cloud/microsoft-solutions/copilot/section-pages.svg"
          imageAlt="Microsoft Copilot Pages"
        />
      </section>

      {/* ================= IMAGE GENERATOR ================= */}
      <CopilotFeatureSection
        title={copilotImageGenerator.title}
        subtitle={copilotImageGenerator.subtitle}
        description={copilotImageGenerator.description}
        features={copilotImageGenerator.features}
        imageSrc="/images/cloud/microsoft-solutions/copilot/section-image.svg"
        imageAlt="Microsoft Copilot Image Generator"
      />

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
            {copilotUsefulLinks.map((link, i) => (
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
            Benefits of Microsoft 365 Co-Pilot
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Why organisations choose Copilot for AI-powered productivity
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {copilotBenefits.map((benefit, i) => (
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
            Common questions about Microsoft 365 Co-Pilot
          </p>
          <div className="space-y-4">
            {copilotFAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
