import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import avatar from "@/assets/avatar-head.png";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-border bg-surface/80 px-3 py-2 backdrop-blur-xl transition-shadow ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 pr-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-primary/15 ring-1 ring-primary/40">
            <img src={avatar} alt="Ruchit P." width={64} height={64} className="h-7 w-7 object-cover" />
          </span>
          <span className="truncate text-sm font-semibold">Ruchit P.</span>
        </a>

        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-auto hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:ml-0 sm:inline-flex"
        >
          Book a call with me
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2 sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in mx-auto mt-2 max-w-3xl rounded-3xl border border-border bg-surface/95 p-3 backdrop-blur-xl sm:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground hover:bg-surface-2 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 block rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a call with me
          </a>
        </div>
      )}
    </header>
  );
}
