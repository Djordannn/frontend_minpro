import React, { ReactNode } from "react";
import HeroCarousel from "../component/heroCarousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ProductLayoutProps {
  children: ReactNode;
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div>
      <div>
        <HeroCarousel />
      </div>
      <div className="mt-4 flex flex-col gap-5 lg:flex-row">
        <div className="hidden lg:block lg:w-[30%]">
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Search ticket" />
            <Button>
              <Search />
            </Button>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <Link href={"/ticket"}>All</Link>
            <Link href={"/ticket/Sport"}>Sport</Link>
            <Link href={"/ticket/Music"}>Music</Link>
            <Link href={"/ticket/Workshop"}>Category</Link>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Search ticket" />
            <Button>
              <Search />
            </Button>
          </div>
          <div className="mt-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full" variant={"outline"}>
                  Category
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/ticket">Ticket</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ticket/Sport">Sport</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ticket/Music">Music</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/ticket/Workshop">Workshop</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full lg:w-[70%]">{children}</div>
      </div>
    </div>
  );
}
