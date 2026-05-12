import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { serviceDetailMap, serviceDetails, site } from "@/lib/site";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = serviceDetailMap[params.slug];

  if (!service) {
    return {};
  }

  const path = `/services/${service.slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: service.title,
      description: service.metaDescription
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription
    }
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = serviceDetailMap[params.slug];

  if (!service) {
    notFound();
  }

  const path = `/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${path}#service`,
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
      url: site.url
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh"
    },
    serviceType: service.shortTitle,
    url: `${site.url}${path}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero-shell">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="text-sm font-bold text-white/70 transition hover:text-safety">
            ← All services
          </Link>
          <p className="eyebrow-pill mt-8">{service.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-0.055em] sm:text-6xl lg:text-7xl lg:leading-[0.98]">
            {service.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            {service.description}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request {service.shortTitle}
            </Link>
            <a href={`mailto:${site.emails[0]}`} className="btn-secondary-dark">
              Email Operations
            </a>
          </div>
        </div>
      </section>

      <Section eyebrow="Service overview" title={`Dependable ${service.shortTitle.toLowerCase()} support for Bangladesh operations.`}>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div className="premium-card p-7 sm:p-9">
            <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">{service.overview}</p>
          </div>
          <div className="rounded-[2rem] bg-navy p-7 text-white shadow-premium sm:p-9">
            <p className="section-eyebrow text-safety">Fast response</p>
            <h2 className="text-3xl font-black tracking-[-0.035em]">Need a port-side answer?</h2>
            <p className="mt-5 leading-7 text-white/75">
              Send your vessel name, ETA, port or anchorage, and service scope. JMT will review the requirement and respond with practical next steps.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Contact JMT
            </Link>
          </div>
        </div>
      </Section>

      <Section eyebrow="Key benefits" title="Operational advantages for principals, masters, and managers." className="bg-harbor/60">
        <div className="grid gap-5 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <article key={benefit} className="premium-card premium-card-hover p-6">
              <div className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-safety text-sm font-black text-navy">✓</span>
                <p className="text-base font-semibold leading-7 text-slate-700">{benefit}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Operational process" title="A clear workflow from first instruction to service closeout.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((item) => (
            <article key={item.step} className="premium-card premium-card-hover p-7">
              <p className="text-sm font-black text-safety">{item.step}</p>
              <h3 className="mt-3 text-xl font-bold text-navy">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why choose JMT" title="Local execution with professional maritime communication." className="bg-white">
        <div className="grid gap-6 lg:grid-cols-3">
          {service.whyChoose.map((reason) => (
            <article key={reason} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-harbor p-7 shadow-premium">
              <h3 className="text-lg font-black text-navy">{reason}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Explore services" title="Review related JMT service capabilities." className="bg-harbor/60">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceDetails.map((relatedService) => {
            const isCurrentService = relatedService.slug === service.slug;

            return (
              <Link
                key={relatedService.slug}
                href={`/services/${relatedService.slug}`}
                aria-current={isCurrentService ? "page" : undefined}
                className={`premium-card premium-card-hover group p-5 ${isCurrentService ? "border-ocean/40 bg-ocean/5" : ""}`}
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-ocean">{relatedService.eyebrow}</p>
                <h3 className="mt-3 text-lg font-black text-navy">{relatedService.shortTitle}</h3>
                <span className="mt-4 inline-flex text-sm font-black text-ocean transition group-hover:text-safety">
                  {isCurrentService ? "Current service" : "View details →"}
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/services" className="btn-secondary-light">Back to All Services</Link>
          <Link href="/contact" className="btn-secondary-light">Contact Operations</Link>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-navy px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-safety">Contact CTA</p>
            <h2 className="mt-3 text-3xl font-black">Request {service.shortTitle.toLowerCase()} support from JMT.</h2>
            <p className="mt-4 max-w-2xl text-white/75">
              Share your vessel details, location, schedule, and required scope so our operations team can coordinate the next step.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">Request Service Support</Link>
        </div>
      </section>
    </>
  );
}
