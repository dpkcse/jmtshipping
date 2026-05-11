"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="JMT Shipping home">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-lg font-black text-white shadow-lg shadow-navy/20">
        JMT
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-black uppercase tracking-[0.18em] text-navy">JMT Shipping</span>
        <span className="block text-xs font-semibold text-slate-500">Shipping & Trading Co. Ltd.</span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/30 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-xl sm:px-5 sm:py-4 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white p-1 lg:flex" aria-label="Primary navigation">
            {site.navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    active ? "bg-navy text-white" : "text-slate-700 hover:bg-harbor hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a href="mailto:ops@jmtshipping.com" className="text-sm font-bold text-ocean hover:text-navy">
              ops@jmtshipping.com
            </a>
            <Link href={site.cta.href} className="rounded-full bg-safety px-5 py-3 text-sm font-black text-navy shadow-lg shadow-safety/25 transition hover:bg-gold">
              {site.cta.label}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-2xl border border-slate-200 p-3 text-navy lg:hidden"
            aria-label="Open navigation menu"
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-deep/60 backdrop-blur-sm lg:hidden" role="dialog" aria-modal="true">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between">
              <Logo />
              <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-harbor px-4 py-2 text-2xl leading-none text-navy" aria-label="Close navigation menu">
                ×
              </button>
            </div>
            <nav className="mt-10 grid gap-3" aria-label="Mobile navigation">
              {site.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-slate-200 px-5 py-4 text-lg font-bold text-navy hover:border-ocean hover:bg-harbor"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto rounded-3xl bg-navy p-5 text-white">
              <p className="text-sm font-semibold text-white/70">24/7 operations support</p>
              <a href="mailto:ops@jmtshipping.com" className="mt-2 block font-bold text-white">
                ops@jmtshipping.com
              </a>
              <Link onClick={() => setOpen(false)} href="/contact" className="mt-5 block rounded-full bg-safety px-5 py-3 text-center font-black text-navy">
                Request Support
              </Link>
            </div>
          </div>
        </div>
      )}

      <Link href="/contact" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-safety px-5 py-4 text-center text-xs font-black uppercase tracking-[0.08em] text-navy shadow-2xl shadow-navy/25 sm:text-sm sm:tracking-[0.12em] lg:hidden">
        Request Agency Support
      </Link>
    </>
  );
}
