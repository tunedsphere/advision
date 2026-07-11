import {
  createScreenshotOgImage,
  OG_SIZE,
} from "@/lib/seo/og-images";
import { LAUGH_PRODUCT_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = LAUGH_PRODUCT_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createScreenshotOgImage({
    theme: "laugh",
    productName: "Laugh",
    categoryLine: LAUGH_PRODUCT_SEARCH_COPY.categoryLine,
    description: LAUGH_PRODUCT_SEARCH_COPY.ogDescription,
    iconPath: "laugh/icon.png",
    screenshotPath: "hero2.png",
  });
}
