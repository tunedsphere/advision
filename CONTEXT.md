# Avison Web

Marketing site for Avison desktop apps (Smile, Laugh). Product pages sell features; download pages handle distribution.

## Language

**Download page**:
A dedicated route where a visitor gets a specific app’s installer, system requirements, and install guidance.
_Avoid_: Using “download” to mean only a button or an on-page CTA section.

**Product page**:
A marketing route (e.g. `/smile`) that explains what an app does — features, personalization, hero — not where the installer is hosted.
_Avoid_: Product page, landing page (when you mean the marketing route specifically).

**Smile**:
Avison’s macOS music app — local library, metadata tools, screen widget, parametric EQ. Ships as Apple Silicon only; macOS 14+.
_Avoid_: Music app, Smile app (in user-facing copy when “Smile” alone is clear).

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

## Example dialogue

> **Dev:** “Should the hero Download button go to `#download` or `/smile/download`?”
> **Domain expert:** “The **Download page** — the hero is still selling; install details live on `/smile/download`.”

## Flagged ambiguities

- (none yet)
