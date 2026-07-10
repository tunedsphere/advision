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
| `SMILE_DOWNLOAD_URL` | `https://avison-soft.com/Smile-0.25.0.dmg` | External CDN or stable alias URL |
| `SMILE_DOWNLOAD_BASE_URL` | `https://cdn.example.com/smile` | Versioned files on a CDN root |

With no download env vars, the site serves `public/Smile-{version}.dmg` at `/Smile-{version}.dmg` (currently `0.25.0`).

## 3. DMG hosting (current)

```
public/Smile-0.25.0.dmg  →  https://avison-soft.com/Smile-0.25.0.dmg
```

`~10 MB` in `public/` is fine at early traffic. Bump `version` in `lib/releases/smile.ts` and replace the file when you ship a new build.

## 4. DNS

1. Add custom domain in Netlify (`avison-soft.com`, `www` if used)
2. Update DNS at your registrar: remove Vercel records, add Netlify’s A/CNAME as shown in the Netlify UI
3. Wait for SSL to provision

## 5. Analytics

`@vercel/analytics` only runs when `VERCEL` is set (Vercel injects it). On Netlify it is skipped. To add analytics later: Netlify Analytics, Plausible, or similar.

## 6. Smoke test

- `/` and `/smile` load
- `/smile/download` — download button works (auto-starts from `/Smile-0.25.0.dmg`)
- `/smile/privacy`, `/smile/eula`, `/smile/support` — support email correct
- `https://avison-soft.com/Smile-0.25.0.dmg` downloads the file

## 7. Turn off Vercel

After DNS propagates and Netlify is live, disconnect or delete the Vercel project to avoid confusion and duplicate deploys.
