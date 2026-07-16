# Avison Web

Marketing site for Avison desktop apps (Smile, Laugh). **Mood** web surfaces (**Mood dashboard**, **Mood product page** at `/mood-cloud`) are built here; API is in **smile-cloud** — see [CONTEXT-MAP.md](./CONTEXT-MAP.md).

## Language

**Download page**:
A dedicated route where a visitor gets a specific app’s installer, system requirements, and install guidance.
_Avoid_: Using “download” to mean only a button or an on-page CTA section.

**Product page**:
A marketing route (e.g. `/smile`) that explains what an app does — features, personalization, hero — not where the installer is hosted.
_Avoid_: Product page, landing page (when you mean the marketing route specifically).

**Smile**:
Avison’s macOS music app — local library, metadata tools, screen widget, parametric EQ. Works without an account; **Mood** is an optional premium add-on. Ships as Apple Silicon only; macOS 14+.
_Avoid_: Music app, Smile app (in user-facing copy when “Smile” alone is clear).

**Mood**:
The operator-hosted cloud platform for **Account** sign-in, storage, sync, and billing — shared by Smile and (later) Laugh. API at `api.cloud.avison-soft.com` (**smile-cloud** repo); web in **advision-web** at `cloud.avison-soft.com` (**Mood dashboard**) and `avison-soft.com/mood-cloud` (**Mood product page**; `/smile/cloud` and `/laugh/cloud` redirect).
_Avoid_: Smile cloud (deprecated product name); iCloud (when describing Avison’s own service); embedding the API in the marketing site repo.

**Account**:
One subscriber identity with one unified storage vault and one quota. v0 is individual only — no invited members sharing a vault. Signs in with email and password.
_Avoid_: User (too generic); conflating **Account** with a **Device**.

**Device**:
A signed-in client registered under an **Account** (e.g. a Mac running Smile). Each **Device** holds a revocable **Device token** for API access; revoking a **Device** does not delete the **Account**.
_Avoid_: Machine, session (when you mean a registered client identity).

**Device token**:
The long-lived credential a **Device** receives after **Account** sign-in (`POST /v1/auth/device`). Used for sync and object API calls; rotatable from the **Mood dashboard** without changing the **Account** password.
_Avoid_: Password (never sent on each sync request); conflating dashboard browser session with **Device token**.

**Cloud dashboard** (alias: **Mood dashboard**):
The logged-in web app on `cloud.avison-soft.com` — sign-in, **Usage meters**, **Device** list, corpus file list, upload. Implemented in **advision-web**, deployed on the `cloud.*` host; session cookies scoped to that host. Smile Mac opens it via deep link for storage and billing; sync status stays in-app.
_Avoid_: Mood.app; a separate `smile-cloud-web` repo for v0.

**Cloud product page** (alias: **Mood product page**):
The marketing route `/mood-cloud` on **Canonical site URL** — explains **Smile Library sync**, **Storage tier** ladder, and links to **Mood dashboard** sign-up. Legacy `/smile/cloud` and `/laugh/cloud` redirect here. No logged-in session on the apex host (signed-in users go to `cloud.avison-soft.com`).
_Avoid_: Folding dashboard auth into `/smile` **Product page**; pricing only on the dashboard with no public tier page.

**Smile Library sync**:
Premium **Mood** feature that replicates a Mac’s **Smile Library** music corpus and index to the cloud so other **Devices** can mirror it.
_Avoid_: Library Folder sync (device-local imports are not uploaded unless copied into **Smile Library** first).

**Storage tier**:
A paid **Mood** plan with fixed **Storage allowance** and **Transfer allowance**. v0 ladder: **Starter** (50 GB / 100 GB), **Standard** (200 GB / 500 GB), **Pro** (1 TB / 1 TB), **Plus** (2 TB / 2 TB). Requires an active **Cloud subscription** before sync is enabled.
_Avoid_: Plan (alone, when you mean the full commercial tier including transfer); tier (when you mean corpus root like `Music/`).

**Cloud pricing**:
Public prices anchored to iCloud / Google One shape and undercut by roughly 10–15% where margin allows; exact Stripe Price IDs set at launch, not at scaffold time.
_Avoid_: Metered overage; pricing that tracks hyperscaler egress models.

**Cloud subscription**:
The recurring Stripe subscription that unlocks **Smile Library sync** for an **Account**. v0 is pay-first and **monthly** only; annual billing is a v1 add-on. No active subscription means no cloud sync; local **Smile** still works.
_Avoid_: In-app purchase in the Mac app (v0 billing is on the **Cloud dashboard** only).

**Billing grace**:
Seven days after **Cloud subscription** lapse (payment failed or cancelled) when egress and download continue but new uploads are blocked. Surfaced as `billing_grace` in **Sync health**; then sync hard-pauses while stored blobs are retained up to ninety days with dashboard notice before deletion per privacy policy.
_Avoid_: Immediate silent data loss on a failed card; surprise deletion without dashboard notice.

**Tier upgrade**:
Moving to a higher **Storage tier** takes effect immediately — **Storage allowance** and **Transfer allowance** increase on payment confirmation.
_Avoid_: Making the user wait until the next billing date after paying for more space.

**Tier downgrade**:
Moving to a lower **Storage tier** is blocked while current storage exceeds the target **Storage allowance**; when allowed, it takes effect on the next billing date with no mid-cycle auto-deletion.
_Avoid_: Forced deletion of user blobs to fit a smaller tier; mid-cycle downgrade refunds in v0.

**Storage allowance**:
The maximum bytes an **Account** may keep in the unified vault at rest. Usage is reported total and per corpus root.
_Avoid_: Quota (alone — use when both storage and transfer apply); disk space on the Mac.

**Transfer allowance**:
The maximum bytes an **Account** may move out of **Mood** to **Devices** or the **Mood dashboard** per billing month (egress only — uploads do not count). Resets on the subscription billing date. Separate meter from **Storage allowance**.
_Avoid_: Bandwidth (too vague); counting LAN or device-local playback as transfer; metered overage charges.

**Usage meters**:
The paired **Storage allowance** and **Transfer allowance** counters shown in the **Mood dashboard** and Smile **Settings → Mood**. Users see current use, limit, and per-root storage breakdown; warnings at 80% and 90%; hard pause at 100%.
_Avoid_: Surprise overage bills; hiding transfer use until invoice time.

**Usage accounting**:
Server-authoritative, auditable record of storage and transfer bytes per **Account** — source of truth for **Usage meters**, tier enforcement, and support. Recomputed from object store + egress logs, not client-reported totals alone.
_Avoid_: Trusting client-side byte counts for billing; drift between dashboard and enforced caps.

**Usage analysis**:
The breakdown users and support can inspect — storage per corpus root, transfer this billing month, optional per-**Device** egress, and billing-period history good enough to explain a pause or cap.
_Avoid_: Track analysis (audio waveform/BPM — separate product concern); operator-only metrics with no user-visible explanation.

**Sync health**:
Per-**Device** status of **Smile Library sync** — last successful sync, cursor age, queued uploads/downloads, pause reason (cap, user, error). Same facts in-app and on the **Cloud dashboard**.
_Avoid_: Silent failure; “syncing…” with no actionable state.

**Sync reliability contract**:
v0 bar for **Smile Library sync**: local playback never blocked by cloud; durable upload ack; monotonic sync cursor; offline queue with resume; resumable idempotent uploads; every failure maps to a **Sync health** reason. No published uptime SLA in v0.
_Avoid_: Treating “syncing” as a guarantee without ack; silent retries with no user-visible state.

**Laugh**:
Avison’s video app — local library, cinematic playback, network streaming (SMB, WebDAV, HLS), broad format support. macOS and Windows.
_Avoid_: Video app, laugh (lowercase product name in user-facing copy or **Search copy**).

**CTA section**:
A short closing block on a **Product page** that prompts install — its button starts the installer download and opens the **Download page**.
_Avoid_: Treating the CTA as the only install guidance.

**Installer**:
The macOS `.dmg` disk image visitors download — open it and drag Smile into Applications.
_Avoid_: PKG (Smile ships as a drag-to-Applications disk image, not a package installer).

**Avison home route**:
The `/` route — brand and product hub. **Search copy** names Avison and links to **Smile** and **Laugh**; category keywords stay on each app’s **Product page**.
_Avoid_: Home route competing with product routes on the same category keywords.

**Hero copy**:
The visible headline on a **Product page** — emotional, brand-forward (e.g. “Your Music, Your Way”).
_Avoid_: Keyword-stuffed H1s that read like SEO spam.

**Search copy**:
The `<title>`, meta description, Open Graph tags, and structured data for a route — carries category and feature keywords (e.g. macOS music app, library manager, tag editor).
_Avoid_: Relying on search copy alone without any visible product/category signal on the page.

**FAQ section**:
Common questions and answers for an app, published on a dedicated route (e.g. `/smile/faq`, `/laugh/faq`) — linked from the **Product page** footer and nav. **FAQ schema** applies only to content visible on that route. Ends with a pointer to **Support** for unresolved issues.
_Avoid_: FAQ schema with no matching visible content (policy violation); duplicating the full FAQ body on the **Product page** when a dedicated route exists.

**Support page**:
A dedicated contact route (e.g. `/smile/support`) — email, version info, bug-report guidance. Human escalation, not self-service Q&A.
_Avoid_: Using **Support page** and **FAQ section** interchangeably.

**Social preview**:
The image and text shown when a route is shared (Open Graph / Twitter cards). Each major route gets its own preview — generated from route metadata. **Product page** and **Download page** routes use a screenshot-style card; FAQ, **Support page**, and legal routes use a text-only card.
_Avoid_: One generic preview for every route; broken or missing images on share.

**Canonical site URL**:
The single authoritative origin for all public routes — `https://avison-soft.com` (apex, no `www`). All **Search copy**, sitemaps, Open Graph URLs, and redirects use this origin.
_Avoid_: Serving the same content on both apex and `www` without a redirect.

## Relationships

- A **Product page** links to that product’s **Download page** when the visitor is ready to install.
- **Smile** has one **Download page** at `/smile/download`.
- The **CTA section** on `/smile` stays as a nudge; its button downloads the **Installer** and routes to `/smile/download`.
- Each app’s **FAQ section** lives at `/smile/faq` or `/laugh/faq`, linked from that app’s **Product page** — not inlined in the hero/features flow.
- Each app’s **Support page** is separate from its **FAQ section** — FAQ for common Q&A; Support for email and bug reports.
- The **Avison home route** is the brand hub — it names and links to products with descriptive anchors; category ranking is owned by each **Product page**.
- All indexable routes use the **Canonical site URL** as their origin; `www` redirects to apex.
- Each indexable route has its own **Social preview**, derived from that route’s **Search copy** and product identity.
- **Smile** runs local-first without an **Account**; **Mood** and **Smile Library sync** require one.
- **Account** sign-in is email and password on the **Mood dashboard** and in Smile **Settings → Mood**; the Mac then holds a **Device token** for background sync.
- **Smile Library sync** requires an active **Cloud subscription** (pay-first); billing and tier changes happen on the **Cloud dashboard** via Stripe, not in-app purchase.
- **Tier upgrade** is immediate; **Tier downgrade** is blocked when over the target cap and otherwise effective next billing date.
- An **Account** has many **Devices**; **Storage allowance** and **Transfer allowance** are per **Account**; storage usage is also reported per corpus root (`Music/`, later `Photos/`, `Videos/`).
- **Cloud dashboard** and Smile in-app settings show the same **Usage meters** and **Sync health**; pricing is tier-based (**Storage tier** ladder), not metered overage.
- **Usage accounting** drives caps; **Usage analysis** explains them to users and support.
- **advision-web** owns all web UI (**Cloud product page**, **Cloud dashboard**); **smile-cloud** owns API, indexes, object store, and Stripe webhooks only.
- **Cloud dashboard** runs on `cloud.avison-soft.com`; **Cloud product page** and Smile legal/privacy stay on **Canonical site URL** — same repo, separate hosts and cookies.
- **Cloud product page** publishes the four **Storage tier** names and allowances; **Cloud pricing** amounts ship when Stripe products are created at launch.

## Example dialogue

> **Dev:** “Should the hero Download button go to `#download` or `/smile/download`?”
> **Domain expert:** “The **Download page** — the hero is still selling; install details live on `/smile/download`.”

> **Dev:** “Is Mood multi-user like a family plan?”
> **Domain expert:** “v0 is **multi-tenant** — many **Accounts** on one platform, each with their own vault. **Family subscription** is a future SKU; it does not block v0.”

> **Dev:** “Can a user get a surprise bill if they sync a huge library?”
> **Domain expert:** “No — each **Storage tier** has fixed **Storage allowance** and **Transfer allowance**. **Usage meters** show both; we pause sync at the cap, not charge overage.”

> **Dev:** “How do we keep usage trustworthy and sync stable?”
> **Domain expert:** “**Usage accounting** is server-side and auditable; **Usage analysis** shows the breakdown. **Sync health** surfaces pause reasons and last good sync — no silent drift.”

> **Dev:** “How does the Mac authenticate for background sync?”
> **Domain expert:** “Same email and password as the **Cloud dashboard**, exchanged once for a **Device token**. Revoke the **Device** from the dashboard if the Mac is lost.”

> **Dev:** “Can someone sync without paying?”
> **Domain expert:** “No — **Cloud subscription** is pay-first on the **Cloud dashboard**. If payment lapses, **Billing grace** keeps downloads working briefly, then sync pauses with a clear **Sync health** reason.”

> **Dev:** “User downgrades but still has too much music in the cloud?”
> **Domain expert:** “**Tier downgrade** is blocked until they’re under the target **Storage allowance**. **Tier upgrade** is immediate once they pay.”

> **Dev:** “Where do we build the dashboard?”
> **Domain expert:** “In **advision-web** with the rest of the web — deploy **Cloud dashboard** to `cloud.*` and keep **smile-cloud** as API-only.”

## Flagged ambiguities

- **Family subscription** — desirable post-v0; likely a shared-quota plan across multiple **Accounts** or invited members. Not designed in v0; schema should not assume one human per **Account** forever.
- **Annual billing** — v1 add-on; v0 is monthly **Cloud subscription** only.
