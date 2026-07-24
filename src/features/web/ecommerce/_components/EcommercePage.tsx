"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight, Check } from "lucide-react";
import {
  ecommerceHeroData,
  ecommerceFeatures,
  ecommercePlatforms,
} from "@/features/web/ecommerce/data/ecommerceData";

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

function PlatformCard({
  platform,
}: {
  platform: { title: string; services: string[] };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`relative border-2 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{platform.title}</h3>
      {platform.services.map((service, j) => (
        <div key={j} className="flex items-start mb-3">
          <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          <span className="text-slate-600 text-sm">{service}</span>
        </div>
      ))}
    </div>
  );
}

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={ecommerceHeroData} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          eCommerce Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {ecommerceFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Platforms We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommercePlatforms.map((platform, i) => (
              <PlatformCard key={i} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Your Online Business Starts Here
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Launch your online store with a professional eCommerce website
              designed to maximize conversions. We build custom stores that
              reflect your brand and provide a seamless shopping experience.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              From product listings to payment processing, we handle every
              aspect of your online store. Our solutions are designed to
              scale with your business as it grows.
            </p>
            <a
              href="/contact"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Launch Your Store
            </a>
          </HoverableContentCard>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
              <span className="text-blue-600 text-lg font-semibold">
                eCommerce Solutions
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
