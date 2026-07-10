import Link from "next/link";
import {
  SMILE_COMPANY_NAME,
  SMILE_SITE_URL,
  SMILE_SUPPORT_EMAIL,
} from "@/lib/smile/site";

export function SmilePrivacyPolicyContent() {
  return (
    <>
      <p>
        This Privacy Policy describes how <strong>{SMILE_COMPANY_NAME}</strong>{" "}
        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) handles information in
        connection with <strong>Smile</strong> (the &quot;Software&quot;), our
        website <a href={SMILE_SITE_URL}>{SMILE_SITE_URL}</a> (the
        &quot;Site&quot;), and related services (collectively, the
        &quot;Services&quot;). By using the Services, you agree to this Policy.
      </p>

      <h2>Summary (non-contractual)</h2>
      <ul>
        <li>
          <strong>Today</strong>, Smile is designed to work primarily with music
          and data on your device.
        </li>
        <li>We do not require an account to use the current version.</li>
        <li>
          We do not currently operate third-party advertising or analytics
          platforms in the Software (see below).
        </li>
        <li>We may change features, data practices, and this Policy over time.</li>
      </ul>

      <h2>Information on your device</h2>
      <p>
        The Software may store and process data locally on your Mac, including
        audio files and folders you choose to access; metadata; playlists,
        ratings, and play history; settings and cached files; and local logs.
        Unless otherwise described here or in the Software, such library data is
        not transmitted to us solely because you use basic library or playback
        features. You are responsible for backups and for content you add.
      </p>

      <h2>Information you provide</h2>
      <p>
        You may voluntarily send information when you contact support, join a
        beta (if offered), or register an account or subscription (if offered in
        the future). This may include email, name, message content, attachments,
        and diagnostic exports you choose to send.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        <strong>Website and downloads.</strong> Our host may log IP address,
        browser or device type, referring URL, pages viewed, date and time, and
        similar data needed to deliver downloads and operate the Site.
      </p>
      <p>
        <strong>Software updates.</strong> If the Software checks for updates
        (for example via Sparkle or similar), update servers may receive version
        and build identifiers, macOS version, compatibility identifiers, and
        standard request metadata.
      </p>
      <p>
        <strong>Analytics and diagnostics (current and future).</strong> We{" "}
        <em>may, now or in the future</em>, use analytics, crash reporting, or
        performance monitoring (operated by us or third parties). If we do, we
        will update this Policy and, where reasonable, notify you in the Software
        before new collection begins. As of the last updated date above, we do
        not use third-party advertising networks in the Software.
      </p>
      <p>
        <strong>Cookies (Site).</strong> The Site may use cookies or similar
        technologies for functionality and security. You can control cookies in
        your browser.
      </p>

      <h2>How we may use information</h2>
      <p>
        We may use information for any lawful purpose related to the Services,
        including providing and improving the Software, delivering updates,
        support, security, compliance, and developing new features (including
        optional cloud, sync, accounts, or paid offerings).
      </p>

      <h2>Legal bases (EEA, UK, and similar laws)</h2>
      <p>
        Where the GDPR or similar law applies, we process personal data on one
        or more of these bases: <strong>contract</strong> (to provide the
        Services); <strong>legitimate interests</strong> (to secure, maintain,
        and improve the Services); <strong>consent</strong> (where required, for
        example optional features or non-essential cookies); and{" "}
        <strong>legal obligation</strong>. You may object to legitimate-interests
        processing and withdraw consent where processing is consent-based.
      </p>

      <h2>How we may share information</h2>
      <p>
        We do not sell personal information as a business model. We may share
        information with service providers (hosting, CDN, email, updates,
        analytics, payments if any), when required by law, in a business transfer,
        or when you direct us to.
      </p>

      <h2>Optional and future features</h2>
      <p>
        Future versions may include accounts, cloud or sync, paid features,
        sharing, or enhanced analytics. Optional features may involve
        transmitting data to us or third parties and may be subject to
        additional terms or in-app disclosures.
      </p>

      <h2>Retention, security, and children</h2>
      <p>
        We retain information as long as reasonably necessary for the purposes
        above, unless a longer period is required by law. We use reasonable
        security measures; no method is completely secure. The Services are not
        directed to children under 13 (or the minimum age in your jurisdiction).
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct,
        delete, restrict, object to, or port your personal data, and to complain
        to a supervisory authority. Contact{" "}
        <a href={`mailto:${SMILE_SUPPORT_EMAIL}`}>{SMILE_SUPPORT_EMAIL}</a> — we
        will respond within the time required by law (typically one month under
        the GDPR). EEA users may contact their local authority; in Slovenia,
        the Informacijski pooblaščenec (IP RS) at{" "}
        <a
          href="https://www.ip-rs.si"
          target="_blank"
          rel="noopener noreferrer"
        >
          ip-rs.si
        </a>
        .
      </p>

      <h2>International transfers and changes</h2>
      <p>
        We may process data in Slovenia and other countries where we or our
        providers operate. Where required, we use appropriate safeguards for
        cross-border transfers. We may modify this Policy at any time; material
        changes will be posted here with an updated date.
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
