import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FolderFilesView } from "@/components/mood/dashboard/folder-files-view";
import {
  getCorpusFolder,
  isMoodCorpusId,
} from "@/lib/mood/dashboard";
import { pageMetadata } from "@/lib/seo/metadata";

type FolderPageProps = {
  params: Promise<{ corpus: string }>;
};

export async function generateMetadata({
  params,
}: FolderPageProps): Promise<Metadata> {
  const { corpus } = await params;
  if (!isMoodCorpusId(corpus)) {
    return pageMetadata({
      title: "Folder not found | Mood dashboard",
      path: "/mood-cloud/dashboard",
    });
  }

  const folder = getCorpusFolder(corpus);
  return pageMetadata({
    title: `${folder?.label ?? "Folder"} | Mood dashboard`,
    description: `Browse files in your Mood ${folder?.label ?? ""} vault.`,
    path: `/mood-cloud/dashboard/folders/${corpus}`,
  });
}

export default async function MoodFolderPage({ params }: FolderPageProps) {
  const { corpus } = await params;

  if (!isMoodCorpusId(corpus)) {
    notFound();
  }

  return <FolderFilesView corpusId={corpus} />;
}
