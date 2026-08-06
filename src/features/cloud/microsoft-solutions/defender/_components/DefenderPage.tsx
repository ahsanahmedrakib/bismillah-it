"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  defenderBenefits,
  defenderCapabilities,
  defenderFAQs,
  defenderFeatureTable,
  defenderHeroData,
  defenderIncludedFeatures,
  defenderKeyFeatures,
  defenderLimitations,
  defenderNistFramework,
  defenderOverview,
  defenderUsefulLinks,
  defenderWhatIs,
} from "../data/defenderData";

function CapabilityCard({
  capability,
}: {
  capability: { title: string; desc: string };
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
      <h3 className="text-lg font-bold text-slate-900 mb-3">
        {capability.title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{capability.desc}</p>
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

function NistCard({
  item,
}: {
  item: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = item.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{item.desc}</p>
    </div>
  );
}

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

function FeatureTableCell({ value }: { value: boolean | string }) {
  if (value === true)
    return <Check size={18} className="text-green-500 mx-auto" />;
  if (value === false) return <X size={18} className="text-red-400 mx-auto" />;
  return <span className="text-slate-600 text-xs">{value}</span>;
}

export default function DefenderPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={defenderHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/defender/section-1.jpg"
              alt="Microsoft Defender for Business"
              height={800}
              width={1600}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {defenderOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {defenderOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {defenderOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {defenderOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {defenderOverview.description3}
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

      {/* ================= WHAT IS DEFENDER FOR BUSINESS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="what-is">
        {" "}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <h2 className="text-3xl text-center font-bold text-blue-900 mb-6">
              {defenderWhatIs.title}
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {defenderWhatIs.description}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {defenderWhatIs.description2}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed text-justify">
                {defenderWhatIs.description3}
              </p>
            </div>
          </HoverableContentCard>

          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/cloud/microsoft-solutions/defender/section-2.jpg"
              alt="Microsoft Defender for Business"
              height={800}
              width={1600}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Key Features of Microsoft Defender for Business
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Comprehensive endpoint security with AI-powered threat protection
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {defenderKeyFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Security Capabilities
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Enterprise-grade protection designed for small and medium-sized
            businesses
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenderCapabilities.map((capability, i) => (
              <CapabilityCard key={i} capability={capability} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= NIST FRAMEWORK ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="nist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            NIST Cyber Security Framework Alignment
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Defender for Business encompasses functionality across all five key
            functions outlined in the NIST Cyber Security Framework
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenderNistFramework.map((item, i) => (
              <NistCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="py-16 lg:py-24 bg-white" id="included">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            What Does Defender for Business Include?
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Defender for Business is a collection of capabilities bundled into a
            single Managed Security Services offering
          </p>
          <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="grid grid-cols-2 gap-px bg-blue-100">
              <div className="bg-brand-blue text-white font-bold text-sm px-6 py-3">
                Feature
              </div>
              <div className="bg-brand-blue text-white font-bold text-sm px-6 py-3 text-center">
                Defender for Business
              </div>
            </div>
            {defenderIncludedFeatures.map((item, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 gap-px ${i % 2 === 0 ? "bg-blue-50/50" : "bg-white"}`}
              >
                <div className="px-6 py-3 text-sm text-slate-700">
                  {item.feature}
                </div>
                <div className="px-6 py-3 flex items-center justify-center">
                  {item.included === true && (
                    <Check size={18} className="text-green-500" />
                  )}
                  {item.included === false && (
                    <X size={18} className="text-red-400" />
                  )}
                  {typeof item.included === "string" && (
                    <span className="text-xs text-slate-600">
                      {item.included}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURE COMPARISON TABLE ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Feature Comparison
          </h2>
          <p className="text-slate-600 text-center mb-12">
            How Defender for Business compares to Defender for Endpoint P1 and
            P2
          </p>
          <div className="bg-white border-2 border-blue-100 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-x-auto">
            <table className="w-full min-w-160">
              <thead>
                <tr className="bg-brand-blue text-white">
                  <th className="text-left text-sm font-bold px-6 py-3">
                    Feature
                  </th>
                  <th className="text-center text-sm font-bold px-4 py-3">
                    Defender for Business
                  </th>
                  <th className="text-center text-sm font-bold px-4 py-3">
                    Endpoint P1
                  </th>
                  <th className="text-center text-sm font-bold px-4 py-3">
                    Endpoint P2
                  </th>
                </tr>
              </thead>
              <tbody>
                {defenderFeatureTable.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-blue-50/50" : "bg-white"}
                  >
                    <td className="px-6 py-3 text-sm text-slate-700">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureTableCell value={row.defenderBusiness} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureTableCell value={row.endpointP1} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <FeatureTableCell value={row.endpointP2} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= USEFUL LINKS ================= */}
      <section className="py-8 lg:py-10 bg-white" id="useful-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {defenderUsefulLinks.map((feature, i) => (
              <div
                key={i}
                className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
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

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Benefits of Using Microsoft Defender for Business
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Why businesses choose Defender for enterprise-grade endpoint
            security
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenderBenefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIMITATIONS SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="limitations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Defender for Business Limitations
          </h2>
          <p className="text-slate-600 text-center mb-8">
            While Defender for Business offers robust endpoint protection,
            certain advanced capabilities available in Defender for Endpoint P2
            may not be included
          </p>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <ul className="space-y-3">
              {defenderLimitations.map((limitation, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-sm">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about Microsoft Defender for Business
          </p>
          <div className="space-y-4">
            {defenderFAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
