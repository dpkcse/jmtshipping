import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { pageSeo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  alternates: { canonical: pageSeo.contact.path },
  openGraph: {
    type: "website",
    url: pageSeo.contact.path,
    title: pageSeo.contact.title,
    description: pageSeo.contact.description
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.contact.title,
    description: pageSeo.contact.description
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-shell">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow-pill">Contact</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl lg:leading-[0.98]">
            Request agency support or speak with JMT operations.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            Share your port call, logistics, survey, crew, supply, or trade support requirement. For time-sensitive matters, contact the operations desk directly.
          </p>
        </div>
      </section>

      <Section className="bg-harbor/60">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-navy to-deep p-8 text-white shadow-premium">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-safety">Emergency operations CTA</p>
              <h2 className="mt-4 text-3xl font-black">24/7 operational coordination</h2>
              <p className="mt-4 leading-7 text-white/75">
                For urgent vessel, crew, logistics, or port agency requirements, email the operations desk with vessel details and required attendance time.
              </p>
              <a href="mailto:ops@jmtshipping.com" className="btn-primary mt-6 px-6 py-3">Email Operations</a>
            </div>
            <div className="premium-card p-8">
              <h2 className="text-2xl font-bold text-navy">Contact details</h2>
              <dl className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                <div>
                  <dt className="font-black text-navy">Address</dt>
                  <dd>{site.address}</dd>
                </div>
                <div>
                  <dt className="font-black text-navy">Email</dt>
                  <dd className="grid gap-1">
                    {site.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="text-ocean hover:text-navy">{email}</a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="font-black text-navy">Website</dt>
                  <dd><a href="https://www.jmtshipping.com" className="text-ocean hover:text-navy">{site.website}</a></dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Location" title="Chattogram-based support for Bangladesh maritime operations.">
        <div className="flex min-h-[320px] items-center justify-center rounded-[2rem] border border-dashed border-ocean/30 bg-gradient-to-br from-harbor via-white to-white p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,.8)]">
          <div>
            <p className="text-5xl">🗺️</p>
            <h3 className="mt-4 text-2xl font-black text-navy">Google map placeholder</h3>
            <p className="mt-3 max-w-2xl text-slate-600">
              Embed a Google Map for Nazir Mansion, 1 No. CCT Gate, Bandar, South Halishahar - 4225, Chattogram, Bangladesh during deployment.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
