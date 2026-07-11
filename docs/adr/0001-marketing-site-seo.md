# Marketing site SEO architecture

The avison-soft.com marketing site uses a split search strategy: the home route (`/`) is the brand and product hub; each app’s product route owns category keywords (e.g. macOS music app, library manager, tag editor for Smile). Visible hero copy stays emotional; search copy (title, meta description, structured data) carries keywords. FAQ lives on dedicated routes (`/smile/faq`, `/laugh/faq`) separate from support contact pages.

Canonical origin is apex only (`https://avison-soft.com`); `www` redirects. Structured data uses `Organization` + `WebSite` on home and `SoftwareApplication` on product/download routes; `FAQPage` on FAQ routes when content ships. Social previews are generated dynamically via Next.js `ImageResponse`: screenshot-style cards for product and download routes, text-only cards for FAQ, support, and legal routes. `Organization.sameAs` is omitted until real social profile URLs exist.

**Considered options:** Inline FAQ on product pages (rejected — keeps product routes clean); static OG images (rejected — stale on version/title changes); home page competing on category keywords (rejected — cannibalizes product routes).

**Consequences:** Release metadata must stay accurate for `SoftwareApplication` download URLs; Laugh FAQ/support wait until the app is downloadable; Netlify must redirect `www` → apex.
