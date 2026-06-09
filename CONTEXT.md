# Advision Web

Marketing site for Advision desktop apps (Smile, Laugh). Product pages sell features; download pages handle distribution.

## Language

**Download page**:
A dedicated route where a visitor gets a specific app’s installer, system requirements, and install guidance.
_Avoid_: Using “download” to mean only a button or an on-page CTA section.

**Product page**:
A marketing route (e.g. `/smile`) that explains what an app does — features, personalization, hero — not where the installer is hosted.
_Avoid_: Product page, landing page (when you mean the marketing route specifically).

**Smile**:
Advision’s macOS music app — local library, metadata tools, screen widget, parametric EQ. Ships as Apple Silicon only; macOS 14+.
_Avoid_: Music app, Smile app (in user-facing copy when “Smile” alone is clear).

**CTA section**:
A short closing block on a **Product page** that prompts install — its button starts the installer download and opens the **Download page**.
_Avoid_: Treating the CTA as the only install guidance.

**Installer**:
The macOS `.dmg` disk image visitors download — open it and drag Smile into Applications.
_Avoid_: PKG (Smile ships as a drag-to-Applications disk image, not a package installer).

## Relationships

- A **Product page** links to that product’s **Download page** when the visitor is ready to install.
- **Smile** has one **Download page** at `/smile/download`.
- The **CTA section** on `/smile` stays as a nudge; its button downloads the **Installer** and routes to `/smile/download`.
- Every **Download** button starts the file download (when hosted) and lands on `/smile/download` for install steps.

## Example dialogue

> **Dev:** “Should the hero Download button go to `#download` or `/smile/download`?”
> **Domain expert:** “The **Download page** — the hero is still selling; install details live on `/smile/download`.”

## Flagged ambiguities

- (none yet)
