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
  entraIdAzureAD,
  entraIdBenefits,
  entraIdFAQs,
  entraIdFeatureSections,
  entraIdHeroData,
  entraIdKeyFeatures,
  entraIdOverview,
  entraIdUsefulLinks,
} from "../data/entraIdData";

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

function FeatureSection({
  section,
  index,
}: {
  section: {
    title: string;
    description: string;
    image: string;
    links: { label: string; href: string }[];
  };
  index: number;
}) {
  const isReversed = index % 2 !== 0;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div
        className={`flex justify-center ${isReversed ? "lg:order-2 order-1" : ""}`}
      >
        <Image
          src={section.image}
          alt={section.title}
          height={300}
          width={400}
          className="object-cover"
        />
      </div>
      <HoverableContentCard className={isReversed ? "lg:order-1 order-2" : ""}>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          {section.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify">
          {section.description}
        </p>
        <div className="space-y-3">
          {section.links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="text-blue-600 font-semibold text-sm hover:underline block"
            >
              {link.label} &rarr;
            </Link>
          ))}
        </div>
      </HoverableContentCard>
    </div>
  );
}

export default function EntraIDPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={entraIdHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/entra-id/section.png"
              alt="Microsoft Entra ID"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {entraIdOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {entraIdOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {entraIdOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {entraIdOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {entraIdOverview.description3}
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
            Key Features of Microsoft Entra ID
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Everything you need for identity and access management across your
            organisation
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {entraIdKeyFeatures.map((feature, i) => (
              <Reveal key={i} delay={i * 80}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= AZURE AD PLATFORM ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="platform">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                {entraIdAzureAD.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 text-justify">
                {entraIdAzureAD.description}
              </p>
              <ul className="space-y-4">
                {entraIdAzureAD.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className="text-blue-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-slate-700 text-sm">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <HoverableContentCard>
              <div>
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  Azure Active Directory
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Universal Identity Platform
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  Azure AD is the bedrock of your cloud identity and serves as
                  the security boundary for all Microsoft online services,
                  including Microsoft 365. It provides single sign-on,
                  multi-factor authentication, and conditional access features
                  to safeguard your users.
                </p>
                <div className="space-y-4">
                  {entraIdAzureAD.features.map((feature, i) => (
                    <div key={i}>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-slate-600 text-justify">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </HoverableContentCard>
          </div>
        </Reveal>
      </section>

      {/* ================= FEATURE SECTIONS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="details">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20"
        >
          {entraIdFeatureSections.map((section, i) => (
            <FeatureSection key={i} section={section} index={i} />
          ))}
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
            {entraIdUsefulLinks.map((link, i) => (
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
            Benefits of Using Microsoft Entra ID
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Why organisations choose Microsoft Entra ID for identity and access
            management
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {entraIdBenefits.map((benefit, i) => (
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
            Common questions about Microsoft Entra ID
          </p>
          <div className="space-y-4">
            {entraIdFAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
