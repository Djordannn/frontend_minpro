"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import imgCard from "../../../public/img/imgcard.jpg";
import { ArrowRight } from "lucide-react";
import { callAPI } from "@/app/config/axios";
import Link from "next/link";

interface ISportProps {}

interface Sport {
  id: number;
  title: string;
  img: string | null;
  price: number | null;
}

const SportPage: React.FunctionComponent<ISportProps> = () => {
  const [sports, setSports] = useState<Sport[]>([]);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const response = await callAPI.get("/ticket/sport");
        console.log(response.data);
        setSports(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTicket();
  }, []);

  return (
    <div className="p-5 grid grid-cols-4 gap-5">
      {sports.length > 0 ? (
        sports.map((value) => (
          <div className="card bg-[#eeee] w-[255px] rounded-xl" key={value.id}>
            <div className="card-header">
              <Image
                src={value.img ? value.img : imgCard}
                alt={value.title}
                className="h-[250px] w-full object-cover rounded-xl"
                width={255}
                height={250}
              />
            </div>
            <div className="card-content p-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{value.title}</h3>
                <p>
                  {value.price
                    ? value.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })
                    : "Price not available"}
                </p>
              </div>
              <Link href={`/detail/${value.id}`}>
                <ArrowRight className="p-3 bg-black text-white rounded-lg" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading tickets...</p>
      )}
    </div>
  );
};

export default SportPage;
