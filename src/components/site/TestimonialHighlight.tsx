import { Quote } from "lucide-react";

export function TestimonialHighlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <div className="relative overflow-hidden rounded-4xl border border-border bg-surface p-8 sm:p-14">
        <div className="red-halo pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-25 blur-2xl" />
        <Quote className="h-10 w-10 fill-primary text-primary" />
        <p className="mt-6 max-w-3xl text-2xl font-semibold leading-snug sm:text-4xl">
          “Ruchit’s approach is structured. He focuses on clarity before designing — and it shows in
          every deliverable we shipped.”
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 font-display font-bold text-primary ring-1 ring-primary/40">
            AK
          </span>
          <div>
            <p className="text-sm font-semibold">Aarav Kapoor</p>
            <p className="text-sm text-muted-foreground">Founder, Hoodverse</p>
          </div>
        </div>
      </div>
    </section>
  );
}
