"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { callAPI } from "../config/axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "../component/heroCarousel";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface Ticket {
  id: string;
  img: string;
  title: string;
  price: string;
}

const TicketPage = () => {
  const [data, setdata] = React.useState<Ticket[]>([]);

  const fetchTicket = async () => {
    try {
      const res = await callAPI.get("/ticket/all-ticket");
      setdata(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <div className="lg:mx-[12%]">
      <div>
        <HeroCarousel />
      </div>
      <div className="mt-4 flex flex-col gap-5 lg:flex-row">
        <div className="hidden lg:block lg:w-[30%]">
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Not working yet..." />
            <Button>
              <Search />
            </Button>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <Link href={"/ticket"}>All</Link>
            <Link href={"/ticket/Sport"}>Sport</Link>
            <Link href={"/ticket/Music"}>Music</Link>
            <Link href={"/ticket/Workshop"}>Workshop</Link>
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
                  <Link href="/"></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/Sport"}>Sport</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/Music"}>Music</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/Workshop"}>Workshop</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="w-full lg:w-[70%]">
          {" "}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {data.map((value) => (
              <Card className="rounded-none" key={value.id}>
                <CardHeader className="p-0">
                  <Image
                    src={`http://localhost:2440${value.img}`}
                    alt="img"
                    width={600}
                    height={400}
                    className="h-[150px] object-cover"
                  />
                </CardHeader>
                <CardContent className="p-3">
                  <CardTitle className="text-md md:text-lg">
                    <Link href={`/detail/${value.title}`}>{value.title}</Link>
                  </CardTitle>
                  <p className="text-md">
                    {value.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <CardDescription>{value.category}</CardDescription>
                </CardContent>
                <CardFooter className="-mt-2 p-3 md:p-6">
                  <Button className="w-full">Buy ticket</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
