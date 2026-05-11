import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  children,
  className = ""
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-14 sm:px-6 sm:py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-3xl sm:mb-10">
            {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-ocean sm:text-sm sm:tracking-[0.22em]">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
