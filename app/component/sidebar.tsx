"use client";

import {
  CalendarRange,
  GalleryVerticalEnd,
  Search,
  ChevronUp,
  ChevronDown,
  ChartBarStacked,
  GalleryHorizontalEnd,
  Trophy,
  Music,
  Store,
  LogIn,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AppSidebar = () => {
  const items = [
    {
      title: "All",
      url: "#",
      icon: GalleryHorizontalEnd,
    },
    {
      title: "Sport",
      url: "#",
      icon: Trophy,
    },
    {
      title: "Music Concert",
      url: "#",
      icon: Music,
    },
    {
      title: "Workshop",
      url: "#",
      icon: Store,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl my-5">
            Events Ticketing
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex flex-col gap-4">
                <div className="flex gap-2">
                  <Input type="text" placeholder="Search" />
                  <Button type="submit">
                    <Search />
                  </Button>
                </div>
                <SidebarMenuButton className="flex justify-between items-center">
                  <Link href="../dashboard" className="flex items-center gap-2">
                    <ChartBarStacked />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton className="flex justify-between items-center">
                  <Link
                    href="./category/all"
                    className="flex items-center gap-2"
                  >
                    <ChartBarStacked />
                    <span>Category</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub className="mt-[-12px]">
                  <SidebarMenuSubItem>
                    {items.map((item: any) => (
                      <SidebarMenuSubButton key={item.title}>
                        <Link
                          href={item.url}
                          className="flex items-center gap-2"
                        >
                          <div className="text-sm">
                            <item.icon size={16} />
                          </div>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    ))}
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuButton className="flex justify-between items-center">
                <Link href="#" className="flex items-center gap-2">
                  <CalendarRange />
                  <span>Create Events</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex justify-between items-center">
              <Link href="../login">
                <span>Login / Register</span>
              </Link>
              <div>
                <LogIn className="text-2xl" />
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem className="hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <p> Username</p>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
