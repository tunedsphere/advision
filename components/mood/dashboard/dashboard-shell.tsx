"use client";

import {
  DashboardHeader,
  SidebarDocsLink,
  SidebarToggleHeader,
} from "@/components/mood/dashboard/sidebar-chrome";
import { DashboardNav } from "@/components/mood/dashboard/dashboard-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="[&_[data-slot=sidebar-container]]:p-0 [&_[data-slot=sidebar-container]]:group-data-[collapsible=icon]:w-(--sidebar-width-icon)! [&_[data-slot=sidebar-gap]]:group-data-[collapsible=icon]:w-(--sidebar-width-icon)!">
      <Sidebar
        collapsible="icon"
        variant="inset"
        className="[&_[data-slot=sidebar-inner]]:border-border [&_[data-slot=sidebar-inner]]:rounded-none [&_[data-slot=sidebar-inner]]:border-r"
      >
        <SidebarToggleHeader />
        <SidebarContent>
          <DashboardNav />
        </SidebarContent>
        <SidebarFooter className="border-border border-t p-2">
          <SidebarDocsLink />
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="flex min-h-svh flex-col md:m-0 md:rounded-none md:shadow-none">
        <DashboardHeader />
        <div className="flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
