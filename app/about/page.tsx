import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about JMT Shipping & Trading Co. Ltd., a Bangladesh-based shipping agency and integrated maritime service provider with 12+ years of experience.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About JMT Shipping & Trading Co. Ltd.",
    description: "Bangladesh-based maritime agency expertise, mission, values, and compliance-focused operating standards."
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-shell">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow-pill">About us</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl lg:leading-[0.98]">
            A trusted Bangladesh maritime partner with 12+ years of agency and trade support experience.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            JMT Shipping & Trading Co. Ltd. provides dependable shipping agency and integrated maritime services from Chattogram, serving owners, charterers, traders, managers, and offshore clients.
          </p>
        </div>
      </section>

      <Section eyebrow="Company introduction" title="Responsive local execution for global maritime clients.">
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Our team understands the operational urgency of vessel calls, cargo movements, documentation, crew requirements, survey attendance, and marine supply coordination. We focus on practical solutions, careful communication, and accountable service delivery.
            </p>
            <p>
              With more than a decade of experience in Bangladesh seaport operations, JMT is positioned to coordinate the details that keep port calls moving: local liaison, vendor alignment, compliance awareness, and prompt reporting to principals.
            </p>
          </div>
          <div className="premium-card p-8">
            <p className="text-7xl font-black text-navy">12+</p>
            <p className="mt-3 text-xl font-bold text-navy">Years supporting maritime operations in Bangladesh.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Vision and mission" title="Professional standards for every vessel, shipment, and stakeholder." className="bg-harbor/60">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="premium-card premium-card-hover p-8">
            <h2 className="text-2xl font-bold text-navy">Vision</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To be a preferred Bangladesh maritime agency partner recognized for dependable operations, ethical conduct, and integrated service capability.
            </p>
          </article>
          <article className="premium-card premium-card-hover p-8">
            <h2 className="text-2xl font-bold text-navy">Mission</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To simplify port and marine operations for clients through responsive coordination, transparent communication, and safety-conscious local execution.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="Values" title="The principles guiding JMT operations.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value} className="premium-card premium-card-hover p-6 font-black text-navy">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-safety text-navy">✓</span>
              {value}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industry credibility" title="Operational credibility comes from preparation, port knowledge, and careful reporting." className="bg-navy text-white">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Agency coordination for vessel calls and owner requirements.",
            "Local liaison support for marine logistics, crew, surveys, and supplies.",
            "Compliance-aware execution with documentation and anti-bribery awareness."
          ].map((item) => (
            <p key={item} className="rounded-[1.75rem] border border-white/10 bg-white/10 p-7 text-lg font-bold leading-8 text-white/80 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.14]">{item}</p>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/services" className="btn-primary">Learn About Our Services</Link>
          <Link href="/contact" className="btn-secondary-dark">Contact JMT</Link>
        </div>
      </Section>
    </>
  );
}
