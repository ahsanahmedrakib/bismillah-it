"use client";

import {
  allPortfoliData,
  portfolioCategories,
  portfolioHeroData,
  portfolioStats,
} from "@/features/web/portfolio/data/portfolioData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PortfolioCard({
  portfolio,
}: {
  portfolio: { title: string; img: string; href: string };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Link
      href={portfolio.href}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 flex flex-col group transition-all duration-300 ${
        touched
          ? "border-blue-300 shadow-xl -translate-y-1"
          : "border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={portfolio.img}
          alt={portfolio.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            touched ? "scale-105" : "group-hover:scale-105"
          }`}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl text-brand-blue mb-3">
          {portfolio.title}
        </h3>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={portfolioHeroData} />

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-20 bg-slate-50" id="services">
        <Reveal variant="fade-up" className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Our Portfolio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {allPortfoliData.map((portfolio, i) => (
              <Reveal key={i} delay={i * 80}>
                <PortfolioCard portfolio={portfolio} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal variant="fade-up">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            What We Create
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioCategories.map((category, i) => (
              <IconFeatureCard
                key={i}
                title={category.title}
                desc={category.desc}
                icon={category.icon}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {portfolioStats.map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/portfolio/portfolio.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
          <HoverableContentCard className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              See What We Can Build For You
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Every project in our portfolio represents a unique challenge
              solved with creativity and technical expertise. We take pride in
              delivering websites that not only look great but also achieve
              measurable results for our clients.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Whether you need a simple business website or a complex eCommerce
              platform, our team has the skills and experience to bring your
              vision to life.
            </p>
            <a
              href="/contact"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Start Your Project
            </a>
          </HoverableContentCard>
        </Reveal>
      </section>
    </main>
  );
}

