import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FolderCardIcon } from "@/components/mood/dashboard/folder-card-icon";
import {
  FolderStorageFooter,
} from "@/components/mood/dashboard/storage-usage-footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatFileDate,
  formatStorageBytes,
  getCorpusFolder,
  getMockDashboardUsage,
  getMockFilesForCorpus,
  type MoodCorpusId,
} from "@/lib/mood/dashboard";

type FolderFilesViewProps = {
  corpusId: MoodCorpusId;
};

export function FolderFilesView({ corpusId }: FolderFilesViewProps) {
  const usage = getMockDashboardUsage();
  const folder = getCorpusFolder(corpusId);
  const files = getMockFilesForCorpus(corpusId);

  if (!folder) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/mood-cloud/dashboard"
          className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to folders
        </Link>

        <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <FolderCardIcon corpus={corpusId} className="size-14 shrink-0 sm:size-16" />
          <div className="min-w-0">
            <h1 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {folder.label}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              {files.length} files synced to your Mood vault
            </p>
          </div>
        </div>

        <div className="border-border -mx-4 overflow-hidden rounded-none border-y sm:mx-0 sm:rounded-xl sm:border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="px-4 py-3">Name</TableHead>
                <TableHead className="hidden px-4 py-3 sm:table-cell">Size</TableHead>
                <TableHead className="hidden px-4 py-3 md:table-cell">
                  Modified
                </TableHead>
                <TableHead className="hidden px-4 py-3 lg:table-cell">Device</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((file) => (
                <TableRow key={file.id}>
                  <TableCell className="max-w-[14rem] px-4 py-3 font-medium break-words sm:max-w-none">
                    <span className="block">{file.name}</span>
                    <span className="text-muted-foreground mt-1 block text-xs sm:hidden">
                      {formatStorageBytes(file.sizeBytes)}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden px-4 py-3 sm:table-cell">
                    {formatStorageBytes(file.sizeBytes)}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden px-4 py-3 md:table-cell">
                    {formatFileDate(file.modifiedAt)}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden px-4 py-3 lg:table-cell">
                    {file.device}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="border-border bg-card/40 mt-4 rounded-xl border px-4 py-3">
          <FolderStorageFooter usedBytes={folder.usedBytes} usage={usage} />
        </div>
      </div>
    </div>
  );
}
