"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCard,
  FolderOpen,
  ScrollText,
  Settings,
  User,
} from "lucide-react";
import { iconButtonCollapsedClass } from "@/components/mood/dashboard/sidebar-chrome";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const DASHBOARD_BASE = "/mood-cloud/dashboard";

const NAV_ITEMS = [
  {
    href: DASHBOARD_BASE,
    label: "Folders",
    icon: FolderOpen,
    match: (pathname: string) =>
      pathname === DASHBOARD_BASE ||
      pathname === `${DASHBOARD_BASE}/` ||
      pathname.startsWith(`${DASHBOARD_BASE}/folders/`),
  },
  {
    href: `${DASHBOARD_BASE}/audit-logs`,
    label: "Audit logs",
    icon: ScrollText,
    match: (pathname: string) => pathname.startsWith(`${DASHBOARD_BASE}/audit-logs`),
  },
  {
    href: `${DASHBOARD_BASE}/billing`,
    label: "Billing",
    icon: CreditCard,
    match: (pathname: string) => pathname.startsWith(`${DASHBOARD_BASE}/billing`),
  },
  {
    href: `${DASHBOARD_BASE}/account`,
    label: "Account",
    icon: User,
    match: (pathname: string) => pathname.startsWith(`${DASHBOARD_BASE}/account`),
  },
  {
    href: `${DASHBOARD_BASE}/settings`,
    label: "Settings",
    icon: Settings,
    match: (pathname: string) => pathname.startsWith(`${DASHBOARD_BASE}/settings`),
  },
] as const;

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <SidebarGroup className="px-2 py-4">
      <SidebarGroupContent>
        <SidebarMenu>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.match(pathname);

            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.label}
                  className={iconButtonCollapsedClass}
                >
                  <Link
                    href={item.href}
                    className="group-data-[collapsible=icon]:justify-center flex items-center gap-2"
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="group-data-[collapsible=icon]:hidden">
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
