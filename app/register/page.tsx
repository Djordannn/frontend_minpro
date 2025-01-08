"use client";

import React from "react";
import FormInput from "../component/formInput";
import { Formik, Form, FormikProps } from "formik";
import { registerSchema } from "./registerSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { callAPI } from "../config/axios";

interface IRegisterProps {}

interface IRegisterValue {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC<IRegisterProps> = (props) => {
  const onRegister = async (
    username: string,
    email: string,
    password: string,
  ) => {
    try {
      const res = await callAPI.post("/user/register", {
        username,
        email,
        password,
      });
      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card className="lg:px-5">
        <CardHeader>
          <h1 className="text-2xl font-medium">Register now</h1>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Value from input formik :", values);
              onRegister(values.username, values.email, values.password);

              resetForm();
            }}
          >
            {(props: FormikProps<IRegisterValue>) => {
              const { values, handleChange, errors, touched } = props;
              return (
                <Form>
                  <FormInput
                    id="username"
                    type="text"
                    label="Username"
                    onChange={handleChange}
                    value={values.username}
                  />
                  <FormInput
                    id="email"
                    type="text"
                    label="Email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <FormInput
                    id="password"
                    type="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Button type="submit" className="mt-3">
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
          <p className="mt-3 text-sm">
            Already have an account? <a href="../login">Login</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
