"use client";

import React from "react";
import {
  CalendarRange,
  Search,
  ChevronUp,
  Tickets,
  GalleryHorizontalEnd,
  Trophy,
  Music,
  Store,
  LogIn,
  Home,
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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SparklesText from "@/components/ui/sparkles-text";

const AppSidebar = () => {
  const items = [
    {
      title: "All",
      url: "../category/all",
      icon: GalleryHorizontalEnd,
    },
    {
      title: "Sport",
      url: "../category/sport",
      icon: Trophy,
    },
    {
      title: "Music Concert",
      url: "../category/music",
      icon: Music,
    },
    {
      title: "Workshop",
      url: "../category/workshop",
      icon: Store,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-4">
            <SparklesText text="Events Ticketing" className="text-2xl" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Input type="text" placeholder="Search" />
                  <Button type="submit">
                    <Search />
                  </Button>
                </div>
                <SidebarMenuButton>
                  <Link
                    href="../dashboard"
                    className="mt-3 flex items-center gap-2"
                  >
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <Link href={items[0].url} className="flex items-center gap-2">
                    <Tickets />
                    <span>Category</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    {items.map((item) => (
                      <Link href={item.url} key={item.title}>
                        <SidebarMenuSubButton>
                          <div className="text-sm">
                            <item.icon size={16} />
                          </div>
                          <span>{item.title}</span>
                        </SidebarMenuSubButton>
                      </Link>
                    ))}
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>

              <SidebarMenuButton>
                <Link href="../createEvent" className="flex items-center gap-2">
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
