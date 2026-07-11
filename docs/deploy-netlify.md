# Deploy avison-soft on Netlify

One-time migration from Vercel. Env vars **do not** copy over — set them in Netlify only when you need overrides.

## 1. Connect the repo

1. [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. GitHub: `jonavison/avison-soft`
3. Build settings are read from `netlify.toml` (`pnpm build`, Next.js plugin)

## 2. Environment variables

**Optional** if the `.dmg` is committed under `public/` (current setup).

| Variable | Example | When |
|----------|---------|------|
| `SMILE_SUPPORT_EMAIL` | `support@avison-soft.com` | Optional override (this is the site default) |
| `SMILE_DOWNLOAD_URL` | *(leave unset)* | **Do not set** when DMG is in `public/` — it pins the URL and breaks version bumps |
| `SMILE_DOWNLOAD_BASE_URL` | `https://cdn.example.com/smile` | External CDN only; appends versioned filename |

With no download env vars, the site serves `public/Smile-{version}.dmg` from **`Packaging/RELEASE_VERSION`**.

## Ship a new Smile build

**From smile-app (recommended):**

```bash
./scripts/publish-smile-release.sh
# copies DMG + Sparkle zip + appcast.xml into advision-web/public/
```

Then commit and push **advision-web**.

**Manual (website only):**

1. Bump version: `pnpm release:smile 0.25.2`
2. Copy `Smile-0.25.2.dmg` → `public/Smile-0.25.2.dmg`
3. Copy Sparkle artifacts from smile-app: `public/smile/appcast.xml`, `public/smile/releases/Smile 0.25.2.zip`
4. `pnpm verify:smile-release` (also runs before `pnpm build`)
5. commit-to-v, push — **do not** set `SMILE_DOWNLOAD_URL` on Netlify

Replace same version (fixed DMG, no bump): overwrite `public/Smile-{version}.dmg` only, commit, push.

**Repo size:** `publish-smile-release.sh` keeps only the latest `public/Smile-*.dmg`. Sparkle zips, deltas, and `appcast.xml` under `public/smile/` are kept for in-app update history.

## Sparkle in-app updates

```
https://avison-soft.com/smile/appcast.xml
https://avison-soft.com/smile/Smile%200.25.2.zip
```

Shipped apps check the appcast on launch. First-install users still use the DMG.

## 3. DMG hosting (current)

```
Packaging/RELEASE_VERSION  →  public/Smile-{version}.dmg  →  https://avison-soft.com/Smile-{version}.dmg
```

## 4. DNS

1. Add custom domain in Netlify (`avison-soft.com`, `www` if used)
2. Update DNS at your registrar: remove Vercel records, add Netlify’s A/CNAME as shown in the Netlify UI
3. Wait for SSL to provision

## 5. Analytics

`@vercel/analytics` only runs when `VERCEL` is set (Vercel injects it). On Netlify it is skipped. To add analytics later: Netlify Analytics, Plausible, or similar.

## 6. Smoke test

- `/` and `/smile` load
- `/smile/download` — download button uses `/Smile-0.25.1.dmg` (no `SMILE_DOWNLOAD_URL` env var)
- `/smile/privacy`, `/smile/eula`, `/smile/support` — support email correct
- `https://avison-soft.com/Smile-0.25.1.dmg` downloads the file

## 7. Turn off Vercel

After DNS propagates and Netlify is live, disconnect or delete the Vercel project to avoid confusion and duplicate deploys.
