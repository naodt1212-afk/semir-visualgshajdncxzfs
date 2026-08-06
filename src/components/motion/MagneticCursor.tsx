import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const rx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        "a, button, [data-magnetic]"
      ) as HTMLElement | null;

      if (target) {
        const r = target.getBoundingClientRect();
        setActive(true);
        x.set(r.left + r.width / 2);
        y.set(r.top + r.height / 2);
      } else {
        setActive(false);
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary md:block"
        style={{ x: sx, y: sy }}
        animate={{
          width: active ? 14 : 8,
          height: active ? 14 : 8,
          boxShadow: active
            ? "0 0 26px 8px rgba(255,42,60,0.55)"
            : "0 0 14px 3px rgba(255,42,60,0.45)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 md:block"
        style={{ x: rx, y: ry }}
        animate={{ width: active ? 56 : 30, height: active ? 56 : 30, opacity: active ? 0.9 : 0.4 }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
      />
    </>
  );
}
