import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/mood/dashboard/dashboard-shell";
import { MoodDashboardThemeProvider } from "@/components/mood/dashboard/dashboard-theme-provider";

export default async function MoodDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <MoodDashboardThemeProvider>
      <DashboardShell>{children}</DashboardShell>
    </MoodDashboardThemeProvider>
  );
}
