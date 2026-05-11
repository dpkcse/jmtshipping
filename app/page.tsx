import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { site, trustHighlights, values } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-deep px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(15,111,159,.65),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,.2),transparent_25%)]" />
        <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:48px_48px] opacity-25" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-safety backdrop-blur sm:tracking-[0.22em]">
              Bangladesh maritime agency • 24/7 operations
            </p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Port agency and integrated maritime support for confident Bangladesh operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
              JMT Shipping & Trading Co. Ltd. supports owners, charterers, traders, and operators with responsive port agency, logistics, survey, crew, marine supply, and compliance-focused service coordination.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-safety px-7 py-4 text-center font-black text-navy shadow-xl shadow-safety/20 hover:bg-gold">
                {site.cta.label}
              </Link>
              <Link href="/services" className="rounded-full border border-white/25 px-7 py-4 text-center font-black text-white hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-navy">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ocean">Operations desk</p>
              <div className="mt-6 grid gap-4">
                {["Port call planning", "STS and logistics coordination", "Crew, documents, surveys", "Marine supply support"].map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-2xl bg-harbor p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-safety font-black">✓</span>
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white py-10 sm:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((highlight) => (
            <div key={highlight.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-4xl font-black text-navy">{highlight.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">{highlight.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="About JMT" title="Local port expertise with international operating discipline." className="bg-harbor/60">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <p className="text-lg leading-8 text-slate-700">
            For more than 12 years, JMT Shipping & Trading Co. Ltd. has helped maritime and trade clients move safely and efficiently through Bangladesh seaports. Our team combines Chattogram-based operational knowledge with disciplined reporting, vendor coordination, and transparent client communication.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.slice(0, 4).map((value) => (
              <div key={value} className="rounded-2xl bg-white p-5 font-bold text-navy shadow-sm">{value}</div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Core services" title="One accountable maritime partner across every port call requirement.">
        <ServiceCards />
      </Section>

      <Section eyebrow="Why choose JMT" title="Built for urgent operations, complex coordination, and dependable reporting." className="bg-navy text-white">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Single-window coordination", "Agency, logistics, crew, survey, supplies, and documentation support aligned through one responsive team."],
            ["Bangladesh seaport knowledge", "Practical local insight for Chattogram and Bangladesh maritime operating conditions."],
            ["Client-first communication", "Clear updates, careful vendor handling, and escalation-ready operations for time-sensitive matters."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/10 p-7">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/70">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Compliance commitment" title="Professional maritime support with a clear anti-bribery stance." className="bg-white">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-harbor to-white p-8 shadow-sm lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-slate-700">
            JMT maintains a compliance-focused approach to agency and trade support. We prioritize lawful coordination, transparent communications, documented instructions, and responsible vendor management for every assignment.
          </p>
        </div>
      </Section>

      <section className="bg-ocean px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] bg-deep p-8 shadow-2xl sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-safety sm:text-sm sm:tracking-[0.22em]">Need immediate port support?</p>
            <h2 className="mt-3 text-3xl font-black">Talk to JMT operations today.</h2>
          </div>
          <Link href="/contact" className="rounded-full bg-safety px-7 py-4 text-center font-black text-navy hover:bg-gold">
            Request Agency Support
          </Link>
        </div>
      </section>
    </>
  );
}
