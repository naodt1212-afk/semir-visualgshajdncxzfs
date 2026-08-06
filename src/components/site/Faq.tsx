import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarDays, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

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
          <Reveal>
            <h2 className="text-4xl font-extrabold sm:text-5xl">Questions, answered</h2>
          </Reveal>
          <motion.div layout className="mt-8 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={f.q}
                  layout
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 130, damping: 18, delay: i * 0.04 }}
                  className="card-surface overflow-hidden"
                >
                  <motion.button
                    layout="position"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span className="min-w-0 flex-1 font-semibold">{f.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 ease-out ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="a"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 190, damping: 26 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-14 text-sm text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <Reveal className="h-fit">
          <motion.aside
            whileHover={{ scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="relative h-fit overflow-hidden rounded-4xl p-[2px]"
          >
            <motion.span
              aria-hidden
              className="absolute inset-[-120%] bg-[conic-gradient(from_0deg,transparent,rgba(255,42,60,0.9),transparent_40%)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative overflow-hidden rounded-4xl bg-primary p-8 text-primary-foreground shadow-glow">
              <motion.div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
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
                <motion.a
                  href="mailto:hello@ruchitdesigns.com"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 ease-out"
                >
                  <CalendarDays className="h-4 w-4" /> Schedule Now
                </motion.a>
                <motion.a
                  href="mailto:hello@ruchitdesigns.com"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:bg-black/20"
                >
                  Convert <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.aside>
        </Reveal>
      </div>
    </section>
  );
}
