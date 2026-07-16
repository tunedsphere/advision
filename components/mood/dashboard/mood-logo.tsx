import { cn } from "@/lib/utils";

type MoodLogoProps = {
  className?: string;
};

export function MoodLogo({ className }: MoodLogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      className={cn("size-8 shrink-0", className)}
    >
      <defs>
        <linearGradient
          id="mood-logo-gradient"
          x1="4"
          y1="4"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fb7185" />
          <stop offset="1" stopColor="#facc15" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#mood-logo-gradient)" />
      <path
        d="M9 22V11.5M9 22l5.5-7 5.5 7M20 11.5V22M23 11.5V22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24.5" cy="9" r="1.75" fill="white" opacity="0.95" />
    </svg>
  );
}
