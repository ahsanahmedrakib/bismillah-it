"use client";

import { industriesData, heroData } from "@/features/industries/data/industriesData";
import Hero from "@/shared/components/ui/Hero";
import ImageCard from "@/shared/components/ui/ImageCard";
import Reveal from "@/shared/components/ui/Reveal";

const IndustriesPage = () => {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* Industries Grid */}
      <section className="py-20 bg-slate-50">
        <Reveal variant="fade-up" className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-brand-active mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {industriesData.map((service, i) => (
              <ImageCard
                key={i}
                title={service.title}
                desc={service.description}
                image={service.image}
              />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default IndustriesPage;

