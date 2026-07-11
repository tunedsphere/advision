import { createTextOgImage, OG_SIZE } from "@/lib/seo/og-images";
import { LAUGH_FAQ_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = LAUGH_FAQ_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createTextOgImage({
    theme: "laugh",
    productName: "Laugh FAQ",
    categoryLine: "Common questions",
    description: LAUGH_FAQ_SEARCH_COPY.description,
    iconPath: "laugh/icon.png",
  });
}
