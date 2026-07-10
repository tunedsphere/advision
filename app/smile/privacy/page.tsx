import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy | Smile",
  description:
    "How Smile handles your music library and personal data on your Mac.",
};

export default function SmilePrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" updated="July 10, 2026">
      <p>
        Smile is a local music player for macOS. Your library stays on your
        computer. We built Smile so you can listen without accounts, uploads, or
        tracking.
      </p>

      <h2>What Smile stores locally</h2>
      <ul>
        <li>Music folders you choose to index</li>
        <li>Playback preferences, queue state, and appearance settings</li>
        <li>Metadata edits you make inside the app</li>
      </ul>

      <h2>What we do not collect</h2>
      <ul>
        <li>No Smile account or sign-in</li>
        <li>No analytics or telemetry in the app</li>
        <li>No uploading of your audio files to our servers</li>
        <li>No sale of personal data</li>
      </ul>

      <h2>Network use</h2>
      <p>
        Smile may use the network for optional features you trigger (for example,
        fetching album artwork or metadata from public sources). Those requests
        go from your Mac directly to third-party services — not through an
        Avison listening server.
      </p>

      <h2>Updates</h2>
      <p>
        When automatic updates are enabled, Smile checks for new versions using
        standard update feeds. We do not receive your music library as part of
        that process.
      </p>

      <h2>Website</h2>
      <p>
        This marketing site may use basic hosting logs (IP, browser) from our web
        host. That is separate from the Smile app.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy: see our{" "}
        <a href="/smile/support" className="text-foreground underline">
          support page
        </a>
        .
      </p>
    </LegalDocument>
  );
}
