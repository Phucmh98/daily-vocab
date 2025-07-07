"use client";
import {
  Calendar,
  PackageCheck,
  List,
  CircleDashed,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

// Menu items.
const items = [
  {
    title: "My Lists",
    url: "/my-lists",
    icon: List,
  },
  {
    title: "Review",
    url: "/review",
    icon: PackageCheck,
  },
  {
    title: "Quiz/Test",
    url: "/quiz",
    icon: Calendar,
  },
  {
    title: "Progress",
    url: "#",
    icon: CircleDashed,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathName = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 pt-2">
          <p className="text-2xl font-semibold">Daily Vocal</p>
        </Link>
        <div className="px-2 py-1">
          <Separator />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="h-10"
                    isActive={pathName === item.url}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
