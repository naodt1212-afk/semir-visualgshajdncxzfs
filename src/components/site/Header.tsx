import { AnimatePresence, motion } from "framer-motion";
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
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 110, damping: 15, delay: 0.1 }}
        className={`mx-auto flex max-w-3xl items-center gap-3 rounded-full border border-border bg-surface/80 px-3 py-2 backdrop-blur-xl transition-all duration-300 ease-out ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <a href="#top" className="flex min-w-0 items-center gap-2 pr-2">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 320, damping: 12 }}
            className="grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-full bg-primary/15 ring-1 ring-primary/40"
          >
            <img src={avatar} alt="semir visual" width={64} height={64} className="h-7 w-7 object-cover" />
          </motion.span>
          <span className="truncate text-sm font-semibold">semir visual</span>
        </a>

        <div className="ml-auto hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 ease-out hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="ml-auto hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 ease-out sm:ml-0 sm:inline-flex"
        >
          Book a call with me
        </motion.a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-surface-2 sm:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            className="mx-auto mt-2 max-w-3xl rounded-3xl border border-border bg-surface/95 p-3 backdrop-blur-xl sm:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 260, damping: 20 }}
                className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-all duration-300 ease-out hover:bg-surface-2 hover:text-foreground"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="mt-1 block rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book a call with me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
