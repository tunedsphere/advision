export type FaqItem = {
  question: string;
  answer: string;
};

export const SMILE_FAQ: FaqItem[] = [
  {
    question: "Is Smile free?",
    answer:
      "Yes. Smile is free to download and use on macOS. There are no subscriptions or in-app purchases on the marketing site today.",
  },
  {
    question: "Does Smile work with Apple Music or Spotify?",
    answer:
      "Smile is built for your local music files — folders you add on your Mac. It is not a streaming client for Apple Music or Spotify.",
  },
  {
    question: "Which Macs and macOS versions are supported?",
    answer:
      "Smile requires macOS 14 Sonoma or later and Apple Silicon (M1 and later). Intel Macs are not supported.",
  },
  {
    question: "Can Smile edit tags and fix metadata?",
    answer:
      "Yes. Smile includes tag management and metadata editing tools so you can clean up artists, albums, and track details in your local library.",
  },
  {
    question: "Does Smile work offline?",
    answer:
      "Yes. Your library stays on your Mac. Smile is designed for local files and does not require an account or cloud upload to play your music.",
  },
  {
    question: "How is Smile different from Apple Music or VLC?",
    answer:
      "Smile focuses on owning and organizing a local music library — tag editing, parametric EQ, and a screen widget — rather than streaming catalogs or general-purpose video playback.",
  },
];

export const LAUGH_FAQ: FaqItem[] = [
  {
    question: "Is Laugh free?",
    answer:
      "Laugh is planned as a free video app. Pricing may be updated before public release — check the Laugh product page for the latest status.",
  },
  {
    question: "Which video formats does Laugh support?",
    answer:
      "Laugh targets broad local format support including MKV, AVI, MP4, WEBM, and more through an extended playback pipeline.",
  },
  {
    question: "Can Laugh play from network shares?",
    answer:
      "Yes. Laugh is designed to browse and play from SMB shares, WebDAV, and HLS streams in addition to files on your device.",
  },
  {
    question: "Which platforms does Laugh support?",
    answer:
      "Laugh is being built for macOS 12 or later and Windows 10 or later. Requirements may change before release.",
  },
  {
    question: "Does Laugh upload my files anywhere?",
    answer:
      "No. Laugh is privacy-first — no accounts, no telemetry, and no cloud upload. Your files stay local or on networks you connect to.",
  },
];
