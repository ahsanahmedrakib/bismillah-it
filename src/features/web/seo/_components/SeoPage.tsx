"use client";

import {
  seoHeroData,
  seoPointers,
  seoServices,
  yoastFeatures,
} from "@/features/web/seo/data/seoData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Image from "next/image";

function ServiceCard({
  service,
}: {
  service: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = service.icon;

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
        {service.title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{service.desc}</p>
    </div>
  );
}

function PointerCard({
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
      className={`flex gap-4 relative items-start border-2 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
        <Icon size={22} />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function SeoPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={seoHeroData} />

      {/* SEO SERVICES CARDS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Our SEO Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {seoServices.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </section>

      {/* CHOOSING THE RIGHT SEARCH TERMS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Choosing the right search terms to optimise
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Selecting the right phrases and words to optimise your website is
              very important. We research and track the most appropriate search
              terms to make sure people are googling them so you don&apos;t
              waste time trying to be found for something nobody is searching
              for.
            </p>
          </HoverableContentCard>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/seo/seo.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRODUCING YOAST */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/web/yoast.png"
              alt="Yoast SEO Plugin"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Introducing Yoast.
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Yoast is Search Engine Optimisation (SEO) for everyone. Whether
              you&apos;re a beginner, a blogger or a big business, Yoast gets
              your website into perfect shape to compete in the search results.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Over 13 million users have the Yoast SEO plugin installed on their
              WordPress website to get more visitors from Google and social
              media.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mb-4">
              <span>HOW WE USE THIS</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              yoast, seo, search engine optimisation, search engine, search
              engines, online store, ecommerce
            </p>
          </HoverableContentCard>
        </div>
      </section>

      {/* HOW DOES IT WORK */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            How does it work?
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Search Engine Optimization (SEO) works by optimizing various
            elements of a website to improve its visibility and ranking in
            search engine results. Here&apos;s a simplified explanation of how
            SEO works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {yoastFeatures.map((feature, i) => (
              <div
                key={i}
                className="relative border-2 border-blue-100 hover:border-blue-300 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
                <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <h3 className="font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://yoast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              VISIT YOAST
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SEO POINTERS */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Search Engine Optimisation (SEO) pointers.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {seoPointers.map((item, i) => (
              <PointerCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

