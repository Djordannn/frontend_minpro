"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { callAPI } from "@/app/config/axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import Loading from "../../component/loading";

interface IAllProps {}

interface Ticket {
  id: number;
  title: string;
  img: string | null;
  price: number | null;
}

const AllPage: React.FunctionComponent<IAllProps> = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const fetchTicket = async () => {
    try {
      const response = await callAPI.get("/ticket/all-ticket");
      console.log(response.data);
      setTickets(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <div className="px-[15%] mt-8 grid grid-cols-3 gap-5">
      {tickets.length > 0 ? (
        tickets.map((value) => (
          <Card key={value.id} className="bg-[#FAFAFA]">
            <CardHeader>
              <Image
                src={value.img ? `http://localhost:2440${value.img}` : imgCard}
                alt={value.title}
                className="h-[100px] w-full object-cover rounded-xl"
                width={255}
                height={250}
              />
            </CardHeader>
            <CardContent>
              <div>
                <CardTitle>{value.title}</CardTitle>
                <p>
                  {value.price
                    ? value.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    : "Price not available"}
                </p>
                <p>{value.date}</p>
              </div>
            </CardContent>
            <CardFooter>
              <InteractiveHoverButton className="w-full" text="Buy Ticket" />
            </CardFooter>
          </Card>
        ))
      ) : (
        <p>Loading tickets...</p>
      )}
    </div>
  );
};

export default AllPage;
