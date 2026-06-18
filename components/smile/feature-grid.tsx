"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const DEFAULT_ACTIVE_INDEX = 4;

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const cardRevealVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease },
  },
} as const;

const gridRevealVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.11,
    },
  },
} as const;

const GLOW_ANCHORS = [
  "10% 12%",
  "90% 10%",
  "14% 88%",
  "86% 90%",
  "52% 6%",
  "8% 52%",
  "92% 50%",
  "50% 94%",
  "78% 18%",
] as const;

const GLOW_ACCENTS = [
  {
    inner: "oklch(0.72 0.19 15 / 0.16)",
    mid: "oklch(0.78 0.14 85 / 0.04)",
    icon: "text-rose-300",
    shadow: "0 0 24px oklch(0.72 0.19 15 / 0.12)",
  },
  {
    inner: "oklch(0.7 0.19 55 / 0.16)",
    mid: "oklch(0.75 0.16 45 / 0.04)",
    icon: "text-orange-300",
    shadow: "0 0 24px oklch(0.7 0.19 55 / 0.12)",
  },
  {
    inner: "oklch(0.82 0.16 90 / 0.14)",
    mid: "oklch(0.78 0.14 85 / 0.05)",
    icon: "text-yellow-300",
    shadow: "0 0 24px oklch(0.82 0.16 90 / 0.12)",
  },
] as const;

function cardAccent(index: number) {
  return GLOW_ACCENTS[index % GLOW_ACCENTS.length];
}

function cardGlow(index: number) {
  const anchor = GLOW_ANCHORS[index % GLOW_ANCHORS.length];
  const accent = cardAccent(index);
  return `
    radial-gradient(520px circle at ${anchor}, oklch(0.92 0.018 255 / 0.09), transparent 58%),
    radial-gradient(200px circle at ${anchor}, ${accent.inner}, ${accent.mid} 42%, transparent 72%)
  `;
}

function FeatureCard({
  feature,
  index,
  isActive,
  onActivate,
  reduceMotion,
}: {
  feature: FeatureItem;
  index: number;
  isActive: boolean;
  onActivate: () => void;
  reduceMotion: boolean;
}) {
  const { icon: Icon, title, description } = feature;
  const cardRef = useRef<HTMLDivElement>(null);
  const [canTilt, setCanTilt] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(smoothY, [0, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], [-7, 7]);

  useEffect(() => {
    setCanTilt(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    if (!canTilt || reduceMotion) return;

    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    mouseX.set(px / rect.width);
    mouseY.set(py / rect.height);
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const indexLabel = String(index + 1).padStart(2, "0");
  const accent = cardAccent(index);

  return (
    <motion.div
      ref={cardRef}
      className="border-border relative border-r border-b p-2"
      onMouseEnter={onActivate}
      style={canTilt && !reduceMotion ? { perspective: 900 } : undefined}
      variants={reduceMotion ? undefined : cardRevealVariants}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="relative h-full p-6"
        style={
          canTilt && !reduceMotion
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
      >
        {!reduceMotion ? (
          <div
            className={`pointer-events-none absolute inset-0 rounded-sm mix-blend-screen transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
            style={{ background: cardGlow(index) }}
            aria-hidden
          />
        ) : null}

        <span className="text-muted-foreground/40 pointer-events-none absolute top-6 right-6 font-mono text-[10px] tracking-widest tabular-nums">
          {indexLabel}
        </span>

        <motion.div
          className={`border-border bg-secondary relative mb-5 flex h-9 w-9 items-center justify-center rounded-lg border shadow-sm transition-[background-color,border-color,box-shadow] duration-300 ${isActive ? "border-foreground/10 bg-card" : ""}`}
          style={isActive ? { boxShadow: accent.shadow } : undefined}
          whileHover={reduceMotion ? undefined : { scale: 1.06, rotate: -3 }}
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
        >
          <Icon
            className={`relative h-4 w-4 transition-colors duration-300 ${isActive ? accent.icon : "text-muted-foreground"}`}
            strokeWidth={1.75}
          />
        </motion.div>

        <h3 className="text-foreground relative mb-2 text-base font-medium">
          {title}
        </h3>
        <p className="text-muted-foreground relative text-sm leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FeatureGrid({ features }: { features: FeatureItem[] }) {
  const reduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const activeIndex = hoveredIndex ?? DEFAULT_ACTIVE_INDEX;

  return (
    <div className="relative">
      {!reduceMotion ? (
        <motion.div
          className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-px origin-left bg-linear-to-r from-transparent via-rose-400/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease, delay: 0.05 }}
          aria-hidden
        />
      ) : null}

      <motion.div
        className="border-border grid grid-cols-1 border-t border-l md:grid-cols-2 lg:grid-cols-3"
        onMouseLeave={() => setHoveredIndex(null)}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.1, margin: "0px 0px -5% 0px" }}
        variants={reduceMotion ? undefined : gridRevealVariants}
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
            isActive={index === activeIndex}
            onActivate={() => setHoveredIndex(index)}
            reduceMotion={Boolean(reduceMotion)}
          />
        ))}
      </motion.div>
    </div>
  );
}
