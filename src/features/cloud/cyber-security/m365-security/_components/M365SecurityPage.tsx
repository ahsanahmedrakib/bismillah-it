"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  advancedFeatures,
  dataProtection,
  essentialEight,
  essentialFeatures,
  m365SecurityFaqs,
  m365SecurityHeroData,
  m365SecurityOverview,
  m365SecurityUsefulLinks,
  passwordPolicy,
  securityAreas,
  tsitServices,
} from "../data/m365SecurityData";

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

function SecurityAreaCard({
  area,
}: {
  area: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = area.icon;

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
        <h3 className="text-xl font-bold text-slate-900">{area.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{area.desc}</p>
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

export default function M365SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={m365SecurityHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center h-75">
            <Image
              src="/images/cloud/cyber-security/m365-security/section-1.jpg"
              alt="Microsoft 365 Cyber Security"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {m365SecurityOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {m365SecurityOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {m365SecurityOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {m365SecurityOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {m365SecurityOverview.description3}
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

      {/* ================= SECURITY AREAS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="security-areas">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Microsoft 365 Security Areas
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 provides comprehensive protection across four key
            areas to safeguard your business from modern cyber threats
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityAreas.map((area, i) => (
              <Reveal key={i} delay={i * 80}>
                <SecurityAreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= ESSENTIAL FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="features">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Essential Cybersecurity Features
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Essential cybersecurity features of Microsoft 365 are designed to
            protect users, devices, identities, and data across today&apos;s
            cloud-first workplace
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {essentialFeatures.map((feature, i) => (
              <Reveal key={i} delay={i * 80}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= ADVANCED FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="advanced">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Advanced Cybersecurity Features
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Advanced cybersecurity features in Microsoft 365 are designed to
            deliver enterprise-grade protection for identities, data, devices,
            and applications in a modern cloud environment
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <HoverableContentCard className="h-full">
              <div className="flex flex-col h-full">
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  Enterprise-Grade Protection
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Advanced Threat Protection
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  These capabilities go beyond baseline security, helping
                  organisations proactively defend against advanced cyber
                  threats, targeted attacks, and data breaches.
                </p>
                <div className="space-y-4 mt-auto">
                  {advancedFeatures.slice(0, 2).map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 text-sm text-justify">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </HoverableContentCard>
            <HoverableContentCard className="h-full">
              <div className="flex flex-col h-full">
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  Visibility &amp; Control
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Security Monitoring &amp; Access Management
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  Combined with centralised audit logging, continuous
                  monitoring, and security reporting, these advanced Microsoft
                  365 cybersecurity features provide strong visibility, control,
                  and resilience against today&apos;s evolving threat landscape.
                </p>
                <div className="space-y-4 mt-auto">
                  {advancedFeatures.slice(2, 4).map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm">
                            {feature.title}
                          </h4>
                          <p className="text-slate-600 text-sm text-justify">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </HoverableContentCard>
            <HoverableContentCard className="h-full">
              <div>
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  Identity Security
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {passwordPolicy.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  {passwordPolicy.description}
                </p>
                <div className="space-y-3 mb-8">
                  {passwordPolicy.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-blue-600 shrink-0 mt-0.5"
                      />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#data-protection"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Data Protection <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>
            <HoverableContentCard className="h-full">
              <div>
                <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                  Compliance &amp; Governance
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {dataProtection.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                  {dataProtection.description}
                </p>
                <div className="space-y-3 mb-8">
                  {dataProtection.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-blue-600 shrink-0 mt-0.5"
                      />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#essential-eight"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Essential Eight <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </HoverableContentCard>
          </div>
        </Reveal>
      </section>

      {/* ================= ESSENTIAL EIGHT ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="essential-eight">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            {essentialEight.title}
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-6">
            {essentialEight.description}
          </p>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            {essentialEight.description2}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentialEight.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-2 border-blue-100 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white flex flex-col">
                    <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 text-sm text-justify">
                      {feature.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* ================= NEED HELP ================= */}
      <section className="py-16 lg:py-24 bg-white" id="help">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
            <Image
              src="/images/cloud/cyber-security/m365-security/section-1.jpg"
              alt="Microsoft 365 Security Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Need Help Securing Your Microsoft 365 Environment?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 text-justify">
              At Total Solutions IT, we help businesses configure, monitor, and
              optimise their Microsoft 365 security. Our cybersecurity reviews
              ensure that your policies are correctly set, threats are detected
              and contained quickly, and your environment meets the latest
              security standards.
            </p>
            <div className="space-y-3 mb-6">
              {tsitServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-100 text-sm mb-6">
              Whether you need a Microsoft Defender health check or a
              comprehensive Microsoft 365 security review, we&apos;re here to
              help strengthen your organisation&apos;s security posture.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
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
            {m365SecurityUsefulLinks.map((link, i) => (
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
            Common questions about Microsoft 365 Cyber Security
          </p>
          <div className="space-y-4">
            {m365SecurityFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
