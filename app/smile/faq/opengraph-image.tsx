import { createTextOgImage, OG_SIZE } from "@/lib/seo/og-images";
import { SMILE_FAQ_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = SMILE_FAQ_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createTextOgImage({
    theme: "smile",
    productName: "Smile FAQ",
    categoryLine: "Common questions",
    description: SMILE_FAQ_SEARCH_COPY.description,
    iconPath: "smile/icon.png",
  });
}
