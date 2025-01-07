"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { callAPI } from "../config/axios";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setSignIn } from "@/lib/redux/features/userSlice";
import { setSignOut } from "@/lib/redux/features/userSlice";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlignJustify,
  ChevronDown,
  LogOut,
  User,
  UserCircle,
} from "lucide-react";

const Navbar = () => {
  const route = useRouter();

  // const [user, setUser] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.userReducer);

  const keepLogin = async () => {
    try {
      const token = localStorage.getItem("dataUser");
      if (token) {
        const res = await callAPI.get(`/user/keep-login`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Check login response : ", res.data);
        dispatch(setSignIn({ ...res.data, isAuth: true }));
        localStorage.setItem("token", res.data.token);
      } else {
        dispatch(setSignIn({ isAuth: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    dispatch(setSignOut());
    route.replace("/");
  };

  React.useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div className="flex items-center justify-between py-5">
      <div className="pt-1">
        <Link href="/" className="text-xl font-bold">
          <h1 className="text-2zl">Events</h1>
        </Link>
      </div>
      <div className="hidden lg:block">
        <NavigationMenu>
          <Link href="/ticket" className={navigationMenuTriggerStyle()}>
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
      <div className="hidden lg:block">
        <div className="flex items-center text-sm">
          {!user.email ? (
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
                  <UserCircle />
                  <p> {user.username}</p>
                  <ChevronDown className="ml-auto" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className="flex justify-between">
                  <Link href="/account">Account</Link>
                  <User />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex justify-between">
                  <span onClick={onLogout}>Sign out</span>
                  <LogOut />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <AlignJustify />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/ticket">Ticket</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/">Service</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between">
              <Link href="/account">Account</Link>
              <User />
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-between">
              <span onClick={onLogout}>Sign out</span>
              <LogOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
