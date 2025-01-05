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
    <div className="grid grid-cols-3 gap-3">
      {data.map((value) => (
        <Card className="rounded-none" key={value.id}>
          <CardHeader className="p-0 mb-6">
            <Image
              src={`http://localhost:2440${value.img}`}
              alt="img"
              width={600}
              height={400}
              className="h-[150px] object-cover"
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{value.title}</CardTitle>
            <CardDescription>
              {value.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Buy ticket</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default page;
