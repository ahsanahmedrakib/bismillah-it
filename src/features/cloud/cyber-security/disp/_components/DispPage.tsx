"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  dispFaqs,
  dispHeroData,
  dispOverview,
  dispSecurityDomains,
  dispServices,
  dispUsefulLinks,
  essentialEightML2,
  ongoingRequirements,
  preparationSteps,
  supportingFrameworks,
  whyItMatters,
} from "../data/dispData";

function DomainCard({
  domain,
}: {
  domain: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    image: string;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = domain.icon;

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
          src={domain.image}
          alt={domain.title}
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
          <h3 className="text-lg font-bold text-slate-900">{domain.title}</h3>
        </div>
        <p className="text-slate-600 text-sm text-justify">{domain.desc}</p>
      </div>
    </div>
  );
}

function RequirementCard({
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
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{item.desc}</p>
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

export default function DispPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={dispHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/cyber-security/disp/section-1.png"
              alt="Defence Industry Security Program"
              height={400}
              width={400}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {dispOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {dispOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {dispOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {dispOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {dispOverview.description3}
              </p>
              <a
                href="#domains"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Security Domains <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= SECURITY DOMAINS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="domains">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            DISP Security Domains
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            DISP is built around four key security areas that provide the
            foundation to help safeguard the entity and integrity of
            Defence&apos;s information assets and people
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dispSecurityDomains.map((domain, i) => (
              <DomainCard key={i} domain={domain} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ESSENTIAL EIGHT ML2 ================= */}
      <section className="py-16 lg:py-24 bg-white" id="essential-eight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {essentialEightML2.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {essentialEightML2.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {essentialEightML2.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {essentialEightML2.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {essentialEightML2.description3}
              </p>
              <a
                href="#prepare"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                How to Prepare <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>

          <div className="flex justify-center">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/disp/section-2.jpg"
                alt="Essential Eight Maturity Level 2"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ONGOING REQUIREMENTS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="requirements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Ongoing Cyber Security & Assurance Requirements
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Unlike one-time implementations, DISP requires continuous
            validation, reporting, and improvement of cybersecurity controls.
            Businesses must demonstrate that their security posture is actively
            managed, documented, and regularly reviewed to meet Australian
            defence standards.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ongoingRequirements.map((item, i) => (
                <RequirementCard key={i} item={item} />
              ))}
            </div>
            <div className="relative h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/disp/section-3.jpg"
                alt="Ongoing Cyber Security Requirements"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPORTING FRAMEWORKS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="frameworks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Supporting Frameworks and Standards
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            In addition to the Essential Eight, businesses working with Defence
            may be required to align with additional frameworks depending on the
            sensitivity and scope of their work. These frameworks provide
            structured guidance, governance models, and security controls to
            ensure systems and data are adequately protected.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/disp/section-4.jpg"
                alt="Supporting Frameworks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              {supportingFrameworks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white border-blue-100 hover:border-blue-300 transition-all"
                  >
                    <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm text-justify">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
              <p className="text-slate-600 text-sm text-justify">
                By aligning with these frameworks, organisations can ensure they
                meet Defence security expectations, improve risk management, and
                maintain a consistent, auditable approach to cybersecurity
                across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY THIS MATTERS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="why-matters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Why This Matters for Defence Suppliers
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Due to the sensitive nature of Defence projects, contractors are
            frequently targeted by cyber threats, making strong cybersecurity
            practices essential. Aligning with DISP requirements and the
            Essential Eight enables organisations to protect their systems,
            data, and reputation while meeting strict government expectations.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyItMatters.map((item, i) => (
                <RequirementCard key={i} item={item} />
              ))}
            </div>
            <div className="relative h-80 lg:h-full min-h-80 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/disp/section-5.jpg"
                alt="Why DISP Matters for Defence Suppliers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8 mt-12">
            <p className="text-slate-600 text-sm text-justify">
              Implementing these frameworks is not just about compliance — it
              delivers long-term business value, strengthens security maturity,
              and positions organisations as trusted, reliable partners in the
              Defence supply chain while supporting ongoing growth and
              operational resilience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW TO PREPARE ================= */}
      <section className="py-16 lg:py-24 bg-white" id="prepare">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How Your Business Can Prepare
            </h2>
            <p className="text-slate-600 mb-12 text-justify">
              Achieving alignment with the Essential Eight Maturity Level 2
              (ML2) requires organisations to assess their current environment,
              identify gaps, and implement practical security improvements.
              Early planning is critical, as uplift activities can take time
              depending on existing systems and processes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {preparationSteps.map((item, i) => (
                <RequirementCard key={i} item={item} />
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-full min-h-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 lg:sticky lg:top-24">
            <Image
              src="/images/cloud/cyber-security/disp/section-6.jpg"
              alt="How to Prepare for DISP"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ================= NEED HELP ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="help">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
            <Image
              src="/images/cloud/cyber-security/disp/section-7.jpg"
              alt="DISP Compliance Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Need Help Becoming DISP Compliant?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 text-justify">
              At Total Solutions IT, we help Australian businesses align with
              Defence cyber security requirements through practical,
              results-driven solutions. Achieving DISP compliance and Essential
              Eight ML2 can be complex, but with the right strategy, tools, and
              expertise, your organisation can strengthen its security posture
              and meet Defence expectations with confidence.
            </p>
            <div className="space-y-3 mb-6">
              {dispServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-100 text-sm mb-6">
              Whether you&apos;re preparing for Defence contracts or uplifting
              an existing environment, we provide a clear pathway to compliance,
              helping you assess, secure, and optimise your systems for
              long-term success and resilience.
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
      <section className="py-8 lg:py-10 bg-white" id="useful-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dispUsefulLinks.map((link, i) => (
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
      <section className="py-16 lg:py-24 bg-slate-50" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about the Defence Industry Security Program
          </p>
          <div className="space-y-4">
            {dispFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
