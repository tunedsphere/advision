"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function waveDelay(index: number) {
  const col = index % 3;
  const row = Math.floor(index / 3);
  return row * 0.09 + col * 0.07;
}

function FeatureCard({
  feature,
  index,
  reduceMotion,
}: {
  feature: FeatureItem;
  index: number;
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

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${spotlightX}px ${spotlightY}px, rgba(251, 113, 133, 0.14), rgba(250, 204, 21, 0.06) 38%, transparent 68%)`;

  useEffect(() => {
    setCanTilt(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;

    spotlightX.set(px);
    spotlightY.set(py);

    if (!canTilt || reduceMotion) return;

    mouseX.set(px / rect.width);
    mouseY.set(py / rect.height);
  };

  const handlePointerLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    spotlightX.set(0);
    spotlightY.set(0);
  };

  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      className="group relative border-r border-b border-border p-8"
      style={canTilt && !reduceMotion ? { perspective: 900 } : undefined}
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 22, scale: 0.97, filter: "blur(6px)" }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        ease,
        delay: reduceMotion ? 0 : waveDelay(index),
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="relative h-full"
        style={
          canTilt && !reduceMotion
            ? { rotateX, rotateY, transformStyle: "preserve-3d" }
            : undefined
        }
      >
        {!reduceMotion ? (
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
            aria-hidden
          />
        ) : null}

        <span className="pointer-events-none absolute top-6 right-6 font-mono text-[10px] tracking-widest text-muted-foreground/40 tabular-nums">
          {indexLabel}
        </span>

        <motion.div
          className="relative mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary shadow-sm"
          whileHover={
            reduceMotion ? undefined : { scale: 1.08, rotate: -4 }
          }
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-linear-to-br from-rose-400/20 to-yellow-400/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.25 }}
            aria-hidden
          />
          <Icon
            className="relative h-4 w-4 text-rose-400"
            strokeWidth={1.75}
          />
        </motion.div>

        <h3 className="relative mb-2 text-base font-medium text-foreground">
          {title}
        </h3>
        <p className="relative text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function FeatureGrid({ features }: { features: FeatureItem[] }) {
  const reduceMotion = useReducedMotion();

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

      <div className="grid grid-cols-1 border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            index={index}
            reduceMotion={Boolean(reduceMotion)}
          />
        ))}
      </div>
    </div>
  );
}
