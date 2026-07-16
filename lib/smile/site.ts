/** Public Smile site links and contact (marketing site). */

import { COMPANY_NAME, SITE_URL } from "@/lib/seo/site";

export const SMILE_COMPANY_NAME = COMPANY_NAME;

export const SMILE_SITE_URL = SITE_URL;

export const SMILE_SUPPORT_EMAIL =
  process.env.SMILE_SUPPORT_EMAIL?.trim() || "support@avison-soft.com";

export const SMILE_LEGAL_LINKS = [
  { href: "/mood-cloud", label: "Mood" },
  { href: "/smile/faq", label: "FAQ" },
  { href: "/smile/privacy", label: "Privacy" },
  { href: "/smile/eula", label: "EULA" },
  { href: "/smile/support", label: "Support" },
] as const;

export const SMILE_LEGAL_UPDATED = "July 10, 2026";
