"use client";

import {
  faqs,
  heroData,
  voiceBenefits,
  voiceFeatures,
  voiceServices,
  voiceTestimonials,
} from "@/features/voice/data/voiceData";
import FAQAccordion from "@/shared/components/ui/FAQAccordion";
import Hero from "@/shared/components/ui/Hero";
import ImageCard from "@/shared/components/ui/ImageCard";
import TestimonialCard from "@/shared/components/ui/TestimonialCard";
import Image from "next/image";

export default function VoicePage() {
  return (
    <main className="flex min-h-screen flex-col font-sans text-slate-800 bg-slate-50">
      {/* HERO SECTION */}
      <Hero data={heroData} />

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          What people are talking about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {voiceTestimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </section>

      {/* UPGRADE & FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
              Upgrade to the latest smart business phone system technology and
              save up to 40% on your current bill.
            </h2>
          </div>
          <div className="bg-white p-8 relative rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  How Many Locations / Users?
                </label>
                <select className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 text-slate-700 focus:ring-2 focus:ring-blue-500 outline-none">
                  <option>1-10 Users</option>
                  <option>11-50 Users</option>
                  <option>50+ Users</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-100 rounded-md p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Company Name"
                />
              </div>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <div className="space-y-6 text-slate-600 leading-relaxed mt-4">
              <p>
                <strong>Seamless communication is essential</strong> to modern
                operations. With a dedicated support system, you are ensuring a
                smooth flow of business internally and externally. We provide
                enterprise-grade quality voice networks tailored specifically to
                your company needs.
              </p>
              <p>
                Through advanced features like flexible call routing, dedicated
                virtual receptionists, and seamless team collaboration apps, we
                enable your workforce to stay connected. Boost productivity,
                reduce operating costs, and secure your business communications.
              </p>
              <p>
                <strong>Built on a reliable foundation,</strong> our
                telecommunications solutions guarantee maximum uptime,
                crystal-clear voice clarity, and robust security protocols.
                Focus on your core business strategies while we manage the
                complex backend infrastructure. Experience true mobility, giving
                you and your team access from anywhere.
              </p>
            </div>
          </div>{" "}
          <div className="order-1 lg:order-2 relative h-112.5 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
            <Image
              src="/images/voice/info.webp"
              alt="Customer Support Agent"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS / SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            Phone Systems Support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceServices.map((service, i) => (
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

      {/* DARK BANNER */}
      <section className="bg-[#2a2a2a] py-16">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto flex flex-col md:flex-row items-center gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
              As well as taking incoming calls on fixed line phones, IP
              terminals provide optimum sound.
            </h2>
          </div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-blue-100">
            <Image
              src="/images/voice/dark.jpg"
              alt="Optimum Sound"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES ACCORDION & IMAGE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          <div className="relative h-150 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100">
            <Image
              src="/images/voice/feature.jpg"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {voiceFeatures.map((feature, i) => (
              <div
                key={i}
                className="border-2 border-blue-100 hover:border-blue-300 rounded-2xl relative p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all"
              >
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
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-2">
              Provide the Best Communications For your Business.
              <br />
              Choose the Best Provider.
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    State-of-the-art technology
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Leveraging the latest advancements to keep you ahead of the
                    curve.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                  <span className="text-blue-600 font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    Dedicated customer support
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Our support team is available 24/7 to resolve any issues
                    immediately.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-75 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 order-1 lg:order-2">
            <Image
              src="/images/voice/choose.webp"
              alt="Modern Office Room"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* HARDWARE CTA */}
      <section className="bg-[#2a2a2a] py-16 text-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src="/images/voice/telephone.png"
              alt="VoIP Desk Phone"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Boost Productivity with Affordable Phone Systems
            </h2>
            <p className="text-gray-300">
              Transform the way your office communicates. High-definition audio
              and programmable interfaces ensure you never miss a beat.
            </p>
            <h3 className="text-xl font-semibold">Discover Phone System</h3>
            <p className="text-sm text-gray-400">
              Find the perfect hardware to match your cloud infrastructure.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition-colors mt-4">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">
            Increase Time To Money and Boost Productivity with Phone Systems.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {voiceBenefits.map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="py-16 bg-slate-50 border-t border-blue-100">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all relative">
            <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Partnership With Us
              </h2>
              <p className="text-slate-600">
                We understand that every business is unique and has different
                communication needs. Let us tailor a solution that perfectly
                aligns with your operational goals.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-64 w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 hover:border-blue-300 transition-all">
            <Image
              src="/images/voice/partnership.jpg"
              alt="Partnership Meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            FAQs
          </h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </main>
  );
}

