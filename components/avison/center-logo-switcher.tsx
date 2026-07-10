"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ActiveLogo = "avison" | "smile" | "laugh";

const LOGO_SIZE_MD = 96;

const LOGOS: Record<
  ActiveLogo,
  { src: string; alt: string; rounded: boolean; sparkle: string }
> = {
  avison: {
    src: "/logo-avison.svg",
    alt: "Avison",
    rounded: false,
    sparkle: "rgb(235, 230, 225)",
  },
  smile: {
    src: "/smile/icon.png",
    alt: "Smile",
    rounded: true,
    sparkle: "rgb(251, 113, 133)",
  },
  laugh: {
    src: "/laugh/icon.png",
    alt: "Laugh",
    rounded: true,
    sparkle: "rgb(45, 212, 191)",
  },
};

const SPARKLE_ANGLES = [0, 40, 80, 120, 160, 200, 240, 280, 320];

const ease = [0.22, 1, 0.36, 1] as const;

type CenterLogoSwitcherProps = {
  activeLogo: ActiveLogo;
};

function SparkleBurst({ color, burstKey }: { color: string; burstKey: number }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {SPARKLE_ANGLES.map((angle, index) => {
        const radians = (angle * Math.PI) / 180;
        const distance = 34 + (index % 3) * 6;

        return (
          <motion.span
            key={`${burstKey}-${angle}`}
            className="absolute top-1/2 left-1/2 size-1 rotate-45 rounded-[1px]"
            style={{
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
            }}
            initial={{
              x: "-50%",
              y: "-50%",
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: `calc(-50% + ${Math.cos(radians) * distance}px)`,
              y: `calc(-50% + ${Math.sin(radians) * distance}px)`,
              scale: [0, 1.4, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 0.65,
              ease,
              delay: index * 0.018,
            }}
          />
        );
      })}
    </div>
  );
}

export function CenterLogoSwitcher({ activeLogo }: CenterLogoSwitcherProps) {
  const reduceMotion = useReducedMotion();
  const [burstKey, setBurstKey] = useState(0);
  const logo = LOGOS[activeLogo];

  useEffect(() => {
    setBurstKey((key) => key + 1);
  }, [activeLogo]);

  if (reduceMotion) {
    return (
      <div className="relative size-20 shrink-0 pt-5 md:size-24 md:pt-6">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={LOGO_SIZE_MD}
          height={LOGO_SIZE_MD}
          className={`size-full ${logo.rounded ? "rounded-[18px] object-cover shadow-md" : ""}`}
        />
      </div>
    );
  }

  return (
    <div
      className="relative size-20 shrink-0 pt-5 md:size-24 md:pt-6"
      style={{ perspective: 700 }}
    >
      <motion.div
        key={`glow-${burstKey}`}
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${logo.sparkle}55 0%, transparent 72%)`,
        }}
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: [0, 0.9, 0], scale: [0.75, 1.2, 1.35] }}
        transition={{ duration: 0.7, ease }}
        aria-hidden
      />

      <SparkleBurst color={logo.sparkle} burstKey={burstKey} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeLogo}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.45, rotateY: -95, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.45, rotateY: 95, filter: "blur(6px)" }}
          transition={{ duration: 0.48, ease }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={LOGO_SIZE_MD}
            height={LOGO_SIZE_MD}
            className={`size-full ${
              logo.rounded ? "rounded-[18px] object-cover shadow-md" : ""
            }`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
