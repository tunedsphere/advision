import {
  createScreenshotOgImage,
  OG_SIZE,
} from "@/lib/seo/og-images";
import { SMILE_PRODUCT_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = SMILE_PRODUCT_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createScreenshotOgImage({
    theme: "smile",
    productName: "Smile",
    categoryLine: SMILE_PRODUCT_SEARCH_COPY.categoryLine,
    description: SMILE_PRODUCT_SEARCH_COPY.ogDescription,
    iconPath: "smile/icon.png",
    screenshotPath: "hero.png",
  });
}
