"use client";

import Hero from "@/shared/components/ui/Hero";
import ImageCard from "@/shared/components/ui/ImageCard";
import Image from "next/image";
import { heroData, cloudBenefits, cloudServices } from "@/features/cloud/data/cloudData";

export default function CloudPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={heroData} />

      {/* ================= BENIFITS GRID SECTION ================= */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        id="benifits"
      >
        <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
          Right application, right scale, right cost
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cloudBenefits.map((feature, i) => (
            <div
              key={i}
              className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
            >
              {" "}
              <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                • {feature.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4">{feature.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES GRID SECTION ================= */}
      <section className="py-20 bg-slate-50" id="services">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Cloud Services for the modern business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cloudServices.map((service, i) => (
              <ImageCard
                key={i}
                title={service.title}
                desc={service.desc}
                image={service.img}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

