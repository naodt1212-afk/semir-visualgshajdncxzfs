import { Star } from "lucide-react";
import avatar from "@/assets/avatar-head.png";

const logos = ["Hoodverse", "Tea Sense", "Fruit Blends", "Northgate", "Ampersand"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="red-halo pointer-events-none absolute left-1/2 top-24 h-[520px] w-[820px] -translate-x-1/2 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="relative text-center">
          <h1 className="font-display text-[18vw] font-extrabold uppercase leading-[0.82] sm:text-[15vw] lg:text-[11rem]">
            <span className="block">Think</span>
            <span className="text-glow-red block text-primary">Creatively</span>
          </h1>

          <img
            src={avatar}
            alt="3D avatar of Ruchit, brand and product designer"
            width={1024}
            height={1024}
            className="pointer-events-none absolute left-1/2 top-[6%] w-[46%] max-w-[420px] -translate-x-1/2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)] sm:w-[38%]"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-end">
          <p className="max-w-sm text-balance text-base text-muted-foreground sm:text-lg">
            I help brands turn ideas into structured, meaningful experiences.
          </p>
          <div className="sm:justify-self-end">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Book a call with me
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 rounded-3xl border border-border bg-surface/60 p-5 backdrop-blur sm:flex-row sm:items-center sm:gap-10">
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm font-medium">
              5 star rating <span className="text-muted-foreground">— 35+ Happy Clients</span>
            </p>
          </div>
          <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3 sm:justify-end">
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-lg font-bold uppercase tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
