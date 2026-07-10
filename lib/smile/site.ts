/** Public Smile site links and contact (marketing site). */

export const SMILE_COMPANY_NAME = "Jonathan Avison s.p.";

export const SMILE_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://avison-soft.com";

export const SMILE_SUPPORT_EMAIL =
  process.env.SMILE_SUPPORT_EMAIL?.trim() || "support@avison-soft.com";

export const SMILE_LEGAL_LINKS = [
  { href: "/smile/privacy", label: "Privacy" },
  { href: "/smile/eula", label: "EULA" },
  { href: "/smile/support", label: "Support" },
] as const;

export const SMILE_LEGAL_UPDATED = "July 10, 2026";
