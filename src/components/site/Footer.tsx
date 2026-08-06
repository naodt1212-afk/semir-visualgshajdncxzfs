import { ArrowUpRight } from "lucide-react";

const socials = ["Instagram", "Dribbble", "Behance", "LinkedIn"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-20">
      <div className="red-halo pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[900px] -translate-x-1/2 opacity-25 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-7xl">
          Lets build <span className="text-primary">incredible</span> work together.
        </h2>

        <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Email me</p>
            <a
              href="mailto:hello@ruchitdesigns.com"
              className="mt-2 inline-flex text-lg font-semibold hover:text-primary"
            >
              hello@ruchitdesigns.com
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Book a slot</p>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-1 text-lg font-semibold hover:text-primary"
            >
              Discovery call <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Elsewhere</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {socials.map((s) => (
                <a key={s} href="#top" className="text-lg font-semibold hover:text-primary">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ruchit Designs. All rights reserved.</p>
          <a href="#top" className="hover:text-foreground">
            Back to top
          </a>
        </div>

        <p
          aria-hidden
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[22vw] font-extrabold uppercase leading-[0.75] text-foreground/[0.04]"
        >
          Ruchit
        </p>
      </div>
    </footer>
  );
}
