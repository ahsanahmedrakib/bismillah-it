"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight } from "lucide-react";
import {
  portfolioHeroData,
  portfolioCategories,
  portfolioStats,
} from "@/features/web/portfolio/data/portfolioData";

function CategoryCard({
  category,
}: {
  category: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = category.icon;

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
        {category.title}
      </h3>
      <p className="text-slate-600 text-sm text-justify">{category.desc}</p>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={portfolioHeroData} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          What We Create
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioCategories.map((category, i) => (
            <CategoryCard key={i} category={category} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {portfolioStats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-md h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
              <span className="text-blue-600 text-lg font-semibold">
                Our Work
              </span>
            </div>
          </div>
          <HoverableContentCard className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              See What We Can Build For You
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Every project in our portfolio represents a unique challenge
              solved with creativity and technical expertise. We take pride
              in delivering websites that not only look great but also
              achieve measurable results for our clients.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether you need a simple business website or a complex
              eCommerce platform, our team has the skills and experience
              to bring your vision to life.
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
      </section>
    </main>
  );
}
