import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
  intensity = 12,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotX = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const rotY = useSpring(useMotionValue(0), { stiffness: 200, damping: 18 });
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${px}% ${py}%, rgba(255,42,60,0.20), transparent 70%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    mx.set(nx);
    my.set(ny);
    px.set(nx * 100);
    py.set(ny * 100);
    rotY.set((nx - 0.5) * intensity * 2);
    rotX.set(-(ny - 0.5) * intensity * 2);
  };

  const onLeave = () => {
    rotX.set(0);
    rotY.set(0);
    px.set(50);
    py.set(50);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02, z: 40 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`group relative ${className}`}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
      />
    </motion.div>
  );
}
