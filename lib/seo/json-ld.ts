type JsonLdValue = Record<string, unknown>;

export function jsonLdScript(value: JsonLdValue | JsonLdValue[]): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avison",
    url: "https://avison-soft.com",
    legalName: "Jonathan Avison s.p.",
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Avison",
    url: "https://avison-soft.com",
  };
}

export function smileSoftwareApplicationJsonLd(input: {
  downloadUrl: string;
  version: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Smile",
    applicationCategory: "MusicApplication",
    operatingSystem: "macOS 14+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    softwareVersion: input.version,
    downloadUrl: input.downloadUrl.startsWith("http")
      ? input.downloadUrl
      : `https://avison-soft.com${input.downloadUrl}`,
    author: {
      "@type": "Organization",
      name: "Avison",
    },
  };
}

export function laughSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Laugh",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS, Windows",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Avison",
    },
  };
}

export function faqPageJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
