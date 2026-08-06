"use client";

import {
  heroData,
  serviceListData,
  webFeatures,
  webPartnerLogos,
} from "@/features/web/data/webData";
import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import IconFeatureCard from "@/shared/components/ui/IconFeatureCard";
import ListCard from "@/shared/components/ui/ListCard";
import Reveal from "@/shared/components/ui/Reveal";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function WebPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal variant="fade-up">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Services that make your Website Perform
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {webFeatures.map((feature, i) => (
              <IconFeatureCard
                key={i}
                title={feature.title}
                desc={feature.desc}
                icon={feature.icon}
                iconSize={80}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= SPLIT SECTION 1 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Illustration */}
          <div className="flex justify-center">
            <Image
              src="/images/web/web.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <HoverableContentCard>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Your website represents your company.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In the digital age of today, a well-crafted website serves not
              only as a virtual storefront but also as a powerful tool for small
              businesses to establish a strong online presence. In fact, it
              reflects your business by showcasing your products, services, and
              brand identity to a global audience 24/7.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Moreover, it provides a centralized platform for customers to
              learn about your offerings, engage with your content, and make
              convenient purchases. Additionally, a professional website
              instills credibility, thereby building trust among potential
              customers. As a result, it sets you apart from competitors, both
              now and in the future. Consequently, investing in a quality
              website is essential for long-term success.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              More
            </a>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= SPLIT SECTION 2 ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <Reveal variant="fade-up" className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <HoverableContentCard className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Keeping you online, without the hassle.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Opting for our NBN services provides you with additional peace of
              mind and convenience compared to dealing with mainstream,
              large-scale internet connectivity. We understand the importance of
              supporting our communities and our commitment extends to providing
              tailored internet solutions that cater to the unique needs of the
              area.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With a focus on customer satisfaction, our local support team is
              readily available to assist you, offering a personalized touch to
              your internet experience. By choosing us for NBN and local
              internet solutions, you are not just accessing cutting-edge
              technology, but also supporting a local business that invests in
              the well-being and connectivity of your local community.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium flex items-center hover:text-blue-800"
            >
              <ChevronRight className="w-4 h-4 mr-2" />
              More
            </a>
          </HoverableContentCard>

          {/* Right Illustration */}
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src="/images/web/seo.png"
              alt="Working seamlessly online"
              height={400}
              width={400}
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ================= GRID SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Reveal variant="fade-up" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {serviceListData.map((feature, i) => (
            <ListCard
              key={i}
              title={feature.title}
              items={feature.services}
              variant="chevron"
            />
          ))}
        </Reveal>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* LOGO SECTION  */}
        <Reveal variant="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {webPartnerLogos.map((a, i) => (
            <Reveal delay={i * 80} key={a.logo}>
              <Image
                src={a.logo}
                alt={a.logo}
                width={150}
                height={120}
                className="h-auto w-auto object-contain"
              />
            </Reveal>
          ))}
        </Reveal>
      </section>
    </main>
  );
}
