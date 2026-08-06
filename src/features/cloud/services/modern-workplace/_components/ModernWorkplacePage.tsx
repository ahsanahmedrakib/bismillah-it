"use client";

import FAQAccordion from "@/shared/components/ui/FAQAccordion";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  advancedFeatures,
  coreApps,
  modernWorkplaceBenefits,
  modernWorkplaceFaqs,
  modernWorkplaceHeroData,
  modernWorkplaceOverview,
  modernWorkplaceServices,
  modernWorkplaceUsefulLinks,
  tsitServices,
  workplacePlatforms,
} from "../data/modernWorkplaceData";

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
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{benefit.desc}</p>
    </div>
  );
}

function PlatformCard({
  platform,
}: {
  platform: {
    title: string;
    desc: string;
    image: string;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all overflow-hidden flex flex-col ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={platform.image}
          alt={platform.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 25vw"
        />
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-slate-900 mb-3">
          {platform.title}
        </h3>
        <p className="text-slate-600 text-sm text-justify">{platform.desc}</p>
      </div>
    </div>
  );
}

export default function ModernWorkplacePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={modernWorkplaceHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cloud/services/modern-workplace/section-1.png"
              alt="Microsoft 365 Modern Workplace"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {modernWorkplaceOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {modernWorkplaceOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {modernWorkplaceOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {modernWorkplaceOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {modernWorkplaceOverview.description3}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {modernWorkplaceOverview.description4}
              </p>
              <a
                href="#core-apps"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Core Applications <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= CORE APPLICATIONS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="core-apps">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Microsoft 365 Core Applications
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 includes the essential tools businesses need to
            communicate, collaborate, and manage data securely in the cloud
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreApps.map((app, i) => (
              <IconFeatureCard
                key={i}
                title={app.title}
                desc={app.desc}
                icon={app.icon}
                iconSize={20}
                className="flex flex-col"
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= MODERN WORKPLACE PLATFORMS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="platforms">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Workplace Collaboration Platforms
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Together, these Microsoft 365 essentials create a modern workplace
            platform designed for productivity, collaboration, and secure
            cloud-based business operations
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workplacePlatforms.map((platform, i) => (
              <Reveal key={i} delay={i * 80}>
                <PlatformCard platform={platform} />
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
            Advanced Features &amp; Security
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 Advanced Features provide organisations with powerful
            tools that go beyond everyday productivity, helping businesses
            improve security, manage devices, automate processes, and maintain
            compliance
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, i) => (
              <IconFeatureCard
                key={i}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                iconSize={20}
                className="flex flex-col"
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="benefits">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Benefits of Microsoft 365 Modern Workplace
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            By combining productivity, flexibility, cyber security, and
            scalability, Microsoft 365 Modern Workplace helps organisations
            improve efficiency, support remote work, and adapt confidently to
            changing business needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernWorkplaceBenefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 80}>
                <BenefitCard benefit={benefit} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="services">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Our Microsoft 365 Consulting Services
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Microsoft 365 Consulting from Total Solutions IT helps businesses
            plan, deploy, and optimise their Microsoft 365 environment to
            improve productivity, security, and collaboration
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {modernWorkplaceServices.map((service, i) => (
              <IconFeatureCard
                key={i}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
                iconSize={24}
                className="flex flex-col"
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= TEAMS HIGHLIGHT ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="teams">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <HoverableContentCard className="order-2 lg:order-1">
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                Team Collaboration
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Microsoft Teams
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                Since the 2020 pandemic, Microsoft Teams has become a crucial
                tool for businesses, with usage soaring. If your business is
                moving towards permanent remote work arrangements, Total
                Solutions IT can help you set up Microsoft Teams for seamless
                collaboration.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                Microsoft Teams is a powerful collaboration platform within
                Microsoft 365 that brings chat, video meetings, calling, file
                sharing, and teamwork into one secure workspace. Designed for
                modern businesses, Teams helps staff communicate in real time,
                collaborate on documents, and manage projects without switching
                between multiple apps.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Instant messaging and presence awareness",
                  "Secure online meetings with recording",
                  "Centralised document collaboration",
                  "Business calling capabilities",
                  "Integration with Microsoft 365 apps",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#help"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>

          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
              <Image
                src="/images/cloud/services/modern-workplace/section-5.jpg"
                alt="Microsoft Teams Collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
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
              src="/images/cloud/services/modern-workplace/section-6.jpg"
              alt="Microsoft 365 Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Partner with a Modern Workplace Specialist
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 text-justify">
              Total Solutions IT helps businesses unlock the full potential of
              Microsoft 365. Our experienced consultants work with organisations
              to ensure Microsoft 365 is configured correctly, aligned with best
              practices, and delivering maximum value from your cloud
              investment.
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
              With the right strategy and implementation, Microsoft 365 enables
              businesses to work smarter, collaborate more effectively, and
              protect critical business data while supporting modern hybrid work
              environments.
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
            {modernWorkplaceUsefulLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <div
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
            Common questions about Microsoft 365 Modern Workplace
          </p>
          <FAQAccordion items={modernWorkplaceFaqs} />
        </Reveal>
      </section>
    </main>
  );
}
