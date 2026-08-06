import { Star } from "lucide-react";

const items = [
  {
    quote:
      "Our packaging finally looks like the price point we sell at. Sell-through in retail jumped 28% in one quarter.",
    name: "Meera Shah",
    title: "Co-founder, Tea Sense",
    initials: "MS",
  },
  {
    quote:
      "He gave us a system, not just a logo. Six months later our team is still shipping on-brand assets without asking.",
    name: "Dev Ranganathan",
    title: "Head of Growth, Fruit Blends",
    initials: "DR",
  },
  {
    quote:
      "Clear process, zero drama, everything on time. The rebrand landed us two retail partnerships.",
    name: "Sara Iyer",
    title: "Brand Lead, Northgate",
    initials: "SI",
  },
  {
    quote:
      "The clarity work upfront saved us weeks. We knew exactly what we were buying before design started.",
    name: "Tom Alvarez",
    title: "Founder, Ampersand",
    initials: "TA",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h2 className="max-w-xl text-4xl font-extrabold sm:text-5xl">
        Brands that trusted the process
      </h2>

      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] lg:grid lg:grid-cols-2 lg:overflow-visible">
        {items.map((t) => (
          <article
            key={t.name}
            className="card-surface w-[85%] shrink-0 snap-start p-6 lg:w-auto"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed">{t.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface-2 font-display text-sm font-bold text-primary">
                {t.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">{t.name}</p>
                <p className="truncate text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
