import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealGroup, itemVariants } from "@/components/motion/Reveal";

const socials = [
  { label: "Instagram @semirmuzeyin", href: "https://instagram.com/semirmuzeyin" },
  { label: "TikTok @semir_visual", href: "https://tiktok.com/@semir_visual" },
  { label: "Telegram @semir001", href: "https://t.me/semir001" },
  { label: "Call 09301309333", href: "tel:09301309333" },
];

export function Footer() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-12%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.06]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-border pt-20">
      <motion.div
        className="red-halo pointer-events-none absolute -bottom-40 left-1/2 h-96 w-[900px] -translate-x-1/2 blur-3xl"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <h2 className="max-w-4xl text-5xl font-extrabold leading-[0.95] sm:text-7xl">
            Lets build <span className="text-primary">incredible</span> work together.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
          <motion.div variants={itemVariants}>
            <p className="text-sm text-muted-foreground">Email me</p>
            <motion.a
              href="mailto:semir.semir6@icloud.com"
              whileHover={{ scale: 1.06, x: 4 }}
              transition={{ type: "spring", stiffness: 380, damping: 14 }}
              className="mt-2 inline-flex origin-left text-lg font-semibold transition-all duration-300 ease-out hover:text-primary"
            >
              semir.semir6@icloud.com
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-sm text-muted-foreground">Book a slot</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06, x: 4 }}
              transition={{ type: "spring", stiffness: 380, damping: 14 }}
              className="mt-2 inline-flex origin-left items-center gap-1 text-lg font-semibold transition-all duration-300 ease-out hover:text-primary"
            >
              Discovery call <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-sm text-muted-foreground">Elsewhere</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 420, damping: 12 }}
                  className="text-lg font-semibold transition-all duration-300 ease-out hover:text-primary"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </RevealGroup>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()}&nbsp;Semir&nbsp;muzeyin . All rights reserved.</p>
          <motion.a
            href="#top"
            whileHover={{ y: -3 }}
            className="transition-all duration-300 ease-out hover:text-foreground"
          >
            Back to top
          </motion.a>
        </div>

        <motion.p
          aria-hidden
          style={{ x, scale }}
          className="pointer-events-none select-none whitespace-nowrap text-center font-display text-[22vw] font-extrabold uppercase leading-[0.75] text-foreground/[0.05]"
        >
          Semir Muzeyin
        </motion.p>
      </div>
    </footer>
  );
}
