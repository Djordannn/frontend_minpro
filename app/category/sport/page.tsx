"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { ArrowRight } from "lucide-react";
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

interface ISportProps {}

interface Sport {
  id: number;
  title: string;
  img: string | null;
  price: number | null;
}

const AllPage: React.FunctionComponent<ISportProps> = () => {
  const [sports, setSports] = useState<Sport[]>([]);

  const fetchTicket = async () => {
    try {
      const response = await callAPI.get("/ticket/sport");
      console.log(response.data);
      setSports(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  if (!sports) {
    return <p>Loading...</p>; // Tambahkan loading state
  }

  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {sports.length > 0 ? (
        sports.map((value) => (
          <Card key={value.id} className="bg-[#FAFAFA] border-none">
            <CardHeader>
              <Image
                src={value.img ? `http://localhost:2440${value.img}` : imgCard}
                alt={value.title}
                className="h-[100px] w-[360px] object-cover rounded-xl"
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
