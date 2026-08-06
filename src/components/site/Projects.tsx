import { ArrowUpRight } from "lucide-react";
import hoodverse from "@/assets/project-hoodverse.jpg";
import teasense from "@/assets/project-teasense.jpg";
import fruit from "@/assets/project-fruitblends.jpg";

const projects = [
  {
    title: "HOODVERSE",
    subtitle: "Branding & Visual Identity",
    tag: "Visual Identity",
    image: hoodverse,
    wide: true,
  },
  {
    title: "Tea Sense",
    subtitle: "A Premium Tea",
    tag: "Packaging Design",
    image: teasense,
    wide: false,
  },
  {
    title: "Fruit Blends",
    subtitle: "Playful Beverage Branding",
    tag: "Packaging Design",
    image: fruit,
    wide: false,
  },
];

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-28 px-4 py-24">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Selected work
          </span>
          <h2 className="mt-4 text-4xl font-extrabold sm:text-6xl">Latest Projects</h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">
          A few brands I shaped end to end — from strategy and identity to shelf-ready packaging.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.title}
            href="#contact"
            className={`card-surface lift group relative block overflow-hidden p-3 ${
              p.wide ? "sm:col-span-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={p.image}
                alt={`${p.title} — ${p.subtitle}`}
                loading="lazy"
                width={1200}
                height={900}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  p.wide ? "h-[280px] sm:h-[420px]" : "h-[260px] sm:h-[320px]"
                }`}
              />
              <span className="absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs backdrop-blur">
                {p.tag}
              </span>
              <span className="absolute bottom-4 right-4 inline-flex translate-y-3 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View Project <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 px-2 py-4">
              <div className="min-w-0">
                <h3 className="truncate text-xl font-bold uppercase">{p.title}</h3>
                <p className="truncate text-sm text-muted-foreground">{p.subtitle}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
