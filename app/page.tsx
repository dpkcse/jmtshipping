import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { site, trustHighlights, values } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero-shell">
        <div className="absolute bottom-[-18rem] right-[-12rem] -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10 bg-ocean/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
          <div>
            <p className="eyebrow-pill">Bangladesh maritime agency • 24/7 operations</p>
            <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl lg:leading-[0.96]">
              Port agency and integrated maritime support for confident Bangladesh operations.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              JMT Shipping & Trading Co. Ltd. supports owners, charterers, traders, and operators with responsive port agency, logistics, survey, crew, marine supply, and compliance-focused service coordination.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                {site.cta.label}
              </Link>
              <Link href="/services" className="btn-secondary-dark">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 rounded-[1.75rem] border border-white/10 bg-white/10 p-3 backdrop-blur">
              {trustHighlights.slice(0, 3).map((highlight) => (
                <div key={highlight.label} className="rounded-2xl bg-white/10 px-3 py-4 text-center">
                  <p className="text-2xl font-black text-white sm:text-3xl">{highlight.value}</p>
                  <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/60">{highlight.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur lg:block" />
            <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-3 shadow-2xl shadow-deep/40 backdrop-blur-xl sm:p-5">
              <div className="rounded-[2rem] bg-white p-5 text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-7">
                <div className="flex items-start justify-between gap-6 border-b border-slate-200 pb-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-ocean">Operations desk</p>
                    <h2 className="mt-3 text-2xl font-black tracking-tight text-navy">Port-call readiness board</h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 ring-1 ring-emerald-100">Live</span>
                </div>
                <div className="mt-6 grid gap-3">
                  {["Port call planning", "STS and logistics coordination", "Crew, documents, surveys", "Marine supply support"].map((item) => (
                    <div key={item} className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-gradient-to-r from-harbor to-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-ocean/20 hover:shadow-lg">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-safety font-black text-navy shadow-lg shadow-safety/20 transition group-hover:scale-105">✓</span>
                      <span className="font-black text-navy">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-navy p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-safety">Response posture</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Single-window coordination for urgent vessel, logistics, crew, survey, supply, and documentation requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white py-10 sm:py-14 lg:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((highlight) => (
            <div key={highlight.label} className="premium-card premium-card-hover p-6">
              <p className="text-4xl font-black tracking-tight text-navy">{highlight.value}</p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-600">{highlight.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="About JMT" title="Local port expertise with international operating discipline." className="bg-harbor/60">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            For more than 12 years, JMT Shipping & Trading Co. Ltd. has helped maritime and trade clients move safely and efficiently through Bangladesh seaports. Our team combines Chattogram-based operational knowledge with disciplined reporting, vendor coordination, and transparent client communication.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.slice(0, 4).map((value) => (
              <div key={value} className="premium-card premium-card-hover p-5 font-black text-navy">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-safety/20 text-safety ring-1 ring-safety/20">✓</span>
                {value}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Core services" title="One accountable maritime partner across every port call requirement." className="bg-white">
        <ServiceCards />
      </Section>

      <Section eyebrow="Why choose JMT" title="Built for urgent operations, complex coordination, and dependable reporting." className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,111,159,.45),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(245,158,11,.16),transparent_24%)]" />
        <div className="relative grid gap-6 md:grid-cols-3">
          {[
            ["Single-window coordination", "Agency, logistics, crew, survey, supplies, and documentation support aligned through one responsive team."],
            ["Bangladesh seaport knowledge", "Practical local insight for Chattogram and Bangladesh maritime operating conditions."],
            ["Client-first communication", "Clear updates, careful vendor handling, and escalation-ready operations for time-sensitive matters."]
          ].map(([title, copy]) => (
            <article key={title} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-deep/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.14]">
              <h3 className="text-xl font-black text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/75">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Compliance commitment" title="Professional maritime support with a clear anti-bribery stance." className="bg-white">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-harbor via-white to-white p-8 shadow-premium lg:p-10">
          <p className="max-w-4xl text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            JMT maintains a compliance-focused approach to agency and marine service coordination. We support clear communication, proper documentation, ethical conduct, and professional handling of client instructions.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/about" className="btn-secondary-light">About Our Standards</Link>
            <Link href="/contact" className="btn-primary">Contact Operations</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
