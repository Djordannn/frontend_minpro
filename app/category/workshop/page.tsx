"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { callAPI } from "@/app/config/axios";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";

interface IWorkshopProps {}

interface Workshop {
  id: number;
  title: string;
  img: string | null;
  price: number | null;
}

const AllPage: React.FunctionComponent<IWorkshopProps> = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  const fetchTicket = async () => {
    try {
      const response = await callAPI.get("/ticket/workshop");
      console.log(response.data);
      setWorkshops(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  if (!workshops) {
    return <p>Loading...</p>; // Tambahkan loading state
  }

  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {workshops.length > 0 ? (
        workshops.map((value) => (
          <Card key={value.id} className="bg-[#FAFAFA] border-none">
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
