/** Public Smile site links and contact (marketing site). */

export const SMILE_SUPPORT_EMAIL =
  process.env.SMILE_SUPPORT_EMAIL?.trim() || "support@tunedsphere.com";

export const SMILE_LEGAL_LINKS = [
  { href: "/smile/privacy", label: "Privacy" },
  { href: "/smile/eula", label: "EULA" },
  { href: "/smile/support", label: "Support" },
] as const;
