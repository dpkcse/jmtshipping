import Link from "next/link";
import { serviceGroups, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep px-5 pb-24 pt-16 text-white lg:px-8 lg:pb-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(15,111,159,.32),transparent_28%),radial-gradient(circle_at_85%_0%,rgba(245,158,11,.12),transparent_24%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-safety font-black text-navy shadow-lg shadow-safety/20">JMT</div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Bangladesh-based shipping agency and integrated maritime service provider for port calls, logistics, surveys, crew services, and marine supplies.
          </p>
          <p className="mt-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-safety">Compliance focused • 24/7 operations</p>
        </div>
        <div>
          <h3 className="font-black text-white">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-safety" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {serviceGroups.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Contact</h3>
          <address className="mt-4 not-italic text-sm leading-7 text-white/70">{site.address}</address>
          <div className="mt-4 grid gap-2 text-sm">
            {site.emails.map((email) => (
              <a key={email} className="text-white/80 transition hover:text-safety" href={`mailto:${email}`}>{email}</a>
            ))}
            <a className="text-white/80 transition hover:text-safety" href="https://www.jmtshipping.com">{site.website}</a>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JMT Shipping & Trading Co. Ltd. All rights reserved.</p>
        <p>Modern maritime support across Bangladesh seaports.</p>
      </div>
    </footer>
  );
}
