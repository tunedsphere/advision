# Smile cloud v0 — platform, storage, and billing

Smile cloud is a multi-tenant sync and storage platform: one **Account** per subscriber (family plans later), many **Devices**, unified vault with separate corpora (`Music/` in v0). Native Smile is the primary client; **advision-web** hosts **Cloud dashboard** (`cloud.avison-soft.com`) and **Cloud product page** (`/smile/cloud`); **smile-cloud** is API-only (`api.cloud.avison-soft.com`). Pay-first **Cloud subscription** via Stripe unlocks **Smile Library sync** — Mac → Mac music corpus + MusicIndex mirror.

## Object storage backend

**Primary: Backblaze B2, fronted by Cloudflare (Bandwidth Alliance).** Lowest storage cost (~$0.006/GB) and egress stays viable because transfer allowances never exceed 3× storage on the ladder, so worst-case egress stays within B2’s free-download policy even without the Cloudflare path. At **Plus** (2 TB / 2 TB), raw storage cost is ~$12/month against ~€30 retail — the margin that makes transfer-heavy tiers work.

**Fallback: Cloudflare R2** if Backblaze–Cloudflare partnership terms change. ~2.5× storage cost but unconditional egress, no fine print.

**Rejected as primary: AWS S3, Azure Blob, GCS.** Egress at $0.09–0.12/GB makes the transfer-heavy tier design unprofitable by 5–10×.

`smile-cloud` talks to object storage via an abstraction so B2↔R2 migration does not touch clients. **v0 integrates real Backblaze B2 from day one** — not a local MinIO or R2 stub first — so Bandwidth Alliance egress and cost assumptions are validated before Mac → Mac proof.

## Storage tiers (v0)

| Tier | Storage | Transfer / month |
|------|---------|------------------|
| Starter | 50 GB | 100 GB |
| Standard | 200 GB | 500 GB |
| Pro | 1 TB | 1 TB |
| Plus | 2 TB | 2 TB |

Transfer is egress-only; resets on subscription billing date. Uploads count toward storage only.

## Caps and overages

No metered overage billing — Apple-style soft caps. **Usage meters** warn at 80% and 90%; hard pause at 100% for storage or transfer. **Usage accounting** is server-authoritative (object store + egress logs). **Usage analysis** includes per-root storage, monthly transfer, and ~30-day history for support.

## Billing and tier changes

- **Pricing:** P2 — anchor to iCloud / Google One, undercut ~10–15% where margin allows; Stripe Price IDs at launch, not scaffold.
- **Period:** Monthly only in v0; annual in v1.
- **Signup:** Pay-first — no sync without active subscription.
- **Lapse:** 7-day **billing grace** (download OK, upload blocked), then hard pause; blobs retained 90 days with dashboard notice.
- **Upgrade:** Immediate new allowances.
- **Downgrade:** Blocked if over target storage; effective next billing date when allowed.

## Auth and clients

Email + password on **Cloud dashboard** and Smile **Settings → Smile cloud**; Mac exchanges credentials for revocable **Device token** (`POST /v1/auth/device`). Social login deferred.

## Sync reliability (v0 bar)

Local playback never blocked by cloud. Durable upload ack; resumable idempotent uploads; monotonic MusicIndex cursor; offline queue with resume. Every failure surfaces in **Sync health** (`cap_storage`, `cap_transfer`, `billing_grace`, `auth`, `network`, `server`). No published uptime SLA in v0.

## API surface (v0)

Five endpoints behind `Authorization: Bearer <device_token>`: device auth, account (quota + devices), object PUT/GET under `Music/`, `POST /v1/music/sync` (MusicIndex delta). Trash/list-directory v0.1.

## Repos and deploy

| Repo | Owns | Deploy |
|------|------|--------|
| `smile-app` | Mac client, sync upload, local MusicIndex mirror | DMG / Sparkle |
| `smile-cloud` | Auth, B2/R2 objects, MusicIndex, Stripe webhooks, usage accounting | `api.cloud.avison-soft.com` |
| `advision-web` | Cloud product page, Cloud dashboard SPA, Smile marketing/legal | `avison-soft.com`, `cloud.avison-soft.com` |

## Considered options

- Hyperscaler object store as primary — rejected on egress economics.
- Separate `smile-cloud-web` repo — rejected; dashboard in **advision-web** with host-based split is simpler for an indie team.
- Metered overage — rejected; conflicts with predictable billing positioning.
- Free cloud tier — rejected; local Smile stays free, cloud is paid ladder only.

## Consequences

- **smile-cloud** must implement S3-compatible B2 adapter, real B2 bucket, and Cloudflare origin configuration from the first integration milestone — before Mac → Mac proof.
- **advision-web** needs `/smile/cloud`, dashboard routes, Netlify `cloud.*` host, FAQ/privacy cloud subsection.
- Margin monitoring: alert if Bandwidth Alliance terms change; R2 fallback runbook required.
- Family subscription and Laugh `Photos/`/`Videos/` attach later without redesign if corpus roots and index services stay separate.
