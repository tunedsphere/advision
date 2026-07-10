import type { Metadata } from "next";
import { LegalDocument } from "@/components/smile/legal-document";

export const metadata: Metadata = {
  title: "End User License Agreement | Smile",
  description: "License terms for using Smile on macOS.",
};

export default function SmileEulaPage() {
  return (
    <LegalDocument title="End User License Agreement" updated="July 10, 2026">
      <p>
        This agreement is between you and Avison (&quot;we&quot;, &quot;us&quot;)
        for Smile, a macOS application (&quot;the Software&quot;). By
        downloading or using Smile, you agree to these terms.
      </p>

      <h2>License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable license to
        install and use Smile on Mac computers you own or control, for personal
        or internal business use.
      </p>

      <h2>Your content</h2>
      <p>
        You retain all rights to your music files and metadata. Smile processes
        your library locally on your Mac. You are responsible for having the
        right to play and manage the files you add.
      </p>

      <h2>Restrictions</h2>
      <ul>
        <li>Do not redistribute, sell, or sublicense the Software</li>
        <li>Do not reverse engineer the Software except where law allows</li>
        <li>Do not use Smile to break applicable law or third-party rights</li>
      </ul>

      <h2>Updates</h2>
      <p>
        We may provide updates or changes. New versions may be subject to updated
        terms shown at download or in the app.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The Software is provided &quot;as is&quot; without warranties of any
        kind, to the fullest extent permitted by law. We do not guarantee
        uninterrupted operation or error-free metadata handling.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Avison is not liable for
        indirect, incidental, or consequential damages, or for loss of data,
        profits, or business arising from use of the Software. Our total
        liability is limited to the amount you paid for Smile (if any).
      </p>

      <h2>Termination</h2>
      <p>
        This license ends if you breach these terms. You may stop using Smile at
        any time by uninstalling it.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this agreement: see our{" "}
        <a href="/smile/support" className="text-foreground underline">
          support page
        </a>
        .
      </p>
    </LegalDocument>
  );
}
