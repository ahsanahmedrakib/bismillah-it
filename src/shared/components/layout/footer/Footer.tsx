"use client";

import { NAV_ITEMS } from "@/shared/data/navbar";
import { Home, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialIcons from "../navbar/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark-bg text-white font-sans antialiased pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Logos & About */}
          <div className="space-y-6">
            {/* Logo Placeholders - Replace src with your actual logo paths */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Link href="/" className="flex items-center gap-3.5 group">
                  <Image
                    src={"/logo-white.svg"}
                    width={180}
                    height={70}
                    alt="Logo"
                    priority
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                {/* Mocking the Microsoft Partner logo */}
                <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
                  <div className="bg-ms-red"></div>
                  <div className="bg-ms-green"></div>
                  <div className="bg-ms-blue"></div>
                  <div className="bg-ms-yellow"></div>
                </div>
                <div className="leading-tight">
                  <span className="block text-lg font-bold">Microsoft</span>
                  <span className="block text-sm font-medium">
                    Solutions Partner
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[15px] leading-relaxed text-gray-200 pr-4">
              Bismillah Computer & Technology is a Licensed ISP by Bangladesh
              Telecommunication Regulatory Commission providing Internet
              service. Best internet service provider in Uttara Dhaka.
            </p>
            <SocialIcons />
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-300 text-[15px] text-gray-200">
              {NAV_ITEMS?.map((nav, i) => (
                <li key={i}>
                  <Link
                    href={nav.href}
                    className="hover:text-white transition-colors"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          {/* <div className="lg:pl-4">
            <h3 className="text-2xl font-bold mb-6 leading-tight">
              Customer
              <br />
              Service
            </h3>
            <ul className="space-y-3 list-disc pl-5 marker:text-gray-300 text-[15px] text-gray-200">
              <li>
                <Link
                  href="#speed-test"
                  className="hover:text-white transition-colors"
                >
                  Speed test
                </Link>
              </li>
              <li>
                <Link
                  href="#direct-debit"
                  className="hover:text-white transition-colors"
                >
                  Direct Debit Form
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="hover:text-white transition-colors"
                >
                  {"FAQ's"}
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-6">
              {/* Email */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Mail className="w-4 h-4" strokeWidth={2.5} />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:support@bct.com.bd"
                  className="text-[15px] text-gray-200 hover:text-white transition-colors"
                >
                  support@bct.com.bd
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Phone className="w-4 h-4" strokeWidth={2.5} />
                  <span>Phone</span>
                </div>
                <a
                  href="tel:+8801972721388"
                  className="text-[15px] text-gray-200 hover:text-white transition-colors"
                >
                  +880 1972-721388
                </a>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center space-x-2 font-bold mb-1 uppercase tracking-wide text-[13px]">
                  <Home className="w-4 h-4" strokeWidth={2.5} />
                  <span>Address</span>
                </div>
                <address className="text-[15px] text-gray-200 not-italic leading-relaxed">
                  House#6, Road#Shera Bangal Avenue,
                  <br />
                  Block#B, Dolipara Uttara Dhaka-1230
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[13px] text-white gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link href={"https://bct.com.bd/"}>
              Bismillah Computer & Technology.
            </Link>{" "}
            All Rights Reserved
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/"
              className="hover:text-white transition-colors font-medium"
            >
              Terms & Conditons
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors font-medium"
            >
              Careers
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

