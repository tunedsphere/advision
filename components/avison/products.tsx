"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CenterLogoSwitcher,
  type ActiveLogo,
} from "@/components/avison/center-logo-switcher";

export function Products() {
  const [activeLogo, setActiveLogo] = useState<ActiveLogo>("avison");

  return (
    <section className="bg-product-background relative">
      <div className="border-product-border border-t" />

      <div
        className="relative h-[600px] overflow-hidden md:h-[900px]"
        onMouseLeave={() => setActiveLogo("avison")}
      >
        {/* Diagonal divider BACK — behind images, visible in title area */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <line
              x1="40"
              y1="0"
              x2="60"
              y2="100"
              stroke="var(--product-background)"
              strokeWidth="12"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="40"
              y1="0"
              x2="60"
              y2="100"
              stroke="var(--product-border)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Left side - Smile */}
        <Link
          href="/smile"
          className="absolute inset-0 z-20 cursor-pointer"
          style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0 100%)" }}
          onMouseEnter={() => setActiveLogo("smile")}
        >
          <div
            className="absolute overflow-hidden rounded-tl-2xl"
            style={{ top: "220px", left: "40px", right: 0, bottom: 0 }}
          >
            <img
              src="/music-app.png"
              alt="Smile Music Player"
              className={`h-full w-full object-cover object-top-right transition-[filter] duration-500 ${
                activeLogo === "smile"
                  ? "brightness-110"
                  : activeLogo === "laugh"
                    ? "brightness-75"
                    : ""
              }`}
              style={{ display: "block" }}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "smile" ? "opacity-0" : "opacity-100"
              }`}
              style={{ background: "hsl(var(--background) / 0.2)" }}
            />
            <div
              className={`bg-background/10 absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "smile" ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`bg-background/35 absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "laugh" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </Link>

        {/* Right side - Laugh */}
        <Link
          href="/laugh"
          className="absolute inset-0 z-20 cursor-pointer"
          style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)" }}
          onMouseEnter={() => setActiveLogo("laugh")}
        >
          <div
            className="absolute overflow-hidden rounded-tr-2xl"
            style={{ top: "220px", right: "40px", left: 0, bottom: 0 }}
          >
            <img
              src="/laugh-app.png"
              alt="Laugh Video Player"
              className={`h-full w-full object-cover object-bottom-left transition-[filter] duration-500 ${
                activeLogo === "laugh"
                  ? "brightness-110"
                  : activeLogo === "smile"
                    ? "brightness-75"
                    : ""
              }`}
              style={{ display: "block" }}
            />
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "laugh" ? "opacity-0" : "opacity-100"
              }`}
              style={{ background: "hsl(var(--background) / 0.2)" }}
            />
            <div
              className={`bg-background/10 absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "laugh" ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`bg-background/35 absolute inset-0 transition-opacity duration-500 ${
                activeLogo === "smile" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </Link>

        {/* Titles + center logo — z-30, above images and dividers */}
        <div className="pointer-events-none absolute inset-0 z-30">
          <div className="relative mx-auto h-full max-w-6xl px-6 md:px-12">
            <div className="absolute top-10 right-6 left-6 grid grid-cols-[1fr_auto_1fr] items-start gap-4 md:top-14 md:right-12 md:left-12 md:gap-8">
              <div
                className={`flex flex-col items-start text-left transition-opacity duration-500 ${
                  activeLogo === "laugh" ? "opacity-45" : "opacity-100"
                }`}
              >
                <span className="text-muted-foreground mb-2 block text-xs tracking-widest uppercase">
                  Music
                </span>
                <h2 className="text-3xl font-semibold md:text-5xl">
                  <span className="bg-linear-to-r from-rose-100 to-yellow-50 bg-clip-text text-transparent">
                    Smile
                  </span>
                </h2>
                <p className="text-muted-foreground mt-2 max-w-[240px] text-sm">
                  Your music, your way. Full personalization with tag
                  management.
                </p>
              </div>

              <CenterLogoSwitcher activeLogo={activeLogo} />

              <div
                className={`flex flex-col items-end text-right transition-opacity duration-500 ${
                  activeLogo === "smile" ? "opacity-45" : "opacity-100"
                }`}
              >
                <span className="text-muted-foreground mb-2 block text-xs tracking-widest uppercase">
                  Video
                </span>
                <h2 className="text-3xl font-semibold md:text-5xl">
                  <span className="bg-linear-to-r from-yellow-50 to-teal-100 bg-clip-text text-transparent">
                    Laugh
                  </span>
                </h2>
                <p className="text-muted-foreground mt-2 max-w-[200px] text-sm">
                  Your library, beautifully organized. Smart video management.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal divider FRONT — above images, clips the panels */}
        <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id="dividerFade" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor="var(--product-background)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="25%"
                    stopColor="var(--product-background)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="75%"
                    stopColor="var(--product-background)"
                    stopOpacity="0"
                  />
                  <stop
                    offset="100%"
                    stopColor="var(--product-background)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              <line
                x1="60"
                y1="0"
                x2="40"
                y2="100"
                stroke="url(#dividerFade)"
                strokeWidth="40"
                vectorEffect="non-scaling-stroke"
              />
              <line
                x1="60"
                y1="0"
                x2="40"
                y2="100"
                stroke="url(#dividerFade)"
                strokeWidth="18"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <line
              x1="60"
              y1="0"
              x2="40"
              y2="100"
              stroke="var(--product-border)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <div className="border-product-border border-t" />
    </section>
  );
}
