"use client";

import Hero from "@/shared/components/ui/Hero";
import HoverableContentCard from "@/shared/components/ui/HoverableContentCard";
import Reveal from "@/shared/components/ui/Reveal";
import { useTouchHover } from "@/shared/hooks/useTouchHover";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  backupRecoveryFaqs,
  backupRecoveryHeroData,
  backupRecoveryOverview,
  backupRecoveryUsefulLinks,
  backupSolutions,
  backupTypes,
  businessBenefits,
  fullSystemBackup,
  howItWorksSteps,
  mozyPro,
  tsitServices,
} from "../data/backupRecoveryData";

function SolutionCard({
  solution,
}: {
  solution: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
    features: string[];
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = solution.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{solution.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify mb-4">
        {solution.desc}
      </p>
      <div className="space-y-2">
        {solution.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2">
            <Check size={16} className="text-blue-600 shrink-0 mt-0.5" />
            <span className="text-slate-600 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitCard({
  benefit,
}: {
  benefit: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = benefit.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{benefit.desc}</p>
    </div>
  );
}

function BackupTypeCard({
  type,
}: {
  type: {
    title: string;
    desc: string;
    icon: React.ComponentType<{ size?: number }>;
  };
}) {
  const { touched, onTouchStart, onTouchEnd } = useTouchHover();
  const Icon = type.icon;

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`border-2 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all ${
        touched ? "border-blue-300" : "border-blue-100 hover:border-blue-300"
      }`}
    >
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-bold text-slate-900">{type.title}</h3>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-3">{type.title}</h3>
        <p className="text-slate-600 text-sm text-justify">{type.desc}</p>
      </div>
    </div>
  );
}

function StepCard({
  step,
  index,
}: {
  step: {
    step: number;
    title: string;
    desc: string;
  };
  index: number;
}) {
  return (
    <div className="border-2 border-blue-100 rounded-2xl p-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
          <span className="font-bold">{index + 1}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
      </div>
      <p className="text-slate-600 text-sm text-justify">{step.desc}</p>
    </div>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-2 border-blue-100 rounded-xl overflow-hidden relative">
      <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-5 text-left"
      >
        <span className="font-medium text-slate-900 pr-4">{faq.question}</span>
        <ChevronDown
          size={20}
          className={`text-blue-600 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BackupRecoveryPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <Hero data={backupRecoveryHeroData} />

      {/* ================= OVERVIEW SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="overview">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <Image
              src="/images/cloud/cyber-security/backup-recovery/section-1.png"
              alt="Backup and Recovery Solutions"
              height={400}
              width={600}
              className="object-cover rounded-xl"
            />
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                {backupRecoveryOverview.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {backupRecoveryOverview.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {backupRecoveryOverview.description}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {backupRecoveryOverview.description2}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 text-justify">
                {backupRecoveryOverview.description3}
              </p>
              <a
                href="#solutions"
                className="text-blue-600 font-medium flex items-center hover:text-blue-800"
              >
                Our Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= WHY BACKUP MATTERS ================= */}
      <section className="py-16 lg:py-24 bg-white" id="why-matters">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Why Backup and Recovery Matters
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Data loss can occur due to various reasons including hardware
            failure, cyber attacks, accidental deletion, or natural disasters.
            Having a robust backup strategy is essential for business survival.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessBenefits.map((benefit, i) => (
              <Reveal key={i} delay={i * 80}>
                <BenefitCard benefit={benefit} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= BACKUP SOLUTIONS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="solutions">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Our Backup & Recovery Solutions
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Total Solutions IT takes backups very seriously. That&apos;s why we
            offer a number of solutions to ensure that your systems and
            business-critical data can be recovered in the event of a failure.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {backupSolutions.map((solution, i) => (
              <Reveal key={i} delay={i * 80}>
                <SolutionCard solution={solution} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= FULL SYSTEM BACKUP ================= */}
      <section className="py-16 lg:py-24 bg-white" id="full-system">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                StorageCraft ShadowProtect
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {fullSystemBackup.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {fullSystemBackup.description}
              </p>
              <div className="space-y-3 mb-8">
                {fullSystemBackup.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                Hardware Independent Restore (HIR): Recover an entire system
                state to a different hardware architecture or virtual machine.
                This means that if a server&apos;s hardware irretrievably fails,
                we can deploy a state backup of the server to another machine
                and recover your business processes in hours.
              </p>
            </div>
          </HoverableContentCard>

          <div className="flex justify-center">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden ">
              <Image
                src="/images/cloud/cyber-security/backup-recovery/section-3.png"
                alt="Full System Backup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ================= MOZY PRO CLOUD BACKUP ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="mozy-pro">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="flex justify-center">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden ">
              <Image
                src="/images/cloud/cyber-security/backup-recovery/section-2.jpg"
                alt="Mozy Pro Cloud Backup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <HoverableContentCard>
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-wide mb-3 block">
                Cloud-Based Backup
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {mozyPro.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 text-justify">
                {mozyPro.description}
              </p>
              <div className="space-y-3 mb-8">
                {mozyPro.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-blue-600 shrink-0 mt-0.5"
                    />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed text-justify">
                We often deploy Mozy in conjunction with Windows Server Backup
                or ShadowProtect to supplement the backups with a file history
                and archive that is stored in the cloud. Essential for
                business-critical data that absolutely cannot be lost.
              </p>
            </div>
          </HoverableContentCard>
        </Reveal>
      </section>

      {/* ================= BACKUP TYPES ================= */}
      <section className="py-16 lg:py-24 bg-white" id="types">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Types of Backup Solutions
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Modern backup solutions combine local backups, cloud storage, and
            offsite replication to provide multiple layers of protection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backupTypes.map((type, i) => (
              <Reveal key={i} delay={i * 80}>
                <BackupTypeCard type={type} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 lg:py-24 bg-slate-50" id="how-it-works">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            How Our Backup & Recovery Works
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Our comprehensive approach ensures your data is protected at every
            step, from initial assessment to ongoing monitoring and support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <StepCard step={step} index={i} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= NEED HELP ================= */}
      <section className="py-16 lg:py-24 bg-white" id="help">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-10 text-white order-2 lg:order-1">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">
              Need Help with Your Backup Strategy?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed mb-6 text-justify">
              Total Solutions IT provides comprehensive backup and recovery
              solutions to protect your business data. Our team of experts can
              assess your current infrastructure, design a tailored backup
              strategy, and implement solutions that ensure your data is always
              protected and recoverable.
            </p>
            <div className="space-y-3 mb-6">
              {tsitServices.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={18} className="text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-blue-50 text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-blue-100 text-sm mb-6">
              Whether you&apos;re looking to implement a new backup solution or
              improve your existing strategy, we provide the expertise and
              support needed to keep your business-critical data safe and
              recoverable.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/images/cloud/cyber-security/backup-recovery/section-4.png"
              alt="Backup and Recovery Support"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </section>

      {/* ================= USEFUL LINKS ================= */}
      <section className="py-8 lg:py-10 bg-slate-50" id="useful-links">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-12">
            Useful Links
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {backupRecoveryUsefulLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-2 border-blue-100 hover:border-blue-300 relative rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white transition-all">
                  <div className="absolute top-0 left-8 w-16 h-1 bg-blue-600 rounded-b-md"></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {link.description}
                  </p>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-blue-600 font-semibold text-sm hover:underline"
                  >
                    Find Out More &rarr;
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 lg:py-24 bg-white" id="faq">
        <Reveal
          variant="fade-up"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl text-center font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Common questions about backup and recovery solutions
          </p>
          <div className="space-y-4">
            {backupRecoveryFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
