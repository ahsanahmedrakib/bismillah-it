"use client";

import {
  developmentFeatures,
  developmentHeroData,
  developmentPartnerLogos,
  developmentServices,
} from "@/features/web/development/data/developmentData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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
      <div className="flex justify-center pb-6 text-blue-600">
        <Icon size={60} />
      </div>
      <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
        {feature.title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{feature.desc}</p>
    </div>
  );
}

function ServiceListCard({
  item,
}: {
  item: { title: string; services: string[] };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`relative border-2 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
      {item.services.map((service, j) => (
        <div key={j} className="flex items-start mb-3">
          <ChevronRight className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          <span className="text-slate-600 text-sm">{service}</span>
        </div>
      ))}
    </div>
  );
}

export default function DevelopmentPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={developmentHeroData} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Our Web Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {developmentFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {developmentServices.map((item, i) => (
              <ServiceListCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <HoverableContentCard>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
                Building Digital Experiences That Matter
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We craft custom websites that are not only visually stunning but
                also highly functional. Our development team uses the latest
                technologies to ensure your website stands out in the digital
                landscape.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From concept to launch, we work closely with you to understand
                your goals and deliver a website that exceeds expectations.
                Every project is treated with the same level of dedication and
                attention to detail.
              </p>
              <a
                href="/contact"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                Start Your Project
              </a>
            </HoverableContentCard>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center">
              <Image
                src="/images/web/development/laptop.jpg"
                alt="Understanding Network Security Shield Graphic"
                height={400}
                width={600}
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* LOGO SECTION  */}
        <div className="flex flex-wrap items-center justify-between gap-12">
          {developmentPartnerLogos.map((a) => (
            <Image
              key={a.logo}
              src={a.logo}
              alt={a.logo}
              width={150}
              height={120}
              className="h-auto w-auto object-contain"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

