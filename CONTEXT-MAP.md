# Context Map

Marketing and product web for Avison desktop apps (**Smile**, **Laugh**). **Mood** dashboard and tier marketing also live here; the API is the **smile-cloud** repo.

## Contexts

- [**Avison Web**](./CONTEXT.md) (this repo) — product pages, legal, SEO, **Cloud dashboard**, **Cloud product page**
- [**Mood API**](../smile-cloud/CONTEXT.md) (`smile-cloud`) — auth, B2 vault, **Usage accounting**, **MusicIndex**, Stripe webhooks
- **Smile app** (`smile-app` on Desktop, when present) — Mac **Smile Library**, sync client

## URLs

| Host | Repo | Surface |
|------|------|---------|
| `avison-soft.com` | `advision-web` | Marketing, legal, Sparkle |
| `avison-soft.com/mood-cloud` | `advision-web` | **Mood product page** |
| `cloud.avison-soft.com` | `advision-web` | **Cloud dashboard** |
| `api.cloud.avison-soft.com` | `smile-cloud` | Client API |

## ADRs

| ADR | Topic |
|-----|-------|
| [0001](./docs/adr/0001-marketing-site-seo.md) | Marketing SEO |
| [0002](./docs/adr/0002-smile-cloud-v0.md) | Mood platform v0 (shared with **smile-cloud** repo; product name **Mood** per smile-cloud ADR 0004) |

## Agent skills

`.agents/skills/` — shared with **smile-cloud**; use **grill-with-docs** for new product terms (update this repo's `CONTEXT.md` for web/product language).
