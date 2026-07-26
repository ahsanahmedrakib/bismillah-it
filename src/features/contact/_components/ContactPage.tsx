"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";

import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import {
  contactDetails,
  contactHeroData,
  MESSENGER,
  WHATSAPP,
} from "../data/contactData";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* HERO */}
      <Hero data={contactHeroData} />

      {/* CONTACT DETAILS + MAP */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Details + Messaging */}
            <HoverableContentCard>
              <h2 className="text-3xl font-bold text-brand-blue mb-4">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8">
                Reach out to us through any of the following channels. We would
                love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                {contactDetails.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">
                        {item.label}
                      </p>
                      <p className="text-slate-900 font-semibold">
                        {item.value}
                      </p>
                      <p className="text-sm text-slate-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Messaging Buttons */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Chat With Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-brand-green-hover hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <FaWhatsapp size={22} />
                    WhatsApp
                  </a>
                  <a
                    href={MESSENGER}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#0084ff] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-[#0073e6] hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    <FaFacebookMessenger size={22} />
                    Messenger
                  </a>
                </div>
              </div>
            </HoverableContentCard>

            {/* Right: Map */}
            <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-blue-100 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3392.2550536247227!2d90.38730387501835!3d23.860799278595277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41ec0492547%3A0x9d72192863d92047!2sBismillah%20Computer%20%26%20Technology!5e1!3m2!1sen!2sbd!4v1785079325012!5m2!1sen!2sbd"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bismillah Computer & Technology Location"
                className="w-full h-full min-h-100"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

