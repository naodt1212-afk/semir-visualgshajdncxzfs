import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

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

function ToolMarquee() {
  const row = [...tools, ...tools, ...tools, ...tools];
  return (
    <div className="relative mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="animate-marquee flex w-max gap-3">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-3">
            {row.map((t, i) => (
              <motion.span
                key={`${dup}-${t}-${i}`}
                whileHover={{ scale: 1.18, rotate: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-surface-2 font-display text-sm font-bold text-muted-foreground transition-all duration-300 ease-out hover:border-primary/50 hover:text-primary"
              >
                {t}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24">
      <Reveal>
        <h2 className="max-w-2xl text-4xl font-extrabold sm:text-6xl">
          What I help you to{" "}
          <motion.span
            className="inline-block text-primary"
            animate={{ textShadow: ["0 0 0px rgba(255,42,60,0)", "0 0 40px rgba(255,42,60,0.7)", "0 0 0px rgba(255,42,60,0)"] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            Shape
          </motion.span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[260px_1fr]">
        <Reveal className="h-fit">
          <aside className="card-surface h-fit p-6">
            <p className="text-sm text-muted-foreground">Tools that I use</p>
            <ToolMarquee />
          </aside>
        </Reveal>

        <LayoutGroup>
          <motion.div layout className="space-y-3">
            {services.map((s, i) => {
              const open = openIndex === i;
              return (
                <motion.div
                  key={s.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18, delay: i * 0.05 }}
                  className="card-surface overflow-hidden"
                >
                  <motion.button
                    layout="position"
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-bold sm:text-2xl">{s.title}</span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 18 }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-300 ease-out ${
                        open ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </motion.span>
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 26 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="max-w-xl text-sm text-muted-foreground">{s.body}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {s.tags.map((t, ti) => (
                              <motion.span
                                key={t}
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.05 * ti, type: "spring", stiffness: 300, damping: 18 }}
                                whileHover={{ scale: 1.08 }}
                                className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 ease-out hover:border-primary/50 hover:text-primary"
                              >
                                {t}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
