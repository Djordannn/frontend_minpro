"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/hooks";
import img from "../../public/img/profile.jpg";
import { callAPI } from "../config/axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Form, Formik, FormikProps } from "formik";
import FormInput from "../component/formInput";

interface ITicket {
  id: string;
  title: string;
  price: string;
  category: string;
  img?: string;
}

interface FormEditValue {
  title: string;
  price: string;
  category: string;
  img: File | null;
}

const Account = () => {
  const [ticket, setTicket] = useState<ITicket[]>([]);

  const { username, email, imgProfile } = useAppSelector(
    (state) => state.userReducer,
  );

  const getTicketUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await callAPI.get("/ticket/user-ticket", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTicket(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateTicket = async (
    id: string,
    values: FormEditValue,
  ): Promise<void> => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("price", values.price);
        formData.append("category", values.category);
        if (values.img) {
          formData.append("img", values.img);
        }
        const res = await callAPI.patch(`/ticket/update/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        alert("Edit ticket success");
        redirect("/account");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteTicket = async (ticketId: string) => {
    if (!confirm("Are you sure you want to delete this ticket?")) return;
    try {
      const token = localStorage.getItem("token");
      await callAPI.delete(`/ticket/delete-ticket/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Delete success!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTicketUser();
  }, []);

  return (
    <div>
      <div className="px-[6%] py-8 md:px-[24%] md:py-16">
        <Card>
          <CardHeader className="mb-4">
            <Image
              src={imgProfile ? `http://localhost:2440/${imgProfile}` : img}
              alt="img"
              width={100}
              height={100}
              className="mx-auto w-[100px] rounded-full"
            />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="font-medium">Username</CardTitle>
                <CardDescription>{username}</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-medium">Email</CardTitle>
                <CardDescription>{email}</CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
        </Card>
      </div>
      <div className="py-3 md:py-6">
        <h1 className="text-2xl font-medium">Your Events</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {ticket.map((value) => (
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
            <CardFooter className="-mt-2 flex gap-3 p-3 md:p-6">
              <Dialog>
                <DialogTrigger className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-500">
                    <Edit onClick={() => onUpdateTicket(value.id)} />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit ticket {value.title}</DialogTitle>
                  </DialogHeader>
                  <Formik
                    initialValues={{
                      title: value.title,
                      price: value.price,
                      category: value.category,
                      img: value.img,
                    }}
                    onSubmit={(values) => {
                      onUpdateTicket(value.id, values);
                    }}
                  >
                    {(props: FormikProps<FormEditValue>) => {
                      const { handleChange, setFieldValue, values } = props;

                      return (
                        <Form>
                          <Card>
                            <CardContent>
                              <FormInput
                                type="text"
                                name="title"
                                label="Title"
                                onChange={handleChange}
                                value={values.title}
                                placeholder="Enter Title"
                              />
                              <FormInput
                                type="text"
                                name="price"
                                label="Price"
                                onChange={handleChange}
                                value={values.price}
                                placeholder="Enter Price"
                              />
                              <FormInput
                                id="img"
                                type="file"
                                label="Image"
                                onChange={(e) => {
                                  if (e.target.files) {
                                    setFieldValue("img", e.target.files[0]);
                                  }
                                }}
                                placeholder="Upload Image"
                              />
                              <div className="mt-2">
                                <h3 className="font-medium">Category</h3>
                                <select
                                  id="category"
                                  onChange={handleChange}
                                  value={values.category}
                                  className="w-full rounded-md border-2 border-black p-2"
                                >
                                  <option value="" label="Select category" />
                                  <option value="Music" label="Music" />
                                  <option value="Sport" label="Sport" />
                                  <option value="Workshop" label="Workshop" />
                                </select>
                              </div>
                              <Button type="submit" className="mt-3">
                                Save
                              </Button>
                            </CardContent>
                          </Card>
                        </Form>
                      );
                    }}
                  </Formik>
                </DialogContent>
              </Dialog>
              <Button
                className="w-[85%]"
                variant="destructive"
                onClick={() => onDeleteTicket(value.id)}
              >
                <Trash />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Account;
