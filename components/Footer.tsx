import Link from "next/link";
import { serviceGroups, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deep px-5 pb-24 pt-14 text-white lg:px-8 lg:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-safety font-black text-navy">JMT</div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
            Bangladesh-based shipping agency and integrated maritime service provider for port calls, logistics, surveys, crew services, and marine supplies.
          </p>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-safety">Compliance focused • 24/7 operations</p>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {site.navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-safety" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {serviceGroups.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <address className="mt-4 not-italic text-sm leading-7 text-white/70">{site.address}</address>
          <div className="mt-4 grid gap-2 text-sm">
            {site.emails.map((email) => (
              <a key={email} className="text-white/80 hover:text-safety" href={`mailto:${email}`}>{email}</a>
            ))}
            <a className="text-white/80 hover:text-safety" href="https://www.jmtshipping.com">{site.website}</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JMT Shipping & Trading Co. Ltd. All rights reserved.</p>
        <p>Modern maritime support across Bangladesh seaports.</p>
      </div>
    </footer>
  );
}
