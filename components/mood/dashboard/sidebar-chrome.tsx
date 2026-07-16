"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { MoodLogo } from "@/components/mood/dashboard/mood-logo";
import { ThemeToggle } from "@/components/mood/dashboard/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const iconButtonCollapsedClass =
  "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2!";

export { iconButtonCollapsedClass };

const dashboardTopBarClass =
  "bg-sidebar border-border flex h-14 shrink-0 items-center border-b";

const sidebarToggleHeaderClass =
  "bg-sidebar border-border flex h-14 shrink-0 items-center border-b";

export function SidebarToggleHeader() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <header
      className={cn(
        sidebarToggleHeaderClass,
        "hidden w-full min-w-0 flex-row gap-0 px-2 py-0 md:flex",
        collapsed ? "justify-center" : "justify-end",
      )}
    >
      <SidebarTrigger className="size-8 shrink-0" />
    </header>
  );
}

export function DashboardHeader() {
  const { state, isMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const showBrand = isMobile || !collapsed;

  return (
    <header className={`${dashboardTopBarClass} gap-3 px-4 sm:px-6`}>
      <div className="flex min-w-0 flex-1 items-center gap-2">
        {isMobile ? (
          <SidebarTrigger className="size-8 shrink-0" />
        ) : null}
        {showBrand ? (
          <Link
            href="/mood-cloud/dashboard"
            className="flex shrink-0 items-center gap-2.5"
          >
            <MoodLogo className="size-7" />
            <span className="bg-linear-to-r from-rose-400 to-yellow-400 bg-clip-text text-base font-semibold uppercase tracking-wide text-transparent">
              Mood
            </span>
          </Link>
        ) : null}
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
}

const MOOD_DOCS_HREF = "/smile/faq";

export function SidebarDocsLink() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <SidebarMenu className="w-full min-w-0">
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          tooltip="Docs"
          className={iconButtonCollapsedClass}
        >
          <Link
            href={MOOD_DOCS_HREF}
            className={cn(
              "flex items-center",
              collapsed ? "justify-center" : "gap-2",
            )}
          >
            <BookOpen className="size-4 shrink-0" />
            {!collapsed ? <span>Docs</span> : null}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
