import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const tools = ["Ps", "Ai", "Ae", "Fig", "Bl", "Sp", "Id"];

const services = [
  {
    title: "Design Strategy",
    body: "Positioning workshops, audience mapping and a clear creative direction before a single pixel moves.",
    tags: ["Brand Audit", "Positioning", "Creative Direction"],
  },
  {
    title: "Brand Identity",
    body: "Complete identity systems built to scale across every touchpoint your brand lives on.",
    tags: ["Logo Design", "Visual Identity Systems", "Typography", "Brand Guidelines"],
  },
  {
    title: "UI/UX Design",
    body: "Interfaces designed around real user flows, tested and refined until they feel obvious.",
    tags: ["Wireframing", "Prototyping", "Usability Testing", "Interaction Design"],
  },
  {
    title: "Packaging Design",
    body: "Shelf-ready packaging with production-safe dielines and a story people pick up.",
    tags: ["Dielines", "Label Design", "Print Production"],
  },
  {
    title: "Digital Design",
    body: "Landing pages, campaign assets and motion that keep the brand consistent online.",
    tags: ["Landing Pages", "Social Kits", "Motion"],
  },
];

export function Services() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24">
      <h2 className="max-w-2xl text-4xl font-extrabold sm:text-6xl">
        What I help you to <span className="text-primary">Shape</span>
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="card-surface h-fit p-6">
          <p className="text-sm text-muted-foreground">Tools that I use</p>
          <div className="mt-5 grid grid-cols-4 gap-3 lg:grid-cols-3">
            {tools.map((t) => (
              <span
                key={t}
                className="grid aspect-square place-items-center rounded-2xl border border-border bg-surface-2 font-display text-sm font-bold text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </aside>

        <div className="space-y-3">
          {services.map((s, i) => {
            const open = openIndex === i;
            return (
              <div key={s.title} className="card-surface overflow-hidden">
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold sm:text-2xl">{s.title}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors ${
                      open ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"
                    }`}
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="max-w-xl text-sm text-muted-foreground">{s.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
