"use client";

import * as React from "react";
import Link from "next/link";
import { callAPI } from "../config/axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import SparklesText from "@/components/ui/sparkles-text";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = React.useState<string>("");

  const onLogout = () => {
    localStorage.removeItem("dataUser");
  };

  React.useEffect(() => {
    const getUser = localStorage.getItem("dataUser");
    setUser(getUser);
  });

  return (
    <div className="flex items-center justify-between py-5">
      <div className="pt-1">
        <Link href="/" className="font-bold text-xl">
          <SparklesText text="Events Ticketing" className="text-lg" />
        </Link>
      </div>
      <div>
        <NavigationMenu>
          <Link href="./ticket" className={navigationMenuTriggerStyle()}>
            Ticket
          </Link>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            About Us
          </Link>
          <Link href="/" className={navigationMenuTriggerStyle()}>
            Service
          </Link>
        </NavigationMenu>
      </div>
      <div>
        <div className="flex items-center text-sm">
          {!user ? (
            <div>
              <Link href="/login">
                <Button>Login</Button>
              </Link>
              <Link href="/register" className="ml-2">
                <Button variant="outline">Register</Button>
              </Link>
            </div>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <p> Username</p>
                  <ChevronDown className="ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span onClick={onLogout}>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
