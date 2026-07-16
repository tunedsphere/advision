import Link from "next/link";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderCardIcon } from "@/components/mood/dashboard/folder-card-icon";
import {
  FolderStorageFooter,
  StorageUsageFooter,
} from "@/components/mood/dashboard/storage-usage-footer";
import { getFolderHref, getMockDashboardUsage } from "@/lib/mood/dashboard";

export function FoldersView() {
  const usage = getMockDashboardUsage();

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="mx-auto w-full max-w-5xl text-center">
        <p className="text-foreground mb-6 px-1 text-lg font-semibold tracking-tight sm:text-xl md:text-2xl lg:text-3xl">
          🎉 Congratulations, you&apos;ve got a place to store files!
        </p>
        <h1 className="text-foreground mb-1 text-xl font-semibold tracking-tight sm:text-2xl">
          Folders
        </h1>
        <p className="text-muted-foreground text-sm">
          Your synced Music, Images, and Videos vaults.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {usage.folders.map((folder) => (
          <Link key={folder.id} href={getFolderHref(folder.id)} className="group block">
            <Card className="border-border/70 bg-card/50 h-full gap-0 border py-0 shadow-none transition-[background-color,border-color,box-shadow] duration-200 ease-out group-hover:border-border group-hover:bg-card/70 group-hover:shadow-sm">
              <CardHeader className="items-center gap-4 px-4 pt-8 pb-4 text-center sm:gap-5 sm:px-6 sm:pt-10 sm:pb-5">
                <FolderCardIcon
                  corpus={folder.id}
                  className="mx-auto size-24 transition-transform duration-200 ease-out group-hover:scale-[1.03] sm:size-28"
                />
                <CardTitle className="text-base transition-colors duration-200 group-hover:text-foreground sm:text-lg">
                  {folder.label}
                </CardTitle>
              </CardHeader>
              <CardFooter className="border-border mt-auto border-t px-4 py-3 sm:px-6 sm:py-4">
                <FolderStorageFooter
                  usedBytes={folder.usedBytes}
                  usage={usage}
                />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="border-border bg-card/40 mx-auto w-full max-w-5xl rounded-xl border p-4 sm:p-5">
        <StorageUsageFooter usage={usage} />
      </div>
    </div>
  );
}
