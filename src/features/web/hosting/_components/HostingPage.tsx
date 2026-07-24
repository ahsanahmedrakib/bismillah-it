"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight, Check } from "lucide-react";
import {
  hostingHeroData,
  hostingFeatures,
  hostingPlans,
} from "@/features/web/hosting/data/hostingData";

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

function PlanCard({
  plan,
}: {
  plan: { title: string; services: string[] };
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
      <h3 className="text-xl font-bold text-slate-900 mb-4">{plan.title}</h3>
      {plan.services.map((service, j) => (
        <div key={j} className="flex items-start mb-3">
          <Check className="w-5 h-5 mr-2 mt-0.5 text-blue-500 shrink-0" />
          <span className="text-slate-600 text-sm">{service}</span>
        </div>
      ))}
      <a
        href="/contact"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        Choose Plan
      </a>
    </div>
  );
}

export default function HostingPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={hostingHeroData} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Why Choose Our Hosting
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hostingFeatures.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Hosting Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Domain & Hosting Made Simple
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We provide reliable domain registration and web hosting services
              tailored for businesses of all sizes. Our infrastructure ensures
              maximum uptime and fast performance for your website.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With our local support team and easy-to-use control panel,
              managing your hosting has never been easier. Focus on your
              business while we take care of the technical details.
            </p>
            <a
              href="/contact"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Get Started Today
            </a>
          </HoverableContentCard>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
              <span className="text-blue-600 text-lg font-semibold">
                Web Hosting
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
