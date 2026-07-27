"use client";

import OurApproach from "@/features/home/_components/OurApproach";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import FAQAccordion from "@/shared/components/ui/FAQAccordion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import {
  windows365Benefits,
  windows365FAQs,
  windows365HeroData,
  windows365IsItForYou,
  windows365KeyFeatures,
  windows365Overview,
  windows365PartnerBenefits,
  windows365UsefulLinks,
  windows365VDIReasons,
} from "../data/windows365Data";

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

export default function Windows365Page() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={windows365HeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/cloud/microsoft-solutions/windows-365/section-1.png"
              alt="Windows 365 Cloud PC"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {windows365Overview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {windows365Overview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {windows365Overview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {windows365Overview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {windows365Overview.description3}
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
      <OurApproach />

      {/* ================= KEY FEATURES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Key Features of Windows 365 Cloud PC
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Everything you need for a secure, cloud-based desktop experience
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {windows365KeyFeatures.map((feature, i) => (
            <IconFeatureCard
              key={i}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
              iconSize={44}
            />
          ))}
          </div>
        </div>
      </section>

      {/* ================= WHY VDI ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="why-vdi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Why Consider Windows 365 Cloud PC?
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            A few reasons to consider cloud-based desktop infrastructure
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {windows365VDIReasons.map((reason, i) => (
              <BenefitCard key={i} benefit={reason} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= IS IT FOR YOU ================= */}
      <section className="py-16 lg:py-24 bg-white" id="is-it-for-you">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Is Windows 365 Cloud PC for You?
          </h2>
          <p className="text-slate-600 text-center mb-8">
            If you can answer &ldquo;yes&rdquo; to any of these questions, Cloud
            PC might be a good fit for you!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {windows365IsItForYou.map((question, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-2 border-blue-100 hover:border-blue-300 rounded-xl p-5 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all"
              >
                <CheckCircle
                  className="text-blue-600 shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-slate-700 text-sm">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNER SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="partner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              A Partner You Can Trust
            </h2>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Total Solutions IT&apos;s personalised touch and end-to-end
              support ensures the ongoing success of your Windows 365 solution.
              As a certified VMware Enterprise Solution provider, Total
              Solutions IT retains the technical expertise and business acumen
              to provide you with a Cloud PC solution to meet your budgetary and
              performance goals.
            </p>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Working with Total Solutions IT for your Windows 365 initiative
              means you enjoy:
            </p>
            <ul className="space-y-3">
              {windows365PartnerBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-blue-600 shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </HoverableContentCard>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/cloud/microsoft-solutions/windows-365/section-2.png"
              alt="Windows 365 Partner"
              height={350}
              width={350}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= USEFUL LINKS ================= */}
      <section className="py-8 lg:py-10 bg-slate-50" id="useful-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {windows365UsefulLinks.map((link, i) => (
              <div
                key={i}
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
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Benefits of Using Windows 365 Cloud PC
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Why businesses choose Windows 365 for cloud-based desktop
            infrastructure
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {windows365Benefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} />
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
            Common questions about Windows 365 Cloud PC
          </p>
          <FAQAccordion items={windows365FAQs} />
        </div>
      </section>
    </main>
  );
}

