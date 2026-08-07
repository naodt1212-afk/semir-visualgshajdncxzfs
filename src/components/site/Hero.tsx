import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect } from "react";
import avatarAsset from "@/assets/avatar-head-new.png.asset.json";
const avatar = avatarAsset.url;

const logos = ["Hoodverse", "Tea Sense", "Fruit Blends", "Northgate", "Ampersand"];

function KineticWord({ word, delay = 0, glow = false }: { word: string; delay?: number; glow?: boolean }) {
  return (
    <span className={`block ${glow ? "text-primary" : ""}`}>
      {word.split("").map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: "0.6em", rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: delay + i * 0.045,
            type: "spring",
            stiffness: 220,
            damping: 16,
          }}
          style={{ textShadow: glow ? "0 0 60px rgba(255,42,60,0.55)" : "none" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden
        className="red-halo pointer-events-none absolute left-1/2 top-24 h-[520px] w-[820px] -translate-x-1/2 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="relative text-center [perspective:1000px]">
          <h1 className="font-display text-[18vw] font-extrabold uppercase leading-[0.82] sm:text-[15vw] lg:text-[11rem]">
            <KineticWord word="Think" delay={0.15} />
            <motion.span
              className="block"
              animate={{ filter: ["brightness(1)", "brightness(1.35)", "brightness(1)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <KineticWord word="Creatively" delay={0.4} glow />
            </motion.span>
          </h1>

          <motion.img
            src={avatar}
            alt="Portrait illustration of Semir Muzeyin, brand and product designer"
            width={1024}
            height={1024}
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 800 }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1, y: [0, -18, 0] }}
            transition={{
              opacity: { duration: 0.7 },
              scale: { type: "spring", stiffness: 120, damping: 14 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            className="pointer-events-none absolute left-1/2 top-[6%] w-[46%] max-w-[420px] -translate-x-1/2 drop-shadow-[0_30px_60px_rgba(0,0,0,0.75)] sm:w-[38%]"
          />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:items-end">
          <motion.p
            className="max-w-sm text-balance text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 90, damping: 15 }}
          >
            I help brands turn ideas into structured, meaningful experiences.
          </motion.p>
          <motion.div
            className="sm:justify-self-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 90, damping: 15 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 ease-out"
            >
              Book a call with me
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex flex-col gap-6 rounded-3xl border border-border bg-surface/60 p-5 backdrop-blur sm:flex-row sm:items-center sm:gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, type: "spring", stiffness: 80, damping: 16 }}
        >
          <div className="flex shrink-0 items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                >
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </motion.span>
              ))}
            </div>
            <p className="text-sm font-medium">
              5 star rating <span className="text-muted-foreground">— 35+ Happy Clients</span>
            </p>
          </div>
          <div className="flex flex-1 flex-wrap items-center gap-x-8 gap-y-3 sm:justify-end">
            {logos.map((l, i) => (
              <motion.span
                key={l}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.08 }}
                whileHover={{ scale: 1.12, color: "rgb(255,42,60)" }}
                className="font-display text-lg font-bold uppercase tracking-tight text-muted-foreground/60 transition-all duration-300 ease-out"
              >
                {l}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
