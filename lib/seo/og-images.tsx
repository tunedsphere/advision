import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

type OgTheme = "avison" | "smile" | "laugh";

const THEMES: Record<
  OgTheme,
  { gradient: string; accent: string; muted: string }
> = {
  avison: {
    gradient: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
    accent: "#fb7185",
    muted: "#a8a29e",
  },
  smile: {
    gradient: "linear-gradient(135deg, #1c1917 0%, #431407 45%, #1c1917 100%)",
    accent: "#fb7185",
    muted: "#d6d3d1",
  },
  laugh: {
    gradient: "linear-gradient(135deg, #1c1917 0%, #134e4a 45%, #1c1917 100%)",
    accent: "#facc15",
    muted: "#d6d3d1",
  },
};

async function loadPublicImage(relativePath: string): Promise<ArrayBuffer> {
  const file = await readFile(join(process.cwd(), "public", relativePath));
  return file.buffer.slice(
    file.byteOffset,
    file.byteOffset + file.byteLength,
  ) as ArrayBuffer;
}

function ogTextCardLayout({
  theme,
  productName,
  categoryLine,
  description,
  iconSrc,
}: {
  theme: OgTheme;
  productName: string;
  categoryLine: string;
  description: string;
  iconSrc?: string;
}) {
  const colors = THEMES[theme];

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        background: colors.gradient,
        color: "#fafaf9",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        {iconSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconSrc}
            alt=""
            width={88}
            height={88}
            style={{ borderRadius: 20 }}
          />
        ) : null}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            {productName}
          </div>
          <div style={{ fontSize: 28, color: colors.accent }}>{categoryLine}</div>
        </div>
      </div>

      <div
        style={{
          fontSize: 30,
          lineHeight: 1.4,
          color: colors.muted,
          maxWidth: 900,
        }}
      >
        {description}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
          color: colors.muted,
        }}
      >
        <span>avison-soft.com</span>
        <span style={{ color: "#fafaf9", fontWeight: 600 }}>Avison</span>
      </div>
    </div>
  );
}

export async function createTextOgImage(options: {
  theme: OgTheme;
  productName: string;
  categoryLine: string;
  description: string;
  iconPath?: string;
}) {
  const iconSrc = options.iconPath
    ? `data:image/png;base64,${Buffer.from(await loadPublicImage(options.iconPath)).toString("base64")}`
    : undefined;

  return new ImageResponse(
    ogTextCardLayout({ ...options, iconSrc }),
    OG_SIZE,
  );
}

export async function createScreenshotOgImage(options: {
  theme: OgTheme;
  productName: string;
  categoryLine: string;
  description: string;
  iconPath: string;
  screenshotPath: string;
}) {
  const [iconBuffer, screenshotBuffer] = await Promise.all([
    loadPublicImage(options.iconPath),
    loadPublicImage(options.screenshotPath),
  ]);

  const iconSrc = `data:image/png;base64,${Buffer.from(iconBuffer).toString("base64")}`;
  const screenshotSrc = `data:image/png;base64,${Buffer.from(screenshotBuffer).toString("base64")}`;
  const colors = THEMES[options.theme];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.gradient,
          color: "#fafaf9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "46%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={iconSrc}
              alt=""
              width={72}
              height={72}
              style={{ borderRadius: 18 }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: 44, fontWeight: 700 }}>{options.productName}</div>
              <div style={{ fontSize: 22, color: colors.accent }}>
                {options.categoryLine}
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.45,
              color: colors.muted,
            }}
          >
            {options.description}
          </div>
          <div style={{ fontSize: 20, color: colors.muted }}>Avison</div>
        </div>
        <div
          style={{
            width: "54%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 40px 40px 0",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshotSrc}
            alt=""
            width={620}
            height={390}
            style={{
              borderRadius: 16,
              objectFit: "cover",
              boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            }}
          />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
