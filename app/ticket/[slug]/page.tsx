"use client";

import * as React from "react";
import { callAPI } from "@/app/config/axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ICategorProps {
  params: Promise<{ slug: string }>;
}

const CategoryTicket: React.FunctionComponent<ICategorProps> = ({ params }) => {
  const [category, setCategory] = React.useState<any>([]);

  const getCategory = async (): Promise<void> => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/ticket/category-ticket/${slug}`);
      setCategory(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {category.length > 0 ? (
          category.map((value) => (
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
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryTicket;
