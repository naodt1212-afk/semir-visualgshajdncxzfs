import { useState } from "react";
import { ArrowUpRight, CalendarDays, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do we get started?",
    a: "We start with a free 30-minute discovery call. I'll ask about your goals, timeline and budget, then send a scoped proposal within two working days.",
  },
  {
    q: "Will I be involved in the design process?",
    a: "Always. You get async updates twice a week and a working review at the end of each phase, so nothing lands as a surprise.",
  },
  {
    q: "How many changes can I request?",
    a: "Every phase includes two structured revision rounds. Because we agree on direction before design begins, most projects use fewer.",
  },
  {
    q: "What does a typical project cost?",
    a: "Identity projects usually run $4k–$12k depending on scope. Packaging and web are quoted separately after the discovery call.",
  },
  {
    q: "How long does a project take?",
    a: "A focused brand identity takes 3–5 weeks. Full identity plus packaging or a website typically runs 6–10 weeks.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="text-4xl font-extrabold sm:text-5xl">Questions, answered</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="card-surface overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="min-w-0 flex-1 font-semibold">{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 pl-14 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="relative h-fit overflow-hidden rounded-4xl bg-primary p-8 text-primary-foreground shadow-glow">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <span className="inline-flex rounded-full bg-black/25 px-3 py-1 text-xs font-medium">
            Free · 30 minutes
          </span>
          <h3 className="mt-5 text-3xl font-extrabold leading-tight">
            Still not sure? Book a free discovery call.
          </h3>
          <p className="mt-4 text-sm text-primary-foreground/80">
            No pitch deck, no pressure. We'll talk through your problem and I'll tell you honestly
            whether I'm the right fit.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="mailto:hello@ruchitdesigns.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              <CalendarDays className="h-4 w-4" /> Schedule Now
            </a>
            <a
              href="mailto:hello@ruchitdesigns.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-black/20"
            >
              Convert <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
