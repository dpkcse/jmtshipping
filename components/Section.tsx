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
    <section className={`px-5 py-[4.5rem] sm:py-24 lg:px-8 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-10 max-w-3xl sm:mb-12">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-black tracking-[-0.035em] text-navy sm:text-4xl lg:text-5xl lg:leading-[1.05]">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
