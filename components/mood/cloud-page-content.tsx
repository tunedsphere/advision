import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  MOOD_DASHBOARD_URL,
  MOOD_TIERS,
  MOOD_VALUE_PROPS,
} from "@/lib/mood/cloud";

export function MoodCloudPageContent() {
  return (
    <>
      <nav className="text-muted-foreground mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
        <Link href="/" className="hover:text-foreground transition-colors">
          Avison
        </Link>
        <span aria-hidden>·</span>
        <Link href="/smile" className="hover:text-foreground transition-colors">
          Smile
        </Link>
        <span aria-hidden>·</span>
        <Link href="/laugh" className="hover:text-foreground transition-colors">
          Laugh
        </Link>
      </nav>

      <p className="text-muted-foreground mb-3 text-xs font-medium tracking-widest uppercase">
        Premium add-on
      </p>
      <h1 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
        Mood
      </h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-sm leading-relaxed md:text-base">
        Smile and Laugh stay local-first on your Mac. Mood is optional sync and
        storage — one account, predictable tiers, and library replication across
        your devices. No metered overage bills: when you hit a cap, sync pauses
        until you upgrade or the next billing month.
      </p>

      <div className="mb-12 grid gap-4 md:grid-cols-3">
        {MOOD_VALUE_PROPS.map((item) => (
          <div
            key={item.title}
            className="border-border bg-card/40 rounded-xl border p-5"
          >
            <h2 className="text-foreground mb-2 text-sm font-semibold">
              {item.title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-foreground mb-2 text-xl font-semibold tracking-tight">
        Storage tiers
      </h2>
      <p className="text-muted-foreground mb-6 max-w-2xl text-sm">
        Transfer counts download from the cloud only (not uploads). Monthly
        billing in v0. Indicative prices below — final amounts confirmed at
        launch.
      </p>

      <div className="border-border overflow-hidden rounded-xl border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-border bg-muted/30 border-b">
              <th className="text-foreground px-4 py-3 font-medium">Tier</th>
              <th className="text-foreground px-4 py-3 font-medium">Storage</th>
              <th className="text-foreground hidden px-4 py-3 font-medium sm:table-cell">
                Transfer
              </th>
              <th className="text-foreground px-4 py-3 font-medium">From</th>
            </tr>
          </thead>
          <tbody>
            {MOOD_TIERS.map((tier) => (
              <tr
                key={tier.id}
                className="border-border border-b last:border-b-0"
              >
                <td className="px-4 py-3">
                  <span className="text-foreground font-medium">
                    {tier.name}
                  </span>
                  {tier.recommended ? (
                    <span className="text-muted-foreground ml-2 text-xs">
                      (recommended)
                    </span>
                  ) : null}
                </td>
                <td className="text-muted-foreground px-4 py-3">
                  {tier.storageLabel}
                </td>
                <td className="text-muted-foreground hidden px-4 py-3 sm:table-cell">
                  {tier.transferLabel}
                </td>
                <td className="text-foreground px-4 py-3">
                  {tier.indicativePriceEur}
                  <span className="text-muted-foreground"> / mo</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
        Storage and transfer meters appear in the Mood dashboard and in Smile
        Settings → Mood. Upgrade takes effect immediately; downgrade is scheduled
        for your next billing date if you are under the smaller cap.
      </p>

      <div className="border-border bg-card/40 mt-10 rounded-xl border p-6 md:p-8">
        <h2 className="text-foreground mb-2 text-lg font-semibold">
          Get started
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl text-sm leading-relaxed">
          Choose a tier, subscribe, then sign in on your Mac under Settings →
          Mood. When you are signed in, you will use the dashboard at{" "}
          <span className="text-foreground">cloud.avison-soft.com</span>.
        </p>
        <Button asChild size="lg">
          <a href={MOOD_DASHBOARD_URL} rel="noopener noreferrer">
            Open Mood dashboard
          </a>
        </Button>
      </div>

      <div className="text-muted-foreground mt-10 space-y-2 text-sm">
        <p>
          Mood is in active development.{" "}
          <Link href="/smile/faq" className="text-foreground underline">
            FAQ
          </Link>{" "}
          ·{" "}
          <Link href="/smile/privacy" className="text-foreground underline">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="/smile/support" className="text-foreground underline">
            Support
          </Link>
        </p>
      </div>
    </>
  );
}
