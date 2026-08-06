import portrait from "@/assets/portrait.jpg";

const history = [
  { role: "Independent Brand Designer", company: "Ruchit Designs", period: "2022 — Present" },
  { role: "Senior Visual Designer", company: "Northgate Studio", period: "2020 — 2022" },
  { role: "Brand & Packaging Designer", company: "Ampersand Creative", period: "2018 — 2020" },
  { role: "Junior Designer", company: "Studio Kiln", period: "2016 — 2018" },
];

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface overflow-hidden p-3">
          <img
            src={portrait}
            alt="Portrait of Ruchit, brand and packaging designer"
            loading="lazy"
            width={900}
            height={1100}
            className="h-full max-h-[560px] w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-4xl font-extrabold sm:text-5xl">
              Designing experiences that <span className="text-primary">make sense</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              I’m Ruchit — a brand and packaging designer with eight years of turning fuzzy ideas into
              systems teams can actually use. I start with questions, not moodboards: who is this for,
              what should it feel like, and what has to be true for it to work.
            </p>
            <p className="mt-4 text-muted-foreground">
              The result is design that survives contact with the real world — on shelves, on screens
              and in the hands of the people you're building for.
            </p>
          </div>

          <div className="card-surface p-6">
            <p className="text-sm text-muted-foreground">My work history</p>
            <ul className="mt-4 divide-y divide-border">
              {history.map((h) => (
                <li
                  key={h.role}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4"
                >
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{h.role}</p>
                    <p className="truncate text-sm text-muted-foreground">{h.company}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted-foreground">
                    {h.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
