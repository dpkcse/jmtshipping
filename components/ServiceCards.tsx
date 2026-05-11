import { serviceGroups } from "@/lib/site";

export function ServiceCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
      {serviceGroups.map((service, index) => (
        <article
          key={service.title}
          className="group premium-card premium-card-hover relative overflow-hidden p-6 sm:p-7"
        >
          <div className="absolute right-0 top-0 h-28 w-28 -translate-y-10 translate-x-10 rounded-full bg-ocean/10 transition duration-300 group-hover:scale-125 group-hover:bg-safety/20" />
          <div className="relative z-10">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-harbor to-white text-3xl ring-1 ring-ocean/10 transition duration-300 group-hover:-rotate-3 group-hover:scale-105 group-hover:ring-ocean/25">
                {service.icon}
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-500">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-xl font-black tracking-tight text-navy sm:text-2xl">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
            <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-700">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-harbor/60 px-3 py-2.5 transition duration-300 group-hover:bg-harbor">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-safety shadow-[0_0_0_4px_rgba(245,158,11,0.14)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
