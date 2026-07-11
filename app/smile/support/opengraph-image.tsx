import { createTextOgImage, OG_SIZE } from "@/lib/seo/og-images";
import { SMILE_SUPPORT_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = SMILE_SUPPORT_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createTextOgImage({
    theme: "smile",
    productName: "Smile Support",
    categoryLine: "Get help",
    description: SMILE_SUPPORT_SEARCH_COPY.description,
    iconPath: "smile/icon.png",
  });
}
