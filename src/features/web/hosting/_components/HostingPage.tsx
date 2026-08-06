"use client";

import {
  hostingFeatures,
  hostingHeroData,
  hostingPlans,
} from "@/features/web/hosting/data/hostingData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import ListCard from "@/shared/components/ui/ListCard";
import Reveal from "@/shared/components/ui/Reveal";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HostingPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      <Hero data={hostingHeroData} />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal variant="fade-up">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Why Choose Our Hosting
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {hostingFeatures.map((feature, i) => (
              <IconFeatureCard
                key={i}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Hosting Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hostingPlans.map((plan, i) => (
              <ListCard
                key={i}
                title={plan.title}
                items={plan.services}
                variant="check"
              />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <HoverableContentCard className="order-2 lg:order-1">
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
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/hosting/server.webp"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>
    </main>
  );
}

