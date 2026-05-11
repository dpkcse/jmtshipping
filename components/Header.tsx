"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="JMT Shipping home">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-ocean text-lg font-black text-white shadow-lg shadow-navy/20 transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 px-5 py-3.5 shadow-[0_10px_40px_rgba(3,24,39,0.06)] backdrop-blur-xl lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white p-1.5 shadow-sm lg:flex" aria-label="Primary navigation">
            {site.navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-5 py-2.5 text-sm font-black transition duration-300 ${
                    active ? "bg-navy text-white shadow-lg shadow-navy/20" : "text-slate-600 hover:bg-harbor hover:text-navy"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="mailto:ops@jmtshipping.com" className="text-sm font-black text-ocean transition hover:text-navy">
              ops@jmtshipping.com
            </a>
            <Link href={site.cta.href} className="btn-primary px-5 py-3 text-xs">
              {site.cta.label}
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-2xl border border-slate-200 bg-white p-3 text-navy shadow-sm transition hover:border-ocean/30 hover:bg-harbor lg:hidden"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-deep/70 backdrop-blur-md lg:hidden" role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Logo />
              <h2 id="mobile-navigation-title" className="sr-only">Mobile navigation</h2>
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)} className="rounded-full bg-harbor px-4 py-2 text-2xl leading-none text-navy transition hover:bg-safety/20" aria-label="Close navigation menu">
                ×
              </button>
            </div>
            <nav id="mobile-navigation" className="mt-10 grid gap-3" aria-label="Mobile navigation">
              {site.navigation.map((item) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl border px-5 py-4 text-lg font-black transition ${
                      active ? "border-navy bg-navy text-white" : "border-slate-200 text-navy hover:border-ocean hover:bg-harbor"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-8 rounded-[1.75rem] bg-gradient-to-br from-navy to-deep p-5 text-white shadow-premium">
              <p className="text-sm font-semibold text-white/70">24/7 operations support</p>
              <a href="mailto:ops@jmtshipping.com" className="mt-2 block font-bold text-white transition hover:text-safety">
                ops@jmtshipping.com
              </a>
              <Link onClick={() => setOpen(false)} href="/contact" className="mt-5 flex rounded-full bg-safety px-5 py-3 text-center font-black text-navy transition hover:bg-gold">
                <span className="mx-auto">Request Support</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Link href="/contact" className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-safety px-5 py-4 text-center text-xs font-black uppercase tracking-[0.14em] text-navy shadow-2xl shadow-navy/25 transition hover:bg-gold lg:hidden">
        Request Agency Support
      </Link>
    </>
  );
}
