"use client";

import {
  ecommerceFeatures,
  ecommerceHeroData,
  ecommercePlatforms,
} from "@/features/web/ecommerce/data/ecommerceData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import ListCard from "@/shared/components/ui/ListCard";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

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
            <IconFeatureCard
              key={i}
              title={feature.title}
              desc={feature.desc}
              icon={feature.icon}
            />
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
              <ListCard
                key={i}
                title={platform.title}
                items={platform.services}
                variant="check"
              />
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
              aspect of your online store. Our solutions are designed to scale
              with your business as it grows.
            </p>
            <a
              href="/contact"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              Launch Your Store
            </a>
          </HoverableContentCard>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/ecommerce/ecommerce.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

