import {
  createScreenshotOgImage,
  createTextOgImage,
  OG_SIZE,
} from "@/lib/seo/og-images";
import { HOME_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = HOME_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createScreenshotOgImage({
    theme: "avison",
    productName: "Avison",
    categoryLine: "Mac apps for music & video",
    description: HOME_SEARCH_COPY.description,
    iconPath: "smile/icon.png",
    screenshotPath: "hero.png",
  });
}
