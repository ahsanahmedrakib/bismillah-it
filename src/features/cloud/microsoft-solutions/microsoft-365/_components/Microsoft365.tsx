"use client";

import OurApproach from "@/features/home/_components/OurApproach";
import HeroSlider from "@/shared/components/ui/HeroSlider";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  m365Bundles,
  m365CollaborationDescription,
  m365CollaborationTools,
  m365FAQs,
  m365KeyFeatures,
  m365Overview,
  m365SecurityFeatures,
  microsoft365slides,
} from "../data/microsoft365data";

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

function SecurityCard({
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
      className={`flex items-start gap-4 bg-slate-800/80 border rounded-xl p-5 transition-all ${
        touched
          ? "border-blue-500/50"
          : "border-slate-700/60 hover:border-blue-500/50"
      }`}
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-bold text-white mb-1">
          {feature.title}
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed text-justify">
          {feature.desc}
        </p>
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

export default function Microsoft365() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <HeroSlider slides={microsoft365slides} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/micrsoft-365/office-365.png"
              alt="Australian Cyber Security Centre Logo"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {m365Overview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {m365Overview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {m365Overview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {m365Overview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {m365Overview.description3}
              </p>
              <a
                href="#plans"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                View Plans <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <OurApproach />

      {/* ================= PRODUCT BUNDLES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Microsoft 365 Product Bundles
          </h2>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Microsoft 365 Business is available in three core product bundles
            designed to support modern businesses as they grow. Each bundle
            builds on the last, adding functionality, flexibility, and security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {m365Bundles.map((bundle, i) => (
              <div key={i} className="relative h-full">
                <HoverableContentCard className="h-full">
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-2xl font-bold mb-6 text-center`}>
                    {bundle.name}
                  </h3>
                  <ul className="space-y-3">
                    {bundle.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-slate-600"
                        />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </HoverableContentCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Key Features
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 Cloud offers a number of benefits for businesses
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {m365KeyFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= COLLABORATION SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="collaboration">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
              Team Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Microsoft 365 Collaboration Tools
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
              {m365CollaborationDescription}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {m365CollaborationTools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle size={16} className="text-blue-500 shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </HoverableContentCard>

          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/cloud/microsoft-solutions/micrsoft-365/collaboration.png"
              alt="Australian Cyber Security Centre Logo"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SHAREPOINT & ONEDRIVE ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="sharepoint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/micrsoft-365/microsoft-365.png"
              alt="Australian Cyber Security Centre Logo"
              height={400}
              width={300}
              className="object-cover"
            />
          </div>

          <HoverableContentCard className="order-1 lg:order-2">
            <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
              Cloud File Storage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              SharePoint & OneDrive
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
              Microsoft 365 SharePoint and OneDrive provide businesses with
              secure, cloud-based file storage and document management designed
              for modern work. Together, they replace traditional file servers
              with a flexible, scalable platform accessible from anywhere.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
              OneDrive gives each user their own secure workspace for storing,
              syncing, and sharing files across devices. SharePoint enables
              teams to collaborate using shared libraries, structured folders,
              permissions, and version control.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Secure File Sharing",
                "Anywhere Access",
                "Version Control",
                "Real-Time Co-Authoring",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle size={16} className="text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= COPILOT AI SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="copilot">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
              AI-Powered Productivity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Microsoft Copilot for Microsoft 365
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
              Microsoft 365 Copilot is an AI-powered assistant designed to help
              users work faster, smarter, and more efficiently using the tools
              they already know. Embedded directly into Word, Excel, Outlook,
              Teams, PowerPoint, and SharePoint, Copilot turns everyday work
              into simple, guided tasks.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
              Copilot can draft documents, rewrite content, summarise long
              emails, analyse data, and generate insights from spreadsheets. In
              Microsoft Teams, it captures meeting summaries, action items, and
              key discussion points, helping teams stay aligned and productive.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "AI-Powered Productivity",
                "Work Faster with AI",
                "Smart Content Creation",
                "AI Meeting Summaries",
                "Data Insights & Analysis",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle size={16} className="text-blue-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </HoverableContentCard>

          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/cloud/microsoft-solutions/micrsoft-365/copilot.png"
              alt="Australian Cyber Security Centre Logo"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= CYBER SECURITY SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-400 font-bold text-sm tracking-wide mb-3 block">
              Advanced Security
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cyber Security & Advanced Features
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Protect users, devices, and data in the workplace. Microsoft 365
              provides a comprehensive, cloud-based security platform designed
              to protect modern businesses from today&apos;s evolving cyber
              threats.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {m365SecurityFeatures.map((feature, i) => (
              <SecurityCard key={i} feature={feature} />
            ))}
          </div>

          <div className="mt-12 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Microsoft 365 Data Protection
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify mb-4">
              Microsoft 365 data protection is built on enterprise-grade
              security designed to safeguard business information across emails,
              files, devices, and cloud applications. Using Microsoft Defender,
              Advanced Threat Protection, and anti-phishing policies, Microsoft
              365 protects against malware, ransomware, and zero-day attacks in
              real time.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Sensitive information is secured through Data Loss Prevention
              (DLP) policies, which automatically detect and prevent
              unauthorised sharing of confidential data. Access to data is
              controlled using Multi-Factor Authentication (MFA) and Conditional
              Access policies, reducing the risk of unauthorised access.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about Microsoft 365
          </p>
          <div className="space-y-4">
            {m365FAQs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

