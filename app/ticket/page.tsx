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
interface Ticket {
  id: string;
  img: string;
  title: string;
  price: string;
}

const page = () => {
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
              <Link href={`/ticket/${value.title}`}>{value.title}</Link>
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
  );
};

export default page;
