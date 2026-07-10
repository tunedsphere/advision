import Link from "next/link";
import {
  SMILE_COMPANY_NAME,
  SMILE_SITE_URL,
  SMILE_SUPPORT_EMAIL,
} from "@/lib/smile/site";

export function SmileEulaContent() {
  return (
    <>
      <p>
        This End User License Agreement is between <strong>{SMILE_COMPANY_NAME}</strong>{" "}
        (&quot;Licensor&quot;) and you (&quot;User&quot;). By downloading,
        installing, or using <strong>Smile</strong> (the &quot;Software&quot;), you
        agree to this Agreement.
      </p>

      <h2>License</h2>
      <p>
        Subject to this Agreement, Licensor grants you a limited, non-exclusive,
        non-transferable, revocable license to install and use the Software on Mac
        computers you own or control, solely for personal, non-commercial purposes,
        unless we authorize otherwise in writing.
      </p>

      <h2>Restrictions</h2>
      <ul>
        <li>
          Do not copy, distribute, rent, lease, sell, sublicense, or make the
          Software available to third parties
        </li>
        <li>
          Do not reverse engineer or decompile except where prohibited by
          applicable law
        </li>
        <li>Do not remove proprietary notices or circumvent technical measures</li>
        <li>Do not use the Software unlawfully or to infringe third-party rights</li>
      </ul>

      <h2>Your content</h2>
      <p>
        You retain ownership of your music files and metadata. You are solely
        responsible for your content, backups, and compliance with copyright and
        other laws. The Software may modify files on disk only when you initiate
        such actions and where supported.
      </p>

      <h2>Updates, fees, and privacy</h2>
      <p>
        We may provide updates that add, modify, or remove features. We may change,
        suspend, or discontinue the Software or Services where permitted by law.
        The Software may be <strong>free to download at this time</strong>; we{" "}
        <em>may introduce</em> paid features later. Fees are non-refundable except
        where required by law. Use of the Software is subject to our{" "}
        <Link href="/smile/privacy" className="text-foreground underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SOFTWARE AND SERVICES ARE
        PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF
        ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
        AND NON-INFRINGEMENT.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, LICENSOR SHALL NOT BE LIABLE FOR
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
        DAMAGES, OR FOR LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE
        LOSSES. LICENSOR&apos;S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE
        GREATER OF (A) AMOUNTS YOU PAID TO LICENSOR IN THE TWELVE MONTHS BEFORE
        THE CLAIM, OR (B) USD $50 (OR EQUIVALENT).
      </p>

      <h2>Indemnification and termination</h2>
      <p>
        To the extent permitted by law, you agree to indemnify Licensor against
        claims arising from your use, content, or breach of this Agreement. This
        license ends if you breach it; you may stop using the Software anytime by
        uninstalling it.
      </p>

      <h2>Governing law</h2>
      <p>
        This Agreement is governed by the laws of the Republic of Slovenia,
        without regard to conflict-of-law rules, except where mandatory consumer
        protection law in your country applies. Disputes shall be resolved in the
        courts of Slovenia, unless mandatory law requires otherwise.
      </p>

      <h2>Contact</h2>
      <p>
        {SMILE_COMPANY_NAME}
        <br />
        <a href={`mailto:${SMILE_SUPPORT_EMAIL}`}>{SMILE_SUPPORT_EMAIL}</a>
        <br />
        <a href={SMILE_SITE_URL}>{SMILE_SITE_URL}</a>
        <br />
        <Link href="/smile/support" className="text-foreground underline">
          Support page
        </Link>
      </p>
    </>
  );
}
