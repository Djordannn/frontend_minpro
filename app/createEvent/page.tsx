"use client";

import React from "react";
import FormInput from "../component/formInput";
import { Formik, Form, FormikProps } from "formik";
import { CreateEventSchema } from "./createEventSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { callAPI } from "../config/axios";

interface ICreateEventValue {
  title: string;
  price: string;
  category: string;
  img: File | null;
}

const Register: React.FC = () => {
  const onCreateEvent = async (values: ICreateEventValue): Promise<void> => {
    try {
      const token = localStorage.getItem("dataUser");
      if (token) {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("price", values.price);
        formData.append("category", values.category);
        if (values.img) {
          formData.append("img", values.img);
        }
        const res = await callAPI.post("/ticket/add-ticket", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data);
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center shadow-lg">
      <Card className="px-5">
        <CardHeader>
          <h1 className="text-2xl font-medium">Create Ticket</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Formik
            initialValues={{
              title: "",
              price: "",
              category: "",
              img: null,
            }}
            validationSchema={CreateEventSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Submitting values:", values);
              onCreateEvent(values);
              resetForm();
            }}
          >
            {(props: FormikProps<ICreateEventValue>) => {
              const { values, handleChange, setFieldValue } = props;
              return (
                <Form>
                  <FormInput
                    id="title"
                    type="text"
                    label="Title"
                    onChange={handleChange}
                    value={values.title}
                  />
                  <FormInput
                    id="price"
                    type="text"
                    label="Price"
                    onChange={handleChange}
                    value={values.price}
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
                  />
                  <div className="mt-2">
                    <h3 className="font-medium">Category</h3>
                    <select
                      id="category"
                      onChange={handleChange}
                      value={values.category}
                      className="border-2 border-black p-2 rounded-md w-full"
                    >
                      <option value="" label="Select category" />
                      <option value="Music" label="Music" />
                      <option value="Sport" label="Sport" />
                      <option value="Worskhop" label="Workshop" />
                    </select>
                  </div>
                  <Button type="submit" className="mt-3">
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
