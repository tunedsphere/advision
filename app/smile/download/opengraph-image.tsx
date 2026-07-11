import {
  createScreenshotOgImage,
  OG_SIZE,
} from "@/lib/seo/og-images";
import { SMILE_DOWNLOAD_SEARCH_COPY } from "@/lib/seo/search-copy";

export const runtime = "nodejs";
export const alt = SMILE_DOWNLOAD_SEARCH_COPY.title;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return createScreenshotOgImage({
    theme: "smile",
    productName: "Smile",
    categoryLine: "Download for macOS",
    description: SMILE_DOWNLOAD_SEARCH_COPY.description,
    iconPath: "smile/icon.png",
    screenshotPath: "preview.png",
  });
}
