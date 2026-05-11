import { serviceGroups } from "@/lib/site";

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {serviceGroups.map((service) => (
        <article
          key={service.title}
          className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-ocean/40 hover:shadow-premium"
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-harbor text-3xl ring-1 ring-ocean/10 group-hover:bg-ocean/10">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-navy">{service.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {service.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-safety" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
