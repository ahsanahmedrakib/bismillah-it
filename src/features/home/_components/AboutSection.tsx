"use client";

import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/shared/components/ui/Reveal";

interface AboutFeature {
  icon: string;
  title: string;
  text: string;
}

const aboutFeatures: AboutFeature[] = [
  {
    icon: "/images/home/about/about_13_1.svg",
    title: "Innovation at our core",
    text: "Driving growth through smart, reliable, and future-ready IT solutions.",
  },
  {
    icon: "/images/home/about/about_13_2.svg",
    title: "Internal Networking",
    text: "Streamline communication and data sharing with secure, high-performance internal networks.",
  },
  {
    icon: "/images/home/about/about_13_3.svg",
    title: "Simplifying complexity",
    text: "Turning complicated technology into simple, effective solutions.",
  },
];

function FeatureItem({
  feature,
  delay = 0,
}: {
  feature: AboutFeature;
  delay?: number;
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();

  return (
    <Reveal variant="fade-left" delay={delay}>
      <div
        className="group flex items-start gap-5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
      <div
        className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 ring-1 ring-blue-100 shadow-sm transition-all duration-300 ${
          touched
            ? "scale-105 ring-blue-300 shadow-md"
            : "group-hover:scale-105 group-hover:ring-blue-300 group-hover:shadow-md"
        }`}
      >
        <Image
          src={feature.icon}
          alt={feature.title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>
      <div className="min-w-0">
        <h3
          className={`text-xl font-bold text-gray-900 tracking-tight transition-colors duration-300 ${
            touched ? "text-brand-blue" : "group-hover:text-brand-blue"
          }`}
        >
          {feature.title}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed mt-1.5">
          {feature.text}
        </p>
      </div>
      </div>
    </Reveal>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about-sec"
      className="relative bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Ambient Blur */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(191,219,254,0.15) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ---------------- Section Heading ---------------- */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-md ring-1 ring-blue-600/10">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-4 leading-tight">
            Empowering businesses with smart IT solutions
          </h2>
        </Reveal>

        {/* ---------------- Main Layout ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Left: image + floating stat card */}
          <Reveal variant="fade-right" className="relative">
            <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-[0_20px_50px_-20px_rgba(21,124,193,0.35)]">
              <Image
                src="/images/home/about/about_13_2.png"
                alt="Bismillah Computer & Technology"
                width={305}
                height={335}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 sm:left-10 flex items-center gap-4 bg-white rounded-2xl px-6 py-5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.12)] ring-1 ring-brand-subtle-border">
              <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-b from-brand-blue to-cyan-500">
                10+
              </div>
              <div>
                <p className="font-bold text-gray-900">Years of</p>
                <p className="text-sm text-gray-500 font-medium">
                  Trusted Experience
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: description + features + CTA */}
          <Reveal variant="fade-left">
            <p className="text-gray-500 text-base sm:text-lg font-light leading-relaxed">
              Bismillah Computer &amp; Technology delivers secure, scalable, and
              affordable IT solutions — from network consultancy and website
              development to ISP, hardware, and software support. With over 10
              years of trusted experience, we help businesses stay connected,
              reliable, and future-ready.
            </p>

            <div className="flex flex-col gap-8 mt-10">
              {aboutFeatures.map((feature, idx) => (
                <FeatureItem key={idx} feature={feature} delay={idx * 120} />
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-10 inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-hover active:bg-brand-active text-white px-pill-px py-pill-py rounded-pill text-phone shadow-pill-glow transition-all duration-200 hover:shadow-md"
            >
              Discover More
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
