import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore JMT Shipping & Trading Co. Ltd. port agency, logistics, STS, crew, survey, marine supply, environmental, oil and gas, and trade support services in Bangladesh.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Maritime Services in Bangladesh",
    description: "Port agency, vessel support, STS logistics, crew documentation, survey, marine supply, and trade support services."
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-deep px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-[0.22em] text-safety">Services</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Integrated port agency, logistics, survey, crew, supply, and trade support.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">
            JMT groups critical maritime support into one coordinated service platform for owners, charterers, traders, managers, and project teams operating through Bangladesh ports.
          </p>
        </div>
      </section>

      <Section eyebrow="Service categories" title="Coverage for the full operational lifecycle of a port call.">
        <ServiceCards />
      </Section>

      <Section eyebrow="How we work" title="A disciplined workflow from first request to final report." className="bg-harbor/60">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["01", "Request", "Share vessel, cargo, schedule, and service requirements."],
            ["02", "Coordinate", "JMT aligns local resources, documentation, vendors, and port liaison."],
            ["03", "Execute", "Our operations team monitors attendance, timelines, and issue resolution."],
            ["04", "Report", "Principals receive clear updates, documentation, and closing summaries."]
          ].map(([number, title, copy]) => (
            <article key={number} className="rounded-3xl bg-white p-7 shadow-sm">
              <p className="text-sm font-black text-safety">{number}</p>
              <h2 className="mt-3 text-xl font-bold text-navy">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Clients served" title="Support for maritime, trade, and energy stakeholders.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Ship owners and operators",
            "Charterers and traders",
            "Oil, gas, and energy clients",
            "Marine managers and project teams"
          ].map((client) => (
            <div key={client} className="rounded-3xl border border-slate-200 p-6 text-lg font-bold text-navy shadow-sm">{client}</div>
          ))}
        </div>
      </Section>

      <section className="bg-navy px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-safety">Request service support</p>
            <h2 className="mt-3 text-3xl font-black">Send your operational requirement to JMT.</h2>
          </div>
          <Link href="/contact" className="rounded-full bg-safety px-7 py-4 text-center font-black text-navy">Request Service Support</Link>
        </div>
      </section>
    </>
  );
}
