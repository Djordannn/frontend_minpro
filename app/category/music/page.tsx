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

interface IMusicProps {}

interface Music {
  id: number;
  title: string;
  img: string | null;
  price: number | null;
}

const MusicPage: React.FunctionComponent<IMusicProps> = () => {
  const [musics, setMusics] = useState<Music[]>([]);

  const fetchTicket = async () => {
    try {
      const response = await callAPI.get("/ticket/music");
      console.log(response.data);
      setMusics(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  if (!musics) {
    return <p>Loading...</p>; // Tambahkan loading state
  }

  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {musics.length > 0 ? (
        musics.map((value) => (
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

export default MusicPage;
