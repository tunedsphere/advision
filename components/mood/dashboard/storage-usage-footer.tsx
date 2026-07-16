import { Progress } from "@/components/ui/progress";
import {
  formatStorageBytes,
  storageUsagePercent,
  type MoodDashboardUsage,
} from "@/lib/mood/dashboard";

type StorageUsageFooterProps = {
  usage: MoodDashboardUsage;
  className?: string;
};

export function StorageUsageFooter({ usage, className }: StorageUsageFooterProps) {
  const percent = storageUsagePercent(
    usage.storageUsedBytes,
    usage.storageLimitBytes,
  );

  return (
    <div className={className}>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2 text-sm">
        <span className="text-foreground font-medium">
          {formatStorageBytes(usage.storageUsedBytes)} of{" "}
          {usage.storageLimitLabel} used
        </span>
        <span className="text-muted-foreground">{usage.tierName} plan</span>
      </div>
      <Progress value={percent} className="h-1.5" />
      <p className="text-muted-foreground mt-2 text-xs">
        {percent}% of your storage allowance
      </p>
    </div>
  );
}

type FolderStorageFooterProps = {
  usedBytes: number;
  usage: MoodDashboardUsage;
};

export function FolderStorageFooter({
  usedBytes,
  usage,
}: FolderStorageFooterProps) {
  return (
    <div className="text-muted-foreground w-full space-y-1 text-center text-[11px] leading-snug">
      <p className="text-foreground font-medium">
        {formatStorageBytes(usedBytes)}
      </p>
      <p>
        {formatStorageBytes(usage.storageUsedBytes)} / {usage.storageLimitLabel}
      </p>
    </div>
  );
}
