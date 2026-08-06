"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { AlertTriangle, ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  howToImprove,
  secureScoreBenefits,
  secureScoreCalculation,
  secureScoreCategories,
  secureScoreFaqs,
  secureScoreHeroData,
  secureScoreLimitations,
  secureScoreOverview,
  secureScoreReview,
  secureScoreUsefulLinks,
  tsitServices,
} from "../data/secureScoreData";

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
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
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

function CategoryCard({
  category,
}: {
  category: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    image?: string;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = category.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all overflow-hidden ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      {category.image && (
        <div className="relative h-48 w-full">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{category.title}</h3>
        </div>
        <p className="text-slate-600 text-sm text-justify">{category.desc}</p>
      </div>
    </div>
  );
}

function ImproveCard({
  item,
  index,
}: {
  item: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

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
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <Icon size={20} />
          </div>
          <span className="font-medium text-slate-900 text-sm">
            {item.title}
          </span>
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
            {item.desc}
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

export default function SecureScorePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={secureScoreHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/secure-score/section-1.jpg"
                alt="Microsoft Secure Score Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {secureScoreOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {secureScoreOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {secureScoreOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {secureScoreOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {secureScoreOverview.description3}
              </p>
              <a
                href="#how-it-works"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                How It Works <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </div>
      </section>

      {/* ================= WHY SECURE SCORE MATTERS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="why-matters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Why Microsoft Secure Score Matters
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft Secure Score is more than just a number — it provides
            organisations with a clear and measurable view of their Microsoft
            365 security posture
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {secureScoreBenefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IS IT CALCULATED ================= */}
      <section className="py-16 lg:py-24 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {secureScoreCalculation.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {secureScoreCalculation.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {secureScoreCalculation.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {secureScoreCalculation.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {secureScoreCalculation.description3}
              </p>
              <a
                href="#improve"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Improve Your Score <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/cyber-security/secure-score/section-2.jpg"
                alt="Secure Score Calculation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCORE CATEGORIES ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Secure Score Categories
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Secure Score is divided into four main categories that cover the
            full spectrum of your Microsoft 365 security posture
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {secureScoreCategories.map((category, i) => (
              <CategoryCard key={i} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW TO IMPROVE ================= */}
      <section className="py-16 lg:py-24 bg-white" id="improve">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative h-80 lg:h-full min-h-100 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 lg:sticky lg:top-24">
            <Image
              src="/images/cloud/cyber-security/secure-score/section-3.jpg"
              alt="Improve Your Secure Score"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>{" "}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How to Improve Your Secure Score
            </h2>
            <p className="text-slate-600 mb-8 text-justify">
              Microsoft provides specific recommendations to improve your Secure
              Score. Addressing Identity actions first delivers the highest risk
              reduction per point. Complete these before moving to other
              categories.
            </p>
            <div className="space-y-4">
              {howToImprove.map((item, i) => (
                <ImproveCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEW FREQUENCY ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="review">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            {secureScoreReview.title}
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            {secureScoreReview.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Monthly Reviews
              </h3>
              <p className="text-slate-600 text-sm text-justify mb-4">
                {secureScoreReview.description2}
              </p>
              <ul className="space-y-3">
                {[
                  "Review all new recommended actions from the previous period",
                  "Revisit Risk accepted items to confirm justification is still valid",
                  "Check whether any previously unlicensed actions have become available",
                  "Export the list to CSV and attach to security review documentation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Key Best Practices
              </h3>
              <ul className="space-y-3">
                {[
                  'Address all Identity actions with "Have license? = Yes" first',
                  'Document every "Risk accepted" decision with reason, date, and owner',
                  "Do not treat Secure Score as a substitute for a security assessment",
                  "Review weekly for high-risk industries (healthcare, finance, legal)",
                  "Track changes over time rather than chasing a specific number",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LIMITATIONS ================= */}
      <section className="py-8 lg:py-10 bg-white" id="limitations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-2 border-blue-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle size={24} className="text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">
                Important Limitations to Consider
              </h3>
            </div>
            <ul className="space-y-2">
              {secureScoreLimitations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-blue-400 shrink-0 mt-1">•</span>
                  <span className="text-slate-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= NEED HELP ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="help">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Need Help Improving Your Secure Score?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-3xl text-justify">
              Microsoft Secure Score is a powerful tool for organizations
              looking to enhance their Microsoft 365 security posture. It offers
              visibility, direction, and measurable goals in a format
              that&apos;s easy to understand. Whether you&apos;re an SMB or an
              enterprise, reviewing your Secure Score regularly and acting on
              its recommendations should be a core part of your cybersecurity
              strategy. Partnering with a proven and skilled Microsoft 365
              Security partner like Total Solutions IT can help you achieve the
              best combination between a secure IT environment and a great user
              experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {tsitServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-sm">{service}</span>
                </div>
              ))}
            </div>
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
            {secureScoreUsefulLinks.map((link, i) => (
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
            Common questions about Microsoft Secure Score
          </p>
          <div className="space-y-4">
            {secureScoreFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
