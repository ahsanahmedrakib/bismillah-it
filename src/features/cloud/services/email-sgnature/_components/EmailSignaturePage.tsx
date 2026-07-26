"use client";

import OurApproach from "@/features/home/_components/OurApproach";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  emailSignatureHeroData,
  emailSignatureOverview,
  coreFeatures,
  businessScenarios,
  signatureModes,
  keyBenefits,
  tsitServices,
  emailSignatureUsefulLinks,
  emailSignatureFaqs,
} from "../data/emailSignatureData";

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
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all flex flex-col ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{feature.desc}</p>
    </div>
  );
}

function ScenarioCard({
  scenario,
}: {
  scenario: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = scenario.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all flex flex-col ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{scenario.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{scenario.desc}</p>
    </div>
  );
}

function ModeCard({
  mode,
  index,
}: {
  mode: {
    title: string;
    desc: string;
    image: string;
  };
  index: number;
}) {
  return (
    <div className="border-2 border-blue-100 rounded-2xl overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white flex flex-col">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md z-10"></div>
      <div className="relative h-48 w-full">
        <Image
          src={mode.image}
          alt={mode.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
            <span className="font-bold text-sm">{index + 1}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">{mode.title}</h3>
        </div>
        <p className="text-slate-600 text-sm text-justify">{mode.desc}</p>
      </div>
    </div>
  );
}

function BenefitCard({
  benefit,
}: {
  benefit: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = benefit.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all flex flex-col ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
      </div>
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

export default function EmailSignaturePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={emailSignatureHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/services/email-signature/section-1.jpg"
              alt="CodeTwo Email Signatures 365"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {emailSignatureOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {emailSignatureOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {emailSignatureOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {emailSignatureOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {emailSignatureOverview.description3}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {emailSignatureOverview.description4}
              </p>
              <a
                href="#features"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Key Features <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="approach">
        <OurApproach />
      </section>

      {/* ================= CORE FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Core Features
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            CodeTwo Email Signatures 365 provides organisations with powerful
            tools to centrally manage and standardise email signatures across
            Microsoft 365
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS SCENARIOS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="scenarios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Business Scenarios
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            CodeTwo Email Signatures 365 supports a range of business scenarios
            where organisations need centralised control of email signatures,
            branding and messaging within Microsoft 365
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessScenarios.map((scenario, i) => (
              <ScenarioCard key={i} scenario={scenario} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE MODES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="modes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Signature Modes
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Choose the signature mode that best fits your organisation: add
            signatures in the cloud, directly in Outlook as users type, or both
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureModes.map((mode, i) => (
              <ModeCard key={i} mode={mode} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            CodeTwo Email Signatures 365 is the top email signature software
            choice for businesses of any size using Microsoft 365
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEED HELP ================= */}
      <section className="py-16 lg:py-24 bg-white" id="help">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
            <Image
              src="/images/cloud/services/email-signature/section-2.png"
              alt="CodeTwo Email Signatures Support"
              fill
              className="object-contain p-4"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Need Help with Email Signature Management?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 text-justify">
              Total Solutions IT provides comprehensive CodeTwo Email Signatures
              365 services to help your organisation maintain professional and
              consistent email signatures across Microsoft 365. Our team can
              handle the deployment, configuration, and ongoing management of
              your email signature solution.
            </p>
            <div className="space-y-3 mb-6">
              {tsitServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-blue-200 shrink-0 mt-0.5"
                  />
                  <span className="text-blue-50 text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-100 text-sm mb-6">
              Whether you need a complete signature solution or want to improve
              your existing email signatures, we can help you achieve
              consistent, professional branding across all your communications.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= USEFUL LINKS ================= */}
      <section className="py-8 lg:py-10 bg-slate-50" id="useful-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {emailSignatureUsefulLinks.map((link, i) => (
              <div
                key={i}
                className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about CodeTwo Email Signatures 365
          </p>
          <div className="space-y-4">
            {emailSignatureFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
